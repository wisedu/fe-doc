<template>
<div class="skin-page">
  <mt-cell-group title="皮肤主题色Theme">
<!--     <mt-field :label="item.name" :placeholder="item.placeholder" @change="handleChange(item)" v-model="item.currentValue" v-for="(item,index) in themeColors" :key="index"><i class="skin-color-showbox" :style="{'background-color':item.backgroundColor}"></i></mt-field> -->

 <mt-field :label="item.name" @change="handleChange(item)" v-model="item.placeholder" v-for="(item,index) in themeColors" :key="index" type="color">{{item.backgroundColor}}</mt-field> 
  </mt-cell-group>
  <mt-cell-group title="皮肤配色Match">
 <!--    <mt-field :label="item.name" :placeholder="item.placeholder" @change="handleChange(item)" v-model="item.currentValue" v-for="(item,index) in matchColors" :key="index"><i class="skin-color-showbox" :style="{'background-color':item.backgroundColor}"></i></mt-field> -->
 <mt-field :label="item.name" @change="handleChange(item)" v-model="item.placeholder" v-for="(item,index) in matchColors" :key="index" type="color">{{item.backgroundColor}}</mt-field> 
  </mt-cell-group>
  <div class="skin-buttons">
    <mt-button size="large" type="primary" @click.native="handleSubmit" :disabled="disabled">
      <mt-spinner color="#000" type="fading-circle" slot="icon" :size='20' v-if="spinner"></mt-spinner>{{confirmText}}
    </mt-button>
    <mt-button size="large" type="warning" @click.native="handleDownload" :disabled="disabled">下载皮肤文件</mt-button>
<!--     <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">
      <div slot="end">{{ value }}%</div>
    </mt-progress> -->
  </div>
</div>
</template>
<script>
import {
  Field,
  Button,
  MessageBox,
  spinner,
  Toast,
  Progress
} from 'bh-mint-ui2';
import axios from 'axios';

