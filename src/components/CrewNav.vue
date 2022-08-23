<template>
  <div>
    <nav-bar/>
    
    <h2>02 MEET YOUR CREW</h2>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style lang="scss" scoped>

    h2{ 
        text-align: left;
        margin: 2em 0 2em 6em;
        font-weight: 10;
        font-family: 'Barlow Condensed', sans-serif;

        @media screen and (max-width : 768px) {
          margin: 2em;
        }
    }
</style>