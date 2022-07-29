<template>
  <div>
    <nav>
        <router-link to="/technology/launch" class="a " @click="act.active === 'launch'" :class="{active:act.active === 'launch'}">1</router-link>
        <router-link to="/technology/spaceport" class="a" @click="act.acti === 'space' " :class="{active:act.acti === 'space'}">2</router-link>
        <router-link to="/technology/capsule" class="a" @click="(act.launch == false) && (act.space == false) && (act.capsule == true)" :active-class="{active: act.capsule}">3</router-link>
    </nav>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){ 
        const act = ref({
            //active : 'launch',
            //acti : 'space',
            launch: true,
            space: false,
            capsule: true,
        })


        return{
            act,
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