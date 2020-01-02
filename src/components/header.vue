<template>
<!--   <div class="header-container">
    <h1><img class="logo" src="../assets/logo.png" alt=""></h1>
    <el-menu mode="horizontal" router background-color="#062f49" text-color="#FFFFFF" active-text-color="rgb(255, 208, 75)" default-active="/">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="//res.wisedu.com/FS/docsite2x/">组件库2.x</el-menu-item>
      <el-menu-item index="/FS/docsite/">组件库1.x</el-menu-item>
      <el-menu-item index="/mobile-projectlist">模板库</el-menu-item>
      <el-menu-item index="/forum">论坛</el-menu-item>
    </el-menu>
  </div> -->
  <div class="header-wrap">
    <div class="header-container">
      <h1>
        <img class="logo" src="../assets/logo.png" alt="">
      </h1>
      <ul class="list">
        <li>
          <a href="//res.wisedu.com/"><span>首页</span></a>
        </li>
        <li>
          <a href="//res.wisedu.com/FS/docsite2x/"><span>组件库2.x</span></a>
        </li>
        <li>
          <a href="//res.wisedu.com/FS/docsite/"><span>组件库1.x</span></a>
        </li>
        <router-link to="/mobile-projectlist">
          <li :class="mobile_active"><span>模板库</span></li>
        </router-link>
        <li>
          <a href="/forum"><span>论坛</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      mobile_active:"active",
      pc_active:""
    }
  },
  mounted() {
    this.changeStatus()
  },
  methods: {
    changeStatus() {
      if (window.location.hash.indexOf("mobile") > -1) {
        this.mobile_active = "active"
        this.pc_active = ""
      } else {
        this.mobile_active = ""
        this.pc_active = "active"
      }
    }
  }
}
</script>
<style lang="scss">
.el-badge.item{
  display: inline;
}
.header-wrap {
  display: flex;
  justify-content: center;
}
.header-container {
  max-width: 1400px;
  min-width: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto; 
  & .logo {
    height: 50px;
  }

  & .list {
    list-style: none;
    color: #fff;
    display: flex;
    height: 100%;

    & li {
      padding: 0 24px;
      height: 100%;
      line-height: 80px;

      & span {
        font-size: 16px;
      }
    }
  }

  & a {
    color: inherit;
  }
}
.router-link-active {
  border-bottom: 4px solid #3892FF;
}
.el-menu--horizontal {
  & .el-menu-item {
    line-height: 80px;
    height: 80px;
  }
}
</style>


