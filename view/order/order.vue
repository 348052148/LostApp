<template>

    <div class="order"  >
        <bHeader title="我的交易"  />

        <div class ="content">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">寻物启事</mt-tab-item>
            <mt-tab-item id="2">招领启事</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">

            <div v-for="post in LF">
                <div class="m-od">
                        <div class="state"><span class="title">订单编号</span> : &nbsp;$67928931 
                            <span class="status">已完成</span>
                        </div>
                        <router-link :to="'/detail/'+post.id">
                        <div class ="avater">
                            <img src="../../assets/avater.jpg" width="80" height="80" >
                        </div>
                        </router-link>

                        <div class="context" >
                            <div class="tag">
                            <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                            <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
                            <span class="timer">2018-04-05 20:07:16</span>
                            </div>

                            <span class="text">{{post.content}} </span>
                            <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                            <div class="amount"> ￥{{post.amount}}
                                
                                <div v-if="post.status==0 || post.status==2" class='btn btn-del'><span>删除</span></div>
                                
                            </div>
                        </div>
                </div>

                    <span class="DSf"></span>
                 </div>
            
                

            <infinite-loading @infinite="loadLFMore"></infinite-loading>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">

                    <div v-for="post in LT">
                        <div class="m-od">

                                <div class="state"><span class="title">订单编号</span> : &nbsp;$67928931 
                                    <span class="status">已完成</span>
                                </div>

                                <router-link :to="'/detail/'+post.id">
                                <div class ="avater">
                                    <img src="../../assets/avater.jpg" width="80" height="80" >
                                </div>
                                </router-link>

                                <div class="context" >
                                    <div class="tag">
                                    <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                                    <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
                                    <span class="timer">2018-04-05 20:07:16</span>
                                    </div>

                                    <span class="text">{{post.content.substr(0,15)}} </span>
                                    <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                                    <div class="amount"> ￥{{post.amount}}
                                        
                                        <div v-if="post.status==0 || post.status==2" class='btn btn-del'><span>删除</span></div>

                                         <div v-if="post.status==1" class='btn'><span>确认</span></div>
                                        
                                    </div>
                                </div>
                        </div>
                    <span class="DSf"></span>
                 </div>
                

                <infinite-loading @infinite="loadLTMore"></infinite-loading>
                
            </mt-tab-container-item>

            </mt-tab-container>
        </div>
    </div>

</template>

<script>
    import Api from '../../src/api.js'
    import InfiniteLoading from 'vue-infinite-loading';
    import bHeader  from '../common/bHeader.vue';
    export default {
         components:{
            InfiniteLoading  ,bHeader
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
    .DSf{
        display:block;
        width:99%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
     .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
     .order .content{
          margin-top:2.88rem;
          background:#eee;
           position:absolute;  
            top: 0px;  
            bottom: 0px;  
     }
   

    /**新样式 */
    .m-od {
        background:#fff;
         display:inline-block;
        width:100%;
        margin-top:0.1rem;
        padding-top:0.3rem;
        margin-bottom:0.2rem;
        padding-bottom:0.8rem;
    }
    .m-od .avater{
         display:inline-block;
        height:100%;
        width:23%;
        padding-bottom:1rem;
    }
    .m-od .avater img{
        border:1px solid #eee;
        margin-left:0.2rem;
    }
    .m-od .context{
        display:inline-block;
        height:100%;
        width:72%;
    }
    .m-od .context .tag{
         display:inline-block;
        width:100%;
        margin-bottom:0.3rem;
    }
    .m-od .context .timer {
        font-size:0.8rem;
        color:#ccc;
        float:right;
    }
    .m-od .context .text{
        width:100%;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:0.9rem;
        padding: 0.3rem 0;
    }
    .m-od .context .address{
        align:middle;
        width:100%;
        display:inline-block;
         font-size:0.8rem;
        color:#ccc;
    }
    .m-od .context .amount{
        display:inline-block;
        width:100%;
        font-size:16px;
        color:red;
    }
    .m-od .context .amount .mint-badge{
        float:right;
    }

    .m-od .state{
        width:100%;
        font-size:0.8rem;
        height:1.5rem;
        align:middle;
        text-indent:5px;
        border-bottom:1px solid #eee;
        padding-top:0.5rem;
        margin-bottom:0.5rem;
    }
    .m-od .state .title{
        font-weight:800;
    }
    .m-od .state .status{
        display:inline-block;
        float:right;

        margin-right:0.5rem;
    }

    .btn{
        float:right;
        border-radius:1rem;
        margin-right:0.5rem;
        border:2px solid #f6b26b;
    }
    .btn span{
        color:#666;
        font-size:1rem;
        padding:10px;
    }
    .btn-del{
        border:2px solid red;
     }
     .btn-edit{
         	border:2px solid #ff9900;
     }

</style>