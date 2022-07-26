<template>
  <div>
    <nav-bar/>

    <h1>01 PICK YOUR DESTINATION</h1>

    <destination-bar />
  </div>
</template>

<script>
import DestinationBar from './DestinationBar.vue'
import NavBar from './NavBar.vue'
export default {
  components: { NavBar, DestinationBar },

}
</script>

<style lang="scss">



</style>