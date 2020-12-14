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

import alarm from './alarm_index.js'
import $ from 'jquery';
// import VueJsModal from 'plugin'


const DEFAULT_TITLE = 'Crunch';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

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

$(document).ready(function() {
    //  if (localStorage.getItem('nickname') != null) {
    alarm.connectWs();
    //  }

});

new Vue({
    vuetify,
    render: h => h(App),
    beforeCreate() {
        this.$store.dispatch('getMemberInfo')
    },
    router, // add router
    store,
    alarm,

}).$mount('#app')