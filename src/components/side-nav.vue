<template>
  <div class="side-nav">

     <el-menu :default-active="active" :default-openeds="defaultOpeneds" class="el-menu-vertical-demo">
       <!-- <div class="search">
        <input type="text">
      </div>   -->
      <el-submenu index="components">
        <template slot="title">Components 组件</template>
        <el-menu-item-group v-for="(cate, key) in navs" :key="key">
          <template slot="title">{{key}}</template>
          <router-link v-for="item in cate" :key="item.name" :to="{name: item.name}">
            <el-menu-item :index="item.path" @click="handleCOMClick(item.path)">
              <span>{{item.comName}} {{item.desc}}</span>
              <span style="color:#FF4949">{{item.count}}</span>
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu v-for="(value, key) in menuData" :key="key" :index="key">
        <template slot="title">{{value.name}}</template>
        <el-menu-item-group v-for="item in value.items" :key="item.name">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.id" @click="handleMenuClick(subItem.id, key)">
            <span>{{subItem.name}}</span> <span style="color:#FF4949">{{subItem.badge}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  props: {
    type: { default: "pc", type: String },
    menuData: { type: Object, default: {} },
    active: String,
    defaultOpeneds: Array
  },
  data() {
    return {
      routes: [],
      coms: [],
      navs: []
    };
  },
  computed: {
  },
  methods: {
    handleCOMClick(id) {
      this.$emit("navchange", id)
    },
    handleMenuClick (id, type) {
      this.$router.push({
        name: 'CeilsMobile',
        query: {
          type: type,
          categoryId: id
        }
      })
    },
    getCategories(){
      let that = this;
      let rs = this.routes.find(r => r.path.replace("/", "") === this.type).children.filter(i => i.path !== "/");
      axios.get(this.$SITE_URL + '/mobile/getAllComponents').then(function(resp) {
        let group = {}
        for (let item of resp.data.data.components) {
          let com_def = item.component;
          let path = rs.filter(i => {return i.name === com_def.name + "Mobile"})

          if (path.length > 0) {
            let com_count = resp.data.data.count.filter(i => {return i.componentName === com_def.name});

            let com = {
              desc: com_def.desc,
              comName: com_def.name,
              name: path[0].name,
              count: com_count.length > 0 ? com_count[0].count : "",
              path: path[0].path
            }
            let key = com_def.categoryName + " " + com_def.categoryDesc;
            if (group[key] === undefined) {
              group[key] = [];
            }
            group[key].push(com);
          }
        }

        that.navs = group;
      })
    }
  },
  created() {
    this.routes = this.$router.options.routes;
    this.getCategories();
  }
};
</script>
<style lang="scss">
.side-nav {
  width: 240px;
  // border-right: 1px solid #ddd;
}
.el-menu-item-group__title{
  margin-top: 15px;
}
</style>


