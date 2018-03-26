<template>

    <div class="detail" >
        <mt-header fixed title="寻物启事"></mt-header>

        <div class="m-info" >
            <div class="info">
                <div class="avater">
                    <img style="border-radius:20px;" src="../../assets/avater.jpg" width="60" height="60" />
                    <span class="Fill"></span>
                </div>
                <div class="meta" >
                    <span class="name">丢丢君 <mt-badge size="small" color="#888" >交通工具</mt-badge></span>
                    <span class="address">渝北区线外城市花园</span>
                    <span class="time">2018-03-26 12:12:01</span>
                    <span class="amount">￥12.0</span>
                </div>

                <div class="tag">
                    <span class="taginfo"><mt-badge size="large" color="red" >丢</mt-badge></span>
                
                    <span class="chat"><mt-badge size="small" color="#ff9900" >归还</mt-badge> <mt-badge size="small" color="#ff9900" >联系他</mt-badge></span>
                </div>
                
            </div>
            <span class="DS"></span>
            <div class="content">
                <div class="text">早上在渝北区线外城市花园711吃面包，不慎遗落心爱的马克杯，望有看到者联系。电话18523922708</div>
                <div class="image">
                    <img src="../../assets/b2.jpg" />
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

    export default {
        name: 'detail',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    .detail {
        width:100%;
        height:100%;
        background:#eee;
        display:inline-block;
    }
    /**分割操作 */
    .DS{
        display:block;
        border-top:3px solid #eee;
    }
    /**填充操作 */
    .Fill{
        width:100%;
        display:inline-block;
        height:30px;
    }
    /**信息模块 */
    .detail .m-info{
        width:100%;
        background:#fff;
    }
    .detail .m-info .info {
        width:100%;
        display:inline-block;
        margin-top:34px;
        padding-top:8px;
        margin-bottom:12px;
    }
    .detail .m-info .info .avater {
        display:inline-block;
        width:60px;
    }
    .detail .m-info .info .avater img{
        display:inline-block;
    }
    /* */
    .detail .m-info .info .meta {
         display:inline-block;
         width:200px;
    }
    .detail .m-info .info .meta .name {
        width:100%;
         display:inline-block;
    }
    .detail .m-info .info .meta .address {
        width:100%;
        font-size:8px;
        color:#ccc;
         display:inline-block;
    }
    .detail .m-info .info .meta .time {
        width:100%;
        font-size:8px;
        color:#ccc;
         display:inline-block;
    }
    .detail .m-info .info .meta .amount{
        width:100%;
        font-size:16px;
        color:red;
         display:inline-block;
    }
    /** */
    .detail .m-info .info .tag{
        display:inline-block;
        width:120px;
        float:right;
    }
    .detail .m-info .info .tag .taginfo{
        display:inline-block;
        width:40px;
        float:right;
        height:40px;
    }
    .detail .m-info .info .tag .chat{
         display:inline-block;
        width:100%;
        height:40px;
    }

    /**内容 */
    .detail .m-info .content{
        color:#333;
        display:inline-block;
    }
    .detail .m-info .content .text{
        padding:10px;
        line-height:26px;
        font-size:15px;
    }
    .detail .m-info .content .image{
        padding:10px;
    }
    .detail .m-info .content .image img{
        width:100%;
    }
    /**推荐 */
    .detail .m-recommend {
        width:100%;
        background:#fff;
        display:inline-block;
        margin-top:10px;
    }
    .detail .m-recommend h4{
        font-size:14px;
        line-height:25px;
        color:#666;
        text-indent:20px;
        padding-bottom:8px;
        border-bottom:1px solid #eee;
    }
    .detail .m-recommend .content{

    }
</style>