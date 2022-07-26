<template>
  <div class="home">
    <nav-bar/>

    <div class="home__description">
      <div>
        <h2>SO, YOU WANT TO TRAVEL TO</h2>
        <h1>SPACE</h1>
        <p>Let's face it; if you want to go space, you might as well <br>
        genuinely go to outer space and not hover kind of on the <br>
        edge of it. Well sit back, and relax because we'll give you <br>
        a truly out of this world experience!</p>
      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  components:{ NavBar},
 
}
</script>

<style lang="scss">
  .home{ 
    background: url('../assets/Home/background-home-desktop.jpg');
    //transform: translateY(-0.5em);
    height: 97vh;

    &__description{ 
      color: #fff;
    }
  }
</style>
