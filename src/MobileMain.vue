<template>
  <div id="app">
    <component slot="source" :is="page"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: "mobileMain",
  data(){
    return {
      page:""
    }
  },
  methods: {
    getPageDefine(showid) {
      let that = this;
      if (!showid) return
      axios.post(this.$SITE_URL + '/mobile/getClassifyItemToShow', {
        type: 'project',
        showId: showid
      }).then(({data: resp}) => {
        if (resp.html !== undefined) {

          Vue.component('c-' + showid, {
            template: '<div>' + resp.html + '</div>',
            data(){
              return resp.data;
            }
          });
          that.page = 'c-' + showid;
        } else {
          Vue.$toast('数据错误');
        }
      })
    },
    getParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
      var context = "";
      if (r != null)
          context = r[2];
      reg = null;
      r = null;
      return context == null || context == "" || context == "undefined" ? "" : context;
    }
  },
  mounted() {
    let showid = this.getParam("showId");
    this.getPageDefine(showid)
  }
}
</script>

<style>

</style>
