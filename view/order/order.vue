<template>

    <div class="order"  >
        <mt-header title="我的交易">
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

            
                <div v-for="post in LF" class="m-order">
                <router-link  :to="'/detail/'+post.id">
                    <div class="info">
                        <img src="../../assets/avater.jpg" width="80" height="80" >
                        <div class="context" >
                            <div class="tag">
                            <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                            <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
                            </div>
                            <span class="text"> {{post.content}} </span>
                            <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                            <span class="amount"> ￥{{post.amount}} </span>
                        </div>
                    </div>
                    </router-link>
                    <div class="oper" >
                        <span class="timer">{{post.publish_time}}</span>
                        <div class="PFill"></div>
                        <div class="action">

                            <mt-badge size="normal" v-if="post.status==1" class="one" color="#888" >待确认</mt-badge>

                            <mt-badge size="normal" v-else-if="post.status==2" class="one" color="#888" >已完成</mt-badge>
                            
                        </div>
                    </div>
                </div>
                <span class="DS"></span>
            
                

            <infinite-loading @infinite="loadLFMore"></infinite-loading>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">

                    <div v-for="post in LT" class="m-order">
                        <router-link  :to="'/detail/'+post.id">
                        <div class="info">
                            <img src="../../assets/avater.jpg" width="80" height="80" >
                            <div class="context" >
                                <div class="tag">
                                <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                                <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
                                </div>
                                <span class="text"> {{post.content}} </span>
                                <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                                <span class="amount"> ￥{{post.amount}} </span>
                            </div>
                        </div>
                        </router-link>
                        <div class="oper" >
                            <span class="timer">{{post.publish_time}}</span>
                            <div class="PFill"></div>
                            <div class="action">
                                <mt-badge size="normal" v-if="post.status==1" class="one" color="#888" >待确认</mt-badge>

                                <mt-badge size="normal" v-else-if="post.status==2" class="one" color="#888" >已完成</mt-badge>
                            </div>
                        </div>
                    </div>
                    <span class="DS"></span>
                

                <infinite-loading @infinite="loadLTMore"></infinite-loading>
                
            </mt-tab-container-item>

            </mt-tab-container>
        </div>
    </div>

</template>

<script>
    import Api from '../../src/api.js'
    import InfiniteLoading from 'vue-infinite-loading';
    export default {
         components:{
            InfiniteLoading  
        },
        name: 'app',
        data:function(){
          return {
              selected: '1',
              LF:[],
              LT:[],
              LTpage:1,
              LFpage:1,
              user:{}
          };
        },
        created(){
             this.user = Api.getStorage('user');
             this.loadLTMore();
        },
        methods:{
            loadLFMore($state) {
                if($state)
                        $state.loaded();
                Api.request({api:'users/'+this.user.id+'/accounts',data:{publish_type:2,page:this.LFpage}},(res)=>{
                    if(res.code == 0){
                        for(var i=0;i<res.data.length;i++){
                            this.LF.push(res.data[i]);
                        }
                        this.LFpage++;
                    }else{
                        $state.complete();
                    }
                    
                });
                
            },

            loadLTMore($state){
                if($state)
                        $state.loaded();
                Api.request({api:'users/'+this.user.id+'/accounts',data:{publish_type:1,page:this.LTpage}},(res)=>{
                    if(res.code == 0){
                        for(var i=0;i<res.data.length;i++){
                            this.LT.push(res.data[i]);
                        }
                        this.LTpage++;
                    }else{
                        $state.complete();
                    }
                    
                });
            }
        }
    }

</script>

<style>
    *{padding:0;margin:0;list-style: none;}
    .PFill{
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
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
    .m-order{
        display:inline-block;
        width:100%;
        height:5rem;
        margin-top:0.5rem;
        margin-bottom:1.2rem;
    }
    .m-order .info{
        display:inline-block;
        width:14rem;
        height:100%;
    }
    .m-order .info img {
        background:#EEE;
        display:inline-block;
        border:1px solid #eee;
        margin-left:0.2rem;
    }
    .m-order .info .context{
        display:inline-block;
        width:8rem;
        height:100%;
    }
    .m-order .info .context .tag{
        display:inline-block;
         width:100%;
    }
    .m-order .info .context .text{
        display:inline-block;
        width:100%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
    }

    .m-order .info .context .address{
        display:inline-block;
        width:100%;
        font-size:0.6rem;
        color:#ccc;
    }
    .m-order .info .context img{
         display:inline-block;
         margin-right:0.15rem;
         border:0;
        vertical-align: middle;
    }
    .m-order .info .context .amount{
        display:inline-block;
        width:100%;
        font-size:16px;
        color:red;
    }

    /**oper */
    .m-order .oper{
        display:inline-block;
        width:7.5rem;
        float:right;
        height:100%;
    }
    .m-order .oper .timer{
        display:inline-block;
        width:100%;
        font-size:0.6rem;
        color:#ccc;
    }
    .m-order .oper .action{
        display:inline-block;
        width:100%;
    }
    .m-order .oper .action .one{
        margin-right:0.5rem;
    }

</style>