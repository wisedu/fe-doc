<template>
<div class="skin-page">
  <mt-cell-group title="皮肤主题色(Theme)">
    <mt-field :label="item.name" @change="handleChange(item)" :placeholder="item.placeholder" v-for="(item,index) in themeColors" :key="index" type="text" v-model.trim="item.currentValue" :state="item.state"><input type="color" name="themeColor" v-model="item.backgroundColor" disabled></mt-field> 
  </mt-cell-group>
  <mt-cell-group title="皮肤配色(Match)">
    <mt-field :label="item.name" @change="handleChange(item)" :placeholder="item.placeholder" v-for="(item,index) in matchColors" :key="index" type="text" v-model.trim="item.currentValue" :state="item.state"><input type="color" name="themeColor" v-model="item.backgroundColor" disabled></mt-field> 
  </mt-cell-group>
  <mt-cell-group title="皮肤备注(必填)：">
    <mt-textarea label="备注信息：" placeholder="请输入备注信息" maxlength=50 v-model.trim="remarkText"></mt-textarea>
  </mt-cell-group>
  <div class="skin-buttons">
    <mt-button size="large" type="primary" @click.native="handleSubmit" :disabled="disabled">
      <mt-spinner color="#000" type="fading-circle" slot="icon" :size='20' v-if="spinner"></mt-spinner>{{confirmText}}
    </mt-button>
  </div>
  <table class="skin-history">
    <thead>
      <tr>
        <th>皮肤备注信息</th>
        <th>皮肤生成时间</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="value in historySkins" :key="value.id">
        <td>{{value.submission_mark}}</td>
        <td>{{value.submission_date}}</td>
        <td class="skin-handle"><a @click="handleDownload(value.id)">下载</a><a @click="handleDelete(value.id)">删除</a></td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import {
  Field,
  Button,
  MessageBox,
  spinner,
  Toast,
  Textarea
} from 'bh-mint-ui2';
import axios from 'axios';

