<template>
    <div class="tab2">
{{ title }}
    </div>
</template>
<script lang="ts">
export default {
    props:{title:{type:String}}
    
}
</script>
<style>
.tab2{display: inline-block;}
.tab2:hover{color:rgb(35, 127, 212)}
</style>