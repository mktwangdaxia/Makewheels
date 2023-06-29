<template>
  <div>hi<router-link to="/">1</router-link>|<router-link to="/xxx">2</router-link></div><hr/>
<router-view />
</template>

<script>
import {ref,provide} from 'vue'
import {router} from './router'
export default {
  name: 'App',
  setup(){
    const width =document.documentElement.clientWidth
    const menuVisible=ref(width<=500?false:true)
    provide('xxx',menuVisible)
    router.afterEach(()=>{if(width<=500){menuVisible.value=false;}})
  }
}
</script>
