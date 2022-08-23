<template>
  <!--<nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Barlow', sans-serif;
}

p{  
    color: #D0D6F9;
    size: 18px;
    line-height: 32px;
    }

/*nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>