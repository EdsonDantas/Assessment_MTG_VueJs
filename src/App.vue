<template>
  <b-container >
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

</style>
