<template>
  <v-app>
      <br><br>
      <v-img
        max-height="200"
        max-width="100%"
        src="../assets/banner.jpg"
        >
        <br><br>
            <p class="text-center white--text headline">
                제목
            </p>
            <p class="text-center white--text headline">
                간단한 내용 소개 간단한 내용 소개 간단한 내용 소개
            </p>
    </v-img>
    <v-container>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <v-card id="contents" style="top:250px; position: absolute;">
            <v-navigation-drawer
            floating
            permanent
            >
        <v-list
          dense
          rounded
        >
        <!--list item 생성은 v-for로 변경할 것-->
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>목차</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>1.1</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
            </v-card>
        </v-col>
        <v-col
        sm="8"
        md="9"
        >
        <v-card
        flat
        tile
        >
            <v-toolbar>
                <v-toolbar-title>최종 편집자: {{finalEditor}} 최종 편집 날짜: {{$moment(lastEditedDate).format('YYYY-MM-DD')}}</v-toolbar-title>
                <v-spacer></v-spacer>
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
            </v-toolbar>
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
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
import $ from 'jquery';

export default {
    mounted(){
    //목차가 스크롤을 따라오게 하는 코드
    $(document).ready(function() {
	var floatPosition = parseInt($("#contents").css('top'));
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var newPosition = scrollTop + floatPosition + "px";
	$("#contents").stop().animate({
	"top" : newPosition
	}, 500);
	}).scroll();
    });
    },
    data() {
        return{
            finalEditor: "김ㅇㅇ",
            lastEditedDate: new Date(),
            isEditing: false,
        }
    },
    methods: {

    },
}
</script>