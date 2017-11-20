<template>
  <div class="side-nav">

     <el-menu :default-active="active" :default-openeds="defaultOpeneds" class="el-menu-vertical-demo">
       <!-- <div class="search">
        <input type="text">
      </div>   -->
      <el-submenu index="components">
        <template slot="title">组件</template>
        <router-link v-for="item in navs" :key="item.name" :to="{name: item.name}">
          <el-menu-item :index="item.path" @click="handleCOMClick(item.path)">{{item.path}}</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu v-for="(value, key) in menuData" :key="key" :index="key">
        <template slot="title">{{key}}</template>
        <el-menu-item-group v-for="item in value" :key="item.name">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.id" @click="handleMenuClick(subItem.id, key)">{{subItem.name}}</el-menu-item>
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
    };
  },
  computed: {
    navs() {
      return this.routes.find(r => r.path.replace("/", "") === this.type).children.filter(i => i.path !== "/");
    }
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
    }
  },
  created() {
    this.routes = this.$router.options.routes;
  }
};
</script>
<style lang="scss">
.side-nav {
  width: 240px;
  // border-right: 1px solid #ddd;
}
</style>


