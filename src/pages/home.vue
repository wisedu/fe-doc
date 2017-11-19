<template>
<div class="page">
  <h1>欢迎访问 - 样式组件库</h1>
  <el-col :span="8" :offset="2">
    <router-link to="mobile">
      <el-card :body-style="{ padding: '0px', backgroundColor:'#06c1ae' }">
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
  <el-col :span="8" :offset="2">
    <router-link to="pc">
      <el-card :body-style="{ padding: '0px', backgroundColor:'#3E50B4' }">
        <div style="height:300px;padding:32px"><h2 style="color:white">PC</h2></div>
        <div style="padding: 14px;background-color:white">
          <span>PC</span>
          <div class="bottom clearfix">
            <time class="time"></time>
          </div>
        </div>
      </el-card>
    </router-link>
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
