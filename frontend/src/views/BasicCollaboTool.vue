<template>
  <v-app>
    <div>
      <br><br>
      <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="projectImage"
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
        v-bind:style="communityBtnStyle"
        @mouseover="hoverCommunity"
        @mouseout="endHoverCommunity"
        text
        >
          커뮤니티
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
          <h1>{{nowSubtitle}}</h1>
          <p>{{$moment(lastEditedDate).format('YYYY-MM-DD h:mm:ss a')}}, {{finalEditor}}</p>               

          <v-divider></v-divider>
          <Editor v-bind:mainText="mainText" @event-data="updateText"></Editor>
            
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
          <h1>{{nowSubtitle}}</h1>
          <p>{{$moment(lastEditedDate).format('YYYY-MM-DD h:mm:ss a')}}, {{finalEditor}}</p>               

          <v-divider></v-divider>

            <div v-html="mainText"></div>

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

export default {
    components: {
      Editor,
      Reply,
      Menu,
      Subtitle,
    },
    data() {
        return{
            isEditing: false,
            little_titles: [
            { idx:1, text:'기획보고서란', main:'<p>목차1</p>'},
            { idx:2, text:'유사 제품 서비스 동향', main:'<p>목차2</p>'},
            { idx:3, text:'관련 기술 동향', main:'<p>목차3</p>'},
            { idx:4, text:'유저 스토리', main:'<p>목차4</p>'},
            { idx:5, text:'UX/UI 설계', main:'<p>목차5</p>'},
            { idx:6, text:'시스템 설계', main:'<p>목차6</p>'},        
            ],
            finalEditor: "김ㅇㅇ",
            lastEditedDate: new Date(),
            title: '제목',
            nowSubtitle: '현재 목차',
            mainText: '<p>본문</p>',
            projectImage: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            infoBtnStyle: {
              color: 'black'
            },
            supporterBtnStyle: {
              color: 'black'
            },
            communityBtnStyle: {
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
        this.mainText = newText;
        this.little_titles[this.nowIdx].main = this.mainText;
      },
      editingChange(state){
        this.isEditing = state;
      },
      changeSubtitle(idx){
        this.nowSubtitle = this.little_titles[idx-1].text;
        this.nowIdx = idx-1;
        this.mainText = this.little_titles[this.nowIdx].main;
      },
      hoverSupporter(){
        this.supporterBtnStyle.color = 'brown'
      },
      hoverInfo(){
        this.infoBtnStyle.color = 'brown'
      },
      hoverCommunity(){
        this.communityBtnStyle.color = 'brown'
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
      endHoverCommunity(){
        this.communityBtnStyle.color = 'black'
      },
      endHoverEndProject(){
        this.endProjectBtnStyle.color = 'black'
      },
    },

}
</script>