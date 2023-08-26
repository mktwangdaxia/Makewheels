<template>
   
   <div style="height:6vh;"></div>
  
   <div class="b"><div style="width:70%">
   <div class="a">常规用法</div>
   <div class="a"> <button class="转换装置" @click="转换动作" :class="{ checked: 正负转换 }"><span class="按钮1"></span></button></div>
   <div class="a"><button>查看代码</button></div>                         
   </div></div>
      <div style="margin-left:3vw ;width:60vw;background-color:antiquewhite;margin-top:10px;height:400px;"></div>
   <div style="height:10vh;"></div> 
     
   <div class="b"><div style="width:70%">
   <div class="a">支持disabled</div>
   <div class="a"> <button class="转换装置"><span class="按钮2"></span></button></div>
   <div class="a"><button>查看代码</button>                               
    </div></div>
 </div> <div style="margin-left:3vw ;width:60vw;background-color:antiquewhite;margin-top:10px;height:400px;"></div>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {

   setup() {
      let 正负转换 = ref(false)
      let 转换动作 = () => { 正负转换.value = !正负转换.value }
      return { 正负转换, 转换动作 }
   }

}

</script>
<style lang="scss" scoped>
.转换装置 {
   height: 22px;
   width: 36px;
   background-color: grey;
   border-radius: 11px;
   border-width: 0px;
   outline: 0px;
   box-shadow: 0 0 2px 1px #9fb1c5;
   padding: 0px;
   transition: padding-left 400ms
}

.转换装置:focus {
   border: 0 none;
   outline: none;
   box-shadow: 0 0 1px 1px #9fb1c5;
}




.按钮1,
.按钮2 {
   height: 18px;
   width: 18px;
   background-color: rgb(248, 249, 250);
   border: rgba(83, 82, 82, 0.356) solid 1px;
   border-radius: 50% 50%;
   display: block;
   margin-left: 1px;
   margin-right: 0px;
   outline: 0px;

}

.按钮2 {
   transition: padding-left 300ms;
}

.按钮2:active {
   padding-left: 2.4px;
}

.checked {
   padding-left: 15px;
   background-color: rgb(32, 29, 233);
}

.a{
   box-sizing:border-box;
   height:33px;
border:1px solid black;
margin-bottom: -1px;
padding-top:4px;
padding-left: 9px;}

.b {
   
   
   padding-left: 1vw;
   margin-left: 2vw;
  
}</style>
