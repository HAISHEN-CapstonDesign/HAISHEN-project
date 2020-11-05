<template>
  <v-app>
    <div style="background-color: #FFE4B5;">
      <br><br>
      <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="projectImage"
        >
    </v-img>
    <v-row md = "6">
      <v-spacer></v-spacer>
      <v-col
      md="4"
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
          프로젝트 종료하기
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
        <v-card
        flat
        tile
        >
<!--
                <v-btn>
                    히스토리
                </v-btn>
                <v-btn
                :disabled="isEditing"
                @click="isEditing = !isEditing"
                >
                    수정
                </v-btn>
                <v-btn>
                    삭제
                </v-btn>
                <v-btn
                :disabled="!isEditing"
                @click="isEditing = !isEditing"
                >
                    완료
                </v-btn>
                -->
                <h3>{{title}}</h3>
                <h1>{{subtitle}}</h1>
                <p>{{$moment(lastEditedDate).format('YYYY-MM-DD h:mm:ss a')}}, {{finalEditor}}</p>               
            <v-toolbar
            :hidden="!isEditing"
            >
                <v-toolbar-title>글쓰기 도구</v-toolbar-title>
                
            </v-toolbar>
            <v-textarea
            solo
            name="mainText"
            label="본문"
            :disabled="!isEditing"
            height="1500"
            ></v-textarea>
        </v-card>
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
          <v-list-item
          v-for="mode in modes"
          :key="mode"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon v-text="mode.icon"></v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">{{ mode.text }}</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
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
    data() {
        return{
            finalEditor: "김ㅇㅇ",
            lastEditedDate: new Date(),
            isEditing: false,
            title: '제목',
            subtitle: '현재 목차',
            projectImage: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            little_titles: [
            { idx:1, text:'기획보고서란'},
            { idx:2, text:'유사 제품 서비스 동향'},
            { idx:3, text:'관련 기술 동향'},
            { idx:4, text:'유저 스토리'},
            { idx:5, text:'UX/UI 설계'},
            { idx:6, text:'시스템 설계'},        
            ],
            modes: [
              { icon: 'mdi-pencil', text: 'EDIT'},
              { icon: 'mdi-history', text: 'HISTORY'},
              { icon: 'mdi-forum', text: 'COMMUNITY'},
              { icon: 'mdi-check-circle', text: 'SUBMIT'},
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