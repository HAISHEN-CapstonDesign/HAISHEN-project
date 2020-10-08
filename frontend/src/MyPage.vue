<template>
  <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
    >
    <v-avatar
          color="blue"
          size="270"
        >
          <span class="white--text headline">profile</span>
        </v-avatar>
        <div style="float:right">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="success"
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
    </v-img>

    <br><br>

  <v-container fluid grid-list-sm>
    <v-row no-gutters>
      <v-col
        cols="6"
        md="4"
      >
      <v-card class="mx-auto" max-width="344" outlined>
      <v-card-title>
       닉네임
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
    >
      수정하기
    </v-btn>
      </v-card>
      </v-col>
    <!--집필중 글 목록-->
    <v-col
      cols="12"
      sm="6"
      md="8"
    >
        <v-layout column wrap>
          <v-flex>
            <p>진행중인 집필 목록</p>
          </v-flex>
          <v-flex>
            <v-row>
            <Writing></Writing>
            <Writing></Writing>
            <Writing></Writing>
            </v-row>

            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
          </v-flex>
          <v-flex>
            <p>집필 완료 목록</p>
          </v-flex>
          <v-flex>
            <v-row>
            <Complete></Complete>
            <Complete></Complete>
            <Complete></Complete>
            </v-row>
            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
          </v-flex>
          <v-flex>
            <p>구독하는 작가들/좋아요 한 글</p>
          </v-flex>
          <v-flex>
            <v-row>
              <v-col>
              <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-list>         
            <Subscribe></Subscribe>

        </v-list>
      </v-card>
    </v-col>
  </v-row>
              </v-col>
              <!--위>작가/아래>글-->
              <v-col>
<v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>

        <v-list>
          <Liked></Liked>
          <Liked></Liked>
          <Liked></Liked>
        </v-list>

      </v-card>
    </v-col>
  </v-row>

              </v-col>
            </v-row>
          </v-flex>
          <div class="text-center">
              <v-pagination
                v-model="page"
                :length="6"
              ></v-pagination>
            </div>
        </v-layout>
    </v-col>
    </v-row>

  </v-container>
  </v-app>
</template>

<script>
import Writing from './components/WritingList'
import Complete from './components/WritingCompleteList'
import Liked from './components/Liked'
import subscribe from './components/SubscribedWriter'

export default {
    name: 'MyPage',
    components: {
        Writing,
        Complete,
        Liked,
        subscribe,

  },
  data() {
    return {
      page: 1,
    
    }
  },

};
</script>