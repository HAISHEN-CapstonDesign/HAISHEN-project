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
export default {
    components: {
        // ProjIndex,
        // PostReply,
        Writer,
        Toolbar,
    },
    data(){
        return{
            nowList:'main',
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
    writerInfo(){
        this.nowList = 'writer'
    }

  }
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>