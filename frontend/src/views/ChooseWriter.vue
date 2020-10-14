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
                                cols="5"
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
        <v-col md="2">
            <div style="position: absolute; top: 50%; left: 75%;">
            <v-btn color="success" large>
                완료
                <v-icon right>
                    mdi-check-circle-outline
                </v-icon>
            </v-btn>
            </div>
        </v-col>
  </v-row>
  </v-app>   
</template>

<script>
export default {
    name:'ChooseWriter',
    data() {
        return{
            applicant:[
                {
                    profile:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                    name:'김ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    name:'이ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    name:'박ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    name:'최ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    name:'김ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                    name:'김ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    name:'이ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
                {
                    profile:'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    name:'박ㅇㅇ',
                    comment:'잘 부탁드립니다!',
                },
            ],
        }
    },
}
</script>
