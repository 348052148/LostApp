<template>

    <div class="publish"  >
        <mt-header title="我的发布">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        </mt-header>
        <div class ="content">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">寻物启事</mt-tab-item>
            <mt-tab-item id="2">招领启事</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="m-publish">
                    <div class="info">
                        <img src="../../assets/avater.jpg" width="80" height="80" >
                        <div class="context" >
                            <div class="tag">
                            <mt-badge size="small" color="#888" >交通工具</mt-badge>
                            <mt-badge size="small" color="red">丢</mt-badge>
                            </div>
                            <span class="text"> 今天在两路口轻轨站，丢失一张公交卡 </span>
                            <span class="address"> 两路口 </span>
                            <span class="amount"> ￥0.00 </span>
                        </div>
                    </div>
                    <div class="oper" >
                        <span class="timer">2018-03-28 11:51:02</span>
                        <div class="Fill"></div>
                        <div class="action">
                            <mt-badge size="small" class="one" color="#888" >编辑</mt-badge><mt-badge color="#888" size="small">删除</mt-badge>
                        </div>
                    </div>
                </div>
                <span class="DS"></span>

                <div class="m-publish">
                    <div class="info">
                        <img src="../../assets/avater.jpg" width="80" height="80" >
                        <div class="context" >
                            <div class="tag">
                            <mt-badge size="small" color="#888" >交通工具</mt-badge>
                            <mt-badge size="small" color="red">丢</mt-badge>
                            </div>
                            <span class="text"> 今天在两路口轻轨站，丢失一张公交卡 </span>
                            <span class="address"> 两路口 </span>
                            <span class="amount"> ￥0.00 </span>
                        </div>
                    </div>
                    <div class="oper" >
                        <span class="timer">2018-03-28 11:51:02</span>
                        <div class="Fill"></div>
                        <div class="action">
                            <mt-badge size="small" class="one" color="#888" >编辑</mt-badge><mt-badge color="#888" size="small">删除</mt-badge>
                        </div>
                    </div>
                </div>
                <span class="DS"></span>


            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                
            </mt-tab-container-item>

            </mt-tab-container>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'app',
        data:function(){
          return {
              selected: '1'
          };
        }
    }

</script>

<style>
    .Fill{
        display:block;
        width:100%;
        height:2.5rem;
    }
    .DS{
        display:block;
        width:99%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
     .mint-header{
        height:2.875rem;
    }
    .m-publish{
        display:inline-block;
        width:100%;
        height:5rem;
        margin-top:0.5rem;
        margin-bottom:1.2rem;
    }
    .m-publish .info{
        display:inline-block;
        width:14rem;
        height:100%;
    }
    .m-publish .info img {
        background:#EEE;
        display:inline-block;
        border:1px solid #eee;
        margin-top:2px;
    }
    .m-publish .info .context{
        display:inline-block;
        width:8rem;
        height:100%;
    }
    .m-publish .info .context .tag{
        display:inline-block;
         width:100%;
    }
    .m-publish .info .context .text{
        display:inline-block;
        width:100%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
    }

    .m-publish .info .context .address{
        display:inline-block;
        width:100%;
        font-size:8px;
        color:#ccc;
    }
    .m-publish .info .context .amount{
        display:inline-block;
        width:100%;
        font-size:16px;
        color:red;
    }

    /**oper */
    .m-publish .oper{
        display:inline-block;
        width:7.5rem;
        float:right;
        height:100%;
    }
    .m-publish .oper .timer{
        display:inline-block;
        width:100%;
        font-size:8px;
        color:#ccc;
    }
    .m-publish .oper .action{
        display:inline-block;
        width:100%;
    }
    .m-publish .oper .action .one{
        margin-right:0.5rem;
    }

</style>