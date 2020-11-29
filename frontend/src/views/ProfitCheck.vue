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
            v-for="(item,i) in 5"
            :key="i"
            >
            <v-expansion-panel-header>
               item
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container>
                <v-card
                width="100"
                height="100"
                color="cyan"
                >
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
        color="white"
    >
        <bar_chart></bar_chart>
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
    }),
    methods:{
        endOver(over){
            this.overlay = over;
        }
    }
}
</script>