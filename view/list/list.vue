<template>

    <div class="list" >
        <header>
             <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <div class="search">
                <input value="" type="text" ></input>
            </div>
        </header>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">最新的</mt-tab-item>
            <mt-tab-item id="2">重金悬赏</mt-tab-item>
            <mt-tab-item id="3">附近的</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="loading"
            :infinite-scroll-distance="4" >
        <mt-tab-container-item id="1" >
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

                <div class="content"> 本人丢失一张公交卡，</br>在两路口轻轨站人丢失一张公交卡 </div>
                <div class="images" > 
                    <img width="80" height="80" src="../../assets/b1.jpg">
                </div>

                <div class='meta'>枇杷山正解84号 <span>浏览20次</span></div>
            </div>
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

                <div class="content"> 本人丢失一张公交卡，</br>在两路口轻轨站人丢失一张公交卡 </div>
                <div class="images" > 
                    <img width="80" height="80" src="../../assets/b1.jpg">
                </div>

                <div class='meta'>枇杷山正解84号 <span>浏览20次</span></div>
            </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="3" >
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

                <div class="content"> 本人丢失一张公交卡，</br>在两路口轻轨站人丢失一张公交卡 </div>
                <div class="images" > 
                    <img width="80" height="80" src="../../assets/b1.jpg">
                </div>

                <div class='meta'>枇杷山正解84号 <span>浏览20次</span></div>
            </div>
        </mt-tab-container-item>
        </mt-tab-container>

    </div>

</template>

<script>

    export default {
        name: 'list',
        data:function(){
          return {
              selected: '1',
              loading:true,
              list:[1,2,3]
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
            }
        }
    }

</script>

<style>
    .list header{
        background:#26a2ff;
    }
    .list header .mint-button{
        background:#26a2ff;
        border:0;
        box-shadow:none;
    }
    .list header .search{
        height:40px;
        display:inline-block;

    }
    .list header .search input{
         height:26px;
         border:0;
         width:320px;
         margin-left:1px;
         border-radius:8px;
         margin-top:5px;
         line-height:41px;
        display:inline-block;
    }

    /**项目 */
    .mint-tab-container {
    }
    .mint-tab-container-wrap {
        margin-top:3px;
    }
    .pingli {
        display:inline-block;
        height:auto;
        width:100%;
        background-color:#FFF;
        margin-bottom:3px;
        padding:5px;
    }
    .pingli img{
        display:inline-block;
    }

    .pingli .header{
        width:100%;
        height:40px;
        display:inline-block;
    }
    .pingli .header .account{
        width:100px;
        height:40px;
        display:inline-block;
    }
    .pingli .header .account .name{
        width:100px;
        height:20px;
        font-size:16px;
        display:inline-block;
    }
    .pingli .header .account .time{
        width:100px;
        height:20px;
        font-size:8px;
        color:#ccc;
        display:inline-block;
    }

    .pingli .header .type{
        width:70px;
        height:40px;
        display:inline-block;
        float:right;
    }

    .pingli .content{
        padding:3px;
        width:100%;
        line-height:20px;
         font-size:14px;
         height:40px;
         
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
         
    }

    .pingli .images{
        display:inline-block;
        padding-left:5px;
        padding-right:5px;
        width:100%;
    }

    .pingli .meta{
        display:inline-block;
        width:100%;
        height:20px;
        font-size:7px;
        color:#ccc;
    }
    .pingli .meta span {
        display:inline-block;
        float:right;
        margin-right:10px;
    }
</style>