<template>
  <div class="destination">
    <router-link to="/destination/moon" class="destination__a">MOON</router-link>
    <router-link to="/destination/mars" class="destination__a">MARS</router-link>
    <router-link to="/destination/europa" class="destination__a">EUROPA</router-link>
    <router-link to="/destination/titan" class="destination__a">TITAN</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .destination{ 

        a{ 
            color: #fff;
            text-decoration: none;
            padding: 0.5em;

          &.router-link-exact-active{ 
            border-bottom: 3px solid #fff;
          }
        }

    }
</style>