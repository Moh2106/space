<template>
  <div class="crew">
    <div>
        <crew-nav/>
    </div>

    <div class="crew__flex">
        <div>
            <h2>COMMANDER</h2>
            <h1>DOUGLAS HURLEY</h1>
            <p>Douglas Gerald Hurley is an American engineer, former <br>
            Marine Corps pilot and former NASA astronaut. He <br>
            launched into space for the third time as commander of <br>
            Crew Dragon Demo-2.</p>

            <div class="crew__flex--defile">
                <crew-defile/>
            </div>
        </div>

        <div>
            <img src="../assets/Crew/image-douglas-hurley.webp" alt="">
        </div>
    </div>

  </div>
</template>

<script>
import CrewNav from '@/components/CrewNav.vue'
import CrewDefile from '@/components/CrewDefile.vue'
export default {
  components: { CrewNav, CrewDefile },

}
</script>

<style lang="scss" scoped>
    .crew{ 
        background: url('../assets/Crew/background-crew-desktop.jpg');
        //height: 100vh;

        &__flex{ 
            display: flex;
            justify-content: space-around;

            &--defile{
                position: fixed;
                bottom: 10%;
                left: 15%;
                //margin-top: 10em;
            }
        }
    }
</style>