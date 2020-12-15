<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">{{title}}</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">_{{subtitle}}</div>
                    <v-card color="#FFEFD5">
                        <v-list color="#FFEFD5">
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>시간 </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 30%;">
                                    <v-list-item-title>코멘트</v-list-item-title>
                                </v-list-item-content>
                                 <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>작성자</v-list-item-title>
                                </v-list-item-content> 
                                <v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-item-title>상세보기</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <div
                            v-for="tmp in histories"
                            :key="tmp.commitId"
                            >
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>{{$moment(tmp.time).format('YYYY-MM-DD HH:mm')}}</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 30%;">
                                    <v-list-item-title v-text="tmp.commit_comment"></v-list-item-title>
                                </v-list-item-content>
                                 <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title v-text="tmp.writerName"></v-list-item-title>
                                </v-list-item-content> 
                                <v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-btn @click="showDetail(tmp.commitId)">
                                    <v-btn fab small depressed color="#D7AC87">
                                        <v-icon>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                    </v-list-btn>
                                </v-list-item-content>
                            </v-list-item>
                            </div>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col md="2">
                    <Menu
                    v-bind:clicked="isHistory"
                    v-bind:ids="ids"
                    v-bind:idp="idp"
                    ></Menu>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Menu from '../components/modeMenu3'
import axios from 'axios'
export default {
    name:'historyPage',
    components:{
        Menu,
    },
    created() {
        this.idp = this.$route.params.idp;
        this.ids = this.$route.params.ids;
        axios.post('http://localhost:3000/api/getTitle', 
          { id: this.idp}, 
          { headers: {'token':localStorage.getItem('access_token') }})
        .then(res=>{
            console.log(res.data)
            this.title = res.data
            
        })
        .catch((err) => {
                console.log(err)
        });
        axios.post('http://localhost:3000/api/getSubtitle', 
          { projectId: this.idp, postIndex: this.ids }, 
          { headers: {'token':localStorage.getItem('access_token') }})
        .then(res=>{
            console.log(res.data)
            this.subtitle = res.data
            
        })
        .catch((err) => {
                console.log(err)
        });
        axios.get(`http://localhost:3000/api/project/${this.idp}/commit/basicTool/${this.ids}`)
        .then((res) => {
          this.histories = res.data;
          
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error.config);
        });
    },
    data(){
        return{

            title:'',
            subtitle:'',
            isHistory:2, //히스토리 페이지에서 클릭
            idp:0,
            ids:0,
            idh:0,
            histories: [],
        }
    },
    methods: {
        showDetail(idx){
            this.$router.push(`/${this.idp}/${this.ids}/historyDetail/${idx}`);
        }
    },
}
</script>