export default {
  data(){
    return{
      uid:this.getCookie("uid"),
      vid:"1.x.x",
      spinner:false,
      disabled:false,
      confirmText:"生成皮肤文件",
      historySkins:[],
      themeColors:[
        {
          name:"Theme_Lv1：",
          placeholder:"#52C7CA",
          backgroundColor:"#52C7CA",
          currentValue:null,
          lessName:"@theme-lv1:",
          isValid:true,
          state:""
        },{
          name:"Theme_Lv2：",
          placeholder:"#52B5B7",
          backgroundColor:"#52B5B7",
          currentValue:null,
          lessName:"@theme-lv2:",
          isValid:true,
          state:""
        },{
          name:"Warning_Lv1：",
          placeholder:"#FFB950",
          backgroundColor:"#FFB950",
          currentValue:null,
          lessName:"@warning-lv1:",
          isValid:true,
          state:""
        },{
          name:"Warning_Lv2：",
          placeholder:"#E8AA4D",
          backgroundColor:"#E8AA4D",
          currentValue:null,
          lessName:"@warning-lv2:",
          isValid:true,
          state:""
        },{
          name:"Danger_Lv1：",
          placeholder:"#F26666",
          backgroundColor:"#F26666",
          currentValue:null,
          lessName:"@danger-lv1:",
          isValid:true,
          state:""
        },{
          name:"Danger_Lv2：",
          placeholder:"#D35A5A",
          backgroundColor:"#D35A5A",
          currentValue:null,
          lessName:"@danger-lv2:",
          isValid:true,
          state:""
        },{
          name:"Link：",
          placeholder:"#4A90E2",
          backgroundColor:"#4A90E2",
          currentValue:null,
          lessName:"@link:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv1：",
          placeholder:"#1E2329",
          backgroundColor:"#1E2329",
          currentValue:null,
          lessName:"@grey-lv1:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv2：",
          placeholder:"#2F343B",
          backgroundColor:"#2F343B",
          currentValue:null,
          lessName:"@grey-lv2:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv3：",
          placeholder:"#92969C",
          backgroundColor:"#92969C",
          currentValue:null,
          lessName:"@grey-lv3:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv4：",
          placeholder:"#BDC0C5",
          backgroundColor:"#BDC0C5",
          currentValue:null,
          lessName:"@grey-lv4:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv5：",
          placeholder:"#E8E8E8",
          backgroundColor:"#E8E8E8",
          currentValue:null,
          lessName:"@grey-lv5:",
          isValid:true,
          state:""
        },{
          name:"Grey_Lv6：",
          placeholder:"#EFEFEF",
          backgroundColor:"#EFEFEF",
          currentValue:null,
          lessName:"@grey-lv6:",
          isValid:true,
          state:""
        },{
          name:"Bg_Lv1：",
          placeholder:"#F4F4F4",
          backgroundColor:"#F4F4F4",
          currentValue:null,
          lessName:"@bg-lv1:",
          isValid:true,
          state:""
        },{
          name:"Bg_Lv2：",
          placeholder:"#F9F9F9",
          backgroundColor:"#F9F9F9",
          currentValue:null,
          lessName:"@bg-lv2:",
          isValid:true,
          state:""
        },{
          name:"Bg_Lv3：",
          placeholder:"#FFFFFF",
          backgroundColor:"#FFFFFF",
          currentValue:null,
          lessName:"@bg-lv3:",
          isValid:true,
          state:""
        }
      ],
      matchColors:[
        {
          name:"Red：",
          placeholder:"#F26666",
          backgroundColor:"#F26666",
          currentValue:null,
          lessName:"@red:",
          isValid:true,
          state:""
        },{
          name:"Orange：",
          placeholder:"#FF7949",
          backgroundColor:"#FF7949",
          currentValue:null,
          lessName:"@oranger:",
          isValid:true,
          state:""
        },{
          name:"Yellow：",
          placeholder:"#FFB950",
          backgroundColor:"#FFB950",
          currentValue:null,
          lessName:"@yellow:",
          isValid:true,
          state:""
        },{
          name:"Green：",
          placeholder:"#A2D06B",
          backgroundColor:"#A2D06B",
          currentValue:null,
          lessName:"@green:",
          isValid:true,
          state:""
        },{
          name:"Blue：",
          placeholder:"#4A90E2",
          backgroundColor:"#4A90E2",
          currentValue:null,
          lessName:"@blue:",
          isValid:true,
          state:""
        },{
          name:"Indigo：",
          placeholder:"#52C7CA",
          backgroundColor:"#52C7CA",
          currentValue:null,
          lessName:"@indigo:",
          isValid:true,
          state:""
        },{
          name:"Purple：",
          placeholder:"#D98BE8",
          backgroundColor:"#D98BE8",
          currentValue:null,
          lessName:"@purple:",
          isValid:true,
          state:""
        }
      ],
      remarkText:null
    }
  },
  beforeCreate(){
    if(!this.uid) window.location.pathname = "/forum/login";
  },
  created(){
    this.init();
  },
  methods:{
    init(){
      let _this=this;
      axios.get('http://res.wisedu.com/res-be/getSkinsCssHistory',{
        "params":{
          "uid": this.uid
        }
      }).then(resp => {
        _this.historySkins= resp.data.data;
        _this.historySkins.forEach(value => {
          value.submission_date = _this.formatDateTime(value.submission_date);
        });
      }).catch(err =>{
        console.log(err);
      });
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
    handleChange(item){
      let type = "^#[0-9a-fA-F]{6}$";
      let reg = new RegExp(type);
      if(item.currentValue === ""){
        item.isValid = false;
        item.state = "";
        item.backgroundColor=item.placeholder;
      }else if(item.currentValue.match(reg) !== null){
        item.isValid = true;
        item.state = "success";
        item.backgroundColor=item.currentValue
      }else{
        item.isValid = false;
        item.state = "error";
        item.backgroundColor= "#000000"
      }
    },
    handleSubmit(){
      //获取页面的颜色并校验
      let colors = [];
      let text = "";
      let reset = false;
      this.themeColors.forEach((value) => {
        if(!value.isValid){
          reset = true;
          Toast({message: value.name+"输入有误，请核实！"});
          return;
        }
        colors.push(value.lessName+value.backgroundColor);
      });
      if(reset) return;
      this.matchColors.forEach((value) => {
        if(!value.isValid){
          reset = true;
          Toast({message: value.name+"输入有误，请核实！"});
          return;
        }
        colors.push(value.lessName+value.backgroundColor)
      });
      if(reset) return;
      if(!this.remarkText){
        Toast({message: "请输入备注信息！"});
        return;
      }
      text=colors.join(";")+";";
      //生成皮肤文件
      let phoneIframe = document.getElementById("phoneIframe").contentWindow.document;
      let skinsEl = phoneIframe.getElementById("skins");
      MessageBox.confirm('确定执行此操作?', '生成皮肤','').then((val) =>{
        this.spinner=true;
        this.disabled=true;
        this.confirmText="皮肤生成中";
        axios.get('http://res.wisedu.com/res-be/createSkinCss',{
          "params":{
            "uid": this.uid,
            "vid": this.vid,
            "text":text,
            "remark": this.remarkText
          }
        }).then(resp => {
          if(resp.status === 200){         
            this.spinner = false;
            this.disabled = false;
            Toast({
              message: "皮肤文件已生成，请点击下载！"
            });
            let data = resp.data.data;
            data.submission_date = this.formatDateTime(data.submission_date)
            this.historySkins.unshift(data);
            skinsEl.innerHTML = data.css;
          }
        }).catch(err =>{
          this.spinner = false;
          this.disabled = false;
        });
      });
    },
    handleDownload(id) {
      var url="http://res.wisedu.com/res-be/downloadSkinCss?dir=/home/projects/skin/css&name=skin_"+this.uid+".css&id="+id;
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
    },
    handleDelete(id){
      let _this = this;
      MessageBox.prompt("您确定要删除该条皮肤？确定请输入DELETE进行删除操作。", '删除皮肤').then(({ value }) => {
        if (value === "DELETE") {
          axios.delete('http://res.wisedu.com/res-be/deleteSkinCss',{
            "params":{
              "id":id
            }
          }).then(resp => {
            _this.historySkins.forEach(value => {
              if(value.id === id){
                _this.historySkins.splice(_this.historySkins.indexOf(value),1);
              }
            });
          }).catch(err =>{
            console.log(err);
          });
        }
      });
    },
    formatDateTime(date){
      let dateTimeObj = new Date(date);
      let O = {
        "Y" : dateTimeObj.getFullYear(),                //年  
        "M" : dateTimeObj.getMonth()+1,                 //月份   
        "D" : dateTimeObj.getDate(),                    //日   
        "h" : dateTimeObj.getHours(),                   //小时   
        "m" : dateTimeObj.getMinutes(),                 //分   
        "s" : dateTimeObj.getSeconds(),                 //秒   
      };
      return O.Y+"-"+(O.M < 10 ? ('0' + O.M) : O.M)+"-"+( O.D< 10 ? ('0' + O.D) : O.D)+" "+(O.h < 10 ? ('0' + O.h) : O.h)+":"+(O.m < 10 ? ('0' + O.m) : O.m)+":"+(O.s < 10 ? ('0' + O.s) : O.s);
    } 
  }
}
</script>
<style>
 /* .skin-page .mint-cell-group{
    float: left;
    width: 50%;
  }*/
  .skin-page .mint-field-clear{
    display: none;
  }
  .skin-page .mint-field-core{
    flex:0.8;
  }
  .skin-page .mint-field-other{
    position: absolute;
    top: 15px;
    right: 20px;
  }
  .skin-buttons{
    margin: 30px auto;
  }
  .skin-buttons button{
    margin: 10px auto;
  }
  .skin-handle a{
    display: inline-block;
    padding: 10px;
  }
</style>
