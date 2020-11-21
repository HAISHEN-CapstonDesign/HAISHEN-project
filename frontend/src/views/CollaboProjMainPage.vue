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
export default {
    components: {
        // ProjIndex,
        // PostReply,
        // ProjContent,
        Toolbar,
    },
    data(){
        return{

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
    }

  }
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>