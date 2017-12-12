<template>
  <div class="header-wrap">
    <div class="header-container">
      <img class="logo" src="../assets/logo.png" alt="">
      <ul class="list">
        <router-link to="/mobile">
          <li :class="mobile_active">移动组件</li>
        </router-link>
        <router-link to="/pc">
          <li :class="pc_active">响应式组件</li>
        </router-link>
        <!-- <li>资源下载</li> -->
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


