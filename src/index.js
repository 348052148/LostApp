import Vue from 'vue'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.use(VueRouter);

import App from './../view/app.vue'

import Home from './../view/home/home.vue'

import Detail from './../view/detail/detail.vue'

import User from './../view/user/user.vue'

import Message from './../view/message/message.vue'

import List from './../view/list/list.vue'

import Cat from './../view/cat/cat.vue'

import New from './../view/new/new.vue'

import Publish from './../view/publish/publish.vue'

import Login from './../view/login/login.vue'

import Register from './../view/register/register.vue'

import Api from './api.js'

Api.clearStorage();

Api.setSid();

const routes = [
    { path: '/', component: Home },
    { path: '/detail/:id', component:Detail},
    { path: '/user', component:User},
    { path: '/msg', component:Message},
    { path: '/list', component:List},
    { path: '/cat', component:Cat},
    { path: '/new', component:New},
    { path: '/publish', component:Publish},
    { path: '/login', component:Login},
    { path: '/register', component:Register}
];

const router = new VueRouter({
    routes
});

new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App },
});