export default {
  data(){
    return{
      spinner:false,
      disabled:false,
      confirmText:"生成皮肤文件",
      progressVisible:false,
      themeColors:[
        {
          name:"Theme_Lv1：",
          placeholder:"#52C7CA",
          backgroundColor:"#52C7CA",
          currentValue:null,
          lessName:"@theme-lv1:"
        },{
          name:"Theme_Lv2：",
          placeholder:"#52B5B7",
          backgroundColor:"#52B5B7",
          currentValue:null,
          lessName:"@theme-lv2:"
        },{
          name:"Warning_Lv1：",
          placeholder:"#FFB950",
          backgroundColor:"#FFB950",
          currentValue:null,
          lessName:"@warning-lv1:"
        },{
          name:"Warning_Lv2：",
          placeholder:"#E8AA4D",
          backgroundColor:"#E8AA4D",
          currentValue:null,
          lessName:"@warning-lv2:"
        },{
          name:"Danger_Lv1：",
          placeholder:"#F26666",
          backgroundColor:"#D35A5A",
          currentValue:null,
          lessName:"@danger-lv1:"
        },{
          name:"Danger_Lv2：",
          placeholder:"#E8AA4D",
          backgroundColor:"#E8AA4D",
          currentValue:null,
          lessName:"@danger-lv2:"
        },{
          name:"Link：",
          placeholder:"#52B5B7",
          backgroundColor:"#52B5B7",
          currentValue:null,
          lessName:"@link:"
        },{
          name:"Grey_Lv1：",
          placeholder:"#1E2329",
          backgroundColor:"#1E2329",
          currentValue:null,
          lessName:"@grey-lv1:"
        },{
          name:"Grey_Lv2：",
          placeholder:"#2F343B",
          backgroundColor:"#2F343B",
          currentValue:null,
          lessName:"@grey-lv2:"
        },{
          name:"Grey_Lv3：",
          placeholder:"#92969C",
          backgroundColor:"#92969C",
          currentValue:null,
          lessName:"@grey-lv3:"
        },{
          name:"Grey_Lv4：",
          placeholder:"#BDC0C5",
          backgroundColor:"#BDC0C5",
          currentValue:null,
          lessName:"@grey-lv4:"
        },{
          name:"Grey_Lv5：",
          placeholder:"#E8E8E8",
          backgroundColor:"#E8E8E8",
          currentValue:null,
          lessName:"@grey-lv5:"
        },{
          name:"Grey_Lv6：",
          placeholder:"#EFEFEF",
          backgroundColor:"#EFEFEF",
          currentValue:null,
          lessName:"@grey-lv6:"
        },{
          name:"Bg_Lv1：",
          placeholder:"#F4F4F4",
          backgroundColor:"#F4F4F4",
          currentValue:null,
          lessName:"@bg-lv1:"
        },{
          name:"Bg_Lv2：",
          placeholder:"#F9F9F9",
          backgroundColor:"#F9F9F9",
          currentValue:null,
          lessName:"@bg-lv2:"
        },{
          name:"Bg_Lv3：",
          placeholder:"#FFFFFF",
          backgroundColor:"#FFFFFF",
          currentValue:null,
          lessName:"@bg-lv3:"
        }
      ],
      matchColors:[
        {
          name:"Red：",
          placeholder:"#F26666",
          backgroundColor:"#F26666",
          currentValue:null,
          lessName:"@red:"
        },{
          name:"Orange：",
          placeholder:"#FF7949",
          backgroundColor:"#FF7949",
          currentValue:null,
          lessName:"@oranger:"
        },{
          name:"Yellow：",
          placeholder:"#FFB950",
          backgroundColor:"#FFB950",
          currentValue:null,
          lessName:"@yellow:"
        },{
          name:"Green：",
          placeholder:"#A2D06B",
          backgroundColor:"#A2D06B",
          currentValue:null,
          lessName:"@green:"
        },{
          name:"Blue：",
          placeholder:"#4A90E2",
          backgroundColor:"#4A90E2",
          currentValue:null,
          lessName:"@blue:"
        },{
          name:"Indigo：",
          placeholder:"#52C7CA",
          backgroundColor:"#52C7CA",
          currentValue:null,
          lessName:"@indigo:"
        },{
          name:"Purple：",
          placeholder:"#D98BE8",
          backgroundColor:"#D98BE8",
          currentValue:null,
          lessName:"@purple:"
        }
      ]
    }
  },
  methods:{
    handleChange(item){
      this.$nextTick(function(){
        item.backgroundColor=item.placeholder
      })
    },
    getCookie(c_name){
      if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
          c_start=c_start + c_name.length+1 
          let c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
        } 
      }
      return ""
    },
    handleSubmit(){
      //获取页面的颜色
      let colors = [];
      let text = "";
      this.themeColors.forEach((value) => {
        colors.push(value.lessName+value.backgroundColor)
      });
      this.matchColors.forEach((value) => {
        colors.push(value.lessName+value.backgroundColor)
      });
      text=colors.join(";")+";";
      //查询用户是否登录
      // let uid = this.getCookie("uid");
      // if(!uid){
      //   window.location.pathname = "/forum/login";
      // }
      //生成皮肤文件
      let phoneIframe = document.getElementById("phoneIframe").contentWindow.document;
      let skinsEl = phoneIframe.getElementById("skins");
      MessageBox.confirm('确定执行此操作?', '生成皮肤','').then((val) =>{
        this.spinner=true;
        this.disabled=true;
        this.confirmText="皮肤生成中";
        axios.get('http://res.wisedu.com/res-be/createSkinCss',{
          "params":{"text":text}
          }).then(resp => {
          if(resp.status === 200){         
            this.spinner = false;
            this.disabled = false;
            Toast({
              message: "皮肤文件已生成，请点击下载！"
            });
            let skinCss = resp.data.data;
            skinsEl.innerHTML = skinCss;
          }
        }).catch(err =>{
          console.log(err)
        });
      })
    },
    handleDownload() {
      var url="http://res.wisedu.com/res-be/downloadSkinCss?dir=/home/projects/skin&name=skin.css"
      var iframe = document.getElementById("downloadIframe");
      if(iframe){
        iframe.src = url;
      }else{
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = url;
        iframe.id = "downloadIframe";
        document.body.appendChild(iframe);
      }
    }
  }
}
</script>
<style>
  .skin-color-showbox{
    display:inline-block;
    width:20px;
    height:20px;
  }
  .skin-page .mint-field-core{
    flex:0.1;
  }
  .skin-page .mint-field-clear i{
    display: none;
  }
  .skin-page .mint-field-other{
    position: absolute;
    top: 15px;
    right: 20px;
  }
  .skin-buttons{
    margin-top: 30px;
  }
  .skin-buttons button{
    margin: 10px auto;
  }


</style>
