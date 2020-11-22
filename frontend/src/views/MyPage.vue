<template>
  <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="250px"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
    >
    <div style="position: absolute; top: 12%; left: 10%;">
      <v-avatar
        color="blue"
        size="200"
      >
        <span class="white--text headline">Avatar</span>
      </v-avatar>
    </div>
    </v-img>

  <v-container fluid grid-list-sm>
      <div style="float:right;">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="success"
      to='/profitCheck'
    >
      <v-icon dark>
        mdi-currency-usd
      </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="warning"
    >
      <v-icon dark>
        mdi-bell
      </v-icon>
    </v-btn>
        </div>
        <br><br>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="4"
      >
      <v-card class="mx-auto" max-width="344" outlined>
      <v-card-title>
       {{ $store.state.userInfo.nickname }}
      </v-card-title>

     <v-card-subtitle>
       관심분야
     </v-card-subtitle>
     <v-chip>정치</v-chip>
     <v-chip>경제</v-chip>
     <v-card-subtitle>
       집필 수 등등 나머지 세부사항
     </v-card-subtitle>
     <v-btn
      text
      color="primary"
      to ="/mypageEdit"
    >
      수정하기
    </v-btn>
      </v-card>
      </v-col>
    <!--집필중 글 목록-->
    <v-col
      sm="6"
      md="8"
    >
        <v-layout column wrap>
          <v-flex>
            <v-row>
            <Writing></Writing>
            </v-row>
          </v-flex>
          <v-flex>
            <v-row>
            <Complete></Complete>
            </v-row>
          </v-flex>
          <v-flex>
            <p>구독하는 작가들/좋아요 한 글</p>
          </v-flex>
          <v-flex>
            <v-row>
              <v-col>
              <v-row>
                <v-col>
                  <v-card class="mx-auto">
                  <Sub></Sub>
                  </v-card>
                </v-col>
              </v-row>
              </v-col>
              <v-col>
                <v-row justify="center">
                  <v-col>
                    <v-card class="mx-auto">
                      <Liked></Liked>
                    </v-card>
                  </v-col>
                </v-row>
             </v-col>
            </v-row>
          </v-flex>
    </v-layout>
    </v-col>
    </v-row>

  </v-container>
  </v-app>
</template>

<script>
import Writing from '../components/WritingList'
import Complete from '../components/WritingCompleteList'
import Liked from '../components/Liked'
import Sub from '../components/SubscribedWriter'
import axios from 'axios'

import {
    mapState
} from "vuex"

export default {
    name: 'myPage',
    components: {
        Writing,
        Complete,
        Liked,
        Sub,

  },
  data() {
    return {
    
    }
  },
  computed: {
      ...mapState(['isLogin', 'isLoginError','userInfo'])
  },
  methods: {
  
  },
  created(){
    axios
      .post('http://localhost:3000/api/user/mypage',{ headers: {'token': localStorage.getItem('access_token')}})
      .then(res => {
        console.log(res.data)
      })
      .catch((err) => {
          console.log(err)
      });

  }
};
</script>