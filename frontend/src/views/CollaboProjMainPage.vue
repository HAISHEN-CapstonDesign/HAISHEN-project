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
                <div>{{this.title}}</div>
                </v-col>
                </v-row>
            </v-img>

        </v-row>
        <v-container fluid grid-list-sm pa-5>
            <v-row cols="12" justify="end">
                <v-col md="8">
                    <v-card max-height="600px" max-width="700px">
                        <v-col align="center">
                            <v-btn text @click="mainInfo">Introduction</v-btn>
                        </v-col>
                        <div>
                                <v-textarea
                                readonly
                                v-model="introduction"
                                solo
                                height="500px"
                                flat="flase"
                                ></v-textarea>
                            </div>
                    </v-card>
                    <br>
                    <v-card style="max-width:700px" height="500px">
                        <v-col align="center">
                            <v-btn text @click="supporter">Supporters</v-btn>
                        </v-col>
                            <Supporter></Supporter>
                    </v-card>          
     
                </v-col>
                
                <v-col md="2">

                    

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
//import Writer from '../components/writerCard'
import Toolbar from '../components/collaboMainBar'
import Supporter from '../components/supporterList'
import axios from "axios"
import {
    mapState
} from "vuex"
import store from "../store.js"

export default {
    components: {
        // ProjIndex,
        // PostReply,
        //Writer,
        Toolbar,
        Supporter,
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
            introduction: `흔히 트렌드란 뭔가 재빠르게 세상을 따라가고, 핫플레이스를 좋아하는 패피들로 연상됩니다. 하지만 저는 트렌드를, 팀원과의 소통에 관한 관점으로 얘기해보려 합니다.`,
            mwn: null,
            target_d_day: null,
            target_funding_money: null,
            title: null,

        }
    },
    created() {
        this.idp = this.$route.params.idp;
        console.log("---------------------------")
        console.log(this.idp)
        axios
            .post('http://localhost:3000/api/collaboProj',{id:this.idp}, { headers: {'token': localStorage.getItem('access_token')}})
            .then(res => {
                this.title = res.data.title
                this.introduction = res.data.introduction
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
            .post('http://localhost:3000/api/mainorapply',{id:this.idp}, { headers: {'token': localStorage.getItem('access_token')}})
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