<template>
<div>
    <div class="page-container">
      <md-side-nav type="mobile" :menu-data="menuData" :active="active" :default-openeds="categoryType" @navchange="navChanged"></md-side-nav>
      <div class="page-component">
        <search style="margin-left:24px;width: 400px;"></search>
        <div style="display: flex;">
          <div class="content">
            <router-view></router-view>
          </div>
          <div v-if="!categoryId" class="phone">
            <iframe :src="realDemoUrl" frameborder="0" class="demo-page"></iframe>
          </div>
        </div>
        <!-- 组件样式展示 -->
        <div class="components-style">
            <demo-block v-for="item in componentsStyle"  :key="item.id">
              <component slot="source" :is="'c-' + item.id"></component>
              <template slot="highlight">
                <pre slot="highlight" v-highlightjs><code class="html">{{item.run.html}}</code></pre>
                <pre slot="highlight" v-highlightjs><code class="css">{{item.run.style}}</code></pre>
              </template>
              <!-- <el-button slot="download" size="mini" style="float: right;margin: 8px 12px;" type="success" @click="handleDownload(item.name)" :key="item.id">下载代码</el-button> -->
            </demo-block>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import MdSideNav from '../components/side-nav'
import search from '../components/search'
export default {
  components: { MdSideNav, search },
  data () {
    return {
      combination: {},
      template: {},
      demoUrl: "./static/demo/index.html",
      active: "",
      componentsStyle: []
    }
  },
  computed: {
    menuData () {
      return {
        combination: { items:this.combination, name:"Cells 组合" },
        template: { items:this.template, name:"Templates 模板" }
      }
    },
    realDemoUrl (){
      return this.demoUrl + "#/" + this.active;
    },
    categoryId () {
      return this.$route.query.categoryId || ''
    },
    categoryType () {
      return this.$route.query.type ? [this.$route.query.type] : ['components']
    }
  },
  methods: {
    sortCeilList (data) {
      const result = data.first
      data.second.forEach(item => {
        const first = result.find(f => f.id === item.firstCategoryId)
        if (first) {
          first.children = first.children || []
          first.children.push(item)
        }
      })
      return result

    },
    getCeilsList (type) {
       axios.post(this.$SITE_URL + '/mobile/getClassifyCategory', {
        type: type
      }).then(({data: resp}) => {
        if (!resp.first || resp.first.length === 0) {
          alert('ceils无数据')
          return
        }
        this[type] = this.sortCeilList(resp)
      })
    },
    navChanged (id){
      // console.log(id);
      this.active = id;
    },
    getComponentsStyle (componentName) {
      axios.post(this.$SITE_URL + '/mobile/getClassifyItemsToShow', {
        categoryId: componentName,
        type: 'style',
        getType: 'previewRun'
      }).then(({data: resp}) => {
        if (resp.type === 'success') {
          this.componentsStyle = resp.data.content.map(item => {
            Vue.component('c-' + item.id, {
              template: item.preview.html
            })
            return item
          })
        }
      })
    }
  },
  created () {
    this.getCeilsList('combination')
    this.getCeilsList('template')
    let r = window.location.hash.substring(1).split("/");
    if (r[1] === "mobile"){
      if (this.categoryId) {
        this.active = this.categoryId
      } else {
        this.active = r[2]
      }
    }

    // 组件页面加载组件样式示例
    if (!this.categoryId) {
      this.getComponentsStyle(this.$route.name.replace(/Mobile$/, ''))
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.getComponentsStyle(to.name.replace(/Mobile$/, ''))
    next()
  },
}
</script>
<style>
.phone {
    margin: 20px 20px 0;
    background-image: url(../assets/phone.png);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 100px 16px;
    box-sizing: border-box;
    width: 407px;
    max-width: 407px;
    min-width: 407px;
}
.demo-page {
    width: 100%;
    height: 580px;
    background-color: #fff;
}

.components-style {
  width: calc(100% - 424px);
  padding: 24px;
}
</style>
