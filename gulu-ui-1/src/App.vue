<template>
  <div>hi<router-link to="/">1</router-link>|<router-link to="/xxx">2</router-link></div><hr/>
<router-view />
</template>

<script>
import {ref,provide} from 'vue'

export default {
  name: 'App',
  setup(){
    const menuVisible=ref(false)
    provide('xxx',menuVisible)
  }
}
</script>
