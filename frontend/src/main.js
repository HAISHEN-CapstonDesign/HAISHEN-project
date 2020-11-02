import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './routes/page_index.js'
import VueMoment from 'vue-moment'


Vue.config.productionTip = false

Vue.use(VueMoment);
Vue.use(VueRouter);


new Vue({
    vuetify,
    render: h => h(App),
    beforeCreate() {
        this.$store.dispatch('getMemberInfo')
    },
    router, // add router
    store,

}).$mount('#app')