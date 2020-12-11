<template>
    <div class="pt-5">
        <v-app>
            <v-carousel
            cycle
            height="280"
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
                width="69%"
                class="mx-auto"
                >
                <v-img
                max-width="100%"
                max-height="100%"
                v-bind:src="slide.img"
                gradient="to top right, rgba(150,150,150,.20), rgba(52,52,52,.9)"
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
                    <p style="font-size:40px">{{ slide.text }}</p>
                    <v-spacer class="pt-5"></v-spacer>
                    <p>{{ slide.writer}}</p>
                </v-col>
                </v-row>
                </v-img>
                </v-sheet>
            </v-carousel-item>
            </v-carousel>

            <v-container class="mb-15" style="max-width:875px;">
                <v-layout class="mb-15" align-center row wrap>
                    <v-flex>
                    <div align="center" class="pb-5 pt-10 mb-10">
                        <v-img
                            max-width="300"
                            max-height="100%"
                            v-bind:src="crunch_img"
                        ></v-img>
                    </div>
                        <v-row no-gutters>
                            <v-col
                            v-for="(genre, id) in genres"
                            :key="id"
                            >
                                <v-card
                                width="125"
                                height="125"
                                outlined="false"
                                hover="true"
                                class="text-center"
                                
                                @click="$router.push({path:`/postlist/${genre.name}`})"
                                >
                                   <div style="position: absolute; top: 40%; width:100%">
                                    <h3 style="font-size:14px; color:grey">{{genre.name}}</h3>
                                   </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container style="max-width:100%; background-color: #FDFAF9">
                
                <v-spacer class="mt-15"></v-spacer>
                <v-row
                    class="justify-center"
                    no-gutters
                    dense
                    >
                    
                    <RecruitmentWriter></RecruitmentWriter>
                    
                    
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
    crunch_img: require('../assets/Crunch_keyword.png'),
    options: {
        
          rewind : true,
          width  : 700,
          gap    : '1rem',
        },
    slides: [
        {
            text: '아침 운동으로 인생이 바뀌진 않았지만',
            img: require('../assets/morning_training.jpg'),
            writer: 'By. 해정。븟츠。acafela'
        },
        {
            text: '미국과 대한민국, UX 디자이너 인재상의 차이',
            img: require('../assets/goldbridge.jpeg'),
            writer: 'By. 안토。civilia'
        },
        {
            text: '국내 IT회사의 업무방식 & 기술창업',
            img: require('../assets/company.png'),
            writer: 'By. Space Odyssey。steamer'
        },
        {
            text: '세상에 같은 고양이는 없어',
            img: require('../assets/cutecat.jpg'),
            writer: 'By. 선아키。luv_cat'
        },
        {
            text: '차곡차곡 추억을 담은 집',
            img: require('../assets/house.jpg'),
            writer: 'By. 말그미。제이트리'
        },
    ],
    genres:[
            {
                name: '여행',
                post_name: 'Travel',
                post_img_id: '1'
            },
            {
                name: '수학',
                post_name: 'Math',
                post_img_id: '2'
            },
            {
                name: '과학',
                post_name: 'Science',
                post_img_id: '3'
            },
            {
                name: 'IT',
                post_name: 'IT',
                post_img_id: '4'
            },
            {
                name: '경제',
                post_name: 'Economy',
                post_img_id: '5'
            },
            {
                name: '요리',
                post_name: 'Cook',
                post_img_id: '6'
            },
            {
                name: '건강',
                post_name: 'Health',
                post_img_id: '7'
            },
            {
                name: '역사',
                post_name: 'History',
                post_img_id: '8'
            },
            {
                name: '건축',
                post_name: 'Build',
                post_img_id: '9'
            },
            {
                name: '문화, 예술',
                post_name: 'Art',
                post_img_id: '10'
            },
            {
                name: '시사',
                post_name: 'Preview',
                post_img_id: '11'
            },
            {
                name: '직장',
                post_name: 'Work',
                post_img_id: '12'
            },
            {
                name: '육아',
                post_name: 'Parenting',
                post_img_id: '13'
            },
            {
                name: '게임',
                post_name: 'Game',
                post_img_id: '14'
            },
            {
                name: '연애',
                post_name: 'Love',
                post_img_id: '15'
            },
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
    min-height: 0;
    max-width: 100%;
    position: relative;
}
</style>

