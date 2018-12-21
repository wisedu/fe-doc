<template>
  <div class="header-wrap">
    <div class="header-container">
      <img class="logo" src="../assets/logo.png" alt="">
      <ul class="list">
        <!-- <router-link to="/mobile">
          <li :class="mobile_active">移动组件</li>
        </router-link>
        <router-link to="/mobile-projectlist">
          <li :class="mobile_active">移动模板库</li>
        </router-link>
        <router-link to="/pc">
          <li :class="pc_active">PC组件</li>
        </router-link>
        <router-link to="/iview">
          <li :class="pc_active">iview文档</li>
        </router-link> -->
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
  background: #062f49;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}
.header-container {
  max-width: 1400px;
  min-width: 800px;
  width: 100%;
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
</style>


