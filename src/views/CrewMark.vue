<template>
  <div class="crew">
    <div>
        <crew-nav/>
    </div>

    <div class="crew__flex">
        <div>
            <h2>MISSION SPECIALIST</h2>
            <h1>MARK SHUTTLEWORTH</h1>
            <p>Mark Richard Shuttleworth is the founder and CEO of  <br>
            Canonical, the company behind the Linux-based Ubuntu <br>
            operating system. Shuttleworth became the first South<br>
            African to travel to space as a space tourist.</p>

            <div class="crew__flex--defile">
                <crew-defile/>
            </div>
        </div>

        <div class="crew__flex--image">
            <img src="../assets/Crew/image-mark-shuttleworth.webp" alt="">
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
            //transform: translateX(-2em);

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