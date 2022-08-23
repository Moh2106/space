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
                <span></span> <br>
            founder of Prodea Systems. Ansari was the fourth self-
                <span></span> <br>
            funded space tourist, the first self-funded woman to fly
                <span></span> <br>
            to the ISS, and the first Iranian in space.</p>

            <div class="crew__flex--defile">
                <crew-defile/>
            </div>
        </div>

        <div class="crew__flex--image">
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

        &__flex{ 
            display: flex;
            justify-content: space-around;
            text-align: justify;

            @media screen and (max-width : 768px) {
                background: url('../assets/Crew/background-crew-tablet.jpg');
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            &--defile{
                position: fixed;
                bottom: 10%;
                left: 15%;

                @media screen and (max-width : 768px){
                    position: relative;
                    top: 45%;
                    left: 30%;
                }
            }

            h2, h1{ 
                font-family: 'Bellefair', serif;
                color: #fff;
            }

            &--image{ 
                @media screen and (max-width : 768px) { 
                    margin-top: 2em;
                }
            }
        }
    }
</style>