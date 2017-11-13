<template>
<div>
    <div class="page-container">
      <md-side-nav type="mobile"></md-side-nav>
      <div class="page-component">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import MdSideNav from '../components/side-nav'
export default {
  components: { MdSideNav }
}
</script>

