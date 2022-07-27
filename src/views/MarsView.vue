<template>
  <div class="moon">
    <div>
        <destination-moon/>
    </div>

    <div class="moon__width">
        <div class="moon__flex">
            <div>
                <img src="../assets/Destination/image-moon.png" alt="">
            </div>
        
            <div class="moon__text">
                <destination-bar />
                <h1>MOON</h1>
                <p>See our planet as you've never seen it before. A perfect <br> 
                    relaxing trip away to help regain perpective and come <br>
                    back refreshed. While you're there, take in some history <br>
                    by visiting the Luna 2 and Appolo 11 landing sites.</p>

                <br><br>
                <hr>

                <div class="moon__text--footer">
                    <div>
                        <h3>AVG. DISTANCE</h3>
                        <h3>384.400 KM</h3>
                    </div>

                    <div>
                        <h3>EST TRAVEL TIME</h3>
                        <h3>3 DAYS</h3>
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
        width: 100wh;

        &__width{ 
            width: 80%;
            margin: 0 auto;
            border: 2px solid #fff;
        }

        &__flex{ 
            display: flex;
            justify-content: space-around;
        }

        &__text{ 

            &--footer{ 
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>