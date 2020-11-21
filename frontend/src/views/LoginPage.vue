<template>
<v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap class="mt-15">
       
        <v-flex xs12>      
            <v-card>
            <div style="text-align : center;"> 
                <img src='../assets/login_img.png' height="100px"/>
            </div>
                <div class="pa-3">
                    <v-text-field v-model="identity" label="아이디를 입력하세요">
                    </v-text-field>
                    <v-text-field v-model="password" label="패스워드를 입력하세요" type="password">
                    </v-text-field>
                    <v-btn class="black white--text" depressed block large @click="login({ identity, password })">
                        LOGIN
                    </v-btn>
                </div>
                <div class="pa-5" style="text-align : center;">
                <v-btn text class="px-3" router :to="{name: 'SignUpPage'}">회원가입</v-btn>
                <subtitle-2 class="px-3">|</subtitle-2>
                <v-btn text class="px-3">아이디 찾기</v-btn>
                <subtitle-2 class="px-3">|</subtitle-2>
                <v-btn text class="px-3">비밀번호 찾기</v-btn>
                </div>
                <div class="px-5 | pt-5" style="text-align : center;">
                <subtitle-2 class="px-1">카카오 계정으로 크런치 서비스를 이용하세요</subtitle-2>
                </div>
                <div style="text-align : center;" id="app" class="pa-3">
                    <img alt="kakao logo" src="../assets/kakao_login_medium_wide.png" @click="loginWithKakao()" />
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import router from '../routes/page_index.js'
import store from '../store.js'

import {
    mapState,
    mapActions
} from "vuex"

export default {
    data: () => ({
        email: null,
        password: null,
    }),
    computed: {
        ...mapState(['isLogin', 'isLoginError'])
    },
    methods: {
        ...mapActions(['login']),

        // KakaoLogin
        loginWithKakao() {
            window.Kakao.Auth.login({
                scope: 'account_email,gender',
                success: function (authObj) {
                    alert(JSON.stringify(authObj))
                    console.log(authObj.access_token) // 발급받은 토큰 확인
                    localStorage.setItem("kakao_token", authObj.access_token); // 로컬 저장소에 저장
                    window.Kakao.Auth.setAccessToken(authObj.access_token); // 발급받은 토큰 할당
                    window.Kakao.API.request({
                        url: '/v2/user/me',
                        success: function (response) {
                            console.log(response);
                            let userInfo = {
                                id: response.kakao_account.id,
                                // first_name: response.data.first_name,
                                // last_name: response.data.last_name,
                                // avatar: response.data.avatar,
                                nickname: response.kakao_account.nickname,
                                gender: response.kakao_account.gender
                                // point: res.data.userInfoDTO.point,
                                // s3key: res.data.userInfoDTO.s3key,
                                // name: res.data.userInfoDTO.name,
                                // nickname: res.data.userInfoDTO.nickname,
                                // gender: res.data.userInfoDTO.gender,
                                // id: res.data.userInfoDTO.id
                                
                            }
                            console.log('userInfo :' + userInfo)
                            console.log('after userInfo :' + JSON.stringify(userInfo))
                            store.commit('loginSuccess', userInfo)
                            router.push({
                                name: "MainPage"
                            })
                        },
                        fail: function (error) {
                            console.log(error);
                        }
                    });
                },
                fail: function (err) {
                    alert(JSON.stringify(err))
                },
            })
        }
        // test(){
        //   // Make a request for a user with a given ID
        //   axios
        //   .get('https://reqres.in/api/users?page=2') //fake server 주소
        //   .then(res => { //arrow function으로 써주어야 위의 data()에서 다시 써먹을 수 있음
        //     // handle success
        //     console.log(res);
        //   })
        //   .catch(err => {
        //     // handle error
        //     console.log(err);
        //   })
        //   .then(()=> {
        //     console.log('test');
        //     // always executed
        //   });
        // },
        // postTest(){
        //   axios.post('https://reqres.in/api/register', {
        //   email: "eve.holt@reqres.in",
        //   password: "pistol"
        //   })
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        // }
    }
}
</script>
