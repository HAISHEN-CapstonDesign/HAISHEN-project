<template>
    <div>
    <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
        >
    </v-img>
    <v-container>
    <v-row md = "6" sm="6">
      <v-spacer></v-spacer>
      <v-col
      md="4" sm="3"
      >
        <v-btn
        class="l_btn"
        text
        >
          저자Info
        </v-btn>
        <v-btn
        class="l_btn"
        text
        >
          서포터
        </v-btn>
        <v-btn
        class="l_btn"
        text
        >
          프로젝트 종료
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <Subtitle v-bind:title="title" @selectIndex="selectIndex"></Subtitle>
        </v-col>
        <v-col
        sm="6"
        md="7"
        >
          <div style="background-color: white">
          <v-container>
        <v-card
        flat
        tile
        >
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>

          <v-divider></v-divider>
          <br>
            <ProjContent></ProjContent>
            <PostReply @child_replySubmit="parent_replySubmit"></PostReply>

          </v-card>
          </v-container>
          </div>
        </v-col>
        
      </v-row>
    </v-container>
        <v-overlay
          :z-index="zIndex"
          :value="overlay"
          :opacity="opacity"
          color="#282828"
        >
          <Advertising @endAd="endAd"></Advertising>
        </v-overlay>
    
    
</div>

</template>

<script>
// import ProjIndex fro m '../components/projIndex.vue'
import ProjContent from '../components/projContent.vue'
import PostReply from '../components/reply.vue'
import Advertising from './Advertising'
import Subtitle from '../components/subtitleForReading';
import axios from 'axios'
import store from '../store'

export default {
    components: {
        // ProjIndex,
        PostReply,
        ProjContent,
        Advertising,
        Subtitle
    },
    data: () => ( 
        {
        zIndex: 0,
        opacity: 0.9,
        overlay: false,
        menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '#',
                    title: 'Charts',
                    icon: 'fa fa-chart-area'
                },
            ],
        drawer: true,
        mini: true,
        imgUrl: require('../assets/banner2.jpg'),
        title: '캡디 기획 보고서 작성하기',
        date: '2020.10.12 05:55',
        writer: ['김김김', '이이이', '박박박'],
        selected_idx: 0,
        temp_title_index:3
  }),
  methods:{
    selectIndex: function(title_idx){
        this.selected_idx= title_idx
        if(title_idx > 2){
            if( store.state.userInfo.point > 100 ){
                alert('유료컨텐츠 입니다. 포인트 100을 차감하여 열람하겠습니다')
                store.state.userInfo.point = store.state.userInfo.point - 100
                //여기에 axios 요청 보내야함
            }
            alert('유료컨텐츠 입니다.\n포인트가 없으므로 광고 시청후 열람하도록 하겠습니다.')
            //this.$router.push({ name: 'AdvertisingPage' })
            this.overlay = !this.overlay
        }
        else{
            alert('무료컨텐츠 입니다.')
            alert(title_idx)
        }
    },
    getFee(title_idx){
        console.log((title_idx))
        axios
            .post('http://localhost:3000/api/getfee',{ id: parseInt(title_idx), projectId: parseInt(1) })
            .then(res => {
                // localStorage.setItem('point',this.chargePoint)
                console.log(res.data)
                alert(res.data)
                
            })
            .catch((err) => {
                console.log(err)
                alert("에러가 발생했습니다. 다시 시도해주세요")
                this.$router.push('/payment')
            });
    },
    request_minus_point(){
        // fee: 300; // 위에서 getfee해서 받아온 fee 넣기 !
        
        axios
            .post('http://localhost:3000/api/minuspoint', {postId:parseInt(this.temp_title_index), projectId:1, minusPoint: 300},{ headers: {'token': this.token}})
            .then(res=> {
                console.log(res.data)
            })
    },

    parent_replySubmit: function(){
        alert("hello")
    },
    sss(){
        alert('dfasd')
    },
    endAd(over){
        this.overlay = over;
    },
//나중에 페이지 나누고 코드 수정 후 활성화
    //  changeSubtitle(idx){
        //목차 클릭시 페이지 변경
        //this.$router.push(`/${this.$store.state.projectId}/basicCollaboTool/${idx}`);
     //},
  }
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>
