<template>
<div class="盒子"><slot></slot></div> 
   
</template>



<script lang="ts">

import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'
export default {
    props: {},

    components: { Tab1, Tab2 },
    setup(props, context) {


        let e1 = context.slots.default()
       
        
        console.log(e1)
      
        return {}
    }
}
</script>
<style>
.盒子{height:300px;width:350px;}
</style>