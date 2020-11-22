<template>
    <div>
        <v-app>
            <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            :show-arrows="false"
            >
            <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
            >
                <v-sheet
                height="100%"
                width="80%"
                class="mx-auto"
                >
                <v-img
                max-width="100%"
                max-height="100%"
                v-bind:src="slide.img"
                gradient="to top right, rgba(150,150,150,.33), rgba(52,52,52,.7)"
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
// import { Splide, SplideSlide } from '@splidejs/vue-splide';


export default {
    components: {
        RecruitmentWriter,
        RecruitmentFund,

    },

    data: () => ({
    //
    options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
    slides: [
        {
            text: '아침 운동으로 인생이 바뀌진 않았지만',
            img: require('../assets/morning_training.jpg'),
        },
        {
            text: '미국과 대한민국, UX 디자이너 인재상의 차이',
            img: require('../assets/banner2.jpg'),
        },
        {
            text: '국내 IT회사의 업무방식 & 기술창업',
            img: require('../assets/sample_img.jpg'),
        },
        {
            text: '세상에 같은 고양이는 없어',
            img: require('../assets/banner.jpg'),
        },
        {
            text: '차곡차곡 추억을 담은 집',
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


