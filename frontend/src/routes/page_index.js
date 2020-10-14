import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


Vue.use(Router);

// const rejectAuthUser = (to, from, next) => {
//     if (store.state.isLogin === true) {
//         alert('이미 로그인 되어 있습니다.')
//         next('/')
//     } else {
//         next()
//     }
// }

const onlyAuthUser = (to, from, next) => {
    if (store.state.isLogin === false) {
        alert('로그인이 필요한 기능입니다')
        next('/')
    } else {
        next()
    }
}

const MainPage = () => {
    return import ( /* webpackChunkName: "mainpage" */ '../views/MainPage.vue')
}

const LoginPage = () => {
    return import ( /* webpackChunkName: "loginpage" */ '../views/LoginPage.vue')
}

const MyPage = () => {
    return import ( /* webpackChunkName: "mypage" */ '../views/MyPage.vue')
}


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/login',
            name: 'LoginPage',
            //beforeEnter: rejectAuthUser,
            component: LoginPage
        },
        {
            path: '/mypage',
            name: 'MyPage',
            beforeEnter: onlyAuthUser,
            component: MyPage
        }
    ]
})