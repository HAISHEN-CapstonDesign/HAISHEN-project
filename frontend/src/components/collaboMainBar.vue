<template>
    <v-card id="mode_menu" style="top:0px;" max-width="250" align="center">
        <v-card-text>
        <div align="left">
            <h3 style="font-size:15px" v-show="target_funding_money">펀딩금액: 달성/{{target_funding_money}}</h3>
            
            <h3 style="font-size:15px" v-show="!target_funding_money">펀딩 받지 않음</h3>
        </div>
            <v-progress-linear color="#36B8B2" class="my-2" height="10" value="70"></v-progress-linear>
        <div align="left">
            <h3 style="font-size:15px" v-show="target_d_day">목표 작업 기한: {{target_d_day}}</h3>
            <h3 style="font-size:15px" v-show="!target_d_day">목표 작업 기한: 무기한</h3>
            <h3 style="font-size:15px" >모집 작가 수: {{mwn}}</h3>
        </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-action>
            <v-btn
            v-if='!$store.state.mainornot'
            @click="gotoWriterApply"
            class="bar_btn my-2"
            color="#36B8B2"
            dark
            width="160"
            >
            작가로 참여하기
            </v-btn>
            <v-btn
            @click="gotoChooseWriter"
            v-if='$store.state.mainornot'
            class="bar_btn my-2"
            color="#36B8B2"
            width="160"
            dark
            >
            지원자 확인하기
            </v-btn>
            <v-btn
            @click="gotoSupport"
            class="bar_btn my-1"
            color="#36B8B2"
            width="160"
            dark
            >
            서포터로 후원하기
            </v-btn>
            <v-btn
            v-if='$store.state.mainornot'
            @click="projectStart"
            class="bar_btn my-2"
            color="#36B8B2"
            width="160"
            dark
            >
            프로젝트 시작
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
        projectStart(){
            this.$router.push(`/${this.idp}/basicCollaboTool/1`);
        },
    },
    
}
</script>
<style scoped>
.bar_btn:hover{
    color:brown;
}
</style>