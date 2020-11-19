<template>
    <v-card id="mode_menu" style="top:0px;" max-width="300">
        <v-card-text>
            펀딩금액: 달성/목표
        </v-card-text>
        <v-card-text>
            목표 작업 기한, d-day
        </v-card-text>
        <v-card-text>
            모집 작가 수: 달성/목표
        </v-card-text>
        <v-card-text>
            작가로 참여하기/지원자 확인하기
        </v-card-text>
        <v-card-text>
            서포터로 후원하기
        </v-card-text>
    </v-card>
</template>
<script>
import $ from 'jquery';
export default {
    mounted(){
    //list가 스크롤을 따라오게 하는 코드
    $(document).ready(function() {
        var floatPosition_mode = parseInt($("#mode_menu").css('top'));
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
        var newPosition_mode = scrollTop + floatPosition_mode + "px";
	$("#mode_menu").stop().animate({
	"top" :  newPosition_mode
        }, 500);
	}).scroll();
    });
    },
    data() {
        return {
            editing: false,
        }
    },
    methods: {
        
    },
    
}
</script>