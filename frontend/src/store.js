import Vue from 'vue'
import Vuex from 'vuex'
import router from './routes/page_index.js'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            { id: 1, name: 'hunmin', email: 'gnsals0904@ajou.ac.kr', password: '123456' },
            { id: 2, name: 'test', email: 'test@ajou.ac.kr', password: '123456' }
        ],
        //eve.holt@reqres.in
        //cityslicka
        isLogin: false,
        isLoginError: false
    },
    mutations: {
        // 로그인이 성공했을 때,
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload

        },
        // 로그인이 실패했을 때
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state) {
            state.isLogin = false
            state.isLoginError = false
            state.userInfo = null
        }
    },
    actions: {
        login({ dispatch }, loginObj) {
            axios
                .post('http://localhost:3000/api/user/account/auth', loginObj)
                .then(res => {
                    console.log('loginObj :' + loginObj)
                    console.log('loginObj_id :' + loginObj.identity)
                    console.log('loginObj_password :' + loginObj.password)
                    let token = res.data.token
                    console.log('token :' + token)
                    localStorage.setItem('access_token', token)
                    dispatch("getMemberInfo")
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
            let token = localStorage.getItem('access_token')
            let config = {
                headers: {
                    "access-token": token
                }
            }
            axios
                .get("https://reqres.in/api/users/2", config)
                .then(response => {
                    let userInfo = {
                        id: response.data.data.id,
                        first_name: response.data.data.first_name,
                        last_name: response.data.data.last_name,
                        avatar: response.data.data.avatar
                    }
                    console.log(response)
                    commit('loginSuccess', userInfo)
                })
                .catch(() => {
                    alert('이메일과 비밀번호를 확인하세요.2')
                })
        },
        // signUp(signUpObj) {
        //     // const fd = new FormData()
        //     // fd.append('info', signUpObj)
        //     axios
        //         .post('http://localhost:3000/api/user/account/signup', signUpObj.allUsers)
        //         .then(res => {
        //             console.log('성공' + res)
        //             console.log(signUpObj.name)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //             console.log(signUpObj)
        //             alert('post 요청 실패' + signUpObj)
        //         });
        // }
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
    }
})