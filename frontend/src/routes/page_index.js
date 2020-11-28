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
import community from '../views/Community'
import historyPage from '../views/History'
import historyDetail from '../views/HistoryDetail'
import writerList from '../views/WriterList'
import funding from '../views/Funding'


import diff from '../views/diffTest'
import WriterApply from '../views/WriterApply'
// import { component } from 'vue/types/umd';

// import store from '../store'

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

const AccountLinkPage = () => {
    return import ( /* webpackChunkName: "accountlinkpage" */ '../views/AccountLink.vue')
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

const PaymentPage = () => {
    return import ( /* webpackChunkName: "paymentpage" */ '../views/Payment.vue')
}

const MyAccountPage = () => {
    return import ( /* webpackChunkName: "myaccountpage" */ '../views/MyAccount.vue')
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
            // beforeEnter: rejectAuthUser,
            component: LoginPage
        },
        //광고 페이지는 component로 바꿔서 routing 안해도 됩니다!
        {
            path: '/accountlink',
            name: 'AccountLinkPage',
            // beforeEnter: rejectAuthUser,
            component: AccountLinkPage
        },
        {
            path: '/ad',
            name: 'AdvertisingPage',
            // beforeEnter: rejectAuthUser,
            component: AdvertisingPage
        },
        {
            path: '/contents/:idc',
            name: 'ContentsReadingPage',
            component: ContentsReadingPage,

        },
        {
            path: '/myaccount',
            name: 'MyAccountPage',
            component: MyAccountPage,
        },
        {
            path: '/payment',
            name: 'PaymentPage',
            // beforeEnter: onlyAuthUser,
            component: PaymentPage
        },
        {
            path: '/mypage',
            name: 'MyPage',
            // beforeEnter: onlyAuthUser,
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
            path: '/:idp/collaboProjMain',
            name: 'CollaboProjMain',
            component: collaboProjMain,
            // props: true
        },
        {
            path: '/projectStart',
            // beforeEnter: onlyAuthUser,
            component: projectStart,
        },
        {
            path: '/profitCheck',
            component: profitCheck,
        },
        {
            path: '/:idp/chooseWriter',
            component: chooseWriter,
        },
        {
            path: '/:idp/basicCollaboTool/:ids',
            component: basicCollaboTool,
        },
        {
            path: '/:idp/:ids/historyPage',
            name: 'historyPage',
            component: historyPage,
        },
        {
            path: '/:idp/:ids/historyDetail/:idh',
            name: 'historyDetail',
            component: historyDetail,
        },
        {
            path: '/community',
            name: 'community',
            component: community,
        },
        {
            path: '/:idp/writerList',
            name: 'writerList',
            component: writerList,
        },
        {
            path: '/:idp/funding',
            name: 'fundingPage',
            component: funding,
        },
        {
            path: '/test',
            component: diff,
        },
        {
            path: '/:idp/WriterApply',
            name: WriterApply,
            component: WriterApply
        }

    ]
})