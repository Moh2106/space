<template>
  <div class="home">
    <div>
      <img src="../assets/Home/logo.svg" alt="">
    </div>

    <nav>
      <router-link to="/" class="a"><b>00 </b> HOME</router-link>
      <router-link to="/destination/moon" class="a"><b>01 </b> DESTINATION</router-link>
      <router-link to="/" class="a"><b>02 </b> CREW</router-link>
      <router-link to="/technology/launch" class="a"><b>03 </b> TECHNOLOGY</router-link>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .home{ 
    display: flex;
    justify-content: space-between;
    border: 1px solid #fff;

    nav{
    display: flex;
    //justify-content: flex-end;

    .a{ 
      padding: 1em;
      text-decoration: none;
      color: #fff;
    }
  }
  }
  
</style>