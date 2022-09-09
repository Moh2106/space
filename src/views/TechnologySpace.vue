<template>
  <div class="space">
    <div>
        <technology-bar/>
    </div>

    <div class="space__arrange">
        <div class="space__arrange--num">
            <div >
                <technolgy-num/>
            </div>

            <div class="space__arrange--paragraph">
                <h2>THE TERMINOLOGY... <br>
                SPACEPORT</h2>

                <p>A spaceport or cosmodrome is a site for launching (or <br>
                receiving) spacecraft, by analogy to the seaport for ships<br>
                or airport for aircraft. Based in the famous Cape<br>
                Canaveral, our spaceport is ideally situated to take<br>
                advantage of the Earth’s rotation for launch.

                </p>
        
            </div>

        </div>
        
        <div>
            <div class="space__arrange--img1">
                <img src="../assets/Technology/image-spaceport-portrait.jpg" alt="">
            </div>

            <div class="space__arrange--img2">
                <img src="../assets/Technology/image-spaceport-landscape.jpg" alt="">
            </div>
            
        </div>
    </div>

  </div>
</template>

<script>
import TechnologyBar from '@/components/TechnologyBar.vue'
import TechnolgyNum from '@/components/TechnolgyNum.vue'
export default {
    components: { TechnologyBar, TechnolgyNum },
}
</script>

<style lang="scss" scoped>
    .space{ 
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
                }
            }
        }
    }
</style>