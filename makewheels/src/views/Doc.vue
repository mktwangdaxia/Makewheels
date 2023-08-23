<template>
   
    <ul class="表单">
    <ol><b>组件列表</b></ol>
    <ol><router-link to="/Switch">Switch组件</router-link></ol>
    <ol><router-link to="/Button">Button组件</router-link></ol>
    <ol><router-link to="/Dialog">Dialog组件</router-link></ol>
    <ol><router-link to="/Tabs">Tab组件</router-link></ol>
    </ul>
    <router-link to="/" class="a"> <svg class="icon"  aria-hidden="true" style="font-size: 30px;">   <use xlink:href="#icon-zhuye1"></use>   </svg>返回界面</router-link>
    <div class="view"> <router-view/></div> 
   

</template>
<script lang="ts">
export default {
    
}
</script>
<style scoped>

.表单{
margin-top:0px;
padding-left:0px;
width:0px;
position:relative;


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

a{text-decoration:none;color:rgba(8, 83, 49, 0.897);}
.router-link-active{text-decoration:none;color:rgba(59, 105, 61, 0.734);}
.view{position:relative;left:34%;bottom:30%;display: inline-block;}


</style>
