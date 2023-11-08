<template>
   <div style="height:6vh;"></div>

   <div class="b">
      <div style="width:70%">
         <div class="a c">常规用法</div>
         <div class="a c"> <button class="转换装置" @click="f3" :class="{ checked: 正负转换 }"><span class="按钮1"></span></button>
         </div>
         <div class="a"><input type="button" :value="e3" @mousedown="e4 = fa(e2, e3); e2 = e4[0]; e3 = e4[1]"></div>
      </div>
   </div>
   <div class="d" v-if="e2">
      <Demo :component="switch1" />
   </div>
   <div style="height:10vh;"></div>

   <div class="b">
      <div style="width:70%">
         <div class="a c">支持disabled</div>

         <div class="a c ">
            <button class="转换装置" disabled>
               <span class="按钮2"></span>
            </button>
         </div>

         <div class="a"><input type="button" :value="e6" @mousedown="e7 = fa(e5, e6); e5 = e7[0]; e6 = e7[1]">
         </div>
      </div>
   </div>
   <div class="d" v-if="e5">
      <Demo :component="switch2" />
   </div>
</template>
<script lang="ts">
import switch1 from './switch.demo.vue'
import switch2 from './switch2.demo.vue'
import Demo from "./Demo.vue";
export default {
   components: { Demo },
   props: ['fa'],
   data() { return { 正负转换: false, e2: false, e3: "查看代码", e4: [], e5: false, e6: "查看代码", e7: [] } },
   methods: { f3() { this.正负转换 = !this.正负转换 } },
   setup() {
      return { switch1, switch2 }
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

.转换装置:disabled:active {
   >.按钮2 {
      padding-left: 2px;
   }

   //这种用scss的选择器用css选择器怎么选
}

.按钮1,
.按钮2 {
   height: 18px;
   width: 18px;
   background-color: rgb(248, 249, 250);
   border: rgba(83, 82, 82, 0.356) solid 1px;
   border-radius: 50% 50%;
   display: block;

   margin-right: 0px;
   outline: 0px;

}

.按钮2 {
   transition: padding-left 300ms;
}



.checked {
   padding-left: 15px;
   background-color: black;
}

.a {
   color: #70261f;
   box-sizing: border-box;
  padding-bottom: 3px;
   border: 1px solid black;
   margin: 0;
   padding-top: 4px;
   padding-left: 9px;
  min-width:90px;
}

.b {

   min-height: 92px;
   padding-left: 1vw;
   margin-left: 2vw;


}

.c {
   border-bottom: 0px;
}

.d {
   margin-left: 3vw;
   width: 60vw;
   background-color: antiquewhite;
   margin-top: 10px;
}</style>
