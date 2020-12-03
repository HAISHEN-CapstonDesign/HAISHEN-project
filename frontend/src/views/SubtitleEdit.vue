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
                            {{lastindex}}. 
                        </v-col>
                        <v-col md="8">
                            <v-text-field
                            dense
                            solo
                            v-model="lastindexTitle"
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
                    <v-btn @click="addLastIndexPost">저장</v-btn>
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
        //    newSubtitle:'',
        //    newIndex:0,

            projectId: 0,
            lastindex: 0,
            lastindexTitle: '',
            idp:0,
        }
    },
    created() {
    //   this.little_titles=this.$store.state.subtitle;
    
      this.idp = this.$route.params.idp;
      this.projectId = this.$route.params.idp;
      axios
        .post('http://localhost:3000/api/getindex',
            { id: this.idp }, 
            { headers: {'token':localStorage.getItem('access_token') }})
        .then(res => {
            console.log("bi")
            console.log(res.data);
            console.log(res.data[0]);
            for(var i = 0; i<res.data.length; i++){
              this.little_titles.push({idx:res.data[i].id, text:res.data[i].title})
            }
            console.log(this.little_titles.length)
            this.lastindex = this.little_titles.length+1;
            // this.little_titles=[{idx:1, text:"ddd"}]
            // this.res.data.forEach(element => {
            //     // this.little_titles.push({idx:element.id, text:element.title})
            //     console.log(element)
            // });
          
          
        })
        .catch((err) => {
            console.log(err)
            alert("에러가 발생했습니다. 다시 시도해주세요")
        });
        
        console.log("wowowowowowo")
        console.log( this.lastindex )
    },
    methods:{
        async plusSubtitle(){
            await this.little_titles.push({idx: this.lastindex, text: this.lastindexTitle});
            this.lastindex++;
            this.lastindexTitle = '';
            this.plusClick = false;
        },
        cancelPlus(){
            this.lastindexTitle = '';
            this.plusClick = false;
        },
        cardClick(idx, text){
            alert(idx, text);
        },
        addLastIndexPost(){
            console.log(this.lastindex)
            console.log(this.idp)
            console.log(this.lastindexTitle)
            axios
                // .post('http://localhost:3000/api/project/indexedit',{indexId: 13 ,projectId: 1 ,title: "aaaaaa"}, { headers: {'token': localStorage.getItem('access_token')}})
                .post('http://localhost:3000/api/project/indexedit',{indexId: this.lastindex ,projectId: this.idp ,title: this.lastindexTitle}, { headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    axios.get(`http://localhost:3000/api/project/${this.idp}/index/${this.lastindex}/makeChatRoom`)
            .then((res) => {
              
              console.log(res.data);
            })
            .catch(function (error) {
              console.log(error);
            });
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