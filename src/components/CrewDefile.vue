<template>
  <div>
    <nav class="all">

        <router-link to="/crew/douglas" class="all__pad">
            <div class="a"></div>
        </router-link>

        <router-link to="/crew/mark" class="all__pad">
            <div class="a"></div>
        </router-link>

        <router-link to="/crew/victor" class="all__pad">
            <div class="a"></div>
        </router-link>

        <router-link to="/crew/ansari" class="all__pad">
            <div class="a"></div>
        </router-link>

    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .all{
        //border: 1px solid #fff;
        display: flex;

        &__pad{ 
            padding: 1em;
        }

        .a{ 
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border-color: #fff;
        background: #fff;
    }
    }
    
</style>