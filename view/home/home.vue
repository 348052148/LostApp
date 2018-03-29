<template>
    <div>
    <div class="home">
        <div class="swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item  >
                    <img src="../../assets/b1.jpg" />
                </mt-swipe-item>
                <mt-swipe-item  >
                    <img src="../../assets/b2.jpg" />
                </mt-swipe-item>
                <mt-swipe-item  >
                    <img src="../../assets/b3.jpg" />
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">寻物启事</mt-tab-item>
            <mt-tab-item id="2">招领启事</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" v-infinite-scroll="loadMore"
  :infinite-scroll-disabled="loading"
  :infinite-scroll-distance="10" >
        <mt-tab-container-item id="1" >
            <router-link to="/detail" >
            <div class="pingli" v-for="n in list"  >

                <div class ="header"> 
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="40" height="40" />

                    <div class='account' >
                        <span class="name" >丢丢君</span><span class="time" >1小时前</span>
                    </div>

                    <div class="type">
                        <mt-badge size="small" color="#888" >交通工具</mt-badge>
                    </div>
                </div>

                <div class="content"> 本人丢失一张公交卡，在两路口轻轨站人丢失一张公交卡 在两路口轻轨站人丢失一张公交卡 在两路口轻轨站人丢失一张公交卡 在两路口轻轨站人丢失一张公交卡 </div>
                <div class="images" > 
                    <img width="80" height="80" src="../../assets/b1.jpg">
                </div>

                <div class='meta'><img height="14" src="../../assets/icon-map1.png" />枇杷山正解84号 <span>浏览20次</span></div>
            </div>
            </router-link>
        </mt-tab-container-item>
        <mt-tab-container-item id="2" >
           <div class="pingli" v-for="n in list"  >

                <div class ="header"> 
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="40" height="40" />

                    <div class='account' >
                        <span class="name" >丢丢君</span><span class="time" >1小时前</span>
                    </div>

                    <div class="type">
                        <mt-badge size="small" color="#888" >交通工具</mt-badge>
                    </div>
                </div>

                <div class="content"> 本人丢失一张公交卡，在两路口轻轨站人丢失一张公交卡 </div>
                <div class="images" > 
                    <img width="80" height="80" src="../../assets/b1.jpg">
                </div>

                <div class='meta'>枇杷山正解84号 <span>浏览20次</span></div>
            </div>
        </mt-tab-container-item>
        </mt-tab-container>
    </div>
    <bBannar selected='tab1' />
   
    </div>
</template>

<script>
    import bBannar  from '../common/bBannar.vue';
    export default {
        components:{
            bBannar  
        },
        name: 'home',
        data:function(){
          return {
              searchVal:'123',
              selected: '1',
              loading:true,
              list:[1,2,3,4]
          };
        },
        methods:{
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 4; i++) {
                    this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2500);
            },
            loadBottom(){
                console.log('123');
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 4; i++) {
                    this.list.push(last + i);
                    }
                }, 2500);
            }
        }
    }

</script>

<style>
    .home{
        background:#EEE;
        margin-bottom:5rem;
    }
    .swipe {
        height:12.5rem;
    
    }
    .mint-tab-container {
    }
    .mint-tab-container-wrap {
        margin-top:0.18rem;
    }
    .pingli {
        display:inline-block;
        height:auto;
        width:100%;
        background-color:#FFF;
        margin-bottom:0.18rem;
        padding:0.3125rem;
    }
    .pingli img{
        display:inline-block;
    }

    .pingli .header{
        width:100%;
        height:0.16rem;
        display:inline-block;
    }
    .pingli .header .account{
        width:100px;
        height:40px;
        display:inline-block;
    }
    .pingli .header .account .name{
        color:black;
        width:6.25rem;
        height:1.25rem;
        font-size:1rem;
        display:inline-block;
    }
    .pingli .header .account .time{
        width:6.25rem;
        height:1.25rem;
        font-size:0.2rem;
        color:#ccc;
        display:inline-block;
    }

    .pingli .header .type{
        width:4.375rem;
        height:2.5rem;
        display:inline-block;
        float:right;
    }

    .pingli .content{
        padding-top:0.4rem;
        padding-left:0.3rem;
        width:95%;
         font-size:0.8rem;
         color:black;
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
         
    }

    .pingli .images{
        display:inline-block;
        padding: 0.4rem 0.32rem;
        width:100%;
    }

    .pingli .meta{
        display:inline-block;
        width:100%;
        height:1.25rem;
        font-size:0.4375rem;
        color:#ccc;
    }
    .pingli .meta img{
         display:inline-block;
         margin-right:0.15rem;
        vertical-align: middle;
        border:0;
    }
    .pingli .meta span {
        display:inline-block;
        float:right;
        margin-right:0.625rem;
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 3px solid #43c3f2;
        color: #43c3f2;
        margin-bottom: -3px;
    }
</style>