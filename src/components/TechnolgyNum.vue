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
        margin-right: 4em;

        @media screen and (max-width: 768px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 0;
        }

        a{ 
            text-decoration: none;
            color: #fff;
            width: 2em;
            height: 2em;
            margin: 0 auto;
            padding: 1em;
            margin: 1em;
            border: 1px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 800;

            @media screen and (max-width: 768px) {
                width: 2em;
                height: 2em;
            }

            &.router-link-exact-active{ 
                background: #fff;
                color: #0B0D17;
            }
        }

    }
</style>