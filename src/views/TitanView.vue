<template>
  <div class="moon">
    <div>
        <destination-moon/>
    </div>

    <div class="moon__width">
        <div class="moon__flex">
            <div>
                <img src="../assets/Destination/image-titan.webp" alt="">
            </div>
        
            <div class="moon__text">
                <destination-bar />
                <h1>TITAN</h1>
                <p>The only moon known to have a dense atmosphere other <br> 
                than Earth. Titan is a home away from home (just a few <br>
                hundred degrees colder!). As a bonus, you get striking<br>
                views of the Rings of Saturn.</p>

                <br><br>
                <hr>

                <div class="moon__text--footer">
                    <div>
                        <h3>AVG. DISTANCE</h3>
                        <h3>1.6 BIL. KM</h3>
                    </div>

                    <div>
                        <h3>EST TRAVEL TIME</h3>
                        <h3>7 YEARS</h3>
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
        }

        &__text{

            &--footer{ 
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>