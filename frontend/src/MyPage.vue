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

  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
      <v-card class="mx-auto" >
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
            </v-card>
    </v-flex>

    <!--집필중 글 목록-->
      <v-flex>
        <p>진행중인 집필 목록</p>
        <v-layout row wrap>
          <v-flex>
            
          </v-flex>
          <v-flex>
            <v-row>
            <Writing></Writing>
            <Writing></Writing>
            </v-row>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

  </v-app>
</template>

<script>
import Writing from './components/WritingList'

export default {
    name: 'MyPage',
    components: {
        Writing,
   
  },
  data: () => ({
    //
  }),
};
</script>