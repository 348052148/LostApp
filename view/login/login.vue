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
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </div>
        <div class="login-method">
                <mt-button class='submit' type="primary">登录</mt-button>
                <div class="func">
                   <router-link to="/register"> <span>注册</span> </router-link>
                   &nbsp;&nbsp;|&nbsp;&nbsp;
                   <router-link to="/fpasswd"><span>忘记密码？</span></router-link>
                </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'login',
        data:function(){
          return {
              selected: 100
          };
        }
    }

</script>

<style>
    .mint-header{
         height:2.875rem;
         background:rgba(255,00,255,0)
     }
    .login .login-from {
        width:80%;
        margin:0 auto;
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
    }
    a{
        text-decoration:none;
    }
     .login .login-method .func{
         margin-top:8px;
         font-size:0.8rem;
     }

</style>