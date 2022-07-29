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

            <div>
                <h2>THE TERMINOLOGY... <br>
                SPACE CAPSULE</h2>
                <br><br>

                <p>A space capsule is an often-crewed spacecraft that uses<br>
                a blunt-body reentry capsule to reenter the Earth's<br>
                atmosphere without wings. Our capsule is where you'll<br>
                spend your time during the flight. It includes a space<br>
                gym, cinema, and plenty of other activities to keep you entertained.

                </p> 
        
            </div>

        </div>
        
        <div>
            <img src="../assets/Technology/image-space-capsule-portrait.jpg" alt="">
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
    .capsule{
        background: url('../assets/Technology/background-technology-desktop.jpg');
        color: #fff;
        height: 100vh;

        &__arrange{
            display: flex;
            justify-content: space-between;

            &--num{ 
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>