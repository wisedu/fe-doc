<template>
<div class="page">
  <h1>设计开发资源库 - design to development</h1>
  <el-col :span="6" :offset="1">
    <router-link to="mobile">
      <el-card :body-style="{ padding: '0px', backgroundColor:'#52c7ca' }">
        <div style="height:300px;padding:32px"><h2 style="color:white">Mobile</h2></div>
        <div style="padding: 14px;background-color:white">
          <span>Mobile</span>
          <div class="bottom clearfix">
            <time class="time"></time>
          </div>
        </div>
      </el-card>
    </router-link>
  </el-col>
  <el-col :span="6" :offset="1">
    <router-link to="pc">
      <el-card :body-style="{ padding: '0px', backgroundColor:'#4a90e2' }">
        <div style="height:300px;padding:32px"><h2 style="color:white">响应式组件</h2></div>
        <div style="padding: 14px;background-color:white">
          <span>响应式组件</span>
          <div class="bottom clearfix">
            <time class="time"></time>
          </div>
        </div>
      </el-card>
    </router-link>
  </el-col>
  <el-col :span="6" :offset="1">
    <a href="http://res.wisedu.com/FS/docsite/">
      <el-card :body-style="{ padding: '0px', backgroundColor:'#ffb950' }">
        <div style="height:300px;padding:32px"><h2 style="color:white">RES文档</h2></div>
        <div style="padding: 14px;background-color:white">
          <span>PC组件文档</span>
          <div class="bottom clearfix">
            <time class="time"></time>
          </div>
        </div>
      </el-card>
    </a>
  </el-col>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page {
  width: 100%;
  height: 580px;
  background-color: #fff;
  padding: 24px;
}

.card {
  width: 300px;
  height: 200px;
  border: 1px solid #ddd;
}
h1 {
  margin-bottom: 32px;
}
</style>
