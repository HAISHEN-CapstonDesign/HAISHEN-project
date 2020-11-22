<template>
    <v-app>
        <v-row>
            <v-img
            class="white--text"
            max-height="200"
            max-width="100%"
            src="../assets/partership.jpg"
            gradient="to top right, rgba(150,150,150,.60), rgba(52,52,52,.7)"
            >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
                >
                <v-col
                align="center"
                justify="center"
                >
                <div class="display-1">{{this.title}}</div>
                </v-col>
                </v-row>
            </v-img>

        </v-row>
        <v-container>
            <v-row cols="12">
                <v-col md="9">
                    <v-card min-height="500px">
                        <v-col align="center">
                            <v-btn text @click="mainInfo">소개</v-btn>
                            <v-btn text @click="supporter">서포터</v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <div v-show="nowList=='main'">
                                <v-textarea
                                disabled
                                v-model="introduction"
                                solo
                                flat="flase"
                                ></v-textarea>
                            </div>
                            <Writer v-show="nowList == 'writer'"></Writer>
                            <div v-show="nowList=='subtitle'">프로젝트  목차 나열 나중에 편집기능도 넣어야 할듯</div>
                            <div v-show="nowList=='supporter'">프로젝트 서포터 리스트 component 제작필요</div>
                    </v-card>          
                </v-col>
                <v-col md="3">
                    <Toolbar
                    :idp="idp"
                    :target_funding_money="target_funding_money"
                    :target_d_day="target_d_day"
                    :mwn="mwn"
                    ></Toolbar>
                </v-col>
            </v-row>
        </v-container>
    </v-app> 
</template>

<script>
// import ProjIndex fro m '../components/projIndex.vue'
// import ProjContent from '../components/projContent.vue'
import Writer from '../components/writerCard'
import Toolbar from '../components/collaboMainBar'
import axios from "axios"
import {
    mapState
} from "vuex"
import store from "../store.js"

export default {
    components: {
        // ProjIndex,
        // PostReply,
        Writer,
        Toolbar,
    },
    props:{
        // projectId : {
        //     type: Number,
        //     default: 0
        // }
    },
    data(){
        return{
            idp:0,
            nowList:'main',
            token: localStorage.getItem('access_token'),
            projectId : this.$route.query.projectId,
            image: null,
            introduction: `이것은 프로젝트 소개글입니다.
주제가 어떤게 올지 몰라서 대충 쓰고 있는데 나중에 누군가 수정하길 바라며
아무 내용이나 적어두겠습니다.`,
            mwn: null,
            target_d_day: null,
            target_funding_money: null,
            title: null,

        }
    },
    created() {
        this.idp = this.$route.params.idp;
        axios
            .post('http://localhost:3000/api/collaboProj',{id:this.idp}, { headers: {'token': this.token}})
            .then(res => {
                this.title = res.data.title
               // this.introduction = res.data.introduction
                this.mwn = res.data.mwn
                this.image = res.data.image
                this.target_d_day = res.data.target_d_day
                this.target_funding_money = res.data.target_funding_money
                
                console.log(res)
                
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .post('http://localhost:3000/api/mainorapply',{id:this.idp}, { headers: {'token': this.token}})
            .then(res => {
                //1이면 main, 0이면 sub
                console.log(res.data)
                if(res.data == 1){
                    store.state.mainornot = true
                }else if(res.data == 0){
                    store.state.mainornot = false
                }
            })
            .catch((err) => {
                console.log(err)
                
            });
    },
    computed:{
        ...mapState(['mainornot']) //mainornot 안바뀌면 mapaction 만들어야함
    },
  methods:{
    selectIndex: function(title_idx){
        this.selected_idx= title_idx
        alert(title_idx)
    },
    parent_replySubmit: function(){
        alert("hello")
    },
    mainInfo(){
        this.nowList = 'main'
    },
    writerInfo(){
        this.nowList = 'writer'
    },
    subtitleList(){
        this.nowList = 'subtitle'
    },
    supporter(){
        this.nowList = 'supporter'
    },
    router_get(){
        alert(this.$route.query.projectId)
    }

  }
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>