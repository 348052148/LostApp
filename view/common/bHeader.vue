<template>

    <div class="header"  >
        <mt-header :title="title">
        <router-link to="" @click.native="back" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
    </div>

</template>

<script>

    export default {
        name: 'app',
        props:[
            'title'
        ],
        data:function(){
          return {

          };
        },
        methods:{
            back(){
                return  this.$router.go(-1);
            }
        }
    }

</script>

<style>
    .header .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
</style>