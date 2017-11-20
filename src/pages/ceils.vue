<template>
<div>
  <demo-block v-for="item in ceilsCompoonents" :jsfiddle="item" :key="item.name">
    <div class="source" slot="source">
      <component :is="item.name"></component>
    </div>
    <div class="highlight" slot="highlight">
      <pre v-highlightjs><code class="html">{{item.html}}</code></pre>
    </div>
  </demo-block>
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
          name: 'c-' + item.id
        }
        Vue.component('c-' + item.id, {
          template: '<div>' + item.preview.html + '</div>'
        })
        this.ceilsCompoonents.push(jsfiddle)

        // this.ceilsCompoonents.push(item.id)
      })
    }
  },
  created () {
    this.getCeilsInfo()
  }
}
</script>

