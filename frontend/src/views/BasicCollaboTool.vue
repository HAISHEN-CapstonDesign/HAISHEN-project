<template>
  <v-app>
    <div>
      <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="project.s3key"
        >
    </v-img>
    <v-row md = "6" sm="6">
      <v-spacer></v-spacer>
      <v-col
      md="4" sm="4"
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
    <!-- 개별 작성 페이지-->
    <v-container>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <Subtitle v-bind:title="title"></Subtitle>
        </v-col>
        <v-col
        sm="8"
        md="8"
        >
        <!-- isEditing -->
        <div v-if="isEditing" style="background-color: #FFD0A1">
        <v-container>
          <div style="background-color: white">
            <div v-show="isEditing" style="width: 70px; background-color: #FFD0A1; position: relative; left: 91%; text-align: center; color: white;">
            수정중
            </div>
          <v-container>
        <v-card
        flat
        tile
        >
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>
          <p>{{$moment(project.time).format('YYYY-MM-DD h:mm:ss a')}}, {{project.writerName}}</p>               

          <v-divider></v-divider>
          <Editor v-bind:mainText="nowMainText" @event-data="updateText"></Editor>
            
          </v-card>
          </v-container>
          </div>
        </v-container>
        </div>
        <!-- !isEditing -->
        <div v-else style="background-color: white">
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

            <div v-html="nowMainText"></div>

          </v-card>
          </v-container>
          </div>
        </v-container>
        </div>
        <Reply></Reply>
        </v-col>

        <v-col
        sm="2"
        md="1"
        >
          <Menu v-model="isEditing" @changeEdit="editingChange"></Menu>
        </v-col>
    </v-row>
    </v-container>
    </div>
  </v-app>
</template>

<script>
import Editor from '../components/editor';
import Reply from '../components/reply';
import Menu from '../components/modeMenu';
import Subtitle from '../components/subtitleList';
import axios from 'axios'

export default {
    components: {
      Editor,
      Reply,
      Menu,
      Subtitle,
    },
    created() {
      var id = this.$route.params.id;
      axios.get(`/api/project/1/blob/basicTool/${id}`)
        .then((res) => {
          this.project = res.data;
          this.nowMainText = this.project.post;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.config);
        });
    },
    data() {
        return{
            isEditing: false,
            title: '제목',
            subtitle:'목차',
            nowMainText: '',
            project: {},
            infoBtnStyle: {
              color: 'black'
            },
            supporterBtnStyle: {
              color: 'black'
            },
            endProjectBtnStyle: {
              color: 'black'
            },
        }
    },
    methods: {
      updateText(newText){
        //본문 변경 내용 저장
        this.nowMainText = newText;
        //this.little_titles[this.nowIdx].main = this.nowMainText;
      },
      editingChange(state){
        this.isEditing = state;
      },
      changeSubtitle(){
        //목차 클릭시 페이지 변경
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
    },
}
</script>