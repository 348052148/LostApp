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
                    <span class="chat"><mt-badge size="small" color="#ff9900" >归还</mt-badge> <mt-badge size="small" color="#ff9900" >联系他</mt-badge></span>
                </div>
            </div>
            <span class="DS"></span>
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
    export default {
        name: 'detail',
        data:function(){
          return {
              post:{}
          };
        },
        created(){
            var api = new Api();
            api.request({api:'Post/posts/123',data:{}},(res)=>{
                this.post = res.data;
            });
        }
    }

</script>

<style>
    .mint-header{
         height:2.875rem;
     }
    .detail {
        width:100%;
        height:100%;
        background:#eee;
        display:inline-block;
    }
    /**分割操作 */
    .DS{
        display:block;
        border-top:0.1875rem solid #eee;
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
        margin-top:3.125rem;
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
        font-size:0.2rem;
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
        font-size:0.2rem;
        color:#ccc;
         display:inline-block;
    }
    .detail .m-info .info .meta .amount{
        width:100%;
        font-size:1rem;
        color:red;
         display:inline-block;
    }
    /** */
    .detail .m-info .info .tag{
        display:inline-block;
        width:7.5rem;
        float:right;
    }
    .detail .m-info .info .tag .taginfo{
        display:inline-block;
        width:2.5rem;
        float:right;
        margin-right:0.3rem;
        height:2.5rem;
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
        line-height:1.5625rem;
        color:#666;
        text-indent:0.4rem;
        padding-bottom:0.2rem;
        border-bottom:1px solid #eee;
    }
    .detail .m-recommend .content{

    }
</style>