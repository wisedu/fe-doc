<template>
<div>
  <template v-for="item in ceilsCompoonents">
    <h4 :key="item.id">编号：{{item.id}}</h4>
    <demo-block :type="categoryType" :jsfiddle="item" :key="item.id">
      <component slot="source" :is="item.name"></component>
      <pre slot="highlight" v-highlightjs><code class="html">{{item.html}}</code></pre>
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
      if (!this.categoryId) return
      axios.post(this.$SITE_URL + '/mobile/getClassifyItemsToShow', {
        type: this.categoryType,
        getType:"previewRun",
        categoryId: this.categoryId
      }).then(({data: resp}) => {
        if (resp.type === 'success') {
          this.ceilsInfo = resp.data
          this.initComponents(resp.data)
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
        const jsfiddle = {
          html: item.run.html,
          sctipt: 'export default {}',
          style: item.run.style,
          name: 'c-' + item.showId,
          id: item.showId
        }
        Vue.component('c-' + item.showId, {
          template: '<div>' + item.run.html + '</div>',
          data(){
            return item.run.data;
          }
        })
        this.ceilsCompoonents.push(jsfiddle)

        // this.ceilsCompoonents.push(item.id)
      })
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
