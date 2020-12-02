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
                    <v-header><p style="font-size:40px">작가 모집중인 프로젝트</p></v-header>
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
                                <div style="height:100px;">
                                <v-card-title v-text="list.genre" class="justify-center"></v-card-title>
                                <v-card-subtitle v-text="list.title" class="text-center"></v-card-subtitle>
                                </div>
                                <v-divider ></v-divider>
                                <v-card-title class="justify-center">모집인원</v-card-title>
                                <v-card-subtitle>
                                    <h3 class="text-center">{{list.memberNum}} / {{list.targetNum}}</h3>
                                </v-card-subtitle>
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
            genre:'여행',
            title:'여행이란 무엇인가',
            info:'여행이란 무엇인가, 여행에 대한 고찰',
            mainWriter:'철수',
            targetNum:4,
            memberNum:1,
            members: ['철수'],
            show: false,
            img: require('../assets/sample_img.jpg'),
        },
        {
            genre:'요리',
            title:'라면 끓이는법',
            info:'라면 끓이는법에 대한 글',
            mainWriter:'영희',
            targetNum:2,
            memberNum:1,
            members: ['영희'],
            show: false,
            img: require('../assets/sample_img.jpg'),
        },
        {
            genre:'역사',
            title:'한 눈에 보는 한국사',
            info:'한국사의 모든 것을 목표로 하는 프로젝트',
            mainWriter:'경수',
            targetNum:6,
            memberNum:2,
            members: ['경수','미영'],
            show: false,
            img: require('../assets/sample_img.jpg'),
        },
    ],
  }),

}
</script>

