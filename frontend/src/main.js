import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import { MyPage } from './components/MyPage';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [{
    path: '/My',
    component: MyPage
}];

const router = new VueRouter({
    routes
});

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')