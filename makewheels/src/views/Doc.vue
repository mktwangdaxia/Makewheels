<template>
   <div class="grid">
   
    <ul class="表单">
        <ol><b>文档</b></ol>
        <ol><router-link to="/Introduction">介绍</router-link></ol>
        <ol><router-link to="/Doc/Install">安装</router-link></ol>
        <ol><router-link to="/Doc/Start">开始使用</router-link></ol>
        
        <ol><b>组件列表</b></ol>
    
    
    
        <ol><router-link to="/Doc/Switch">Switch组件</router-link></ol>
    <ol><router-link to="/Doc/Button">Button组件</router-link></ol>
    <ol><router-link to="/Doc/Dialog">Dialog组件</router-link></ol>
    <ol><router-link to="/Doc/Tabs">Tab组件</router-link></ol>
  
</ul>
<router-link to="/" class="a b"> <svg class="icon"  aria-hidden="true" style="font-size: 30px;">   <use xlink:href="#icon-zhuye1"></use> 
  </svg>返回界面</router-link>    
   <div class="边框" > <div > <router-view/></div>   </div>  

</div>

</template>
<script lang="ts">
export default {
  
    setup(){
        
        let a=innerHeight-1 + 'px';
        document.body.style.setProperty('--width',  a )
        document.body.style.getPropertyValue('--width').trim();}
}
</script>
<style scoped>
.grid{display:grid;grid:67.5% 12.5% 20% /15.625% 5% 70.375% 19%;height:var(--width)}
.表单{
grid-area: 1/1/2/2;
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
.边框{ background-color:rgb(188, 192, 156);grid-area: 1/3/4/4;}
a{text-decoration:none;color:rgba(8, 83, 49, 0.897);}
.router-link-active{text-decoration:none;color:rgba(59, 105, 61, 0.734);}

.b{position:absolute;left:20px;top:500px;}


</style>
