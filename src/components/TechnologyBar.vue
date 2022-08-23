<template>
  <div>
    <nav-bar/>
    <h1>03 SPACE LAUNCH 101</h1>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style lang="scss" scoped>
  div{ 
    h1{ 
      transform: translateX(4em);
      margin-bottom: 2em;
    }
  }
</style>