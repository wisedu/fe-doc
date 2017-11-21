<template>
<div>
    <div class="page-container">
      <md-side-nav type="mobile" :menu-data="menuData" :active="active" :default-openeds="categoryType" @navchange="navChanged"></md-side-nav>
      <div class="page-component">
        <search style="margin-left:24px;width: 400px;"></search>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
      <div class="phone">
        <iframe :src="realDemoUrl" frameborder="0" class="demo-page"></iframe>
      </div>
    </div>
  </div>
</div>
</template>
<script>
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
      active: ""
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
  }
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
</style>
