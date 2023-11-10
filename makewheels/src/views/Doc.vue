<template>
   
   <div class="grid">
   
    <ul class="表单">
        <ol><b>文档</b></ol>
        <ol><router-link to="/Doc/intro">介绍</router-link></ol>
        <ol><router-link to="/Doc/install">安装</router-link></ol>
        <ol><router-link to="/Doc/get-started">开始使用</router-link></ol>
        
        <ol><b>组件列表</b></ol>
    
    
    
        <ol><router-link to="/Doc/Switch">Switch组件</router-link></ol>
    <ol><router-link to="/Doc/Button">Button组件</router-link></ol>
    <ol><router-link to="/Doc/Dialog">Dialog组件</router-link></ol>
    <ol><router-link to="/Doc/Tabs">Tab组件</router-link></ol>
    
</ul> 
<router-link to="/" class="a b"> <svg class="icon hh"  aria-hidden="true"  >   <use xlink:href="#icon-zhuye1"></use> 
  </svg>返回界面</router-link>  
   <div class="边框" > <div > <router-view :fa="f1" :key="i"/></div>   </div>  
   
   <details class="gg"><summary>表单</summary>
 <td>
   <tr class="jh"><router-link to="/Doc/intro">介绍</router-link> </tr> 
       <tr class="jh"> <router-link to="/Doc/install">安装</router-link></tr>
       <tr class="jh"><router-link to="/Doc/get-started">开始使用</router-link></tr> 
        <tr class="jh"><router-link to="/Doc/Switch">Switch组件</router-link></tr>
   <tr class="jh"><router-link to="/Doc/Button">Button组件</router-link></tr> 
    <tr class="jh"><router-link to="/Doc/Dialog">Dialog组件</router-link></tr>
    <tr class="jh"><router-link to="/Doc/Tabs">Tab组件</router-link></tr>
   </td>

   </details>





</div>

</template>
<script lang="ts">
import {computed,ref,onMounted} from "vue"
export default {
data(){return {i:1}},
    methods:{ 
        f1(e2,e3,e4){
function f4(){if(!e2){ e2=true;e3="隐藏代码"; e4=[e2,e3] ; return e4}
            else{e2=false;e3="查看代码";e4=[e2,e3] ;  return e4} }   
      e4=f4();  return e4    },
     
    },
  
   setup(){
onMounted(()=>{
    let asd=computed(()=>{let hasScrollbar = document.body.scrollHeight > window.innerHeight;return hasScrollbar })
   })
   }
}
   
 
</script>
<style scoped>
.grid{display:grid;grid:100% /15.625% 5% 68.375% 15px 1fr;min-height:var(--primary); }
.表单{
position:fixed;
 margin-top:0px;
padding-left:0px;
width:0px;
}

ol{

 left:50%;
 right:50%;
 width:130px;
 height:42px;
 padding: 5px 11px;
 background-color: rgba(180, 180, 107, 0.736);
 border: 1px solid rgba(241, 238, 238, 0.181);
 border-radius: 3px;
 text-align: center;
 font-size:20px
}
.边框{ background-color:rgb(188, 192, 156);grid-area: 1/3/4/4;padding-bottom:40px;border-right:15px solid rgb(187, 93, 67)}
a{text-decoration:none;color:rgba(8, 83, 49, 0.897);}
.router-link-active{text-decoration:none;color:rgba(59, 105, 61, 0.734);}

.b{position:fixed;left:20px;top:500px;}
.hh{font-size: 30px;}
.gg{display: none;}
.jh{background-color: rgb(169, 165, 176);}
@media (max-width:820px) {
.grid{grid:30px/80%}
.边框{grid-area:2/1/3/2}
.b{top:92%;font-size: 14px;}
.hh{font-size:24px;}
.表单{display: none;}
.gg{display: block;left:22px ;grid-area:1/1/2/3;background-color: rgb(159, 124, 124);padding-left: 10px;padding-top: 6px;position:sticky;top:0;}

}
@media (max-width:388px){.边框{grid-area:2/1/3/3}}
</style>
