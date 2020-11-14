<template>
<v-container fill-height style="max-width:900px;">
    <v-layout align-center row wrap class="mt-15">
        <v-flex xs12>
            <v-select :items="items" v-model="moneyvalue" label="포인트 충전 금액" required></v-select>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">취소</v-btn>
                <v-btn color="blue darken-1" text @click="pay({ moneyvalue, token })">결제</v-btn>
            </v-card-actions>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import axios from "axios"

export default {
    
    name: 'Payment',
    data: () => ({
        dialog: false,
        items: [5000, 10000, 20000],
        moneyvalue: '',
        token: localStorage.getItem('access_token')
    }),
    methods: {
        pay(payobj) {
            // console.log('payobj :'+payobj+'\ntoken : '+token+'\ntoken + payobj token :'+payobj.token)
            // console.log('payobj stringfy : '+ JSON.stringify(payobj))
            console.log('pay obj : '+JSON.stringify(payobj))
            axios
                .post('http://localhost:3000/api/chargePoint', payobj)
                .then(res => {
                    localStorage.setItem('point',payobj.moneyvalue)
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                    this.$router.push('/payment')
                });
            //  axios.post(baseUrl+"accounts/kakaoPay",form)
            //     .post('https://kapi.kakao.com/v1/payment/ready', {
            //         headers: {
            //             'Authorization': "KakaoAK " + "7b12275e88617952b941794a3efd1693",
            //             'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            //         },
            //         params: {
            //             cid: "TC0ONETIME",
            //             partner_order_id: '1001',
            //             partner_user_id: 'Crunch',
            //             item_name: '포인트',
            //             quantity: 1,
            //             total_amount: 0,
            //             vat_amount: 200,
            //             tax_free_amount: 0,
            //             approval_url: 'http://localhost:8080',
            //             fail_url: 'http://localhost:8080',
            //             cancel_url: 'http://localhost:8080',
            //         }
            //     })
               
        }
    }
}
</script>
