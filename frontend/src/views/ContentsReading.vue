<template>
<v-app>
    <div>
    <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
        >
    </v-img>
    <v-row md = "6" sm="6">
      <v-spacer></v-spacer>
      <v-col
      md="4" sm="3"
      >
        <v-btn
        v-bind:style="infoBtnStyle"
        @mouseover="hoverInfo"
        @mouseout="endHoverInfo"
        text
        >
          저자Info
        </v-btn>
        <v-btn
        v-bind:style="supporterBtnStyle"
        @mouseover="hoverSupporter"
        @mouseout="endHoverSupporter"
        text
        >
          서포터
        </v-btn>
        <v-btn
        v-bind:style="endProjectBtnStyle"
        @mouseover="hoverEndProject"
        @mouseout="endHoverEndProject"
        text
        >
          프로젝트 종료
        </v-btn>
      </v-col>
    </v-row>

    <v-container>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col
        sm="6"
        md="7"
        >
        <div style="background-color: white">
        <v-container>
          <div style="background-color: white">
          <v-container>
        <v-card
        flat
        tile
        >
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>
          <p>{{$moment(project.time).format('YYYY-MM-DD h:mm:ss a')}}, {{project.writerName}}</p>               

          <v-divider></v-divider>
          <br>
            <div v-html="nowMainText"></div>

          </v-card>
          </v-container>
          </div>
        </v-container>
        </div>
        </v-col>
        <!-- <v-col cols=3><ProjIndex></ProjIndex></v-col> -->
        <!-- <v-col col-4> -->
            <!-- <v-card width="300" height="600">
                <v-navigation-drawer
                    v-model="drawer"
                    permanent
                    floating
                    width="400"         
                >
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="../assets/grid.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>{{title}}</v-list-item-title>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item
                            v-for="little_title in little_titles"
                            :key="little_title"
                            link
                        >

                        <v-list-item-content>
                            <v-list-item-title @click="selectIndex(little_title.idx)">
                                {{little_title.idx}}, {{ little_title.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card> -->
        <!-- </v-col> -->

        <!-- <v-col cols=4 align="center">
            <ProjContent></ProjContent>
            <PostReply @child_replySubmit="parent_replySubmit"></PostReply>
             
        </v-col> -->

        <v-col cols=4></v-col>
    </v-row>
        <v-overlay
          :z-index="zIndex"
          :value="overlay"
          :opacity="opacity"
          color="#282828"
        >
          <Advertising @endAd="endAd"></Advertising>
        </v-overlay>
    </v-container>
    
</div>
</v-app>
</template>

<script>
// import ProjIndex fro m '../components/projIndex.vue'
// import ProjContent from '../components/projContent.vue'
// import PostReply from '../components/reply.vue'
import Advertising from './Advertising'
import Subtitle from '../components/subtitleList';
import axios from 'axios'
import store from '../store'

export default {
    components: {
        // ProjIndex,
        // PostReply,
        // ProjContent,
        Advertising,
        Subtitle
    },
    created(){
        var id = this.$route.params.ids;
      this.subId = id;
      this.$store.commit('changeSubId', id)
      this.subtitle=this.$store.state.subtitle[id-1].text
      this.title=this.$store.state.title
      axios.get(`http://localhost:3000/api/project/1/blob/basicTool/${id}`)
        .then((res) => {
          this.project = res.data;
          this.nowMainText = this.project.post;
          //this.imgUrl = this.project.s3key;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.response);
        });
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
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,
        imgUrl: require('../assets/banner2.jpg'),
        title: '캡디 기획 보고서 작성하기',
        date: '2020.10.12 05:55',
        writer: ['김김김', '이이이', '박박박'],
        little_titles: [
            { idx:1, text:'기획보고서란'},
            { idx:2, text:'유사 제품 서비스 동향'},
            { idx:3, text:'관련 기술 동향'},
            { idx:4, text:'유저 스토리'},
            { idx:5, text:'UX/UI 설계'},
            { idx:6, text:'시스템 설계'},
            { idx:7, text:'청춘예찬'},
            { idx:8, text:'별헤는밤'},
           
        ],
        selected_idx: 0
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
    parent_replySubmit: function(){
        alert("hello")
    },
    sss(){
        alert('dfasd')
    },
    endAd(over){
        this.overlay = over;
    },
    hoverSupporter(){
        this.supporterBtnStyle.color = 'brown'
      },
      hoverInfo(){
        this.infoBtnStyle.color = 'brown'
      },
      hoverEndProject(){
        this.endProjectBtnStyle.color = 'brown'
      },
      endHoverInfo(){
        this.infoBtnStyle.color = 'black'
      },
      endHoverSupporter(){
        this.supporterBtnStyle.color = 'black'
      },
      endHoverEndProject(){
        this.endProjectBtnStyle.color = 'black'
      },
      changeSubtitle(idx){
        //목차 클릭시 페이지 변경
        this.$router.push(`/${this.$store.state.projectId}/basicCollaboTool/${idx}`);
      },
  }
}
</script>
