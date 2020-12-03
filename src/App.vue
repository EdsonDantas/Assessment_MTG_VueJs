<template>
  <b-container class="principal">
    <Menu/>
    <router-view />
  </b-container>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import Menu from './components/Menu.vue'



export default {
  name: 'App',
  components: {
    Menu}
}
</script>

<style>
.principal {
  background-image: url('./assets/wallpaper.jpg');
  width:100%;
  
}
</style>
