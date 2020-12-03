<template>
    <v-app class="pl-10 mt-5">
        <h3 class="mb-3" >집필 완료 목록</h3>
<v-sheet
    class="mx-auto"
    elevation="1"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="chat in list"
        :key="chat.title"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'white lighten-1'"
          class="mx-auto"
          width="350"
          outlined
          tile
          @click="toggle"
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
      </v-slide-item>
    </v-slide-group>
</v-sheet>

    </v-app>
</template>

<script>
  export default {
      name: 'Complete',

    data: () => ({
      list: [
        {
          title:'제목1',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅇㅇ, 이ㅇㅇ, 박ㅇㅇ',
        },
        {
          title:'제목2',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅁㅁ, 최ㅁㅁ, 강ㅁㅁ',
        },
        {
          title:'제목3',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '한ㅇㅇ, 이ㅇㅇ, 김ㅇㅇ, 박ㅇㅇ',
        },
      ],
    }),
  }
</script>