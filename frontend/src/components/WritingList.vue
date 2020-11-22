<template>
    <v-app>
      <div class="text-h5 mb-5">진행중인 집필 목록</div>
      <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="820"
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
      name: 'Writing',
    methods: {
      goDetailPage(idx){
        //projectId 받아와서 변경하기 추가 필요
        this.$router.push(`/1/basicCollaboTool/${idx}`);
      }
    },
    data: () => ({
      project_src1:require('@/assets/student_1.jpg'),
      project_src2:require('@/assets/student_2.jpg'),
      list: [
        {
          idx: 1,
          title:'제목1',
          image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '김ㅇㅇ, 이ㅇㅇ, 박ㅇㅇ',
          progress: '진행률'
        },
        {
          idx: 2,
          title: '기계는 소비를 못한다',
          image: require('@/assets/student_2.jpg'),
          intro: '인공지능의 발달이 우리에게 부를 가져다줄까? 다시 생각해보자',
          writers: 'Jennie, Lisa, Rose, ',
          progress: '진행률'
        },
        {
          idx: 3,
          title:'제목3',
          image: require('@/assets/student_1.jpg'),
          intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
          writers: '한ㅇㅇ, 이ㅇㅇ, 김ㅇㅇ, 박ㅇㅇ',
          progress: '진행률'
        },
      ],

    }),
  }
</script>