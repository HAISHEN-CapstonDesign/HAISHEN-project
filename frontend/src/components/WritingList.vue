<template>
    <v-app class="pl-10">
      <h3 class="mb-3">진행중인 집필 목록</h3>
      <v-sheet
    class="mx-auto"
    elevation="1"
    max-width="820"
    outlined="true"
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
          @click="goDetailPage(chat.projectId)"
        >
         
      <v-img
      :src="chat.image"
      height="200px"
      ></v-img>
    <v-card-title v-text="chat.title"></v-card-title>
    <v-card-text v-text="chat.introduction"></v-card-text>
    <v-card-subtitle>
      작가 목록
    </v-card-subtitle>

    <div class="ml-3">
      <v-chip class="mx-1" color="deep-purple" outlined v-for="member in chat.writerList" :key="member" v-text="member"></v-chip>
    </div>    
    <!--<v-card-text v-text="chat.progress"></v-card-text>-->

  </v-card>



      </v-slide-item>
    </v-slide-group>
  </v-sheet>

    </v-app>
</template>

<script>
import axios from 'axios'
  export default {  
    name: 'Writing',
    created(){
      //작성중인 프로젝트 목록 가져오기
      axios
        .post('http://localhost:3000/api/mypageWritingProjectList',{tmp:1},{ headers: {'token': localStorage.getItem('access_token')}})
        .then(res => {
          console.log(res.data)
          this.getList = res.data
          this.getList.forEach((element,index) => {
            console.log(this.imgSrcList[index])
            console.log(typeof(this.imgSrcList[index]))
            // imgsrc = this.imgSrcList[index]
            this.list.push(
              {

                title: element.title,
                projectId: element.projectId,
                writerList: element.writerNicknameList,
                introduction: element.introduction,
                // image: `${this.imgSrcList[index]}`
                
                image: require('../assets/partership.jpg')
                // image:''
              }
            )
            
          });
        })
        .catch((err) => {
            console.log(err)
        });
    },
    methods: {
      goDetailPage(idx){
        //projectId 받아와서 변경하기 추가 필요
        this.$router.push(`/109/basicCollaboTool/${idx}`);
      }
    },
    data: () => ({
      getList:[],
      project_src1:require('@/assets/student_1.jpg'),
      project_src2:require('@/assets/student_2.jpg'),
      imgSrcList:[
        '../assets/partership.jpg',
        '@/assets/student_2.jpg',
        '@/assets/student_1.jpg'
      ],
      list: [
        // {
        //   idx: 1,
        //   title:'기획자의 트렌드, 소통, 배움, 이타심',
        //   image:require('../assets/partership.jpg'),
        //   intro: '트렌드와 소통, 끊임없는 배움',
        //   writers: ['Jennie', 'hello'],
        //   progress: '진행률'
        // },
        // {
        //   idx: 2,
        //   title: '기계는 소비를 못한다',
        //   image: require('@/assets/student_2.jpg'),
        //   intro: '인공지능의 발달이 우리에게 부를 가져다줄까? 다시 생각해보자',
        //   writers: ['Jennie', 'Lisa', 'Rose'],
        //   progress: '진행률'
        // },
        // {
        //   idx: 3,
        //   title:'제목3',
        //   image: require('@/assets/student_1.jpg'),
        //   intro: '간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개',
        //   writers: '한ㅇㅇ, 이ㅇㅇ, 김ㅇㅇ, 박ㅇㅇ',
        //   progress: '진행률'
        // },
      ],

    }),
  }
</script>