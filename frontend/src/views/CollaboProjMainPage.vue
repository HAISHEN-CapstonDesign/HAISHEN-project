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
        <v-row>
            <v-btn @click="getAlldata()">getAlldata</v-btn>            
        </v-row>
        <v-col>
            <div>title: {{ title }}</div>
            <div>introduction: {{ introduction }}</div>
            <div>mwn: {{ mwn }}</div>
            <div>target_d_day: {{ target_d_day }}</div>
            <div>target_funding_money: {{ target_funding_money }}</div>
            <div>image: {{ image }}</div>
        </v-col>
        <v-container>
            <v-row cols="12">
                <v-col md="8" align="center">
                    <v-card min-height="500px">
                        <v-col align="center">
                            <v-btn text>소개</v-btn>
                            <v-btn text @click="sss">저자 info</v-btn>
                            <v-btn text>목차</v-btn>
                            <v-btn text>서포터</v-btn>
                        </v-col>
                        <v-divider></v-divider>
                        <v-card-title>
                            나중에 내용 꾸미기
                        </v-card-title>
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
// import PostReply from '../components/reply.vue'
import Toolbar from '../components/collaboMainBar'
import axios from "axios"
export default {
    components: {
        // ProjIndex,
        // PostReply,
        // ProjContent,
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
        
  methods:{
    selectIndex: function(title_idx){
        this.selected_idx= title_idx
        alert(title_idx)
    },
    parent_replySubmit: function(){
        alert("hello")
    },
    sss(){
        alert('dfasd')
    },
    getAlldata(){
        // var data = {

        // }
         axios
            .post('http://localhost:3000/api/collaboProj',{id:this.$route.query.projectId}, { headers: {'token': this.token}})
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