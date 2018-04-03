<template>

    <div class="register" >
        <mt-header fixed title="注册">
            <router-link to="/" slot="left">
                <mt-button  icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="ad">

        </div>
        <div class="register-form">
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <span class="DS"></span>
            <mt-field label="验证码" placeholder="请输入验证码" type="url" v-model="website"><a >获取验证码</a></mt-field>
            <span class="DS"></span>
            <mt-field label="密码" placeholder="请输入6至16位密码" type="number" v-model="number"></mt-field>
            <span class="DS"></span>

            <div class="register-method">
                <mt-button class='submit' type="primary">注册</mt-button>
                <div class="func">
                    <router-link to="/help">登录及表示你同意《拾丢丢服务条款》</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'app',
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
        width:100%;
        margin:0 auto;
        border-top:1px solid #eee;
    }
    .mint-header{
         height:2.875rem;
     }
     .register {

     }
     .register .ad {
         width:100%;
         height:8rem;
         display:inline-block;
     }
     .register .register-form{
         width:90%;
         margin:0 auto;
         font-size:12px;
     }
     .register .register-form a{
         font-size:10px;
     }
     .register .register-form .mint-cell:last-child{
        background:none;
     }
     .register .register-form .mint-cell-wrapper{
         background:none;
         font-size:14px;
     }

     .register .register-method{
         width:80%;
        margin:0 auto;
        margin-top:2.5rem;
        text-align:center;
    }
    .register .register-method .submit{
        width:12.5rem;
        border-radius:2rem;
    }
    a{
        text-decoration:none;
    }
    .register .register-method .func {
         margin-top:8px;
         font-size:0.8rem;
    }
</style>