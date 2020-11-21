<template>
    <div>
        <v-app>
            <v-card
            flat
            tile
            >
                <v-container
                fluid
                >
                <v-row>
                    <v-header><h2>펀딩 진행중인 프로젝트</h2></v-header>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="deep-purple lighten-2"
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
                                <div style="height:100px;">
                                <v-card-title v-text="list.genre" class="justify-center"></v-card-title>
                                <v-card-subtitle v-text="list.title" class="text-center"></v-card-subtitle>
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
                                    color="orange lighten-2"
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
                                    <div v-show="list.show">
                                        <v-divider></v-divider>
                                        <v-card-text v-text="list.info"></v-card-text>
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
            title:'하루 10분 운동',
            info:'집에서도 할 수 있는 간단한 운동 소개',
            members: ['철수','민수','민지'],
            targetFund:1000,
            nowFund:350,
            dDay:'2020-12-15',
            show: false,
            img: require('../assets/banner.jpg'),
        },
        {
            genre:'수학',
            title:'사칙연산',
            info:'사칙연산 배우기',
            targetFund:2000,
            nowFund:680,
            dDay:'2020-12-20',
            members: ['영희','재욱','인하','민수'],
            show: false,
            img: require('../assets/banner.jpg'),
        },
        {
            genre:'역사',
            title:'세계사 공부',
            info:'더이상 아이디어가 없다',
            targetFund:1500,
            nowFund:830,
            dDay:'2021-01-18',
            members: ['경수','미영','호영'],
            show: false,
            img: require('../assets/banner.jpg'),
        },
    ],
  }),
}
</script>

