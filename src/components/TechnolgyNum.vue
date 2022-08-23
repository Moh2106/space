<template>
  <div>
    <nav>
        <router-link to="/technology/launch">1</router-link>
        <router-link to="/technology/spaceport">2</router-link>
        <router-link to="/technology/capsule">3</router-link>
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
    nav{ 
        display: flex;
        flex-direction: column;

        a{ 
            text-decoration: none;
            color: #fff;
            width: 3em;
            height: 3em;
            margin: 0 auto;
            padding: 1em;
            margin: 1em;
            border: 1px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 800;

            &.router-link-exact-active{ 
                background: #fff;
                color: #0B0D17;
            }
        }

    }
</style>