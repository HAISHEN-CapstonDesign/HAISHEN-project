<template>
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
</template>
<script>
import $ from 'jquery';
export default {
    mounted(){
    //list가 스크롤을 따라오게 하는 코드
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
    props: ['title'],
    data() {
        return {
            //sample
            little_titles: [
            { idx:1, text:'기획보고서란', main:'<p>목차1</p>'},
            { idx:2, text:'유사 제품 서비스 동향', main:'<p>목차2</p>'},
            { idx:3, text:'관련 기술 동향', main:'<p>목차3</p>'},
            { idx:4, text:'유저 스토리', main:'<p>목차4</p>'},
            { idx:5, text:'UX/UI 설계', main:'<p>목차5</p>'},
            { idx:6, text:'시스템 설계', main:'<p>목차6</p>'},        
            ],
        }
    },
}
</script>