<template>
    <div class="mt-15" style="background-color: #FDFAF9">
        <v-app >
            <v-card
            flat
            tile
            color="#FDFAF9"
            width="1050px"
            >
                <v-container
                fluid
                style="background-color: #FDFAF9"
                >
                <v-row>
                    <v-header class="ml-3"><p style="font-size:25px">펀딩 진행중인 프로젝트</p></v-header>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="grey"
                    text
                    >더 보기</v-btn>
                </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col
                        v-for="(list, i) in recruitFundList"
                        :key="i"
                        cols="12"
                        sm="6"
                        md="4"
                        >
                            <v-card width="400px">
                                <v-img
                                :src="list.img"
                                height="150px"
                                ></v-img>
                                <div style="height:70px; ">
                                <v-card-title v-text="list.genre" class="justify-center"></v-card-title>
                                
                                </div>
                                <v-divider ></v-divider>
                                <v-card-title class="justify-center">펀딩 진행률</v-card-title>
                                <v-card-subtitle>
                                    <h3 class="text-center">{{list.nowFund}} / {{list.targetFund}}</h3>
                                </v-card-subtitle>
                                <v-card-title class="justify-center">d-day - {{list.dDay}}</v-card-title>
                                <v-col align-content="center" >
                                    <div class="text-center">
                                        <v-chip v-for="member in list.members" :key="member" v-text="member"></v-chip>
                                    </div>
                                </v-col>
                                <v-card-actions>
                                    <v-btn
                                    color="grey"
                                    text
                                    @click="list.show = !list.show"
                                    >
                                        주제 설명
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    icon
                                    @click="list.show = !list.show"
                                    >
                                        <v-icon>{{ list.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-expand-transition>
                                    <div v-show="list.show" style="background-color: #FDFAF9">
                                        <v-divider ></v-divider>
                                        <v-card-text  v-text="list.info"></v-card-text>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-app>
    </div>
</template>

<script>

export default {
    data: () => ({
    //
    recruitFundList: [
        {
            genre:'건강',
            title:'겨울엔 뛸까? 걸을까?',
            info:'겨울엔 뛸까? 걸을까?',
            members: ['석원PD','Diff'],
            targetFund:1000,
            nowFund:345,
            dDay:'2020-12-15',
            show: false,
            img: require('../assets/walkingornot.jpg'),
        },
        {
            genre:'건축',
            title:'내향적인 집',
            info:'내향적인 집',
            targetFund:2000,
            nowFund:680,
            dDay:'2020-12-20',
            members: ['dolgoji','Ddoi','Julu'],
            show: false,
            img: require('../assets/innerhouse.jpg'),
        },
        {
            genre:'시사',
            title:'삼성전자 지금 사도 될까',
            info:'삼성전자 지금 사도 될까',
            targetFund:1500,
            nowFund:830,
            dDay:'2021-01-18',
            members: ['스피어','선덕'],
            show: false,
            img: require('../assets/samsung.png'),
        },
    ],
  }),
}
</script>

