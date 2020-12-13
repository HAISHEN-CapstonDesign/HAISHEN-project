<template>
    <v-container fill-height style="max-width:700px;">
    <v-layout align-center row wrap class="mt-15">
    <v-card>
        <div style="text-align : center;"> 
            <img src='../assets/Account3_font_img.png' height="100px"/>
        </div>
            <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step
                    :complete="e1 > 1"
                    step="1"
                >
                    Please enter<br>the account holder name
                </v-stepper-step>
                <v-stepper-step
                    :complete="e1 > 2"
                    step="2"
                >
                    Please select a bank
                </v-stepper-step>
                <v-stepper-step step="3">
                    Please enter<br> account number
                </v-stepper-step>
                </v-stepper-header>
                <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card
                    class="mb-12"
                    color="blue lighten-5"
                    height="200px"
                    >
                        <div class="pa-3 pt-15">
                            <v-text-field 
                                v-model="accountholder" 
                                label="예금주명을 입력하세요">
                            </v-text-field>
                        </div>
                    </v-card>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>

                    <v-btn text>
                    Cancel
                    </v-btn>
                </v-stepper-content>

            <v-stepper-content step="2">
                <v-card
                class="mb-12"
                color="blue lighten-5"
                height="200px"
                >
                    <div class="pa-3 pt-15">
                        <v-select 
                            :items="items" 
                            v-model="bankname" 
                            label="은행 선택" 
                            required>
                        </v-select>
                    </div>
                </v-card>
                <v-btn
                color="primary"
                @click="e1 = 3"
                >
                Continue
                </v-btn>

                <v-btn text>
                Cancel
                </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card
                class="mb-12"
                color="blue lighten-5"
                height="200px"
                >
                    <div class="pa-3 pt-15">
                        <v-text-field 
                            v-model="accountnumber" 
                            label="계좌번호를 입력해주세요 ('-' 없이 숫자만 입력해주세요)"
                        >
                        </v-text-field>
                    </div>
                </v-card>

                <v-btn
                color="primary"
                @click="submit_account()"
                >
                Continue
                </v-btn>

                <v-btn text>
                Cancel
                </v-btn>
            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-card>
    </v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
export default {
    created(){
        axios.post('http://localhost:3000/api/getaccounts', {tmp:0},
            {
                headers: {
                    'token': localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });

    }
    ,
    data: () => ({
        accountnumber:'',
        bankname:'',
        accountholder:'',
        items: ['국민은행', '기업은행', '농협은행', '신한은행','우체국','SC은행','하나은행','한국씨티은행','우리은행','경남은행','광주은행','대구은행','도이치은행','부산은행','산업은행','수협중앙회','전북은행','제주은행','새마을금고연합회','신용협동조합','저축은행','BOA은행','케이은행','카카오뱅크','지역농축협'],
        e1: 1
    }),
    methods: {
        enrollaccount(){
            alert('계좌등록이 완료되었습니다')
        },
        submit_account(){
            console.log(this.accountnumber, this.accountholder, this.bankname)
            axios.post('http://localhost:3000/api/submitaccount', 
            {account_num: this.accountnumber, accountHolder:this.accountholder, bank:this.bankname},
            {
                headers: {
                    'token': localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error.response);
            });
        }
    }
}
</script>