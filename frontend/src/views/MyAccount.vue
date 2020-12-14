<template>
    <v-container fill-height style="max-width:730px;">
    <v-layout align-center row wrap class="mt-15">
        <v-flex xs12>      
            <v-card
            color="blue-grey darken-4"
            class="pb-5"
            >
            <div style="text-align : center;"> 
                <img src='../assets/myaccount_img_white.png' height="100px"/>
            </div>
                <div class="ml-15">
                   
                    <v-col
                    v-for="( item , i ) in account"
                    :key="i"
                    class="ml-15"
                    >
                        <v-card
                        color="yellow darken-1"
                        width="450"
                        height="150"
                        outlined="false"
                        hover="true"
                        class="text-center"
                        >
                            <div style="position: absolute; top: 20%; width:100%">
                            <h3>예금주 : {{item.accountHolder}}</h3>
                            <h3>계좌 번호 : {{item.account_num}}</h3>
                            <h3>은행 : {{item.bank}}</h3>
                            </div>
                        </v-card>
                    </v-col>
                    <div class="ml-16">
                        <v-card
                        color="blue-grey darken-3"
                        width="450"
                        height="80"
                        outlined="false"
                        hover="true"
                        class="text-center ml-2"
                        to='/accountlink'
                        >
                            <div style="position: absolute; top: 40%; width:100%">
                            <v-icon>
                                mdi-plus
                            </v-icon>
                            </div>
                        </v-card>
                    </div>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
      account: [],
      tempaccount: [],
    }),
    created() {
            axios
                .post('http://localhost:3000/api/getaccounts',{tmp:3}, { headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                    this.tempaccount = res.data;
                    this.tempaccount.forEach(element => {
                        this.account.push(
                            {
                                accountHolder: element.accountHolder,
                                account_num: element.account_num,
                                bank: element.bank
                            }
                        )    
                    })
                    console.log('tempaccount :'+JSON.stringify(this.tempaccount))
                    console.log('account :'+JSON.stringify(this.account))

                    })
                    .catch((err) => {
                         console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                     });
    },
    methods: {
        // test(){
            
            
        
    }
}
</script>