<template>
   <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="150px"
      max-width="100%"
      :src="banner_src"
      gradient="to top right, rgba(150,150,150,.30), rgba(52,52,52,.9)"
    >
    </v-img>
    <div style="text-align : center;" class="mt-5">
        <h1> Jennie 님의 수익 통계</h1>
    </div>
    <v-container fill-height style="max-width:1200px;">
        <v-col class="text-right mr-10">
            <v-btn 
                color="warning"
                to='/myaccount'
                
            >
            계좌 연동하기
            </v-btn>
        </v-col>
        
        <v-card
            width="1200"
            height="100%"
            class="mt-5 pt-10 px-3"
            color="blue lighten-5"
        >
        <v-expansion-panels accordion
            width="1050"
        >
            <v-expansion-panel 
            v-for="(item,i) in project"
            :key="i"
            >
            <v-expansion-panel-header>
               Project Name : {{item}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                <v-card
                width="1050"
                height="100%"
                color="blue lighten-4"
                >
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :sort-by="['calories', 'fat']"
                    :sort-desc="[false, true]"
                    multi-sort
                    class="elevation-1"
                ></v-data-table>
                <div class="mt-3 pb-3" align="center">
                  <v-btn
                      @click="overlay = !overlay"
                  >작가들 수익 보기
                  </v-btn>
                </div>
                </v-card>
                    
                </v-container>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        </v-card>
   </v-container>
   
    <!-- overlay area -->
    <v-overlay
        :z-index="zIndex"
        :value="overlay"
        :opacity="opacity"
        color="#282828"
    >
    <v-card
        color="white"
        width="1050"
        height="100%"
    >
        <bar_chart></bar_chart>
        <v-card
          color="#73413D"
          width="1050"
          height="100%"
        >
        <div align="center">
          <v-img
          :src="profic_src"
          max-width="600"
          ></v-img>
        </div>
        <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="(item,n) in writers"
          :key="n"
        >
          <v-card
            color="#BF5E3B"
            width="150"
            height="100%"
            class="mx-16 pa-5"
        >
            <h3>{{item.writer}}</h3>
            <br>
            <overline>월 수익 ${{item.write_profit}}</overline>
        </v-card>
        </v-col>
      </v-row>
      <div style="text-align : center;">
        <v-btn color="#F2CF63" class="mt-5" @click="overlay = false">끄기</v-btn>
      </div>
      </v-card>
    </v-card>
    </v-overlay>

   </v-app>
   
</template>

<script>
import bar_chart from '../components/BarChart'




export default {
    components:{
        bar_chart
    },
    data:() => (
    {
        banner_src:require('@/assets/watch.jpg'),
        profic_src:require('@/assets/writer_porfit_icon.png'),
        overlay: false,
        project_num: 5,
        project:['아침 운동으론 인생이 바뀌지 않았지만', '차곡차곡 추억을 담은 집', '국내 IT 회사의 업무방식 & 기술 창업', '세상에 같은 고양이는 없어', '미국과 대한민국 UX 인재상의 차이'],
        writers:[
            {
                writer: 'Jennie', //main = 1, sub = 0
                profile: '프사',
                write_profit: 50000
            },
            {
                writer: 'Rose', //main = 1, sub = 0
                profile: '프사',
                write_profit: 8000
            },
            {
                writer: 'Kai', //main = 1, sub = 0
                profile: '프사',
                write_profit: 7000
            },
            ],
        headers: [
          {
            text: '목차',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '구매한 독자 수', value: 'calories' },
          { text: '총 수익 내역(백원)', value: 'fat' },
          { text: '내 수익 내역(백원)', value: 'carbs' },
          { text: '평점', value: 'protein' },
        ],
        desserts: [
          {
            name: '아침운동을 시작한 계기',
            calories: 234,
            fat: 234*3,
            carbs: 234*3/4,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: '아침운동으로 얻은 것',
            calories: 451,
            fat: 451*3,
            carbs: 451*3/4,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: '아침운동으로 잃은 것',
            calories: 365,
            fat: 365*3,
            carbs: 365*3/4,
            protein: 4.0,
            iron: '7%',
          },
          {
            name: '아침운동의 장단점',
            calories: 214,
            fat: 214*3,
            carbs: 214*3/4,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: '아침운동을 해야하는 이유',
            calories: 162,
            fat: 162*3,
            carbs: 162*3/4,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: '당신이 아침운동을 하기 싫은 이유',
            calories: 548,
            fat: 548*3,
            carbs: 548*3/4,
            protein: 4.7,
            iron: '0%',
          },
          {
            name: '아침 운동 계획을 놓치지 않는 법',
            calories: 475,
            fat: 475*3,
            carbs: 475*3/4,
            protein: 4.1,
            iron: '2%',
          },
          {
            name: '아침 운동의 재미',
            calories: 394,
            fat: 394*3,
            carbs: 394*3/4,
            protein: 4.5,
            iron: '45%',
          },
          {
            name: '아침 운동 계획을 효율적으로 짜는 법',
            calories: 741,
            fat: 741*3,
            carbs: 741*3/4,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: '아침 운동을 하자',
            calories: 266,
            fat: 266*3,
            carbs: 266*3/4,
            protein: 4.7,
            iron: '6%',
          },
        ],
    }),
    methods:{
        endOver(over){
            this.overlay = over;
        }
    }
}
</script>