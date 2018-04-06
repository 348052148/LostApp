<template>
    <div class="message-contair">
        <mt-header fixed title="消息"></mt-header>

    <div class="message" >
        
        <div class="func">
            <ul>
                <li><img src="../../assets/icon-times.png"/><span>丢丢时报</span></li>
                <span class="DS"></span>
                <li><img src="../../assets/icon-mes.png"/><span>系统消息</span></li>
                <span class="DS"></span>
            </ul>
        </div>

    </div>
    <bBannar selected='tab3' />
    </div>

</template>

<script>
     import bBannar  from '../common/bBannar.vue';
    export default {
        components:{
            bBannar 
        },
        name: 'message',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    *{padding:0;margin:0;}
    .message-contair{
        height: 100%;
        background: #eee;
        overflow: hidden;
    }
    .DS{
        display:block;
        width:100%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .message {
        width:100%;
        margin-top:2.88rem;
        background:#eee;
    }
    /**功能列表 */
    .message .func{
        width:100%;
        background:#fff;
        display:inline-block;

    }
    .message .func ul {
        list-style-type:none; 
        list-style:none;
    }
     .message .func ul li{
         width:100%;
         height:3.75rem;
         color:#666;
         margin-left:0.5rem;
     }
     .message .func ul li img{
           display:inline-block;
           margin-right:0.9rem;
           line-height:3.75rem;
           vertical-align: middle;
     }
     .message .func ul li span{
          padding-bottom:0.2rem;
          text-indent:1.25rem;
          width:100%;
          line-height:3.75rem;
     }
     .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
</style>