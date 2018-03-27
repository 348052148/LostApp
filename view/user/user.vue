<template>
    <div>
    <div class="user"  >
        <div class="userinfo">
                <div  class="avater" >
                    <img style="border-radius:40px;" src="../../assets/avater.jpg" width="80" height="80" />
                    <span>丢丢君</span>
                </div>
                
                <div class="shortcut" >
                    <ul>
                        <li><img  src="../../assets/icon-order-0.png" width="40" height="40" /></li>
                        <span class="Fill"></span>
                        <li><img  src="../../assets/icon-order-0.png" width="40" height="40" /></li>
                    </ul>
                </div>
                
        </div>

        <div class="func">
            <ul>
                <li><span>我的发布</span></li>
                <span class="DS"></span>
                <li><span>我的交易</span></li>
                <span class="DS"></span>
                <li><span>联系客服</span></li>
                <span class="DS"></span>
                <li><span>投诉建议</span></li>
            </ul>
        </div>
        
    </div>
    <bBannar selected='tab4' />
    </div>
</template>

<script>
    import bBannar  from '../common/bBannar.vue';
    export default {
        components:{
            bBannar  
        },
        name: 'app',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    /**分割操作 */
    *{padding:0;margin:0;}
    .Fill{
        display:inline-block;
        width:7rem;
        height:100%;
    }
    .DS{
        display:block;
        width:94%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .user{
        width:100%;
        height:720px;
        background:#eee;
    }
    /**用户信息 */
    .user .userinfo{
        width:100%;
        height:268px;
        display:inline-block;
        background:url('../../assets/img-user-bg.png')
    }
    .user .userinfo .avater {
        margin:0 auto;
        margin-top:60px;
        width:120px;
        text-align:center;
    }
    .user .userinfo .avater span{
        display:inline-block;
        margin-top:5px;
        width:100%;
        text-align:center;
    }
    /**快捷 */
    .user .userinfo .shortcut{
        display:inline-block;
        margin-top:20px;
        width:100%;
    }
    .user .userinfo .shortcut ul {
        width:13rem;
        list-style-type:none; 
        list-style:none;
        margin:0 auto;
    }
    .user .userinfo .shortcut ul li{
        display:inline-block;
    }

    /**功能列表 */
    .user .func{
        width:100%;
        background:#fff;
        display:inline-block;

    }
    .user .func ul {
        list-style-type:none; 
        list-style:none;
        margin-top:10px;
    }
     .user .func ul li{
         display:inline-block;
         width:100%;
         height:40px;
         color:#666;
     }
     .user .func ul li img{
         display:inline-block;
         margin-left:12px;
     }
     .user .func ul li span{
         padding-bottom:10px;
         text-indent:20px;
         width:100%;
         line-height:40px;
         display:inline-block;
     }
</style>