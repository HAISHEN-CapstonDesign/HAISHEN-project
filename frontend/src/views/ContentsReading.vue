<template>
    <div>
    <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
        >
    </v-img>
    <v-container>
    <v-col align="end">
        <v-btn class="l_btn" text>
          저자Info
        </v-btn>
        <v-btn class="l_btn" text>
          서포터
        </v-btn>
        <v-btn class="l_btn" text>
          프로젝트 종료
        </v-btn>
      </v-col>
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

        <!-- dialog area -->
        <v-dialog
          v-model="dialog"
          persistent
          max-width="500"
        >
      <v-card>
        <v-card-title class="headline">
          유료 컨텐츠 입니다. 포인트를 충전하거나 광고를 시청해야 열람하실 수 있습니다.
        </v-card-title>
        <v-card-text>광고를 시청하고 무료로 열람하시겠습니까?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            아니요
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialogAd()"
          >
            네
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- dialog area endline -->
    
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
        dialog: false,
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
            // alert('유료컨텐츠 입니다.\n포인트가 없으므로 광고 시청후 열람하도록 하겠습니다.')
            //this.$router.push({ name: 'AdvertisingPage' })
            // this.overlay = !this.overlay
            this.dialog = true
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
    dialogAd(){
      this.dialog = false
      this.overlay = !this.overlay
    }
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
