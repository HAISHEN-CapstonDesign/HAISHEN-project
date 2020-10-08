import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import MyPage from './MyPage.vue'
import MyPageEdit from './MyPageEdit.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: "/MyPage", name: 'MyPage', component: MyPage },
        { path: "/MyPageEdit", name: 'MyPageEdit', component: MyPageEdit }
    ]
})

new Vue({
    vuetify,
    render: h => h(App),
    router
}).$mount('#app')