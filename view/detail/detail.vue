<template>

    <div class="detail" >
        <mt-header fixed title="寻物启事">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>

        <div class="m-info" >
            <div class="info">
                <div class="avater">
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="60" height="60" />
                    <span class="Fill"></span>
                </div>
                <div class="meta" >
                    <span class="name">{{post.publish.nickname}} <mt-badge size="small" color="#888" >{{post.type}}</mt-badge></span>
                    <span class="address"><img height="14" src="../../assets/icon-map1.png" />{{post.address}}</span>
                    <span class="time">{{post.publish_time}}</span>
                    <span class="amount">￥{{post.amount}}</span>
                </div>

                <div class="tag">
                    <span class="taginfo"><mt-badge v-for="tag in post.tags" size="large" color="red" >{{tag}}</mt-badge></span>
                    <span class="Fill"></span>

                    <span class="chat" v-if="post.status==0">
                        <mt-badge v-if="post.publish_type==2" size="normal" @click.native="revert(post.id)" color="#ff9900" >归还</mt-badge> 

                        <mt-badge v-else-if="post.publish_type==1" size="normal" @click.native="claim(post.id)" color="#ff9900" >认领</mt-badge> 
                    
                        <mt-badge size="normal" color="#ff9900" >联系他</mt-badge>
                    </span>

                    <span class="chat" v-else-if="post.status==1">
                        <mt-badge v-if="post.publish_type==2" size="normal"  color="#ff9900" >归还中</mt-badge> 

                        <mt-badge v-else-if="post.publish_type==1" size="normal" color="#ff9900" >认领中</mt-badge> 
                
                    </span>

                    <span class="chat" v-else-if="post.status==2">
                        <mt-badge v-if="post.publish_type==2" size="normal" color="#ff9900" >已归还</mt-badge> 

                        <mt-badge v-else-if="post.publish_type==1" size="normal"  color="#ff9900" >已认领</mt-badge> 
                    
                    </span>
                </div>
            </div>
            <span class="DSS"></span>
            <div class="content">
                <div class="text">{{post.content}}</div>
                <div class="image">
                    <img v-for="attachment in post.attachment" :src="attachment" />
                </div>
            </div>
        </div>

        <!-- 推荐信息-->
        <div class="m-recommend">
            <h4>推荐信息</h4>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
    import Api from '../../src/api.js'
    import { MessageBox } from 'mint-ui';
    export default {
        name: 'detail',
        data:function(){
          return {
              post:{},
              user:{}
          };
        },
        created(){
            this.user = Api.getStorage('user');
            Api.request({api:'posts/'+this.$route.params.id,data:{}},(res)=>{
                this.post = res.data;
            });
        },
        methods:{
            revert(pid){
                MessageBox.confirm('确定执行此操作?').then(action => {
                    Api.request({api:'posts/'+this.$route.params.id,data:{
                     status:1,
                     uid:this.user.id,
                     m:'PUT'
                    }},(res)=>{
                        if(res.code==0){
                                window.location.reload();
                        }
                        
                    });
                });
                 
            },
            claim(pid){
                 MessageBox.confirm('确定执行此操作?').then(action => {
                        Api.request({api:'posts/'+this.$route.params.id,data:{
                            status:1,
                            uid:this.user.id,
                            m:'PUT'
                        }},(res)=>{
                             if(res.code==0){
                                window.location.reload();
                            }
                        });
                 });
                
            }

        }
    }

</script>

<style>
    *{padding:0;margin:0;}
    .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
    .detail {
        width:100%;
        height:100%;
        background:#eee;
        display:inline-block;
    }
    /**分割操作 */
    .DSS{
        display:block;
        border-top:0.1rem solid #eee;
    }
    /**填充操作 */
    .Fill{
        width:100%;
        display:inline-block;
        height:1.875rem;
    }
    /**信息模块 */
    .detail .m-info{
        width:100%;
        background:#fff;
    }
    .detail .m-info .info {
        width:100%;
        display:inline-block;
        margin-top:4rem;
        padding-top:0.2rem;
    }
    .detail .m-info .info .avater {
        display:inline-block;
        width:3.75rem;
    }
    .detail .m-info .info .avater img{
        display:inline-block;
    }
    /* */
    .detail .m-info .info .meta {
         display:inline-block;
         width:8rem;
    }
    .detail .m-info .info .meta .name {
        width:100%;
         display:inline-block;
    }
    .detail .m-info .info .meta .address {
        width:100%;
        font-size:0.8rem;
        color:#ccc;
         display:inline-block;
    }
    .detail .m-info .info .meta .address img{
         display:inline-block;
         margin-right:0.15rem;
        vertical-align: middle;
        border:0;
    }
    .detail .m-info .info .meta .time {
        width:100%;
        font-size:0.8rem;
        color:#ccc;
         display:inline-block;
    }
    .detail .m-info .info .meta .amount{
        width:100%;
        font-size:1.2rem;
        color:red;
         display:inline-block;
    }
    /** */
    .detail .m-info .info .tag{
        display:inline-block;
        width:8rem;
        float:right;
    }
    .detail .m-info .info .tag .taginfo{
        display:inline-block;
        width:2.5rem;
        float:right;
        margin-right:1rem;
        height:3rem;
    }
    .detail .m-info .info .tag .chat{
         display:inline-block;
        width:100%;
        height:2.5rem;
    }

    /**内容 */
    .detail .m-info .content{
        color:#333;
        display:inline-block;
    }
    .detail .m-info .content .text{
        padding:0.625rem;
        line-height:1.625rem;
        font-size:0.9375rem;
    }
    .detail .m-info .content .image{
        padding:0.625rem;
    }
    .detail .m-info .content .image img{
        width:100%;
    }
    /**推荐 */
    .detail .m-recommend {
        width:100%;
        background:#fff;
        display:inline-block;
        margin-top:0.625rem;
    }
    .detail .m-recommend h4{
        font-size:0.875rem;
        line-height:2rem;
        color:#666;
        text-indent:1rem;
        padding-top:0.61rem;
        border-bottom:1px solid #eee;
    }
    .detail .m-recommend .content{
        height: 50px;
    }
</style>