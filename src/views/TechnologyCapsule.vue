<template>
  <div class="capsule">
    <div>
        <technology-bar/>
    </div>

    <div class="capsule__arrange">
        <div class="capsule__arrange--num">
            <div >
                <technolgy-num/>
            </div>

            <div class="capsule__arrange--paragraph">
                <h2> <span class=" text-red-600">THE TERMINOLOGY...</span>  <br>
                SPACE CAPSULE</h2>
                

                <p>A space capsule is an often-crewed spacecraft that uses<br>
                a blunt-body reentry capsule to reenter the Earth's<br>
                atmosphere without wings. Our capsule is where you'll<br>
                spend your time during the flight. It includes a space<br>
                gym, cinema, and plenty of other activities to keep you entertained.

                </p> 
        
            </div>

        </div>
        
        <div>
            <div class="capsule__arrange--img1">
                <img src="../assets/Technology/image-space-capsule-portrait.jpg" alt="">
            </div>

            <div class="capsule__arrange--img2">
                <img src="../assets/Technology/image-space-capsule-landscape.jpg" alt="">
            </div>

        </div>
    </div>

  </div>
</template>

<script>
import TechnologyBar from '@/components/TechnologyBar.vue'
import TechnolgyNum from '@/components/TechnolgyNum.vue'
import { ref } from '@vue/reactivity'

export default {
    components: { TechnologyBar, TechnolgyNum },

    setup(){ 
        let large = ref()
        large = window.innerWidth
        const largeur = window.innerWidth 

        return { 
            large,
            largeur
        }
    }
}
</script>

<style lang="scss" scoped>
    .capsule{
        background: url('../assets/Technology/background-technology-desktop.jpg');
        color: #fff;
        height: 100vh;

        @media screen and (max-width: 768px) {
            background: url('../assets/Technology/background-technology-tablet.jpg');
        }

        &__arrange{
            display: flex;
            justify-content: space-around;

            @media screen and (max-width: 768px) {
                flex-direction: column-reverse;
            }

            &--num{ 
                display: flex;
                justify-content: space-between;

                @media screen and (max-width: 768px) {
                    display: block;
                }
            }

            &--paragraph{ 

                h2{ 
                    font-family: 'Bellefair', serif;
                    font-weight: 300;
                    margin-bottom: 2em;

                    span{ 
                        font-weight: 100;
                    }
                }

                @media screen and (max-width: 768px) {
                    text-align: center;
                }
            }

            &--img1{ 
                @media screen and (max-width: 768px) {
                    display: none;
                }
            }

            &--img2{ 
                display: none;

                @media screen and (max-width: 768px) {
                    display: block;
                    margin-bottom: 1em;
                    width: 100%;
                }
            }


        }
    }

</style>