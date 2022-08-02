<template>
  <div class="home">
    <div>
      <img src="../assets/Home/logo.svg" alt="">
    </div>

    <nav class="home__nav">
      <router-link to="/" class="a"><b>00 </b> HOME</router-link>
      <router-link to="/destination/moon" class="a"><b>01 </b> DESTINATION</router-link>
      <router-link to="/crew/douglas" class="a"><b>02 </b> CREW</router-link>
      <router-link to="/technology/launch" class="a"><b>03 </b> TECHNOLOGY</router-link>
    </nav>

  </div>
</template>

<script>
export default {
  setup(){ 
    const hoz = { 
      home: true,
      destination: null,
      crew: null,
      tecnology: null,
    }

    /*const kiri = () => { 
      hoz.home === true,
    }*/


    return{ 
      hoz,
    }
  }
}
</script>

<style lang="scss" scoped>

  .home{ 
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0;

    &__nav{
    display: flex;
    //background: red;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    //border: 1px solid #fff;
    height: 10%;
    padding: 0 2em;
    margin: 0 1em;
    box-shadow: -1px 0px 4px 1px rgba(255, 255, 255, 0.59);
-webkit-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);
-moz-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);

    .a{ 
      padding: 1em;
      text-decoration: none;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;

      /*&:focus{ 
        border-bottom: 1px solid #fff;
        background: #cfd;
      }*/

      &:active{ 
        border-bottom: 1px solid #fff;
        background: #cfd;
      }
    }
  }

  .b{
    border-bottom: 1px solid #fff;
  }
  }
  
</style>