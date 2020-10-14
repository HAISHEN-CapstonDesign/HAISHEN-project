<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap class="mt-15">
      <v-flex xs12 >
        <v-alert
        class="mb-3"
          :value="isLoginError"
          type="error"
        >
          아이디와 비밀번호를 확인해주세요
        </v-alert>
        <v-alert
          :value="isLogin"
          type="success"
        >
          로그인이 완료되었습니다.
        </v-alert>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="이메일을 입력하세요"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              label="패스워드를 입력하세요"
              type="password"
            >
            </v-text-field>
            <v-btn
              color="primary"
              depressed
              block
              large
              @click="login({ email, password })">
              로그인
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
import { mapState, mapActions } from "vuex"



export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  computed: {
    ...mapState(['isLogin','isLoginError'])
  },
  methods: {
    ...mapActions(['login']),
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