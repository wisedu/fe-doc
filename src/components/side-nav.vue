<template>
  <div class="side-nav">
     <el-menu :default-active="active" :default-openeds="defaultOpeneds" class="el-menu-vertical-demo">
       <!-- <div class="search">
        <input type="text">
      </div>   -->
      <el-submenu index="important">
        <template slot="title">置顶文档</template>
        <template v-if="type === 'mobile'">
          <router-link v-for="item in mobileVms" :key="item.name" :to="{name: item.name}">
            <el-menu-item :index="item.path" @click="handleCOMClick(item.path)">
              <span>{{item.comName}} {{item.desc}}</span>
              <span style="color:#FF4949">{{item.count}}</span>
            </el-menu-item>
          </router-link>
          <router-link :to="{name: 'skinTools'}">
            <el-menu-item index="skinTools" @click="handleSkin">
              <span>换肤工具</span>
            </el-menu-item>
          </router-link>
        </template>
        <template v-if="type === 'pc'">
          <router-link v-for="item in pcVms" :key="item.name" :to="{name: item.name}">
            <el-menu-item :index="item.path" @click="handleCOMClick(item.path)">
              <span>{{item.comName}} {{item.desc}}</span>
              <span style="color:#FF4949">{{item.count}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
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
import componentsCategory from './componentsCategory.json';
export default {
  props: {
    type: { default: "pc", type: String },
    menuData: { type: Object, default: function(){ return {} } },
    active: String,
    defaultOpeneds: Array
  },
  data() {
    return {
      routes: [],
      coms: [],
      navs: [],
      mobileVms:[{
        desc: "快速上手",
        comName: '',
        name: 'EmapmInitMobile',
        count: "",
        path: 'emapm-init'
      },{
        desc: "表单",
        comName: 'EmapmForm',
        name: 'EmapmFormMobile',
        count: "",
        path: 'emapm-form'
      },{
        desc: "图片上传",
        comName: 'EmapmUploadImgs',
        name: 'EmapmUploadImgsMobile',
        count: "",
        path: 'emapm-upload-imgs'
      }],
      pcVms:[{
        desc: "CSS样式",
        comName: '',
        name: 'portals',
        count: "",
        path: 'portals'
      },{
        desc: "CSS样式-字体/居中/常用",
        comName: '',
        name: 'CssUtilsPc',
        count: "",
        path: 'css-utils'
      },{
        desc: "页面数据绑定",
        comName: 'DataBind',
        name: 'TgDatabindPc',
        count: "",
        path: 'tg-databind'
      },{
        desc: "数据适配组件",
        comName: 'DataAdapter',
        name: 'TgDatasourcePc',
        count: "",
        path: 'tg-datasource'
      },{
        desc: "OA首页开发环境配置",
        comName: '',
        name: 'PortalsDevPc',
        count: "",
        path: 'portals-dev'
      },{
        desc: "OA首页开发API",
        comName: '',
        name: 'PortalsApiPc',
        count: "",
        path: 'portals-api'
      }],
      skinactive:false
    };
  },
  computed: {
  },
  methods: {
    getCookie(c_name){
      if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){
          c_start=c_start + c_name.length+1
          let c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
        }
      }
      return ""
    },
    handleSkin(){
      //查询用户是否登录
      let uid = this.getCookie("uid");
      if(!uid){
        window.location.pathname = "/forum/login";
      }else{
        this.skinactive=true;
        this.$emit("navchange",'');
      }
    },
    handleCOMClick(id) {
      this.$emit("navchange", id);
      this.skinactive=false;
    },
    handleMenuClick (id, type) {
      this.$router.push({
        name: 'CeilsMobile',
        query: {
          type: type,
          categoryId: id
        }
      })
      this.$emit("navchange", id);
    },
    getCategories(){
      let that = this;
      let rs = this.routes.find(r => r.path.replace("/", "") === this.type).children.filter(i => i.path !== "/");
      axios.get(this.$SITE_URL + '/mobile/getAllComponents').then(function(resp) {
        let group = {}
        let components = resp.data.data.components;
        components = components.concat(componentsCategory)
        for (let item of components) {
          let com_def = item.component;
          let path = rs.filter(i => {return i.name === com_def.name + "Mobile"})

          if (path.length > 0) {
            path[0].matched = true;
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
        group["未分类"] = [];
        for (let item of rs.filter(i => i.matched !== true && !that.mobileVms.some(t => {return i.name === t.name}))) {
          let com = {
            desc: "",
            comName: item.name.replace("Mobile", ""),
            name: item.name,
            count: "",
            path: item.path
          }
          group["未分类"].push(com);
        }
        that.navs = group;
      })
    },
    getCategoriesPC(){
      let that = this;
      let group = {"未分类":[]}
      let rs = this.routes.find(r => r.path.replace("/", "") === this.type).children.filter(i => i.path !== "/");
      for (let item of rs.filter(i => i.matched !== true && !that.pcVms.some(t => {return i.name === t.name}))) {
          let com = {
            desc: "",
            comName: item.name.replace("Pc", "").replace(/^\S/g,function(s){return s.toLowerCase();}).replace(/([A-Z])/g,"-$1").toLowerCase(),
            name: item.name,
            count: "",
            path: item.path
          }
          group["未分类"].push(com);
      }
      that.navs = group;
    }
  },
  created() {
    this.routes = this.$router.options.routes;
    if (this.type === "mobile") {
      this.getCategories();
    } else if (this.type === "pc") {
      this.getCategoriesPC();
    }
  }
};
</script>
<style lang="scss">
.side-nav {
  width: 240px;
  // border-right: 1px solid #ddd;
}
.skinTools{
  height:56px;
  font-size:14px;
  line-height:56px;
  padding:0 20px;
  cursor:pointer;
  color:#301333;
}
.isActive{
  color:#409EFF;
}
.el-menu-item-group__title{
  margin-top: 15px;
}
</style>


