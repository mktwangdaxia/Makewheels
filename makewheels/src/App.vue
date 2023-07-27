<template>
  <router-view/>
   </template>

<script lang="ts">
import Switch from "./components/Switch.vue"   
import Button from "./components/button.vue"
import Dialog from "./components/Dialog.vue"
import Tabs from "./components/Tabs.vue"
export default {
 components:{Switch,Button,Dialog,Tabs}
}
</script>
<style>
body{margin:0px}
.表单{width:130px;padding:0px;margin-top: 0px;}
ol{ height:37px;background-color: rgb(193, 147, 235);border:2px solid rgba(209, 34, 84, 0.589);padding:0px;}
</style>

