<template>
  <div>
    <div id="nbb-markdown"></div>
    <div id="nodebb-comments" ref="nodebb-comments"></div>
  </div>
</template>

<script>
export default {
  props:["type","pagename"],
  watch: {
    pagename: function(val){
      this.reload(val);
    }
  },
  mounted() {
    this.reload(this.pagename);
  },
  methods: {
    reload(val){
      var that = this;
      var nbb = window.nbb = {};
      nbb.cid = 8;   // the category where to publish.
      nbb.url = "https://res.wisedu.com/forum";
      nbb.blogger = 'res';   // the name to distingush with different blog, omit it to fallback to 'default'.
      nbb.articleID = val;   // To get the unique article id, see explations below.
      nbb.articleTitle = val;                       // To get the article title, document.title is the default.
      nbb.commentElement = document.getElementById('nodebb-comments');  // Where you put the comments widget, "nodebb-comments" element is the default.
      nbb.callback = function(counts){
        var shown_count = 0;
        if (counts !== null) {
          shown_count = counts - 1;
        }
        that.$emit("ready", shown_count)
      };
      // nbb.articleContent = function() {
      //   return document.getElementById('nodebb-content').value; // Write a function to get the post content.
      // }

      blogComments2Common(this.$refs["nodebb-comments"], nbb);
    }
  }
}
</script>

<style>

</style>
