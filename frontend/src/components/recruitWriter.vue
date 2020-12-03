<template>
    <div style="background-color: #FDFAF9">
        <v-app>
            <v-card
            flat
            tile
            color="#FDFAF9"
            width="1050px"
            >
                <v-container
                fluid
                >
                <v-row>
                    <v-header class="ml-3"><p style="font-size:25px">작가 모집중인 프로젝트</p></v-header>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="grey"
                    text
                    >더 보기</v-btn>
                </v-row>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-col
                        v-for="(list, i) in recruitWriterList"
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
                                <div style="height:70px;">
                                <v-card-title v-text="list.genre" class="justify-center"></v-card-title>
                                
                                </div>
                                <v-divider ></v-divider>
                                <v-card-title class="justify-center">모집인원</v-card-title>
                                <v-card-subtitle>
                                    <h3 class="text-center">{{list.memberNum}} / {{list.targetNum}}</h3>
                                </v-card-subtitle>
                                <v-col align-content="center" >
                                    <div class="text-center pl-2">
                                        <v-chip class="mr-1" v-for="member in list.members" :key="member" v-text="member"></v-chip>
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
    recruitWriterList: [
        {
            genre:'IT',
            title:'아이폰 12 화면 결함 소프트웨어 업데이트로 해결 예정',
            info:'아이폰 12 화면 결함 소프트웨어 업데이트로 해결 예정',
            mainWriter:'철수',
            targetNum:4,
            memberNum:1,
            members: ['시류아','잉여공학도'],
            show: false,
            img: require('../assets/iphoneupdate.png'),
        },
        {
            genre:'요리',
            title:'간장계란밥',
            info:'엄마가 자주 해 주셨던 이유. 간장계란밥.',
            mainWriter:'영희',
            targetNum:2,
            memberNum:1,
            members: ['민현'],
            show: false,
            img: require('../assets/eggrice.png'),
        },
        {
            genre:'역사',
            title:'이이제이',
            info:'이이제이일까 아니면 그냥 힘없는 역사일까',
            mainWriter:'멜아라',
            targetNum:6,
            memberNum:2,
            members: ['멜아라','멜로디'],
            show: false,
            img: require('../assets/enomyenomyornot.jpg'),
        },
    ],
  }),

}
</script>

