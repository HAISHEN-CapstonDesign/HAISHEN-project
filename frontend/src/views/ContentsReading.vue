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
        <v-btn @click="increment" icon color="deep-orange">
            <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        {{ contents_like }}
        <v-btn class="l_btn" text>
          저자Info
        </v-btn>
        <v-btn class="l_btn" text>
          서포터
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
          <h2>{{title}}</h2>
          <v-divider></v-divider>
          <div class="pt-10">
           <h3>{{subtitle_1}}</h3>
           <v-spacer class = "pt-3"></v-spacer>
           <subtitle-2>{{contents_1}}</subtitle-2>
          </div>
          <div class="pt-10">
           <h3>{{subtitle_2}}</h3>
           <v-spacer class = "pt-3"></v-spacer>
           <subtitle-2>{{contents_2}}</subtitle-2>
          </div>
           <br>
             <!-- <PostReply @child_replySubmit="parent_replySubmit"></PostReply>
-->
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
// import PostReply from '../components/reply.vue'
import Advertising from './Advertising'
import Subtitle from '../components/subtitleForReading';
import axios from 'axios'
import store from '../store'
import {
    mapActions
} from "vuex"

export default {
    components: {
        // ProjIndex,
        // PostReply,
        Advertising,
        Subtitle
    },
    data: () => ( 
        {
        click_like: false,
        contents_like: 0, //axios로 좋아요 수 가져와야함
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
        title: '기획자의 트렌드, 소통, 배움, 이타심',
        subtitle_1: '트렌드와 소통, 끊임없는 배움',
        contents_1:'흔히 트렌드란 뭔가 재빠르게 세상을 따라가고, 핫플레이스를 좋아하는 패피들로 연상됩니다. 하지만 저는 트렌드를, 팀원과의 소통에 관한 관점으로 얘기해보려 합니다.',
        subtitle_2:'',
        contents_2:'',
        date: '2020.10.12 05:55',
        writer: ['김김김', '이이이', '박박박'],
        selected_idx: 0,
        temp_title_index:3
  }),
  methods:{
    ...mapActions(['paymentpoint']),
    selectIndex: function(title_idx){
        this.selected_idx= title_idx
        if(title_idx > 2){
            if( store.state.userInfo.point > 100 ){
                alert('유료컨텐츠 입니다. 포인트를 차감하여 열람하겠습니다') //진짜 결제할건지 dialog창 띄우기
                this.getFee_minuspoint(title_idx)
                
                //여기에 axios 요청 보내야함
            }
            else{
              this.dialog = true
            }
            // alert('유료컨텐츠 입니다.\n포인트가 없으므로 광고 시청후 열람하도록 하겠습니다.')
            //this.$router.push({ name: 'AdvertisingPage' })
            // this.overlay = !this.overlay
            
        }
        else{
            alert('무료컨텐츠 입니다.')
            alert(title_idx)
        }
    },
    getFee_minuspoint(title_idx){
        console.log('title_idx'+title_idx)
        axios
            .post('http://localhost:3000/api/getfee',{ id: parseInt(title_idx), projectId: parseInt(1) }, { headers: {'token': this.token}} )
            .then(res => {
                // localStorage.setItem('point',this.chargePoint)
                console.log(res.data)
                axios
                  .post('http://localhost:3000/api/minuspoint', {id:parseInt(this.temp_title_index), projectId:1, fee: res.data},{ headers: {'token': this.token}})
                  .then(request=> {
                      console.log(request.data)
                      localStorage.setItem('point',request.data) //local storage 에 바뀐 포인트 저장해야함 수정필요
                      console.log(request.data)
                      this.paymentpoint(request.data)
                  })
                  .catch((error) => {
                      console.log(error)
                  });
            })
            .catch((err) => {
                console.log(err)
                alert("에러가 발생했습니다. 다시 시도해주세요")
            });
    },
    request_minus_point(){
        // fee: 300; // 위에서 getfee해서 받아온 fee 넣기 !
        
        axios
            .post('http://localhost:3000/api/minuspoint', {postId:parseInt(this.temp_title_index), projectId:1, minusPoint: 100},{ headers: {'token': this.token}})
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
    },
    increment() {
      let like_click_user_nickname = localStorage.getItem('nickname')
      if(like_click_user_nickname != null && this.click_like == false){
        this.contents_like++;
        this.click_like = true
      }
      else if(like_click_user_nickname != null && this.click_like == true){
        this.contents_like--;
        this.click_like = false
      }
      
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
