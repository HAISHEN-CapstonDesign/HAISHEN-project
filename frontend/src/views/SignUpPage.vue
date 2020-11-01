<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap class="mt-15">
      <v-flex xs12 >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원가입</v-toolbar-title>
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
              @click="signUp"
              color="primary"
              depressed
              block
              large>
              회원가입
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
import { mapActions } from "vuex"
  export default {
    data: () => ({
      gender: ['남자', '여자']
    }),
    methods: {
      ...mapActions(['signUp'])
    }
  }
</script>