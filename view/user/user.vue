<template>
    <div>
    <div class="user"  >
        <div class="userinfo">
                <router-link :to="user.tourl">
                <div  class="avater" >
                    <img style="border-radius:40px;" src="../../assets/avater.jpg" width="80" height="80" />
                    <span>{{user.nickname}}</span>
                </div>
                </router-link>
                
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
                <router-link to="/publish">
                <li><img src="../../assets/icon-publish.png" /><span>我的发布</span></li>
                </router-link>
                <span class="DS"></span>
                <router-link to="/order">
                <li><img src="../../assets/icon-price.png" /><span>我的交易</span></li>
                </router-link>

                <span class="DS"></span>
                <li><img src="../../assets/icon-contact.png" /><span>联系客服</span></li>
                <span class="DS"></span>
                <li><img src="../../assets/icon-money.png"/><span>我的钱包</span></li>
                <span class="DS"></span>
            </ul>
        </div>
        
    </div>
    <bBannar selected='tab4' />
    </div>
</template>

<script>
    import Api from '../../src/api.js'
    import bBannar  from '../common/bBannar.vue';
    export default {
        components:{
            bBannar  
        },
        name: 'app',
        data:function(){
          return {
              user:{nickname:'未登录',tourl:"/login"}
          };
        },
        created(){
            let user = Api.getStorage('user');
            if(user) {
                this.user = user;
                this.user.tourl = '/person/'+this.user.id;
            }
        }
    }

</script>

<style>
    /**分割操作 */
    *{padding:0;margin:0;}
    a{
        color:#333;
        text-decoration: none;
    }
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
        background:#eee;
        overflow: hidden;
        position:absolute;  
            top: 0px;  
            bottom: 0px;  
    }
    /**用户信息 */
    .user .userinfo{
        width:100%;
        height:14rem;
        display:inline-block;
        background:url('../../assets/img-user-bg-new.png')
    }
    .user .userinfo .avater {
        margin:0 auto;
        margin-top:3.75rem;
        width:7.5rem;
        text-align:center;
    }
    .user .userinfo .avater span{
        display:inline-block;
        margin-top:0.31rem;
        width:100%;
        text-align:center;
    }
    /**快捷 */
    .user .userinfo .shortcut{
        display:none;
        margin-top:1.25rem;
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
        margin-top:0.62rem;
    }
     .user .func ul li{
         width:100%;
         height:2.5rem;
         color:#666;
         margin-left:0.9rem
     }
     .user .func ul li img{
         display:inline-block;
          width: 1.3rem;
          height: 1.3rem;
          margin-right:0.9rem;
          line-height:2.5rem;
          vertical-align: middle;
     }
     .user .func ul li span{
         padding-bottom:0.625rem;
         text-indent:1.25rem;
         width:100%;
         line-height:2.5rem;
         font-size:0.9rem;
     }

</style>