<template>
    <div>
        aaa
    </div>
    <Demo :component="aaademo" />
  
</template>
<script lang="ts">

import Demo from "./Demo.vue";
import aaademo from './aaa.demo.vue'
export default {
    components:{Demo},


    setup(){
      return {aaademo}
    }
}
</script>