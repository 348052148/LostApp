<template>

    <div  >
        <router-view/>
    </div>

</template>

<script>

    export default {
        name: 'app',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>

</style>