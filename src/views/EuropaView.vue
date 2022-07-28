<template>
  <div class="moon">
    <div>
        <destination-moon/>
    </div>

    <div class="moon__width">
        <div class="moon__flex">
            <div>
                <img src="../assets/Destination/image-europa.webp" alt="">
            </div>
        
            <div class="moon__text">
                <destination-bar />
                <h1>EUROPA</h1>
                <p>The smallest of the four Galilean moons orbiting Jupiter, <br> 
                Europa is a winter lover's dream. With an icy surface, it's <br>
                perfect for a bit of ice skating, curling, hockey, or simple <br>
                relaxation in your snug wintery cabin.</p>

                <br><br>
                <hr>

                <div class="moon__text--footer">
                    <div>
                        <h3>AVG. DISTANCE</h3>
                        <h3>628 MIL. KM</h3>
                    </div>

                    <div>
                        <h3>EST TRAVEL TIME</h3>
                        <h3>3 YEARS</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import DestinationMoon from '@/components/DestinationMoon.vue'
import DestinationBar from '@/components/DestinationBar.vue'
export default {
  components: { DestinationMoon, DestinationBar },

}
</script>

<style lang="scss" scoped>
    .moon{ 
        background: url('../assets/Destination/background-destination-desktop.jpg');
        color: #fff;
        height: 100vh;

        &__width{ 
            width: 80%;
            margin: 0 auto;
            //border: 2px solid #fff;
        }

        &__flex{ 
            display: flex;
            justify-content: space-around;
            //transform: translateY(5em);
        }

        &__text{

            &--footer{ 
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>