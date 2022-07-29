<template>
  <div class="crew">
    <div>
        <crew-nav/>
    </div>

    <div class="crew__flex">
        <div>
            <h2>PILOT</h2>
            <h1>VICTOR GLOVER</h1>
            <p>Pilot on the first operational flight of the SpaceX Crew  <br>
            Dragon to the International Space Station. Glover is a<br>
            commander in the U.S. Navy where he pilots an F/A-18.He<br>
            was a crew member of Expedition 64, and served as a <br>
            station systems flight engineer.
            </p>

            <div class="crew__flex--defile">
                <crew-defile/>
            </div>
        </div>

        <div>
            <img src="../assets/Crew/image-victor-glover.webp" alt="">
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
                margin-top: 10em;
            }
        }
    }
</style>