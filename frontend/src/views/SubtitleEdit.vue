<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col align="center">
                    <v-card
                    class="card_hov"
                    width="80%"
                    tile outlined
                    v-for="little_title in little_titles"
                    :key="little_title"
                    @click="cardClick(little_title.idx, little_title.text)"
                    >
                        <v-row class="fill-height">
                            <v-col align="center" md="2">
                                {{little_title.idx}}. 
                            </v-col>
                            <v-col align="left" md="9">
                                {{ little_title.text }}
                            </v-col>
                            <v-col md="1">
                                <v-btn class="mx-2" icon>
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card
                    v-show="plusClick"
                    width="80%"
                    tile outlined
                    >
                    <v-row>
                        <v-col align="center" md="2">
                            {{newIndex}}. 
                        </v-col>
                        <v-col md="8">
                            <v-text-field
                            dense
                            solo
                            v-model="newSubtitle"
                            ></v-text-field>
                        </v-col>
                        <v-col md="2">
                            <v-btn class="mx-2" icon @click="plusSubtitle">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" icon @click="cancelPlus">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    </v-card>
                    <v-card tile outlined width="80%"
                    align="center" class="card_hov"
                    @click="plusClick = true"
                    >
                        <v-row>
                            <v-col>+</v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn @click="changeSave">저장</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            little_titles: [],
            plusClick:false,
            newSubtitle:'',
            newIndex:0,

            projectId: 1, //여기에 프로젝트 아이디 추가해주세요!
            lastindex: 7, //여기에 새로 추가하는 index 넣어주세요!
            lastindexTitle: '여기에 새로 추가하는 index title 연결해주세요!'
        }
    },
    created() {
      this.little_titles=this.$store.state.subtitle;
      this.newIndex = this.little_titles.length+1;
    },
    methods:{
        async plusSubtitle(){
            await this.little_titles.push({idx: this.newIndex, text: this.newSubtitle});
            this.newIndex++;
            this.newSubtitle = '';
            this.plusClick = false;
        },
        changeSave(){
            alert("저장")
        },
        cancelPlus(){
            this.newSubtitle = '';
            this.plusClick = false;
        },
        cardClick(idx, text){
            alert(idx, text);
        },

        addLastIndexPost(){
            axios
                .post('http://localhost:3000/api//project/indexedit',{indexId: this.lastindex ,projectId: this.projectId ,title: this.lastindexTitle}, { headers: {'token': this.token}})
                .then(res => {
                    console.log(res.data);
                    //성공하면 100으로 응답합니당
                })
                .catch((err) => {
                    console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                });
        }
    },
}
</script>
<style scoped>
.card_hov:hover{
    background-color: rgb(235, 225, 213);
}
.card_hov:visited{
    border-color: rgb(255, 143, 51);
}
</style>