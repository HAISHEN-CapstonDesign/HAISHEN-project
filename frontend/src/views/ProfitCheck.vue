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
        <h1> name님의 수익 통계</h1>
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
               {{item}} 총 수익 금액 10000 원 최종 정산일 : 2020.12.12 이번달 정산 : 5000 원
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                <v-card
                width="1050"
                height="100%"
                color="cyan"
                >
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :sort-by="['calories', 'fat']"
                    :sort-desc="[false, true]"
                    multi-sort
                    class="elevation-1"
                ></v-data-table>
                <v-btn
                    @click="overlay = !overlay"
                >btn
                </v-btn>
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
        color="grey lighten-1"
        width="1050"
        height="100%"
    >
        <bar_chart></bar_chart>

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
            color="deep-orange accent-1"
            width="350"
            height="100%"
        >
            <v-avatar>
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
            </v-avatar>
            <h3>{{item.writer}}</h3>
            <h3>월 수익 ${{item.write_profit}}</h3>
        </v-card>
        </v-col>
      </v-row>
        <v-btn @click="overlay = false">끄기</v-btn>
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
        overlay: false,
        project_num: 5,
        project:['project 1', 'project 2', 'project 3', 'project 4', 'project 5'],
        writers:[
            {
                writer: '메인 작가', //main = 1, sub = 0
                profile: '프사',
                write_profit: 50000
            },
            {
                writer: '서브 작가', //main = 1, sub = 0
                profile: '프사',
                write_profit: 8000
            },
            {
                writer: '서브 작가', //main = 1, sub = 0
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
          { text: '몇명이 샀는지', value: 'calories' },
          { text: '총 수익 내역', value: 'fat' },
          { text: '내 수익 내역', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 300,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 300,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 400,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 400,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 400,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 400,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 500,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 500,
            fat: 26.0,
            carbs: 65,
            protein: 7,
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