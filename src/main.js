import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from  'axios';
Vue.use(VueRouter);

import Loading from './components/loading';
Vue.use(Loading);


//axios的一些配置，比如发送请求显示loading，请求回来loading消失
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    store.dispatch('showLoading')
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    store.dispatch('hideLoading')
    return response;
}, function (error) {
    return Promise.reject(error);
});


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL='http://localhost:8080/'; // 配置请求的数据的默认服务器地址
Vue.prototype.$http = axios;  // 给Vue的原型上添加$http 方法.其他页面在使用axios的时候直接  this.$http就可以了

// 引入样式文件
import './assets/css/base.css';
import './assets/css/index.css';

// 引入路由配置文件
import routes from './routerConfig';

const router=new VueRouter({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});

import store from './store/index';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})

