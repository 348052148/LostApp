<template>
    <div>
    <div class="message" >
        <mt-header fixed title="消息"></mt-header>

        <div class="func">
            <ul>
                <li><span>丢丢时报</span></li>
                <span class="DS"></span>
                <li><span>系统消息</span></li>
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
    .DS{
        display:block;
        width:94%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .message {
        width:100%;
        height:720px;
        background:#eee;
    }
    /**功能列表 */
    .message .func{
        width:100%;
        margin-top:42px;
        background:#fff;
        display:inline-block;

    }
    .message .func ul {
        list-style-type:none; 
        list-style:none;
    }
     .message .func ul li{
         display:inline-block;
         width:100%;
         height:60px;
         color:#666;
     }
     .message .func ul li img{
         display:inline-block;
         margin-left:12px;
     }
     .message .func ul li span{
         padding-bottom:10px;
         text-indent:20px;
         width:100%;
         line-height:60px;
         display:inline-block;
     }
     .mint-header{
         height:46px;
     }
</style>