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
    <v-container>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <v-card id="contents" style="top:300px; position: absolute;">
            <v-navigation-drawer
            floating
            permanent
            >
        <v-list
          dense
          rounded
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
          v-for="little_title in little_titles"
          :key="little_title"
          @click="changeSubtitle(little_title.idx)"
          link
          >
            <v-list-item-content>
              <v-list-item-title>{{little_title.idx}}. {{ little_title.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
            </v-card>
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
          <v-card id="mode_menu" style="top:400px; position: absolute;" max-width="127">

        <v-list
          dense
          rounded
        >
        <v-list-item-group active-class="brown--text">
          <v-list-item
          :disabled="isEditing"
          @click="isEditing = !isEditing"
          link
          >
            <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-pencil</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">EDIT</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickHistory" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-history</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">HISTORY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickCommunity" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-forum</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">COMMUNITY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          :disabled="!isEditing"
          @click="clickSubmit"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-check-circle</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">SUBMIT</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>

            </v-card>
        </v-col>
    </v-row>
    </v-container>
    </div>
  </v-app>
</template>

<script>
import $ from 'jquery';
import Editor from '../components/editor';
import Reply from '../components/reply';

export default {
    mounted(){
    //list가 스크롤을 따라오게 하는 코드
    $(document).ready(function() {
  var floatPosition = parseInt($("#contents").css('top'));
  var floatPosition_mode = parseInt($("#mode_menu").css('top'));
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
  var newPosition = scrollTop + floatPosition + "px";
  var newPosition_mode = scrollTop + floatPosition_mode + "px";
	$("#contents").stop().animate({
	"top" : newPosition
  }, 500);
  $("#mode_menu").stop().animate({
	"top" : newPosition_mode
	}, 500);
	}).scroll();
    });

    },
    components: {
      Editor,
      Reply,
    },
    data() {
        return{
            finalEditor: "김ㅇㅇ",
            lastEditedDate: new Date(),
            isEditing: false,
            title: '제목',
            nowSubtitle: '현재 목차',
            mainText: '<p>본문</p>',
            projectImage: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            little_titles: [
            { idx:1, text:'기획보고서란'},
            { idx:2, text:'유사 제품 서비스 동향'},
            { idx:3, text:'관련 기술 동향'},
            { idx:4, text:'유저 스토리'},
            { idx:5, text:'UX/UI 설계'},
            { idx:6, text:'시스템 설계'},        
            ],
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
      clickCommunity(){
        if(this.isEditing == true){
          alert('수정한 내용이 저장되지 않습니다.');
          this.isEditing = !this.isEditing
          //해당 목차 채팅방으로 이동
        }
      },
      clickHistory(){
        if(this.isEditing){
          alert('수정한 내용이 저장되지 않습니다.');
          this.isEditing = !this.isEditing
          //history page로 이동
        }
      },
      updateText(newText){
        //본문 변경 내용 저장
        this.mainText = newText;
      },
      clickSubmit(){
        if(this.isEditing){
          //DB에 내용 저장
          this.isEditing = !this.isEditing
        }
      },
      changeSubtitle(idx){
        this.nowSubtitle = this.little_titles[idx-1].text;
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