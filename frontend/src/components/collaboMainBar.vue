<template>
    <v-card id="mode_menu" style="top:0px;" max-width="250" align="center">
        <v-card-text>
        <div align="left">
            <h3 style="font-size:15px" v-show="target_funding_money">펀딩금액: 달성/{{target_funding_money}}</h3>
            
            <h3 style="font-size:15px" v-show="!target_funding_money">펀딩 받지 않음</h3>
        </div>
            
        <div align="left">
            <v-row>
            <h3 class="ml-3" style="display:inline-block; font-size:15px" v-show="target_d_day">목표 작업 기한 {{target_d_day}}</h3>
            <h3 class="ml-3" style="display:inline-block; font-size:15px" v-show="!target_d_day">목표 작업 기한</h3> 
            <h3 class="ml-2" style="color:red; font-size:15px" v-show="!target_d_day">무기한</h3>
            </v-row>
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
            
            width="160"
            >
            <p style="color:white">작가로 참여하기</p>
            </v-btn>
            <v-btn
            @click="gotoChooseWriter"
            v-if='$store.state.mainornot'
            class="bar_btn my-2"
            color="#36B8B2"
            
            width="160"
            
            >
            <p style="color:white">지원자 확인하기</p>
            </v-btn>
            <v-btn
            @click="gotoSupport"
            class="bar_btn my-1"
            color="#36B8B2"
            width="160"

            >
            <p style="color:white">서포터로 후원하기</p>
            </v-btn>
            <v-btn
            v-if='$store.state.mainornot'
            @click="projectStart"
            class="bar_btn my-2"
            color="#36B8B2"
            width="160"
            
            >
            <p style="color:white">프로젝트 시작</p>
            </v-btn>
        </v-card-action>
    </v-card>
</template>
<script>
import $ from 'jquery';
import axios from 'axios'
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
            
            axios
                .post('http://localhost:3000/api/endRecruitingStartProject',{id:this.idp},{ headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                });

            axios.get(`http://localhost:3000/api/project/${this.idp}/index/0/makeChatRoom`)
            .then((res) => {
              
              console.log(res.data);
            })
            .catch(function (error) {
              console.log(error);
            });
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