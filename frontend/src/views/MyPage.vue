<template>
  <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="250px"
      max-width="100%"
      :src="banner_src"
      gradient="to top right, rgba(150,150,150,.30), rgba(52,52,52,.9)"
    >
    <!-- <div style="position: absolute; top: 12%; left: 10%;"> -->
    <!-- <div style="position: absolute;  top: 12%; left: 10%;">
      <v-avatar
        size="180"
      >
        <v-img :src="avatar_src"></v-img>
        <span class="white--text headline">Avatar</span>
      </v-avatar>
    </div> -->
    </v-img>

  <v-container class="pl-16 ml-10" fluid grid-list-sm>
      <div style="float:right" class="mr-16">
      <v-row class="pr-16">
      <v-btn
            
            dark
            normal
            outlined
            color="#36B8B2"
            to='/myaccount'
            width="110"
            class="mr-4"
          >
            계좌 등록하기
          </v-btn>
          <v-btn
            
            outlined
            dark
            normal
            color="#36B8B2"
            to='/profitCheck'
            width="110"
          >
            수익 확인하기
          </v-btn>
      </v-row>
        </div>

        <br><br>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="4"
      >
      <v-card class="mx-auto" max-width="344" outlined>

            <v-img :src="avatar_src" max-height="400" max-width="344">
              </v-img>
  
        
       
      <v-card-title class="ml-1 text-h4 mb-3">
       {{ $store.state.userInfo.nickname }}
      </v-card-title>

     <v-card-subtitle class="ml-1">
       관심분야
     </v-card-subtitle>
     <v-chip class="ml-4">IT</v-chip>
     <v-chip class="ma-1">컴퓨터</v-chip>
     <v-card-subtitle>
       <v-text>
         기획과 IT, 음악을 좋아하는 제니입니다
         <br>
        글로 생각을 나누는 것은 즐거워요
        <br>
        함께 글을 쓰고 싶습니다
       </v-text>
       
     </v-card-subtitle>
     <div align="right">
       <v-btn
       text
      color="primary"
      to ="/mypageEdit"
    >수정하기</v-btn>
     </div>
     
      
    
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
          <v-flex class="ml-7 mt-5">
            <h3>구독하는 작가들/좋아요 한 글</h3>
          </v-flex>
          <v-flex class="ml-7">
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
      banner_src:require('@/assets/watch.jpg'),
      avatar_src:require('@/assets/jenny2.jpg'),
      
    
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