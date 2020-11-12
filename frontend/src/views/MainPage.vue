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
                :color="colors[i]"
                height="100%"
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                    <div class="display-3">{{ slide }} Slide</div>
                </v-row>
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
                            <v-col :key="1">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                   <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>여행</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>역사</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                   <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>연애</h3>
                                   </div>
                                    
                                </v-card>
                            </v-col>
                            <v-col :key="2">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                   <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>수학</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>건축</h3>
                                   </div>
                                </v-card>
                            </v-col>
                            <v-col :key="3">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                   <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>과학</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                   <div style="position: absolute; top: 40%; left: 22%">
                                    <h3>문화, 예술</h3>
                                   </div>
                                </v-card>
                            </v-col>
                            <v-col :key="4">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 45%">
                                    <h3>IT</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>시사</h3>
                                   </div>
                                </v-card>
                            </v-col>
                            <v-col :key="5">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>경제</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>직장</h3>
                                   </div>
                                </v-card>
                            </v-col>
                            <v-col :key="6">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>요리</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>육아</h3>
                                   </div>
                                </v-card>
                            </v-col>
                            <v-col :key="7">
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>건강</h3>
                                   </div>
                                </v-card>
                                <v-card width="150" height="150" outlined="false" hover="true">
                                    <div style="position: absolute; top: 40%; left: 38%">
                                    <h3>게임</h3>
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
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
    
    genre_num: 8
  }),
}
</script>

