<template>
  <div class="crew">
    <div>
        <crew-nav/>
    </div>

    <div class="crew__flex">
        <div>
            <h2>FLIGHT ENGINEER</h2>
            <h1>ANOUSHEH ANSARI</h1>
            <p>Anousheh Ansari is an Iranian American engineer and co-
                <br>
            founder of Prodea Systems. Ansari was the fourth self-
                <br>
            funded space tourist, the first self-funded woman to fly
            <br>
            to the ISS, and the first Iranian in space.</p>

            <div class="crew__flex--defile">
                <crew-defile/>
            </div>

        </div>

        <div>
            <img src="../assets/Crew/image-anousheh-ansari.webp" alt="">
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