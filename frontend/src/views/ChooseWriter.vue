<template>
  <v-app>
    <v-img
        class="white--text"
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
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
          <div class="display-1">{{title}}</div>
        </v-col>
        </v-row>
      </v-img>
    <!--<div style="position: absolute; top: 50%; left: 50%;">
    <p class="text-center white--text headline">
      {{title}}
    </p>
    </div>
    </v-img>-->
    <!-- <p>{{selected}}</p> -->
    <v-container>
        <v-row cols="12" justify="center">
            <v-col md="10">
                <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="applicants"
                    :single-select="singleSelect"
                    hide-default-footer
                    item-key="nickname"
                    show-select
                    class="elevation-1"
                >
                    <!-- <template v-slot:top>
                    <v-switch
                        v-model="singleSelect"
                        label="Single select"
                        class="pa-3"
                    ></v-switch>
                    </template> -->
                </v-data-table>
               
                <!-- <v-card
                v-for="applicant in applicants"
                v-bind:key="applicant.userId"
                >
                <v-card-title>
                <v-card-avatar>
                <v-avatar
                class="ma-1"
                size="10"
                >
                    <v-img :src="applicant.profile"></v-img>
                </v-avatar>
                </v-card-avatar>
                <v-text>{{applicant.nickname}}</v-text>
                <v-spacer></v-spacer>
                <v-text>{{applicant.comment}}</v-text>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="applicant.show = !applicant.show"
                >
                    <v-icon>{{ applicant.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                <v-btn icon @click="chooseList.push(applicant)">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-checkbox
                    v-model="selected"
                    value: applicant.userId
                >
                </v-checkbox>
                </v-card-title>
                <v-expand-transition>
                    <div v-show="applicant.show">
                    <v-divider></v-divider>

                    <v-card-text v-text="applicant.detail"></v-card-text>
                    </div>
                </v-expand-transition>
                </v-card> -->
                <br/>
                <div class="text-center">
                    <v-btn @click="start" large class="ma-2">
                        메인으로 돌아가기
                    </v-btn>
                    <!-- <v-btn @click="start" large class="ma-2">
                        펀딩 시작하기
                        
                    </v-btn> -->
                    <v-btn @click="submit_start_funding()" large class="ma-2">
                        채택하기
                        <v-icon right>
                            mdi-check-circle-outline
                        </v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
         <v-dialog
          v-model="adopt"
          persistent
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline">
            채택이 완료되었습니다
          </v-card-title>
          <v-card-text>공동 작업 페이지로 이동합니다</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="goto_mainproj()"
            >
                확인
            </v-btn>
     
          </v-card-actions>
      </v-card>
    </v-dialog>
    </v-container>
  </v-app>   
</template>

<script>
import axios from 'axios'

export default {
    name:'ChooseWriter',
    data() {
        return{
            imgUrl: require('../assets/partership.jpg'),
            adopt:false,
            expanded: [],
            singleExpand: false,
            headers: [
            {
                text: '닉네임',
                align: 'start',
                sortable: false,
                value: 'nickname',
            },
            { text: '한 줄 소개', value: 'comment' },
            ],
            selected:[],
            idp: 0,
            chooseList:[],
            applicants:[
                // {
                //     profile:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                //     name:'김ㅇㅇ',
                //     comment:'잘 부탁드립니다!',
                //     show: false,
                //     detail:'세부사항들',
                //     id:1,
                // },
                
                
            ],
            title: '',
            submit_selected:[]
        }
    },
    methods: {
        start(){
            console.log(this.chooseList)
        },
        submit_start_funding(){
            this.selected.forEach(element => {
                this.submit_selected.push(element.userId)
            });
            // this.submit_selected.push()
            console.log(this.submit_selected)
            axios
                .post('http://localhost:3000/api/${this.idp}/submitStartFunding',this.submit_selected,{ headers: {'token': localStorage.getItem('access_token')}})
                .then(res=>{
                    console.log(res.data)
                    this.adopt=true
                    
                })
        },
        goto_mainproj(){
            this.adopt=false
            this.$router.push(`/1/basicCollaboTool/1`)
            // this.$router.push(`/${this.idp}/basicCollaboTool/1`)
        }
        
    },
    created(){
        this.idp = this.$route.params.idp;
        axios //title 불러오기
            .get(`http://localhost:3000/api/${this.idp}/choosewritertitle`)
            .then(res=>{
                console.log(res.data)
                this.title = res.data

            })
        axios //지원자들 정보 불러오기
            .post(`http://localhost:3000/api/${this.idp}/choosewriter`,{id:this.idp},{ headers: {'token': localStorage.getItem('access_token')}})
            .then(res => {
                //1이면 main, 0이면 sub
                console.log(res.data);
                var app_list = res.data;
                
                for(var i in app_list){
                    var app = {
                        nickname: app_list[i].nickname,
                        comment: app_list[i].comment,
                        userId: app_list[i].userId,
                        projectId: app_list[i].projectId,
                        selected: false

                    }
                    this.applicants.push(app);
                    console.log("hello")
                }
                
            })
            .catch((err) => {
                console.log(err)
            });
    }

    ,
    
}
</script>
<!--
<v-row justify="center">
        <v-col cols="12" sm="6" md="10">
            <div
                v-for="item in applicant"
                :key="item.name"
            >
            <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <v-row
                            align="center"
                            class="spacer"
                            no-gutters
                        >
                            <v-col
                                cols="4"
                                sm="2"
                                md="1"
                            >
                            <v-avatar size="36px">
                                <img
                                    :src="item.profile"
                                >
                            </v-avatar>
                            </v-col>
                            <v-col
                                class="hidden-xs-only"
                                sm="5"
                                md="3"
                            >
                                <strong v-html="item.name"></strong>
                            </v-col>
                            <v-col
                                class="text-no-wrap"
                                sm="3"
                            >
                                <strong v-html="item.comment"></strong>
                            </v-col>
                        </v-row>
                        
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        ----상세정보----
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        <v-col md="2">
            <v-btn
            class="mx-2"
            fab
            dark
            medium
            color="pink"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </v-col>
            </v-row>
            </div>
 
    </v-col>
-->