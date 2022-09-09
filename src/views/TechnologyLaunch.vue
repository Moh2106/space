<template>
  <div class="launch">
    <div>
        <technology-bar/>
    </div>

    <div class="launch__arrange">
        <div class="launch__arrange--num">
            <div>
                <technolgy-num/>
            </div>

            <div class="launch__arrange--paragraph">
                <h2>THE TERMINOLOGY... <br>
                LAUNCH VEHICULE</h2>

                <p>A launch vehicule or carrier rocket-propelled <br>
                    vehicle used to carry a payload from Earth's surface to <br>
                    space, usually to Earth orbit or beyond. Our WEB-X <br>
                    carrier rocket is the most powerful in operation. <br>
                    Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!

                    </p>
            </div>
        </div>


        <div>
            <div class="launch__arrange--img1">
                <img src="../assets/Technology/image-launch-vehicle-portrait.jpg" alt="">
            </div>

            <div class="launch__arrange--img2">
                <img src="../assets/Technology/image-launch-vehicle-landscape.jpg" alt="">
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
    .launch{ 
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