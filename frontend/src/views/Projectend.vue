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
            <div class="ml-2 mb-5">
                <v-img
                src="../assets/fee_icon.png"
                width="230"
                ></v-img>
            </div>
            <div class="ml-15">
                <v-row
                v-for="(item, n) in fee"
                :key="n"
                class="mb-16 ml-5"
                >
                    <v-btn @click="which_fee(item)">{{item}}</v-btn>
                </v-row>
            </div>
            <div class="mt-10 ml-3">
                <v-img
                v-if="real_fee"
                src="../assets/real_fee_icon.png"
                width="200"
                ></v-img>

                <v-img
                v-if="real_fee2"
                src="../assets/real_fee2_icon.png"
                width="200"
                ></v-img>   
            </div>
            
            </v-card>
            <v-card
                color="white"
                width="500"
                height="100%"
                class="mr-5 pl-5"
            >
                <div class="mb-5" align="center">
                    <v-img
                    src="../assets/index_edit_icon.png"
                    width="400"
                    ></v-img>
                </div>

                 <v-row
                v-for="(item, n) in indexlist"
                :key="n"
                class="mb-5"
                no-gutters
                >
                    <div class="pt-3">
                    <h3>{{item.index_name}}</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="mr-10" style="max-width:100px;">
                    <v-text-field
                        label="단위 : 원"
                        v-model="item.selectprofit"
                    ></v-text-field>
                    </div>
                </v-row>
            </v-card>
        </v-row>
    </div>
    </v-layout>
    </v-container>
</template>

<script>
export default {
    data:()=>({
        fee:['유료','무료'],
        real_fee: false,
        real_fee2: false,
        items: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        indexlist:[
            {
                index_name:'트렌드와 소통'
            },
            {
                index_name:'끊임없는 배움'
            },
            {
                index_name:'수용성과 타인을 돕는 것'
            },
            {
                index_name:'함께 만드는 것'
            },
            {
                index_name:'그렇다면 어떻게 해야 할까'
            },
            {
                index_name:'당부하고 싶은 말'
            },
            {
                index_name:'글을 마무리 하면서'
            },

        ],
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
    }),
    methods: {
        which_fee(item){
            console.log("item : "+item)
            if(item=='무료'){
                this.real_fee = true
                this.real_fee2 = false
            }else{
                this.real_fee = false
                this.real_fee2 = true
            }
        }
    }
    
}
</script>