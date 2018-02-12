<template>
  <div class="page-container">
    <el-breadcrumb separator="/" style="margin: 24px 0">
      <el-breadcrumb-item :to="{ path: '/' }"><h3 style="display: inline;">首页</h3></el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mobile-projectlist' }"><h3 style="display: inline;">移动模板库</h3></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="category" v-for="(category, key) of project" :key="key">
      <h3>{{category.name}}</h3>
      <div class="project" v-for="item of category.children" :key="item.id" @click="handleMenuClick(item.id)">
        <div><img src="/static/folder.png"></div>
        <div>
          <a href="#">{{item.name}}</a>
          <div><span class="pages">{{item.badge}}</span>页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  data(){
    return {
      project: {}
    }
  },
  computed: {
  },
  methods: {
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
    handleMenuClick (id) {
      this.$router.push({
        name: 'mobile-project',
        query: {
          type: "project",
          categoryId: id
        }
      })
    }
  },
  created () {
    this.getCeilsList('project')
  }
}
</script>

<style scoped>
  .page-container{
    display: block;
    padding: 4px 0 24px 24px;
  }
  .project{
    width: 150px;
    float: left;
    padding:12px 0;
    cursor: pointer;
    border:1px solid transparent;
  }
  .project a{
    color:#333;
  }
  .project:hover{
    border:1px solid #409eff;
  }
  .project > div {
    text-align: center;
    font-size: 14px;
    color: #333;
  }
  .project .pages{
    color:crimson;
  }
  .category::after{
    content: '';
    clear: both;
    display: table;
  }
  .iconfont.bigfont{
    font-size: 64px;
    color:rgb(255, 185, 80);
  }
</style>
