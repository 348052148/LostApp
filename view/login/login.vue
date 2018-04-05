<template>

    <div  class="login" >
        <mt-header fixed title="登录">
            <router-link to="/" slot="left">
                <mt-button  icon="back"></mt-button>
            </router-link>
        </mt-header>

         <div class="topic">
        <img src="../../assets/log.jpg" height="200" width="100%" />
        </div>
        <div class="login-from">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="login.phone"></mt-field>
            <span class="DS"></span>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login.passwd"></mt-field>
            <span class="DS"></span>
        </div>
        <div class="login-method">
                <mt-button class='submit' @click="submit" type="primary">登录</mt-button>
                <div class="func">
                   <router-link to="/register"> <span>注册</span> </router-link>
                   &nbsp;&nbsp;|&nbsp;&nbsp;
                   <router-link to="/fpasswd"><span>忘记密码？</span></router-link>
                </div>
        </div>
    </div>

</template>

<script>
    import Api from '../../src/api.js'
    import { Toast } from 'mint-ui';
    export default {
        name: 'login',
        data:function(){
          return {
              login: {
                  m:'POST'
              }
          };
        },
        methods:{
            submit(){
                Api.request({api:'login',data:this.login},(res)=>{
                    if(res.code == 0){
                        Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 1000
                        });
                        this.$router.push({ path: '/' });
                        Api.setStorage('user',res.data);
                    }
                    if(res.code == -1){
                        Toast({
                        message: res.message,
                        position: 'middle',
                        duration: 1000
                        });
                    }
                });
            }
        }
    }

</script>

<style>
    *{padding:0;margin:0;}
    .DS{
        display:block;
        width:100%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .mint-header{
         height:2.875rem;
         background:rgba(255,00,255,0)
     }
     .mint-header{
         height:2.88rem;
         background:url('../../assets/title-bg.png')
     }
    .login .login-from {
        width:80%;
        margin:0 auto;
    }

    .login .login-from .mint-cell {
        margin-top:10px;
     }

     .login .login-from  .mint-cell:last-child{
        background:none;
     }

     .login .login-from  .mint-cell .mint-cell-wrapper{
         background:none;
         font-size:14px;
     }

    .login .login-method{
         width:80%;
        margin:0 auto;
        margin-top:2rem;
        text-align:center;
    }
    .login .login-method .submit{
        width:12.5rem;
        border-radius:2rem;
        background:url('../../assets/title-bg.png');
    }
    a{
        text-decoration:none;
    }
     .login .login-method .func{
         margin-top:8px;
         font-size:0.8rem;
     }

</style>