<template>
  <div>
    <nav>
        <router-link to="/technology/launch" class="a" :class="{active}" >1</router-link>
        <router-link to="/technology/spaceport" class="a">2</router-link>
        <router-link to="/technology/capsule" class="a">3</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    setup(){ 
        const active = () => { 
            
        }

        return{ 
            active,
        }
            
        }
}
</script>

<style lang="scss" scoped>
    nav{ 
        display: flex;
        flex-direction: column;

        .a{ 
            text-decoration: none;
            color: #fff;
            width: 3em;
            height: 3em;
            margin: 0 auto;
            padding: 1em;
            margin: 1em;
            border: 1px solid #fff;
            border-radius: 50%;

            &:hover{ 
                background: #fff;
                color: #0B0D17;
            }
        }

        .active{ 
            background: #fff;
            color: #0B0D17;
        }
    }
</style>