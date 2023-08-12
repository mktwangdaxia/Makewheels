<template>
    <div>

 <Tabs>
    <div class="框"><Tab1 title="导航一"/>
   &emsp;
    <Tab2 title="导航二"/>
    <div class="蓝条"></div>
    <hr></div>
    
</Tabs>  

    </div>
</template>
<script>
 import Tabs from "./Tabs.vue"
 import Tab1 from "./Tab1.vue"
 import Tab2 from "./Tab2.vue"
 
 export default {
components:{Tabs,Tab1,Tab2}

 }
 </script>
 <style scoped>
 .框{background-color:aliceblue}
 .蓝条{background-color: rgb(0, 153, 255);height:2px;}
 hr{outline:none;padding:none;margin:0px;width:100%;}
 </style>