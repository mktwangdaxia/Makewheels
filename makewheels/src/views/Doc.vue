<template>
   <ul class="表单">
    <ol>组件列表</ol>
    <ol><router-link to="/Switch">Switch组件</router-link></ol>
    <ol><router-link to="/Button">Button组件</router-link></ol>
    <ol><router-link to="/Dialog">Dialog组件</router-link></ol>
    <ol><router-link to="/Tabs">Tabs组件</router-link></ol>
  </ul>
  <router-view/>
  <router-link to="/">返回界面</router-link>

</template>
<script lang="ts">
export default {
    
}
</script>
