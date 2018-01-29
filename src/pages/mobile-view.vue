<template>
<div>
    <div class="page-container">
      <md-side-nav type="mobile" :menu-data="menuData" :active="active" :default-openeds="categoryType" @navchange="navChanged"></md-side-nav>
      <div class="page-component"  v-if="!searchMode">
        <el-input class="page-search" @keyup.enter.native="handleSearch" v-model="searchKey"></el-input>
        <div style="display: flex;">
          <div class="content" :style="{'width':maxWidth}">
            <router-view></router-view>
          </div>
          <div v-if="!categoryId" class="phone" style="background-image: url(/static/component-image/phone.png);">
            <iframe :src="realDemoUrl" frameborder="0" class="demo-page" id="phoneIframe"></iframe>
          </div>
        </div>
        <!-- 组件样式展示 -->
        <div class="components-style">
          <template v-for="item in componentsStyle">
            <h4 :key="item.id">编号：{{item.showId}}</h4>
            <demo-block :key="item.id">
              <component slot="source" :is="'c-' + item.id"></component>
              <template slot="highlight">
                <pre  v-highlightjs><code class="html">{{item.run.html}}</code></pre>
                <!-- <pre v-highlightjs><code class="css">{{item.run.style}}</code></pre> -->
              </template>
              <!-- <el-button slot="download" size="mini" style="float: right;margin: 8px 12px;" type="success" @click="handleDownload(item.name)" :key="item.id">下载代码</el-button> -->
            </demo-block>
          </template>
        </div>
      </div>
      <!-- search-result -->
      <div class="page-component page-search-result" v-if="searchMode">
        <el-input class="page-search" @keyup.enter.native="handleSearch" v-model="searchKey"></el-input>
        <div v-show="!searchResult.blank">
          <h4 >编号：{{searchResult.showId}}</h4>
          <demo-block >
            <component v-if="searchResult.id" slot="source" :is="'s-' + searchResult.id"></component>
            <!-- <p slot="highlight">{{searchResult.html}}</p> -->
              <pre v-if="searchResult.html" slot="highlight" v-highlightjs><code class="html">{{searchResult.html}}</code></pre>
            <!-- <el-button slot="download" size="mini" style="float: right;margin: 8px 12px;" type="success" @click="handleDownload(item.name)" :key="item.id">下载代码</el-button> -->
          </demo-block>
        </div>
        <h4 v-show="searchResult.blank">没有搜索结果</h4>
      </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import MdSideNav from '../components/side-nav'
export default {
  components: { MdSideNav },
  data () {
    return {
      combination: {},
      template: {},
      // project: {},
      demoUrl: "/static/demo/index.html",
      active: "",
      componentsStyle: [],
      searchKey: '',
      searchMode: false,
      searchResult: {},
      maxWidth: (window.innerWidth - 240 - 407) + "px",
    }
  },
  computed: {
    menuData () {
      return {
        combination: { items:this.combination, name:"Cells 组合" },
        template: { items:this.template, name:"Templates 模板" },
        // project: { items:this.project, name:"Project 项目" }
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
      let categoryCount = {};
      data.count.map(function(item){
        categoryCount[item.category] = item["count"]
      })

      const result = data.first
      data.second.forEach(item => {
        const first = result.find(f => f.id === item.firstCategoryId)
        if (first) {
          first.children = first.children || []
          item.badge = categoryCount[item.id]
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
      this.active = id;
    },
    getComponentsStyle (componentName) {
      axios.post(this.$SITE_URL + '/mobile/getClassifyItemsToShow', {
        categoryId: componentName,
        type: 'style',
        getType: 'previewRun',
        view: true
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
    },
    handleSearch () {
      const searchKey = this.searchKey
      if (searchKey === '') return
      this.searchMode = true
      axios.post(this.$SITE_URL + '/mobile/searchDesignExtendByGuid', {
        id: searchKey
      }).then(({data: resp}) => {
        if (resp.data && resp.data.length) {
          const data = resp.data[0]
          Vue.component('s-' + data.id, {
            template: data.html
          })
          this.searchResult = data
        } else {
          this.searchResult = {
            blank: true
          }
        }
      })
    }
  },
  created () {
    this.getCeilsList('combination')
    this.getCeilsList('template')
    // this.getCeilsList('project')
    let r = window.location.href.split("/");
    if (r[r.length-2] === "mobile"){
      if (this.categoryId) {
        this.active = this.categoryId
      } else {
        this.active = r[r.length-1]
      }
    }

    // 组件页面加载组件样式示例
    if (!this.categoryId) {
      this.getComponentsStyle(this.$route.name.replace(/Mobile$/, ''))
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.searchKey = ''
    this.searchMode = false
    this.searchResult = {}
    this.getComponentsStyle(to.name.replace(/Mobile$/, ''))
    next()
  },
}
</script>
<style>
.phone {
    margin: 20px 20px 0;
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
.page-search {
  width: 280px;
  margin-left: 24px;
}
.page-search-result {
  padding: 0 24px;
}

.page-search-result .page-search  {
  margin-left: 0;
}
</style>
