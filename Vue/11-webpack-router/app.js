import Vue from 'Vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'Login',
            path: '/login',
            component: Login
        }
    ]
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})