<template>
<v-container fill-height style="max-width:900px;">
    <v-layout align-center row wrap class="mt-15">
        <v-flex xs12>
            <v-select :items="items" v-model="chargePoint" label="포인트 충전 금액" required></v-select>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">취소</v-btn>
                <v-btn color="blue darken-1" text @click="pay()">결제</v-btn>
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
        chargePoint: 0,
        token: localStorage.getItem('access_token'),
        
    }),
    methods: {
        pay() {
            // console.log('payobj :'+payobj+'\ntoken : '+token+'\ntoken + payobj token :'+payobj.token)
            // console.log('payobj stringfy : '+ JSON.stringify(payobj))
            console.log(typeof(this.chargePoint))
            console.log('pay obj : '+JSON.stringify())
            parseInt(this.chargePoint)
            axios
                .post('http://localhost:3000/api/chargePoint',{chargePoint: parseInt(this.chargePoint)}, { headers: {'token': this.token}})
                .then(res => {
                    localStorage.setItem('point',this.chargePoint)
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                    this.$router.push('/payment')
                });
        }
    }
}
</script>