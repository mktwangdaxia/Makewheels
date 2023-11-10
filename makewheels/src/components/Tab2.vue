<template>
    <div class="tab2" v-show="i">
<slot></slot>
    </div>
   
</template>
<script lang="ts">

export default {
 props:{i:{type:Boolean}}
}


</script>
<style>

.tab2{background-color: rgb(247, 230, 207); height:70px;width:40vw;}

</style>