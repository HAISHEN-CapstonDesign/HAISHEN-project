import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import { router } from './routes/page_index.js'
// import VueRouter from 'vue-router'
// import router from './routes/page_index.js'
// import LoginPage from './components/LoginPage.vue'

// Vue.config.productionTip = false

// Vue.use(VueRouter);


//const LoginPage = { template: '<div>login<div>' }

// export const router = new VueRouter({
//     routes: [
//         { path: '/login', components: LoginPage }
//     ]
// })

new Vue({
    vuetify,
    render: h => h(App),
    router, // add router
}).$mount('#app')