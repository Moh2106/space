<template>
  <div class="home">
    <div class="home__image">
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
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    height: 8%;
    padding: 0 2em;
    margin: 0 1em;
    box-shadow: -1px 0px 4px 1px rgba(255, 255, 255, 0.59);
    -webkit-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);
    -moz-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);

    @media screen and (max-width : 780px) {
      height: 4%;
      padding: 0 1em;
      margin: 0 1em;
    }

    a{ 
      padding: 1em;
      text-decoration: none;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;

      &.router-link-exact-active{ 
      border-bottom: 3px solid #fff;
    }

      &:hover{ 
        transition: 0.5s ease-in-out;
      }

    }
  }

  }
  
</style>