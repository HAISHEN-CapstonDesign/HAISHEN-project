<template>
    <v-app>
      <p>진행중인 집필 목록</p>
      <v-row>
      <v-card
      v-for="chat in list"
      :key="chat.title"
      class="mx-auto"
      max-width="344"
      outlined
      tile
      >
    <v-img
    :src="chat.image"
    height="200px"
    ></v-img>
    <v-card-title v-text="chat.title"></v-card-title>
    <v-card-text v-text="chat.intro"></v-card-text>
    <v-card-subtitle>
      작가 목록
    </v-card-subtitle>
    <v-card-text v-text="chat.writers"></v-card-text>
    
    <v-card-text v-text="chat.progress"></v-card-text>

  </v-card>
      </v-row>
  <br>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
    </v-app>
</template>

<script>
  export default {
      name: 'Writing',

    data: () => ({
      list: [
        {
          title:'제목1',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅇㅇ, 이ㅇㅇ, 박ㅇㅇ',
          progress: '진행률'
        },
        {
          title:'제목2',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅁㅁ, 최ㅁㅁ, 강ㅁㅁ',
          progress: '진행률'
        },
        {
          title:'제목3',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '한ㅇㅇ, 이ㅇㅇ, 김ㅇㅇ, 박ㅇㅇ',
          progress: '진행률'
        },
      ],

    }),
  }
</script>