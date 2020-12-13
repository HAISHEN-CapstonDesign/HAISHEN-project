<template>
    <v-container fill-height style="max-width:1300px;">
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
            <div align="center" class="mr-13 mt-2 mb-10">
                <h1>수익 배분</h1>
            </div>
                <v-row
                v-for="(item, n) in writerlist"
                :key="n"
                class="mb-10"
                no-gutters
                >
                    <div class="pt-3">
                    <h3>{{item.writerNick}}</h3>
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
            <div align="center" class="ml-1 mt-2 mb-11">
                <h1>유&무료</h1>
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
                width="220"
                ></v-img>   
            </div>
            
            </v-card>
            <v-card
                color="white"
                width="500"
                height="100%"
                class="mr-5 pl-5"
            >
                <div class="mb-10 mt-2" align="center">
                    <h1>목차 별 금액 책정</h1>
                </div>

                 <v-row
                v-for="(item, n) in indexlist"
                :key="n"
                class="mb-5"
                no-gutters
                >
                    <div class="pt-3">
                    <h3>{{item.title}}</h3>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="mr-10" style="max-width:100px;">
                    <v-text-field
                        label="단위 : 원"
                        v-model="item.fee"
                    ></v-text-field>
                    </div>
                </v-row>
            </v-card>
            <div>
                <v-btn @click="submitEndProject()">
                    제출
                </v-btn>
            </div>
                
            
               
            
        </v-row>


    </div>
    </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    created(){
        this.idp = this.$route.params.idp;
        console.log("sdfsdgg")
        console.log(this.idp);
        axios      // 작가 목록
            .post('http://localhost:3000/api/getWriterList',{id:this.idp},{ headers: {'token': localStorage.getItem('access_token')}})
            .then(res => {
                console.log(res.data)
                // 리스트형식으로 옴
                // {
                //     userId: 78, 
                //     nickname: "mumu", 
                //     mainOrnot: 1
                // }
                this.getWriterList = res.data;
                this.getWriterList.forEach(element=>{
                    this.writerlist.push(
                        {
                            userId: element.userId,
                            writerNick: element.nickname,
                            selectprofit: null,

                        }
                    )
                })
                
            })
            .catch((err) => {
                console.log(err)
            });
        axios     // index 목록
            .post('http://localhost:3000/api/getIndexList',{id:this.idp},{ headers: {'token': localStorage.getItem('access_token')}})
            .then(res => {
                console.log(res.data)
                // 리스트형식으로 옴
                // {
                //     fee: 0,
                //     postIndexIdentity: {id: 1, projectId: 157},
                //     title: "assdgasgasdgasdgsdg"
                // }
                this.getindexList = res.data;
                this.getindexList.forEach(element => {
                    this.indexlist.push(
                        {
                            indexId: element.postIndexIdentity.id,
                            title: element.title,
                            fee: null
                        }
                    )
                });

            })
            .catch((err) => {
                console.log(err)
            });

    },
    data:()=>({
        idp:0,
        fee:['유료','무료'],
        real_fee: false,
        real_fee2: true,
        items: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        getindexList:[],
        indexlist:[
            // {
            //     index_name:'트렌드와 소통'
            // },
            // {
            //     index_name:'끊임없는 배움'
            // },
            // {
            //     index_name:'수용성과 타인을 돕는 것'
            // },
            // {
            //     index_name:'함께 만드는 것'
            // },
            // {
            //     index_name:'그렇다면 어떻게 해야 할까'
            // },
            // {
            //     index_name:'당부하고 싶은 말'
            // },
            // {
            //     index_name:'글을 마무리 하면서'
            // },

        ],
        writerlist:[
            // {
            //     writer: '메인 작가 A', //main = 1, sub = 0
            //     profile: '프사',
            //     write_profit: 50000
            // },
            // {
            //     writer: '서브 작가 B', //main = 1, sub = 0
            //     profile: '프사',
            //     write_profit: 8000
            // },
            // {
            //     writer: '서브 작가 C', //main = 1, sub = 0
            //     profile: '프사',
            //     write_profit: 7000
            // },
        ],
        getWriterList:[]
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
        },
        submitEndProject(){
            // var writer_profit = []
            // this.writerlist.forEach(element=>{
                
                
            // })
            console.log(this.writerlist);
            
            axios
                .post(`http://localhost:3000/api/submitWriterMoneyPercent/${this.idp}`,this.writerlist,{ headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                });
            axios
                .post(`http://localhost:3000/api/submitIndexProfit/${this.idp}`,this.indexlist,{ headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }
    
}
</script>