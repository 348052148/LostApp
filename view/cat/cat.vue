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
                <img src="../../assets/class-phone.png" />
                <span>手机</span>
            </div>
            </router-link>
            <div class="item">
                <img src="../../assets/class-wallet.png" />
                <span>钱包</span>
            </div>
            <div class="item">
                <img src="../../assets/class-traff.png" />
                <span>交通工具</span>
            </div>
            <div class="item">
                <img src="../../assets/class-bag.png" />
                <span>背包/提包</span>
            </div>
            <div class="item">
                <img src="../../assets/class-jewelry.png" />
                <span>首饰</span>
            </div>
            <div class="item">
                <img src="../../assets/class-animal.png" />
                <span>宠物</span>
            </div>
            <div class="item">

                <span>数码产品</span>
            </div>
            <div class="item">

                <span>证件</span>
            </div>
            <div class="item">

                <span>钥匙串</span>
            </div>
            <div class="item">

                <span>书籍</span>
            </div>
            <div class="item">

                <span>衣物</span>
            </div>
            <div class="item">

                <span>生活用品</span>
            </div>
            <div class="item">

                <span>人</span>
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
    *{padding:0;margin:0;}
    .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
     .cat{
         overflow: hidden;
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
        text-align:center;
        display:inline-block;
        margin-left:0.9375rem;
        margin-left: 1.3rem;
        vertical-align: middle;
    }
    .cat .content .item span{
         display:inline-block;
         margin-top:0.625rem;
         width:100%;
         font-size:0.875rem;
         text-align:center;
    }
</style>