import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import MyPage from './MyPage.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/MyPage", component: MyPage }
    ]
})

new Vue({
    vuetify,
    render: h => h(App),
    router
}).$mount('#app')