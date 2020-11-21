<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap class="mt-15">
      
      <v-flex xs12 >
        <v-card>
          <div style="text-align : center;">
            <img src='../assets/sign_up_img.png' height="100px"/>
          </div>
          <div class="pa-3">
            <v-text-field
              v-model="identity"
              label="아이디를 입력하세요"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              label="패스워드를 입력하세요"
              type="password"
            >
            </v-text-field>
            <v-text-field
              v-model="password_check"
              label="패스워드를 한번 더 입력하세요"
              type="password"
            >
            </v-text-field>
            <v-text-field
              v-model="name"
              label="이름을 입력하세요"
            >
            </v-text-field>
            <v-text-field
              v-model="nickname"
              label="사용할 닉네임을 입력하세요"
            >
            </v-text-field>
            <v-autocomplete
                v-model="gender"
                :items="gender"
                dense
                filled
                label="성별을 입력해주세요"
            ></v-autocomplete>
            <v-btn
              @click="signUp({ identity, password, name, nickname, gender })"
              class="black white--text"
              depressed
              block
              large>
              Sign Up
            </v-btn>
            <!-- <v-btn @click="test">테스트</v-btn>
            <v-btn @click="postTest">포스트 테스트</v-btn> -->
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios"
import router from '../routes/page_index.js'

  export default {
    data: () => ({
      gender: ['male', 'female']
    }),
    methods: {
      signUp(signUpObj) {
            axios
                .post('http://localhost:3000/api/user/account/signup', signUpObj)
                .then(res => {
                    console.log('성공' + res)
                    console.log(signUpObj)
                    alert('회원가입이 완료 되었습니다. 가입하신 아이디로 로그인해 주세요')
                    router.push({ name: "MainPage" })
                })
                .catch((err) => {
                    console.log(err)
                    console.log(signUpObj)
                    alert('post 요청 실패' + signUpObj)
                });
        }
    }
  }
</script>