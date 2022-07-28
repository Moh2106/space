<template>
  <div class="moon">
        <div>
            <destination-moon/>
        </div>

        <div class="moon__width">
            <div class="moon__flex">
                <div>
                    <img src="../assets/Destination/image-mars.png" alt="">
                </div>
                
                <div class="moon__text">
                    <destination-bar />
                    <h1>MARS</h1>
                    <p>Don't forget to pack your hiking boots. You'll need them <br> 
                    to tackle Olympus Mons, the tallest planetary mountain in <br>
                    our solar system. It's two and a half times the size of <br>
                    Everest</p>
                    <br><br>
                    <hr>

                    <div class="moon__text--footer">
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <h3>225 MIL. KM</h3>
                        </div>

                        <div>
                            <h3>EST TRAVEL TIME</h3>
                            <h3>9 MONTHS</h3>
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
            //border: 2px solid #fff;
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