<template>
    <v-container fill-height style="max-width:1200px;">
    <v-layout align="center" row wrap class="mt-15">
    <div>
        <v-row
            :align="center"
            no-gutters
            style="height: 800px;"
        >
            <v-card
                color="white"
                width="400"
                height="100%"
                class="mr-5 pl-15"
            >
            <div class="ml-5 mb-5">
                <v-img
                src="../assets/profit_nanugi_icon.png"
                width="230"
                ></v-img>
            </div>
                <v-row
                v-for="(item, n) in writerlist"
                :key="n"
                class="mb-10"
                no-gutters
                >
                    <div class="pt-3">
                    <h3>{{item.writer}}</h3>
                    </div>
                    <div class="ml-15" style="max-width:100px;">
                        <v-select 
                        :items="items" 
                        label="%"
                        v-model="item.selectprofit" 
                        outlined
                        required></v-select>
                    </div>
                </v-row>
            </v-card>
            <v-card
                color="white"
                width="230"
                height="100%"
                class="mr-5"   
            >
                <v-img
                src="../assets/fee_icon.png"
                width="230"
                ></v-img>
                <v-btn></v-btn>
            </v-card>
            <v-card
                color="white"
                width="400"
                height="100%"
                class="mr-5"
            >
            </v-card>
        </v-row>
    </div>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    data:()=>({
        items: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        writerlist:[
            {
                writer: '메인 작가 A', //main = 1, sub = 0
                profile: '프사',
                write_profit: 50000
            },
            {
                writer: '서브 작가 B', //main = 1, sub = 0
                profile: '프사',
                write_profit: 8000
            },
            {
                writer: '서브 작가 C', //main = 1, sub = 0
                profile: '프사',
                write_profit: 7000
            },
        ]
    })
    
}
</script>