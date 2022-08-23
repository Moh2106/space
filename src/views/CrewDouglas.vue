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

        <div class="crew__flex--image">
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