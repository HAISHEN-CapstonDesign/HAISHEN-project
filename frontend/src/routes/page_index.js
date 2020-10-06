import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '../components/LoginPage.vue';
import aboutPage from '../views/about.vue';
import MainPage from '../views/MainPage.vue';
import loginPage from '../views/loginPage.vue';

Vue.use(VueRouter);

// // router object
// export const router = new VueRouter({
//     routes: [{
//         path: '/login',
//         component: LoginPage
//     }]
// });

export const router = new VueRouter({
    routes: [{
            path: '/',
            component: MainPage,
        },

        {
            path: '/about',
            component: aboutPage,
        },
        {
            path: '/login',
            component: loginPage,
        }
    ]
})