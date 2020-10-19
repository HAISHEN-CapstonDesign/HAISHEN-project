import Vue from 'vue'
import VueRouter from 'vue-router'
import myPage from '../views/MyPage.vue';
import signUpPage from '../views/SignUpPage.vue';
import postListPage from '../views/PostListPage.vue';
import collaboProjMain from '../views/CollaboProjMainPage.vue';
import MyPageEdit from '../views/MyPageEdit';
import ProjectStart from '../views/ProjectStart'
import ProfitCheck from '../views/ProfitCheck'


Vue.use(VueRouter);

// const rejectAuthUser = (to, from, next) => {
//     if (store.state.isLogin === true) {
//         alert('이미 로그인 되어 있습니다.')
//         next('/')
//     } else {
//         next()
//     }
// }

// const onlyAuthUser = (to, from, next) => {
//     if (store.state.isLogin === false) {
//         alert('로그인이 필요한 기능입니다')
//         next('/')
//     } else {
//         next()
//     }
// }

const MainPage = () => {
    return import ( /* webpackChunkName: "mainpage" */ '../views/MainPage.vue')
}

const LoginPage = () => {
    return import ( /* webpackChunkName: "loginpage" */ '../views/LoginPage.vue')
}

export default new VueRouter({
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
            component: myPage,
        },
        {
            path: "/MyPageEdit",
            component: MyPageEdit,
        },
        {
            path: '/signup',
            component: signUpPage,
        },
        {
            path: '/postlist',
            component: postListPage,
        },
        {
            path: '/collaboProjMain',
            component: collaboProjMain,
        },
        {
            path: '/projectStart',
            component: ProjectStart,
        },
        {
            path: '/profitCheck',
            component: ProfitCheck,
        },
    ]
})