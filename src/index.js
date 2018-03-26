import Vue from 'vue'
import VueRouter from 'vue-router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.use(VueRouter);

import App from './../view/app.vue'

import Home from './../view/home/home.vue'

const routes = [
    { path: '/', component: Home }
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
