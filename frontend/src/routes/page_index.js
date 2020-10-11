import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginPage from '../components/LoginPage.vue';
import aboutPage from '../views/about.vue';
import MainPage from '../views/MainPage.vue';
import loginPage from '../views/loginPage.vue';
import myPage from '../views/MyPage.vue';
import signUpPage from '../views/SignUpPage.vue';
import postListPage from '../views/PostListPage.vue';
import collaboProjMain from '../views/CollaboProjMainPage.vue';
import MyPageEdit from '../views/MyPageEdit';
import ProjectStart from '../views/ProjectStart'
import ProfitCheck from '../views/ProfitCheck'

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