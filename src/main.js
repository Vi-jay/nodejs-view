import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import index from './compent/index';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
    {path: '/index', component: index}
];
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

router.push('/index');

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    },
    router
}).$mount('#app');
