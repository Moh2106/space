<template>
  <div>
    <nav-bar/>

    <h1> <span>01</span> PICK YOUR DESTINATION</h1>

  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style lang="scss" scoped>
  h1{ 
    margin-left: 7em;

    @media screen and (max-width : 768px) {
      text-align: center;
      margin: 0;
    }

    span{ 
      font-weight: 100;
    }
  }


</style>