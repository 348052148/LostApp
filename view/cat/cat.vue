<template>
    <div>
    <div class="cat"  >
        <mt-header title="分类">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>

        <div class="content">
            <router-link to="/list" >
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>手机</span>
            </div>
            </router-link>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>钱包</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>交通工具</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>照片</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>手机</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>钱包</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>交通工具</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>照片</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>手机</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>钱包</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>交通工具</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>照片</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>手机</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>钱包</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>交通工具</span>
            </div>
            <div class="item">
                <img width="80" height="80" src="../../assets/nav-icon-msg.png" />
                <span>照片</span>
            </div>
        </div>
    </div>

    <bBannar selected="tab2" />
    </div>

</template>

<script>
    import bBannar  from '../common/bBannar.vue';
    export default {
         components:{
            bBannar  
        },
        name: 'cat',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    .mint-header{
        height:2.875rem;
    }
    .cat .content{
        width:100%;
        height:100%;
        display:inline-block;
        padding:0 1.25rem;

    }
    .cat .content .item {
        display:inline-block;
        width:21%;
        margin-top:1.25rem;
    }
    .cat .content .item img{
        width:3.4375rem;
        height:3.4375rem;
        text-align:center;
        display:inline-block;
        margin-left:0.9375rem;
    }
    .cat .content .item span{
         display:inline-block;
         margin-top:10px;
         width:100%;
         font-size:14px;
         text-align:center;
    }
</style>