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
            
            <v-btn to ="/postlist">글목록으로</v-btn>
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
                                <v-card width="150" height="150" outlined="false" hover="true" class="text-center">
                                   <div style="position: absolute; top: 40%; width:100%">
                                    <h3>{{genre}}</h3>
                                   </div>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-row align="start" justify="space-around">
            <h1>Writer Recruitement & Funding</h1>
            <v-btn
            color="deep-purple lighten-2"
            text
            
            >더 보기</v-btn>
            </v-row>
            
            <v-row
            class="justify-center"
            no-gutters
            dense
            
            >
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
            <!-- <Recruitment></Recruitment>
            <Recruitment></Recruitment> -->
            </v-row>
            <v-row
            class="justify-center"
            no-gutters
            dense
            
            >
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
            <!-- <Recruitment></Recruitment>
            <Recruitment></Recruitment> -->
            </v-row>
        </v-app>
        

  </div>

</template>

<script>
import Recruitment from '../components/recruit.vue'

export default {
    components: {
        Recruitment,
    
    // HelloWorld,
    // 여기에 자기가 만든 component 를 써넣고 위에 템플릿에 추가하면됩니다
    },

    data: () => ({
    //
    drawer: false,
    collapseOnScroll: true,
    slides: [
        {
            text: '분위기 있는 제목',
            img: require('../assets/banner.jpg'),
        },
        {
            text: '있어보이는 제목',
            img: require('../assets/banner2.jpg'),
        },
        {
            text: '멋있어보이는 제목',
            img: require('../assets/sample_img.jpg'),
        },
        {
            text: '일단 제목',
            img: require('../assets/banner.jpg'),
        },
        {
            text: '마지막 제목',
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
}
</script>

