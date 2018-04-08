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
                            <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                            <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
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
                            <mt-badge size="small" color="#888" >{{post.entity_class}}</mt-badge>
                            <mt-badge v-for="tag in post.tags" size="small" color="red">{{tag}}</mt-badge>
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
         display:inline-block;
        height:100%;
        width:23%;
    }
    .m-pb .avater img{
        border:1px solid #eee;
        margin-left:0.2rem;
    }
    .m-pb .context{
        display:inline-block;
        height:100%;
        width:72%;
    }
    .m-pb .context .tag{
         display:inline-block;
        width:100%;
        margin-bottom:0.3rem;
    }
    .m-pb .context .timer {
        font-size:0.8rem;
        color:#ccc;
        float:right;
    }
    .m-pb .context .text{
        width:100%;
        display:inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:0.9rem;
        margin:0.3rem 0;
    }
    .m-pb .context .address{
        align:middle;
        width:100%;
        display:inline-block;
         font-size:0.8rem;
        color:#ccc;
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