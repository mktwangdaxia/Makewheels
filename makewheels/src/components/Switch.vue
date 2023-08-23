<template>
   <button class="转换装置" @click="转换动作" :class="{ checked: 正负转换 }"><span class="按钮"></span></button>
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
<style lang="scss">
.转换装置 {
   height: 22px;
   width: 36px;
   background-color: grey;
   border-radius: 11px;
   border-width: 0px;
   outline: 0px;
   box-shadow: 0 0 2px 1px #9fb1c5;
   padding: 0px;
   transition: padding-left 400ms}
 .转换装置:focus {
   border: 0 none;
   outline: none;
   box-shadow: 0 0 1px 1px #9fb1c5;
}




.按钮 {
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

.checked {
   padding-left: 15px;
   background-color: blue;
}</style>
