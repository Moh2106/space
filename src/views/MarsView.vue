<template>
  <div class="moon">
    <div>
        <destination-moon/>
    </div>

    <div class="moon__flex">
        <div>
            <img src="../assets/Destination/image-moon.png" alt="">
        </div>
        
        <div>
            <h1>MOON</h1>
            <p>Don't forget to pack your hiking boots. You'll need them <br> 
            to tackle Olympus Mons, the tallest planetary mountain in <br>
            our solar system. It's two and a half times the size of <br>
            Everest</p>
        </div>
    </div>
  </div>
</template>

<script>
import DestinationMoon from '@/components/DestinationMoon.vue'
export default {
  components: { DestinationMoon },

}
</script>

<style lang="scss">
    .moon{ 
        background: url('../assets/Destination/background-destination-desktop.jpg');
        color: #fff;
        height: 100vh;

        &__flex{ 
            display: flex;
            justify-content: space-around;
            transform: translateY(5em);
        }
    }
</style>