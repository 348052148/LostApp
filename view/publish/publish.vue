<template>

    <div class="publish"  >
        
        <bHeader title="我的发布" />

        <div class ="content">
            <mt-navbar v-model="selected">
            <mt-tab-item id="1">寻物启事</mt-tab-item>
            <mt-tab-item id="2">招领启事</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">

                <div v-for="post in LF">
                <div class="m-pb">
                        <router-link :to="'/detail/'+post.id">
                        <div class ="avater">
                            <img src="../../assets/avater.jpg" width="80" height="80" >
                        </div>
                        </router-link>

                        <div class="context" >
                            <div class="tag">
                                <mt-badge class="tag-class" size="small">{{post.entity_class}}</mt-badge>
                                <mt-badge class="tag-type" v-for="tag in post.tags" size="small">{{tag}}</mt-badge>
                                <span class="timer">2018-04-05 20:07:16</span>
                            </div>

                            <span class="text">{{post.content}} </span>
                            <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                            <div class="amount"> ￥{{post.amount}}
                                
                                <div v-if="post.status==0 || post.status==2" class='btn btn-del'><span>删除</span></div>

                                <div v-if="post.status==0" class='btn btn-edit'><span>编辑</span></div>

                                <div  @click.native="complate(post.id)" v-else-if="post.status==1"  class='btn'><span>确认</span></div>

                                
                            </div>
                        </div>
                </div>

                    <span class="DS"></span>
                 </div>
            
                

            <infinite-loading @infinite="loadLFMore"></infinite-loading>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                
                 <div v-for="post in LT">
                <div class="m-pb">
                        <router-link :to="'/detail/'+post.id">
                        <div class ="avater">
                            <img src="../../assets/avater.jpg" width="80" height="80" >
                        </div>
                        </router-link>

                        <div class="context" >
                            <div class="tag">
                            <mt-badge size="small" class="tag-class">{{post.entity_class}}</mt-badge>
                            <mt-badge v-for="tag in post.tags" size="small" class="tag-type">{{tag}}</mt-badge>
                            <span class="timer">2018-04-05 20:07:16</span>
                            </div>

                            <span class="text">{{post.content}} </span>
                            <span class="address"><img height="14" src="../../assets/icon-map1.png" /> {{post.addressDetail}} </span>
                            <div class="amount"> ￥{{post.amount}}
                                
                                <div v-if="post.status==0 || post.status==2" class='btn btn-del'><span>删除</span></div>

                                <div v-if="post.status==0" class='btn btn-edit'><span>编辑</span></div>

                                <div  @click.native="complate(post.id)" v-else-if="post.status==1"  class='btn'><span>确认</span></div>

                                
                            </div>
                        </div>
                </div>

                    <span class="DS"></span>
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
    import { MessageBox } from 'mint-ui';
    export default {
         components:{
            InfiniteLoading ,bHeader
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
                Api.request({api:'users/'+this.user.id+'/posts',data:{publish_type:2,page:this.LFpage}},(res)=>{
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
                Api.request({api:'users/'+this.user.id+'/posts',data:{publish_type:1,page:this.LTpage}},(res)=>{
                    if(res.code == 0){
                        for(var i=0;i<res.data.length;i++){
                            this.LT.push(res.data[i]);
                        }
                        this.LTpage++;
                    }else{
                        $state.complete();
                    }
                    
                });
            },

             complate(pid){
                 MessageBox.confirm('确定执行此操作?').then(action => {
                    Api.request({api:'posts/'+pid,data:{
                        status:2,
                        uid:this.user.id,
                        m:'PUT'
                    }},(res)=>{
                        if(res.code==0){
                                window.location.reload();
                        }
                        
                    });
                 });
                 
            },
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
     .publish .content{
         margin-top:2.88rem;
         background:#eee;
           position:absolute;  
            top: 0px;  
            bottom: 0px;
     }
   
    /**新样式 */
    .m-pb {
         display:inline-block;
        width:100%;
        padding-top:0.8rem;
        margin-bottom:0.2rem;
        background:#fff;
        padding-bottom:0.8rem;
    }
    .m-pb .avater{
         display:block;
        height:100%;
        width:30%;
        float:left
    }
    .m-pb .avater img{
       margin-left: 0.2rem;
       background: #fff;
       width: 104px;
       height: 104px;

    }
    .m-pb .context{
        display:inline-block;
        height:100%;
        width:65%;
        margin-left:5px;
    }
    .m-pb .context .tag{
         display:inline-block;
        width:100%;
        margin-bottom:0.4rem;
    }
    .m-pb .context .tag .tag-class{
        border: 1px solid #FFAEB9;
        color: #FF82AB;
        border-radius:0px

    }
    .m-pb .context .tag .tag-type{
        padding: 2px 4px;
        border-radius: 0px;
        border: 1px solid #43c5f0;
        color: #43c5f0;
    }
    .m-pb .context .timer {
        font-size: 0.85rem;
        color: #8c8989;
        float:right;
    }
    .m-pb .context .text{
        width:100%;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:0.95rem;
    }
    .m-pb .context .address{
        align:middle;
        width:100%;
        display:inline-block;
         font-size: 0.85rem;
         color: #8e8b8b;
    }
    .m-pb .context .amount{
        display:inline-block;
        width:100%;
        font-size:16px;
        margin-top:0.2rem;
        color:red;
    }
    .m-pb .context .amount .mint-badge{
        float:right;
    }

    .btn{
       float: right;
       border-radius: 2px;
       margin-right: 0.5rem;
       background: #ff8282;

    }
    .btn span{
        color:#666;
        font-size:1rem;
        padding:10px;
    }
    .btn-del{
        background: #FFB6C1;
        border-radius: 2px;
     }
     .btn-edit{
        background: #fbb957;
        border-radius: 2px;
     }
     .mint-badge.is-primary {
         background-color: #ffffff;
     }
</style>