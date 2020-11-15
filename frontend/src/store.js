import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes/page_index.js'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [{
                point: 100,
                name: 'hunmin',
                nickname: 'vtz',
                gender: 'male',
                s3key: 'null',
                id: 'null'
            },
            { id: 2, name: 'test', email: 'test@ajou.ac.kr', password: '123456' }
        ],
        //eve.holt@reqres.in
        //cityslicka
        isLogin: false,
        isLoginError: true,
        title: '캡스톤 디자인 프로젝트',
        subtitle: [
            { idx: 1, text: '기획보고서란' },
            { idx: 2, text: '유사 제품 서비스 동향' },
            { idx: 3, text: '관련 기술 동향' },
            { idx: 4, text: '유저 스토리' },
            { idx: 5, text: 'UX/UI 설계' },
            { idx: 6, text: '시스템 설계' },
        ],
        subId: 0,
        projectId: 1,
    },
    mutations: {
        // 로그인이 성공했을 때,
        loginSuccess(state, payload) {
            console.log('before login isLogin :' + state.isLogin)
            console.log('before login isLoginError :' + state.isLoginError)
            console.log('before login userInfo :' + JSON.stringify(state.userInfo))
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
            console.log('login success')
            console.log('after login isLogin :' + state.isLogin)
            console.log('after login isLoginError :' + state.isLoginError)
            console.log('after login userInfo :' + JSON.stringify(state.userInfo))
        },
        // 로그인이 실패했을 때
        loginError(state) {
            console.log('before isLogin :' + state.isLogin)
            console.log('before isLoginError :' + state.isLoginError)
            console.log('before userInfo :' + JSON.stringify(state.userInfo))
            state.isLogin = false
            state.isLoginError = true
            console.log('login fail')
            console.log('after isLogin :' + state.isLogin)
            console.log('after isLoginError :' + state.isLoginError)
            console.log('after userInfo :' + JSON.stringify(state.userInfo))
        },
        logout(state) {
            state.isLogin = false
            state.isLoginError = true
            state.userInfo = null
            localStorage.clear()
            console.log('logout')
            console.log('isLogin :' + state.isLogin)
            console.log('isLoginError :' + state.isLoginError)
            console.log('userInfo :' + JSON.stringify(state.userInfo))
        },
        changeSubId(state, payload) {
            state.subId = payload
        },
        changeProjectId(state, payload) {
            state.projectId = payload
        },
    },
    actions: {
        login({ commit }, loginObj) {
            axios
                .post('http://localhost:3000/api/user/account/auth', loginObj)
                .then(res => {
                    console.log('loginObj :' + JSON.stringify(loginObj))
                    console.log('loginObj_id :' + loginObj.identity)
                    console.log('loginObj_password :' + loginObj.password)
                    let token = res.data.accessToken
                    console.log('token :' + token)
                    localStorage.setItem('access_token', token)
                        // dispatch("getMemberInfo")

                    let userInfo = {
                        // id: response.data.data.id,
                        // first_name: response.data.data.first_name,
                        // last_name: response.data.data.last_name,
                        // avatar: response.data.data.avatar
                        point: res.data.userInfoDTO.point,
                        s3key: res.data.userInfoDTO.s3key,
                        name: res.data.userInfoDTO.name,
                        nickname: res.data.userInfoDTO.nickname,
                        gender: res.data.userInfoDTO.gender,
                        id: res.data.userInfoDTO.id
                    }
                    localStorage.setItem('name', userInfo.name)
                    localStorage.setItem('point', userInfo.point)
                    localStorage.setItem('nickname', userInfo.nickname)
                    localStorage.setItem('gender', userInfo.gender)
                    console.log('user Info :' + JSON.stringify(userInfo))
                    console.log('user info point : ' + userInfo.point)
                    console.log('user info s3key : ' + userInfo.s3key)
                    console.log('user info name : ' + userInfo.name)
                    console.log('user info nickname : ' + userInfo.nickname)
                    console.log('user info gender : ' + userInfo.gender)

                    commit('loginSuccess', userInfo)
                    router.push({ name: "MainPage" })
                })
                .catch((err) => {
                    console.log(err)
                    console.log('loginObj :' + loginObj)
                    console.log('loginObj_id :' + loginObj.identity)
                    console.log('loginObj_password :' + loginObj.password)
                    alert('아이디과 비밀번호를 확인하세요.')
                });
        },
        logout({ commit }) {
            commit('logout')
            router.push({ name: "MainPage" })
        },
        getMemberInfo({ commit }) {
            // let token = localStorage.getItem('access_token')
            let userInfo = {
                // id: response.data.data.id,
                // first_name: response.data.data.first_name,
                // last_name: response.data.data.last_name,
                // avatar: response.data.data.avatar
                point: localStorage.getItem('point'),
                name: localStorage.getItem('name'),
                nickname: localStorage.getItem('nickname'),
                gender: localStorage.getItem('gender')
            }
            if (localStorage.getItem("name") === null) {
                console.log('이미 로그아웃 된것을 새로고침 해서 머하나')
            } else {
                commit('loginSuccess', userInfo)
            }
            // axios
            //     .get("https://reqres.in/api/users/2", config)
            //     .then(response => {
            //         let userInfo = {
            //             // id: response.data.data.id,
            //             // first_name: response.data.data.first_name,
            //             // last_name: response.data.data.last_name,
            //             // avatar: response.data.data.avatar
            //             id: '1',
            //             identity: 'gnsals',
            //             name: '김훈민',
            //             nickname: 'vtz',
            //             gender: 'male'
            //         }
            //         console.log(response)
            //         commit('loginSuccess', userInfo)
            //     })
            //     .catch(() => {
            //         alert('beforcreate error')
            //     })
        }
        // signUp(signUpObj) {
        //     axios
        //         .post('/api/user/account/signup', signUpObj)
        //         .then(res => {
        //             console.log('성공' + res)
        //             console.log(signUpObj)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //             console.log(signUpObj)
        //             alert('post 요청 실패' + signUpObj)
        //         });
        // }
    },
})