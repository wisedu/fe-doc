<template>
<div>
  <template v-for="item in ceilsCompoonents" >
    <h4 :id="item.id" :key="item.id">编号：{{item.id}}</h4>
    <demo-block :type="categoryType" :jsfiddle="item" :key="item.id" :style="{'max-width':maxWidth}">
      <component slot="source" :is="item.name"></component>
      <pre slot="highlight" v-highlightjs><code class="html" :id="item.name">{{item.html}}</code></pre>
      <el-button slot="download" size="mini" class="copyCode" style="margin: 8px 12px;" type="success" :key="item.id" data-clipboard-action="copy" :data-clipboard-target="'#'+item.name">
        复制代码 - 共{{item.html.split("\n").length}}行
      </el-button>
      <!-- @click="handleDownload(item.name)" -->
    </demo-block>
  </template>
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
      maxWidth: (window.innerWidth - 240 - 48) + "px"
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
          template: '<div>' + item.preview.html + '</div>',
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
    new Clipboard('.copyCode');
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
