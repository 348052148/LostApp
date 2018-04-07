<template>

    <div class="person" >
        <bHeader title="个人资料" />
        <div class="userinfo">
                <div  class="avater" >
                    <img style="border-radius:40px;" src="../../assets/avater.jpg" width="80" height="80" />
                    <span>{{user.nickname}}</span>
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
                <li>姓名 &nbsp;&nbsp;&nbsp;&nbsp;<span>{{user.nickname}}</span></li>
                <span class="DS"></span>
                <li>性别 &nbsp;&nbsp;&nbsp;&nbsp;<span>男</span></li>
                <span class="DS"></span>
                <li>常住地 &nbsp;&nbsp;&nbsp;&nbsp;<span></span></li>
                <span class="DS"></span>
            </ul>
        </div>
    </div>

</template>

<script>
    import Api from '../../src/api.js'
    import bHeader  from '../common/bHeader.vue';
    export default {
        components:{
            bHeader
        },
        name: 'app',
        data:function(){
          return {
              user: {}
          };
        },
        created(){
            Api.request({api:'users/'+this.$route.params.id,data:{}},(res)=>{
                if(res.code == 0){
                    this.user = res.data;
                }
            });
        }
    }

</script>

<style>
    *{padding:0;margin:0;}
    a{
        color:#333;
        text-decoration: none;
    }
    .DS{
        display:block;
        width:94%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .person{
        width:100%;
        background:#eee;
        overflow: hidden;
    }
    /**用户信息 */
    .person .userinfo{
        width:100%;
        height:14rem;
        display:inline-block;
        background:url('../../assets/img-user-bg-new.png')
    }
    .person .userinfo .avater {
        margin:0 auto;
        margin-top:3.75rem;
        width:7.5rem;
        text-align:center;
    }
    .person .userinfo .avater span{
        display:inline-block;
        margin-top:0.31rem;
        width:100%;
        text-align:center;
    }
    /**快捷 */
    .person .userinfo .shortcut{
        display:none;
        margin-top:1.25rem;
        width:100%;
    }
    .person .userinfo .shortcut ul {
        width:13rem;
        list-style-type:none; 
        list-style:none;
        margin:0 auto;
    }
    .person .userinfo .shortcut ul li{
        display:inline-block;
    }


    /**功能列表 */
    .person .func{
        width:100%;
        background:#fff;
        display:inline-block;

    }
    .person .func ul {
        list-style-type:none; 
        list-style:none;
        margin-top:0.62rem;
    }
     .person .func ul li{
         width:100%;
         height:2.5rem;
         color:#666;
         margin-left:0.9rem
     }
     .person .func ul li img{
         display:inline-block;
          width: 1.3rem;
          height: 1.3rem;
          margin-right:0.9rem;
          line-height:2.5rem;
          vertical-align: middle;
     }
     .person .func ul li span{
         padding-bottom:0.625rem;
         text-indent:1.25rem;
         width:100%;
         line-height:2.5rem;
         font-size:0.9rem;
     }
</style>