<template>
  <div class="home">

    <div class="home__nav">
        <nav-bar/>
    </div>

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
        <img src="../assets/Home/explore.png" alt="">
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

<style lang="scss" scoped>
  .home{ 
    background: url('../assets/Home/background-home-desktop.jpg');
    height: 100vh;

    @media screen and (max-width: 780px) {
      background: url('../assets/Home/background-home-tablet.jpg');
      margin: 0 auto;
    }


    &__nav{ 
      height: 0vh;
    }

    &__description{
      display: flex;
      justify-content: space-around;
      color: #fff;
      height: 50%;
      width: 80%;
      margin: 0 auto;
      transform: translateY(10em);

      @media screen and (max-width: 780px) {
        display: block;
        height: 70%;
        margin: 0 auto;
        text-align: center;
      }

      div{ 
        margin: 0 auto;
        align-content: center;

        h1{ 
          font-size: 4em;
          font-weight: 500;
        }

        h2{ 
          font-weight: 100;
        }

        h1,h2{ 
          font-family: 'Bellefair', serif;
          color: #fff;
        }

        img{ 
          transform: translateY(7em);
        }

      }

    }

    
  }
</style>
