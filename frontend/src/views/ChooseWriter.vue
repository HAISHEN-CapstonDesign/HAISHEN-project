<template>
  <v-app>
    <v-img
      max-height="200"
      max-width="100%"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
    <div style="position: absolute; top: 50%; left: 50%;">
    <p class="text-center white--text headline">
      주제
    </p>
    </div>
    </v-img>
    <v-container>
        <v-row cols="12" justify="center">
            <v-col md="10">
                <v-card
                v-for="applicant in applicants"
                v-bind:key="applicant.name"
                >
                <v-card-title>
                <v-card-avatar>
                <v-avatar
                class="ma-1"
                size="70"
                >
                    <v-img :src="applicant.profile"></v-img>
                </v-avatar>
                </v-card-avatar>
                <v-text>{{applicant.name}}</v-text>
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
                </v-card-title>
                <v-expand-transition>
                    <div v-show="applicant.show">
                    <v-divider></v-divider>

                    <v-card-text v-text="applicant.detail"></v-card-text>
                    </div>
                </v-expand-transition>
                </v-card>
                <br/>
                <div class="text-center">
                    <v-btn @click="start" large class="ma-2">
                        메인으로 돌아가기
                    </v-btn>
                    <v-btn @click="start" large class="ma-2">
                        펀딩 시작하기
                        <v-icon right>
                            mdi-check-circle-outline
                        </v-icon>
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
  </v-app>   
</template>

<script>
import axios from 'axios'

export default {
    name:'ChooseWriter',
    data() {
        return{
            idp: 0,
            chooseList:[],
            applicants:[
                {
                    profile:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                    name:'김ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                    show: false,
                    detail:'세부사항들',
                    id:1,
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    name:'이ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                    show: false,
                    detail:'세부사항들',
                    id:2,
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    name:'박ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                    show: false,
                    detail:'세부사항들',
                    id:3,
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    name:'최ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                    show: false,
                    detail:'세부사항들',
                    id:4,
                },
                
            ],
        }
    },
    methods: {
        start(){
            console.log(this.chooseList)
        },
        
    },
    created(){
        this.idp = this.$route.params.idp;
        axios
            .post(`http://localhost:3000/api/${this.idp}/choosewriter`,{id:this.idp},{ headers: {'token': localStorage.getItem('access_token')}})
            .then(res => {
                //1이면 main, 0이면 sub
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            });
    }
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