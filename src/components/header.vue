<template>
  <div class="header-wrap">
    <div class="header-container">
      <img class="logo" src="../assets/logo.png" alt="">
      <ul class="list">
        <li>
          <a href="/forum"><el-badge value="new" class="item">社区</el-badge></a>
        </li>
        <router-link to="/mobile">
          <li :class="mobile_active">移动组件</li>
        </router-link>
        <router-link to="/mobile-projectlist">
          <li :class="mobile_active">移动模板库</li>
        </router-link>
        <router-link to="/pc">
          <li :class="pc_active">响应式组件</li>
        </router-link>
        <li><a href="https://res.wisedu.com/FS/docsite/">RES文档</a></li>
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
  background: #062f49;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.header-container {
  width: 1176px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .logo {
    height: 50px;
  }

  & .list {
    list-style: none;
    color: #fff;
    display: flex;
    height: 100%;

    & li {
      padding: 0 16px;
      height: 100%;
      line-height: 80px;
    }
  }

  & a {
    color: inherit;
  }
}
.router-link-active {
  border-bottom: 4px solid #3892FF;
}
</style>


