import Vue from 'vue'
import VueRouter from 'vue-router'
import myPage from '../views/MyPage.vue';
import postListPage from '../views/PostListPage.vue';
import collaboProjMain from '../views/CollaboProjMainPage.vue';
import myPageEdit from '../views/MyPageEdit';
import projectStart from '../views/ProjectStart'
import profitCheck from '../views/ProfitCheck'
import chooseWriter from '../views/ChooseWriter'
import basicCollaboTool from '../views/BasicCollaboTool'
//import test from '../views/test'

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

const SignUpPage = () => {
    return import ( /* webpackChunkName: "signuppage" */ '../views/SignUpPage.vue')
}

const AdvertisingPage = () => {
    return import ( /* webpackChunkName: "advertisingpage" */ '../views/Advertising.vue')
}

const ContentsReadingPage = () => {
    return import ( /* webpackChunkName: "contentsreadingpage" */ '../views/ContentsReading.vue')
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
            path: '/ad',
            name: 'AdvertisingPage',
            //beforeEnter: rejectAuthUser,
            component: AdvertisingPage
        },
        {
            path: '/contents',
            name: 'ContentsReadingPage',
            //beforeEnter: rejectAuthUser,
            component: ContentsReadingPage
        },
        {
            path: '/mypage',
            name: 'MyPage',
            component: myPage,
        },
        {
            path: "/myPageEdit",
            component: myPageEdit,
        },
        {
            path: '/signup',
            name: 'SignUpPage',
            component: SignUpPage
        },
        {
            path: '/postlist',
            name: 'PostListPage',
            component: postListPage,
        },
        {
            path: '/collaboProjMain',
            name: 'CollaboProjMain',
            component: collaboProjMain,
        },
        {
            path: '/projectStart',
            component: projectStart,
        },
        {
            path: '/profitCheck',
            component: profitCheck,
        },
        {
            path: '/chooseWriter',
            component: chooseWriter,
        },
        {
            path: '/basicCollaboTool',
            component: basicCollaboTool,
        },
        // {
        //      path: '/test',
        //      component: test,
        //  },
    ]
})