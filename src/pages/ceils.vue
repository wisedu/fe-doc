<template>
<div>
  <template v-for="item in ceilsCompoonents" >
    <h4 :id="item.id" :key="item.id">编号：{{item.id}}</h4>
    <demo-block :type="categoryType" :jsfiddle="item" :key="item.id">
      <component slot="source" :is="item.name"></component>
      <pre slot="highlight" v-highlightjs><code class="html">{{item.html}}</code></pre>
      <div slot="showdesc" v-if="categoryType === 'project'" style="text-align:left;padding:8px">
        <div v-for="(category,key) in item.dom" :key="key">
          {{key}}
          <ul>
            <li v-for="subitem in category" :key="subitem.desc">
              {{subitem.desc}} <el-tag size="mini" v-if="subitem.name">{{subitem.name}}</el-tag>
              | <a :href="'#/mobile/' + subitem.name" v-if="key === '1.组件'">文档</a>
              <a :href="'#/mobile/ceils?type=combination&categoryId=' + subitem.id + '&showId=' + subitem.showId" v-if="key === '2.组合'">定义</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <el-button slot="download" size="mini" style="float: right;margin: 8px 12px;" type="success" @click="handleDownload(item.name)" :key="item.id">下载代码</el-button> -->
    </demo-block>
  </template>
  <div v-if="categoryType === 'project'">
    <h3>项目样式，请复制到工程的样式文件中</h3>
    <el-button id="cp" type="primary" data-clipboard-action="copy" data-clipboard-target="#pStyle">
        拷贝到剪贴板 - 共{{rows}}行
    </el-button>
    <pre v-highlightjs="projectStyle" style="margin-top:12px;"><code class="css" id="pStyle"></code></pre>
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
      rows: 0
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
        categoryId: this.categoryId
      }).then(({data: resp}) => {
        if (resp.type === 'success') {
          this.ceilsInfo = resp.data
          this.initComponents(resp.data)
          Vue.nextTick(function () {
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
    initComponents (ceilsInfo) {
      ceilsInfo.content.forEach(item => {
        let dom = this.processDemoDOM(item.preview.dom);
        const jsfiddle = {
          html: item.run.html,
          sctipt: 'export default {}',
          style: item.run.style,
          name: 'c-' + item.showId,
          id: item.showId,
          dom: dom
        }
        Vue.component('c-' + item.showId, {
          template: '<div>' + item.run.html + '</div>',
          data(){
            return item.run.data;
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
    }
  },
  created () {
    this.getCeilsInfo()
    this.getProjectInfo()
    new Clipboard('#cp');
  }
}
</script>


<style>
.mint-navbar.is-fixed{
    position: relative !important;
}
.mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0 !important;
}

.mint-fixed-button{
    position: absolute !important;
}
div[smile-category="FixedButton"] > .smile-classify-item-content{
    min-height: 110px;
}
</style>
