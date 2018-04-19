<template>
<div class="page-container">
  <ul class="topbtn">
    <li>大纲</li>
    <li><a href="#pageIndex">页面</a></li>
    <li><a href="#styleIndex">项目样式</a></li>
    <li><a v-if="ceilsInfo.zipPath" :href="ceilsInfo.zipPath"><el-badge value="(ง •̀_•́)ง" class="item">图片打包下载</el-badge></a></li>
  </ul>
  <div>
    <div class="projects">
      <el-breadcrumb separator="/" style="margin: 24px 0">
        <el-breadcrumb-item :to="{ path: '/' }"><h3 style="display: inline;">首页</h3></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/mobile-projectlist' }"><h3 style="display: inline;">移动模板库</h3></el-breadcrumb-item>
        <el-breadcrumb-item><h3 style="display: inline;" id="pageIndex">{{ceilsInfo.project.name}} 页面</h3></el-breadcrumb-item>
      </el-breadcrumb>

      <template v-for="item in ceilsCompoonents">
        <demo-block :type="categoryType" :jsfiddle="item" :key="item.id" style="width:800px;float:left;">
          <h4 slot="title" :id="item.id" :key="item.id">编号：{{item.id}}</h4>
          <component slot="source" :is="item.name" :ref="item.id"></component>
          <pre slot="highlight" v-highlightjs>
            <code class="html" :id="item.name"><p>HTML:</p>{{item.html}}</code>
            <code class="css"><p>CSS:</p>{{item.style}}</code>
          </pre>
          <div slot="showdesc" style="float:left;padding:8px">
            <div class="qrcode" :id="item.pageid"></div>
            <h3 class="codeh2" v-if="item.data !== undefined">页面状态</h3>
            <div v-if="item.data !== undefined" v-for="(status,skey) in item.data" :key="skey">
              <h4>{{skey}}</h4>
              <el-radio-group size="mini" v-model="item.status" @change="handleChangeStatus(item.id, skey, item.status, item.data)">
                <el-radio-button :label="statekey" v-for="(state,statekey) in status" :key="statekey">{{state.name}}</el-radio-button>
              </el-radio-group>
            </div>

            <h3 class="codeh2">页面结构</h3>
            <div v-for="(category,key) in item.dom" :key="key">
              {{key}}
              <ul>
                <li v-for="subitem in category" :key="subitem.desc">
                  <span style="cursor: pointer;" @mouseover="overhandler(subitem.guids)" @mouseout="outhandler(subitem.guids)">
                    {{subitem.desc}}
                    <el-tag size="mini" v-if="subitem.name">{{subitem.name}}</el-tag>
                    | <router-link :to="'mobile/' + subitem.name" v-if="key === '1.组件'">文档</router-link>
                    <router-link :to="{path:'mobile/ceils', query:{type:'combination', categoryId: subitem.id,showId:subitem.showId}}" v-if="key === '2.组合'">定义</router-link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <el-button slot="download" size="mini" class="copyCode" style="margin: 8px 12px;" type="success" data-clipboard-action="copy" :data-clipboard-target="'#'+item.name">
            复制代码 - 共{{item.html.split("\n").length}}行
          </el-button>
          <!-- @click="handleDownload(item.name)" -->
        </demo-block>
      </template>
    </div>
    <div>
      <h3 id="styleIndex">项目样式，请复制到工程的样式文件中</h3>
      <el-button id="cp" type="primary" data-clipboard-action="copy" data-clipboard-target="#pStyle">
          拷贝到剪贴板 - 共{{rows}}行
      </el-button>
      <pre v-highlightjs="projectStyle" style="margin-top:12px;"><code class="css" id="pStyle"></code></pre>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  data () {
    return {
      ceilsCompoonents: [],
      projectStyle: "",
      rows: 0,
      ceilsInfo: {project:{name:""}}
    }
  },
  computed: {
    categoryId () {
      return this.$route.query.categoryId || ''
    },
    categoryType () {
      return this.$route.query.type || ''
    },
    showId() {
      return this.$route.query.showId || ''
    }
  },
  watch: {
    categoryId (val) {
      this.ceilsCompoonents = []
      this.projectStyle = ""
      this.getCeilsInfo()
      this.getProjectInfo()
    }
  },
  methods: {
    getCeilsInfo () {
      let that = this;
      if (!this.categoryId) return
      axios.post(this.$SITE_URL + '/mobile/getClassifyItemsToShow', {
        type: this.categoryType,
        getType:"previewRun",
        categoryId: this.categoryId,
        view: true
      }).then(({data: resp}) => {
        if (resp.type === 'success') {
          this.ceilsInfo = resp.data;
          // this.ceilsInfo.zipPath
          this.initComponents(resp.data)
          Vue.nextTick(function () {
            let qrcodes = document.querySelectorAll(".qrcode");
            for (let qr of qrcodes) {
              new QRCode(qr, {
                text: "https://res.wisedu.com/mobile_preview.html?showid=" + qr.id,
                width: 128,
                height: 128,
                correctLevel : QRCode.CorrectLevel.H
              });
            }
            if (that.showId !== "") {
              document.querySelector("#" + that.showId).scrollIntoView()
            }
          })
        } else {
          alert('数据错误')
        }
      })
    },
    getProjectInfo() {
      if (!this.categoryId) return
      if (this.categoryType === 'project') {
        axios.post(this.$SITE_URL + '/mobile/getProjectCss', {
          categoryId: this.categoryId
        }).then(({data: resp}) => {
          this.projectStyle = resp.data;
          this.rows = resp.data.split("\n").length
        })
      }
    },
    handleChangeStatus(refid, status_name, value, data) {
      let newdata = JSON.parse(JSON.stringify(data))
      for (let status in newdata) {
        if (status === status_name) {
          for (let state in newdata[status]) {
            if (state === value) {
              newdata[status][state].show = true;
            } else {
              newdata[status][state].show = false;
            }
          }
        }
      }
      this.$refs[refid][0].watch_status_data = [status_name, newdata[status_name]];
    },
    initComponents (ceilsInfo) {
      ceilsInfo.content.forEach(item => {
        let dom = this.processDemoDOM(item.preview.dom);
        const jsfiddle = {
          html: item.run.html,
          sctipt: 'export default {}',
          style: item.run.style,
          name: 'c-' + item.showId,
          id: item.showId,
          pageid: item.id,
          dom: dom,
          data: JSON.stringify(item.run.data) === "{}" ? undefined : item.run.data,
          status: "state_0"
        }
        Vue.component('c-' + item.showId, {
          template: '<div>' + item.preview.html + '</div>',
          data(){
            return item.run.data;
          },
          computed:{
            watch_status_data: {
              set: function(val){
                this[val[0]] = val[1];
              },
              get: function() {

              }
            }
          }
        })
        // Vue.component('c-' + item.showId + "_preview", {
        //   template: '<div>' + item.preview.html + '</div>',
        //   data(){
        //     return item.preview.data;
        //   }
        // })
        this.ceilsCompoonents.push(jsfiddle)

        // this.ceilsCompoonents.push(item.id)
      })
    },
    processDemoDOM(preview_dom){
      let datas = {};
      if (preview_dom.component.length > 0) {
        datas["1.组件"] = {}
        for (let item of preview_dom.component) {
          let name = item.name.replace(/([A-Z])/g,"-$1").toLowerCase();
          if (name[0] === "-") name = name.slice(1);
          if (datas["1.组件"][name] === undefined) {
            datas["1.组件"][name] = {
              name: name,
              desc: item.desc,
              guids: [item.guid]
            }
          } else {
            datas["1.组件"][name].guids.push (item.guid)
          }
        }
      }
      if (preview_dom.style.length > 0) {
        //样式 是组件的一部分，合并到组件数据中
        datas["1.组件"] = datas["1.组件"] || {};
        for (let item of preview_dom.style) {
          let name = item.name.replace(/([A-Z])/g,"-$1").toLowerCase();
          if (name[0] === "-") name = name.slice(1);
          if (datas["1.组件"][name] === undefined) {
            datas["1.组件"][name] = {
              name: name,
              desc: item.desc,
              guids: [item.guid]
            }
          } else {
            datas["1.组件"][name].guids.push (item.guid)
          }
        }
      }
      if (preview_dom.combination.length > 0) {
        datas["2.组合"] = {}
        for (let item of preview_dom.combination) {
          if (datas["2.组合"][item.name] === undefined) {
            datas["2.组合"][item.name] = {
              desc: item.name,
              guids: [item.guid],
              id: item.id,
              showId: item.showId
            }
          } else {
            datas["2.组合"][item.name].guids.push (item.guid)
          }
        }
      }
      // if (preview_dom.template.length > 0) {
      //   datas["模板"] = preview_dom.template;
      // }

      return datas;
    },
    handleDownload (name) {
      const id = name.replace(/^c\-/, '')
      const type = this.categoryType
      if (!type || !id) return
      axios.post(this.$SITE_URL + '/mobile/downloadClassifyItem', `type=${type}&id=${id}`).then(({data: resp}) => {
        console.log(resp)
        if (resp.type === 'success') {
          window.open(this.$SITE_URL + resp.path)
        }
      })
    },
    overhandler(guids) {
      // console.log(guids)
      for (let i of guids) {
        let ele = document.querySelector("[smile-guid='" + i +"']");
        let top = ele.clientTop + ele.offsetTop;
        let left = ele.clientLeft + ele.offsetLeft;
        ele.insertAdjacentHTML("beforebegin", `<div class='block_highline' style="top:${top}px;left:${left}px;width:${ele.clientWidth}px;height:${ele.clientHeight}px;"></div>`)
      }
    },
    outhandler(guids) {
      for (let i of document.querySelectorAll(".block_highline")){
        i.parentNode.removeChild(i)
      }
    }
  },
  created () {
    this.getCeilsInfo()
    this.getProjectInfo()
    new Clipboard('#cp');
    var clipboard = new Clipboard('.copyCode');

    clipboard.on('success', function(e) {
        // console.info('Trigger:', e.trigger);
        e.trigger.innerText = e.trigger.innerText.replace(" Copyed!", "") + " Copyed!"
    });
  }
}
</script>


<style scoped>
.page-container{
  display: block;
  padding: 4px 0 24px 24px;
}
.projects::after{
    content: '';
    clear: both;
    display: table;
}
div[smile-category="FixedButton"] > .smile-classify-item-content{
    min-height: 110px;
}
.qrcode {
  margin-top: -8px;
}
h4 {
  margin-left: 24px;
}
.topbtn{
  position: fixed;
  top: 108px;
  right: 36px;
  padding: 24px;
  border-left: 1px solid #ddd;
  background-color: #fff;
  z-index: 999;
}
</style>
<style>
.mint-navbar.is-fixed{
    position: relative !important;
}
.mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0 !important;
}
.mint-fixed-container {
    position: absolute!important;
}
.mint-fixed-button{
    position: absolute !important;
}
</style>
