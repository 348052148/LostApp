import Vue from 'vue'
import VueRouter from 'vue-router'

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

const routes = [
    { path: '/', component: Home },
    { path: '/detail', component:Detail},
    { path: '/user', component:User},
    { path: '/msg', component:Message},
    { path: '/list', component:List},
    { path: '/cat', component:Cat}
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
