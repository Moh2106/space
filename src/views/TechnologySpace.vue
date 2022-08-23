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

            <div>
                <h2>THE TERMINOLOGY... <br>
                SPACEPORT</h2>
                <br><br>

                <p>A spaceport or cosmodrome is a site for launching (or <br>
                receiving) spacecraft, by analogy to the seaport for ships<br>
                or airport for aircraft. Based in the famous Cape<br>
                Canaveral, our spaceport is ideally situated to take<br>
                advantage of the Earth’s rotation for launch.

                </p>
        
            </div>

        </div>
        
        <div>
            <img src="../assets/Technology/image-spaceport-portrait.jpg" alt="">
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