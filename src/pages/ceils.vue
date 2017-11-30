<template>
<div>
  <template v-for="item in ceilsCompoonents">
    <h4 :key="item.id">编号：{{item.id}}</h4>
    <demo-block  :jsfiddle="item" :key="item.id">
      <component slot="source" :is="item.name"></component>
      <pre slot="highlight" v-highlightjs><code class="html">{{item.html}}</code></pre>
      <pre v-if="categoryType === 'project'" slot="highlight" v-highlightjs><code class="css">{{item.style}}</code></pre>
      <!-- <el-button slot="download" size="mini" style="float: right;margin: 8px 12px;" type="success" @click="handleDownload(item.name)" :key="item.id">下载代码</el-button> -->
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
      ceilsCompoonents: []
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
      this.getCeilsInfo()
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
  }
}
</script>


