<template>
    <v-card id="mode_menu" style="top:0px;" max-width="250" align="center">
        <v-card-text>
            <p v-show="target_funding_money">펀딩금액: 달성/{{target_funding_money}}</p>
            <p v-show="!target_funding_money">펀딩 받지 않음</p>
            <p v-show="target_d_day">목표 작업 기한: {{target_d_day}}</p>
            <p v-show="!target_d_day">목표 작업 기한: 무기한</p>
            <p>모집 작가 수: {{mwn}}</p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-action>
            <v-btn
            v-if='!$store.state.mainornot'
            @click="gotoWriterApply"
            class="bar_btn"
            text>
            작가로 참여하기
            </v-btn>
            <v-btn
            @click="gotoChooseWriter"
            v-if='$store.state.mainornot'
            class="bar_btn"
            text>
            지원자 확인하기
            </v-btn>
            <v-btn
            @click="gotoSupport"
            class="bar_btn"
            text>
            서포터로 후원하기
            </v-btn>
        </v-card-action>
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
        }, 700);
	}).scroll();
    });
    },
    props:['idp', 'target_funding_money', 'target_d_day','mwn'],
    data() {
        return {
            editing: false,
        }
    },
    methods: {
        gotoWriterApply(){
            this.$router.push(`/${this.idp}/WriterApply`);
        },
        gotoSupport(){
            this.$router.push(`/${this.idp}/funding`);
        },
        gotoChooseWriter(){
            this.$router.push(`/${this.idp}/chooseWriter`);
        },
    },
    
}
</script>
<style scoped>
.bar_btn:hover{
    color:brown;
}
</style>