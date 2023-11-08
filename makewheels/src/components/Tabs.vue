<template>
    <div class="盒子">
        
        <Tab1 :fa="fa">
            <Tab2 title="导航一">内容1</Tab2>
            <Tab2 title="导航二">内容2</Tab2>

        </Tab1>

    </div>
</template>



<script lang="ts">

import Tab1 from './Tab1.vue'
import Tab2 from './Tab2.vue'

export default {
   props:['fa'],
  

    components: { Tab1, Tab2 },

}
</script>
<style>
.盒子 {position:absolute;}
</style>



            