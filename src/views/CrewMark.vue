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

        <div>
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