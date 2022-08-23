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

        <div class="crew__flex--image">
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