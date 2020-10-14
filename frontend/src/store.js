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
                .post('https://reqres.in/api/login', loginObj)
                .then(res => {
                    let token = res.data.token
                    localStorage.setItem('access_token', token)
                    dispatch("getMemberInfo")
                })
                .catch((err) => {
                    console.log(err)
                    alert('이메일과 비밀번호를 확인하세요.1')
                });
        },
        logout({ commit }) {
            commit('logout')
            router.push({ name: "home" })
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
                    commit('loginSuccess', userInfo)
                })
                .catch(() => {
                    alert('이메일과 비밀번호를 확인하세요.2')
                })
        }
    }
})