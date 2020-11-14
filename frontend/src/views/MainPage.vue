<template>
    <div>
        <v-app>
            <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                :color="indigo"
                height="100%"
                >
                <v-img
                max-width="100%"
                max-height="100%"
                v-bind:src="slide.img"
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <div class="display-3">{{ slide.text }}</div>
                </v-row>
                </v-img>
                </v-sheet>
            </v-carousel-item>
            </v-carousel>
            
            <v-btn to ="/collaboProjMain">공동프로젝트 메인페이지로</v-btn>
            <v-btn router :to="{name:'ContentsReadingPage'}">컨텐츠 열람 페이지</v-btn>
            <v-container style="max-width:1050px;">
                <v-layout align-center row wrap>
                    <v-flex>
                        <h1>Genre</h1>
                        <v-row no-gutters>
                            <v-col
                            v-for="(genre, id) in genres"
                            :key="id"
                            >
                                <v-card
                                width="150"
                                height="150"
                                outlined="false"
                                hover="true"
                                class="text-center"
                                @click="$router.push('/postlist')"
                                >
                                   <div style="position: absolute; top: 40%; width:100%">
                                    <h3>{{genre}}</h3>
                                   </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
                <br>
                    <v-row
                    class="justify-center"
                    no-gutters
                    dense
                    >
                    <RecruitmentWriter></RecruitmentWriter>
                    <br>
                    <RecruitmentFund></RecruitmentFund>
                </v-row>
            </v-container>
        </v-app>
  </div>
</template>

<script>
import RecruitmentWriter from '../components/recruitWriter.vue'
import RecruitmentFund from '../components/recruitFund.vue'

export default {
    components: {
        RecruitmentWriter,
        RecruitmentFund,
    },

    data: () => ({
    //
    slides: [
        {
            text: '추천 주제1',
            img: require('../assets/banner.jpg'),
        },
        {
            text: '추천 주제2',
            img: require('../assets/banner2.jpg'),
        },
        {
            text: '추천 주제3',
            img: require('../assets/sample_img.jpg'),
        },
        {
            text: '추천 주제4',
            img: require('../assets/banner.jpg'),
        },
        {
            text: '추천 주제5',
            img: require('../assets/banner2.jpg'),
        },
    ],
    genres:[
        '여행', '수학', '과학', 'IT',
        '경제', '요리', '건강', '역사',
        '건축', '문화, 예술', '시사',
        '직장', '육아', '게임', '연애'
        ],
  }),
  methods: {
      getImage () {
        const min = 550
        const max = 560
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
  },
}
</script>
<style>
.v-application--wrap {
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100px;
    max-width: 100%;
    position: relative;
}
</style>

