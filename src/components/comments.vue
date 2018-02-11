<template>
  <div>
    <div id="nbb-markdown"></div>
    <div id="nodebb-comments" ref="nodebb-comments"></div>
  </div>
</template>

<script>
export default {
  props:["pagename"],
  mounted() {
      var nbb = window.nbb = {};
      nbb.cid = 8;   // the category where to publish.
      nbb.url = "https://res.wisedu.com/forum";
      nbb.blogger = 'res';   // the name to distingush with different blog, omit it to fallback to 'default'.
      nbb.articleID = window.location.pathname.replace(/\//g,"").replace(/:/g,"");   // To get the unique article id, see explations below.
      nbb.articleTitle = this.pagename;                       // To get the article title, document.title is the default.
      nbb.commentElement = document.getElementById('nodebb-comments');  // Where you put the comments widget, "nodebb-comments" element is the default.

      nbb.articleContent = document.getElementById('nbb-markdown').value; // Write a function to get the post content.

      blogComments2Common(this.$refs["nodebb-comments"], nbb);
  }
}
</script>

<style>

</style>
