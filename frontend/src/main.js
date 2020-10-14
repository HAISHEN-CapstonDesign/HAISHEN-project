import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './routes/page_index.js'


Vue.config.productionTip = false


new Vue({
    vuetify,
    render: h => h(App),
    beforeCreate() {
        this.$store.dispatch('getMemberInfo')
    },
    router, // add router
    store,
}).$mount('#app')