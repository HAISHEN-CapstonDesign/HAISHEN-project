<template>
    <v-app>
        <v-row>
            <v-img
            class="white--text align-end"
            height="200px"
            src="../assets/banner2.jpg"
            >
            <p style="position: absolute; top: 30%; left:45%; font-size:50px;">제목</p>
            </v-img>

        </v-row>
        <v-container>
            <v-row cols="12">
                <v-col md="8">
                    <v-card min-height="500px">
                        <v-col align="center">
                            <v-btn text>소개</v-btn>
                            <v-btn text @click="writerInfo">저자 info</v-btn>
                            <v-btn text>목차</v-btn>
                            <v-btn text>서포터</v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <v-card>
                            <div v-show="nowList=='main'">대충 프로젝트 소개하는 내용</div>
                            <Writer v-show="nowList == 'writer'"></Writer>
                        </v-card>
                    </v-card>          
                </v-col>
                <v-col md="4">
                    <Toolbar></Toolbar>
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
            nowList:'main',
            token: localStorage.getItem('access_token'),
            projectId : this.$route.query.projectId,
            image: null,
            introduction: null,
            mwn: null,
            target_d_day: null,
            target_funding_money: null,
            title: null,

        }
    },
    created() {
        axios
            .post('http://localhost:3000/api/collaboProj',{id:this.$route.query.projectId}, { headers: {'token': this.token}})
            .then(res => {
                this.title = res.data.title
                this.introduction = res.data.introduction
                this.mwn = res.data.mwn
                this.image = res.data.image
                this.target_d_day = res.data.target_d_day
                this.target_funding_money = res.data.target_funding_money
                if(res.data.mainornot == 1){
                    store.state.mainornot = true
                }else if(res.data.mainornot == 0){
                    store.state.mainornot = false
                }
                console.log(res)
                
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
    writerInfo(){
        this.nowList = 'writer'
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