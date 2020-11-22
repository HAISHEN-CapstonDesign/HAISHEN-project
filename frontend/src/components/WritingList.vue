<template>
    <v-app>
      <div class="text-h5 mb-5">진행중인 집필 목록</div>
      <v-sheet
    class="mx-auto"
    elevation="8"
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
        v-slot:default="{ active}"
      >
        <v-card
          :color="active ? undefined : 'white lighten-1'"
          class="mx-auto"
          width="350"
          outlined
          tile
          @click="goDetailPage(chat.idx)"
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

    <div class="text-center">
      <v-chip class="mx-1" color="deep-purple" outlined v-for="member in chat.writers" :key="member" v-text="member"></v-chip>
    </div>    
    <v-card-text v-text="chat.progress"></v-card-text>

  </v-card>



      </v-slide-item>
    </v-slide-group>
  </v-sheet>

    </v-app>
</template>

<script>
  export default {
      name: 'Writing',
    methods: {
      goDetailPage(idx){
        //projectId 받아와서 변경하기 추가 필요
        this.$router.push(`/1/basicCollaboTool/${idx}`);
      }
    },
    data: () => ({
      list: [
        {
          idx: 1,
          title:'기획자의 트렌드, 소통, 배움, 이타심',
          image:require('../assets/partership.jpg'),
          intro: '트렌드와 소통, 끊임없는 배움',
          writers: ['Jennie', 'hello'],
          progress: '진행률'
        },
        {
          idx: 2,
          title:'제목2',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅁㅁ, 최ㅁㅁ, 강ㅁㅁ',
          progress: '진행률'
        },
        {
          idx: 3,
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