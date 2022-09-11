<template>
  <div class="home">
    <div class="home__image">
      <img src="../assets/Home/logo.svg" alt="">
    </div>

    <nav class="home__nav" :class="bool && 'active'">
      <router-link to="/" class="a"><b>00 </b> HOME</router-link>
      <router-link to="/destination/moon" class="a"><b>01 </b> DESTINATION</router-link>
      <router-link to="/crew/douglas" class="a"><b>02 </b> CREW</router-link>
      <router-link to="/technology/launch" class="a"><b>03 </b> TECHNOLOGY</router-link>
    </nav>

    <div class="home__menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" @click="bool = !bool"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
      <h2 v-text="bool"></h2>
    </div>


  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  setup(){ 

    const bool = ref(false)

    let suck = reactive({ 
      cliquer: true,
    })


   let menu = { 
    cliquer: false,
   }

   const clock = () => { 
      let koro = bool.value
      console.log(koro)
      
      console.log("Amour")
   }


   console.log(bool.value)

   return{ 
    menu,
    clock,
    suck,
    bool
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
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    height: 8%;
    padding: 0 2em;
    margin: 0 1em;
    box-shadow: -1px 0px 4px 1px rgba(255, 255, 255, 0.59);
    -webkit-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);
    -moz-box-shadow: -1px 0px 4px 1px rgba(255,255,255,0.59);

    @media screen and (max-width : 768px) {
      height: 4%;
      padding: 0 1em;
      margin: 0 1em;
    }

    @media screen and (max-width : 380px) {
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 10%;
      height: 100vh;
      width: 40%;
      z-index: 1;
      opacity: 0;
      //display: block;
      //display: block;
      /*height: 4%;
      padding: 0 1em;
      margin: 0 1em;*/
    }

   

    a{ 
      padding: 1em;
      text-decoration: none;
      color: #fff;
      font-family: 'Barlow Condensed', sans-serif;

      @media screen and (max-width : 380px) {
        display: block;
      }

      &.router-link-exact-active{ 
      border-bottom: 3px solid #fff;
    }

      &:hover{ 
        transition: 0.5s ease-in-out;
      }

    }
  }

  &__menu{ 
    //margin:  2em;
    cursor: pointer;
    height: 3.5vh;

    @media screen and (max-width : 1600px) {
      display: none;
    }

    @media screen and (max-width : 768px) {
      display: none;
    }

    @media screen and (max-width : 380px) {
      display: block;
    }
  }

  }

  .active{ 
    opacity: 1;
    display: block;
    //color: red;
  }
  
</style>