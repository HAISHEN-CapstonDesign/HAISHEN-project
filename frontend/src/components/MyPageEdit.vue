<template>
  <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <br><br>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
        <v-layout column wrap align-center>
          <v-flex>
        <v-avatar
          color="blue"
          size="270"
        >
          <span class="white--text headline">profile</span>
        </v-avatar>
        </v-flex>
        <v-flex>
        <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="blue-grey"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
          medium
        >
          Upload
          <v-icon
            right
            dark
          >
            mdi-cloud-upload
          </v-icon>
        </v-btn>
        </v-flex>
        <v-flex>
        <v-btn
          color="secondary"
          medium
        >
        Info update
        </v-btn>
        </v-flex>
        </v-layout>
        </v-flex>
    <!--좌측 끝 / 우측 시작-->
      <v-flex>
        <v-layout column wrap>
          <v-flex>
        <span style="font-size:25px">Nickname: </span>
        <input v-model="nickname" placeholder="nickname" style="height:30px">
        <v-btn
          class="ma-2"
          outlined
          small
          fab
          color="indigo"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
          </v-flex>
          <v-flex>
          <span style="font-size:25px">Interests </span>
          <v-btn
            class="ma-2"
            outlined
            small
            fab
            color="indigo"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          </v-flex>
          <v-flex>
          <span style="font-size:25px">Career </span>
          <textarea v-model="message" placeholder="Career"></textarea>
          <v-btn
            class="ma-2"
            outlined
            small
            fab
            color="indigo"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

  </v-app>
</template>

<script>

export default {
  name: 'MyPageEdit',

  data: () => ({
    //
  }),
};
</script>