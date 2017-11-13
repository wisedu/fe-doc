<template>
  <div class="header-wrap">
    <div class="header-container">
      <img class="logo" src="../assets/logo.png" alt="">
      <ul class="list">
        <router-link to="/mobile">
          <li>移动组件</li>
        </router-link>
        <router-link to="/pc">
          <li class="active">PC组件</li>
        </router-link>
        <!-- <li>资源下载</li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
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

      &.active,
      &:hover {
        border-bottom: 4px solid #3892FF;
      }

    }
  }

  & a {
    color: inherit;
  }
}
</style>


