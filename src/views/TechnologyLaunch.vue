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

            <div>
                <h2>THE TERMINOLOGY... <br>
                LAUNCH VEHICULE</h2>
                <br><br>

                <p>A launch vehicule or carrier rocket-propelled <br>
                    vehicle used to carry a payload from Earth's surface to <br>
                    space, usually to Earth orbit or beyond. Our WEB-X <br>
                    carrier rocket is the most powerful in operation. <br>
                    Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!

                    </p>
            </div>
        </div>


        <div>
            <img src="../assets/Technology/image-launch-vehicle-portrait.jpg" alt="">
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

        &__arrange{
            display: flex;
            justify-content: space-around;

            &--num{ 
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>