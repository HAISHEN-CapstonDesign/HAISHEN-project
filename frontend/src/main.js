import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './routes/page_index.js'
import VueMoment from 'vue-moment'
import VModal from 'vue-js-modal'
import VueSplide from '@splidejs/vue-splide';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import VueJsModal from 'plugin'

Vue.config.productionTip = false

Vue.use(VueMoment);
Vue.use(VueSplide);
Vue.use(VueRouter);
Vue.use(VModal, { dynamic: true, dialog: true })
Vue.use(VueSplide);
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
    vuetify,
    render: h => h(App),
    beforeCreate() {
        this.$store.dispatch('getMemberInfo')
    },
    router, // add router
    store,

}).$mount('#app')