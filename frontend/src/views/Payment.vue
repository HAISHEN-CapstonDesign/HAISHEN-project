<template>
<v-container fill-height style="max-width:600px;">
    <v-layout align-center row wrap class="mt-15">
        <div>
            <p style="font-size:20px">현재 내가 보유 중인 크런치 포인트</p>
            <v-spacer class="pa-5"></v-spacer>
            <v-card flat width="600px">
                <subtitle-2 style="font-size:25px">{{ currentpoint }} 포인트</subtitle-2>
            </v-card>
        </div>
        <v-flex xs12>
            <v-card flat>
                <div class="mb-5">
                    <p style="font-size:20px">크런치 포인트 충전하기</p>
                </div>
                
                <div>
                    <v-select :items="items" v-model="chargePoint" label="포인트 충전 금액" required></v-select>
                </div>
                <v-card-actions >
                    <v-spacer class="pa-10"></v-spacer>
                    <v-btn class="black white--text" text @click="dialog = false">취소</v-btn>
                    <!--  <v-btn class="black white--text" text @click="pay()">결제</v-btn> -->
                    <v-btn class="black white--text" text @click="importpay()">결제</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import axios from "axios"
import {
    mapActions
} from "vuex"
import router from '../routes/page_index.js'

export default {
    
    name: 'Payment',
    data: () => ({
        dialog: false,
        items: [1000, 5000, 10000, 20000],
        chargePoint: 0,
        token: localStorage.getItem('access_token'),
        currentpoint: localStorage.getItem('point')
    }),
    methods: {
        ...mapActions(['paymentpoint']),
        pay() {
            // console.log('payobj :'+payobj+'\ntoken : '+token+'\ntoken + payobj token :'+payobj.token)
            // console.log('payobj stringfy : '+ JSON.stringify(payobj))
            console.log(typeof(this.chargePoint))
            console.log('pay obj : '+JSON.stringify())
            parseInt(this.chargePoint)
            axios
                .post('http://localhost:3000/api/chargePoint',{chargePoint: parseInt(this.chargePoint)}, { headers: {'token': this.token}})
                .then(res => {
                    localStorage.setItem('point',res.data) //local storage 에 바뀐 포인트 저장해야함 수정필요
                    console.log(res.data)
                    this.paymentpoint(res.data)
                    router.push({ name: "MainPage"})
                })
                .catch((err) => {
                    console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                });
        },
        importpay(){
            parseInt(this.chargePoint)
            /* 1. 가맹점 식별하기 */
            const { IMP } = window;
            IMP.init('imp55294309');

            /* 2. 결제 데이터 정의하기 */
            const data = {
                pg: 'html5_inicis',                           // PG사
                pay_method: 'card',                           // 결제수단
                merchant_uid: `mid_${new Date().getTime()}`,  // 주문번호
                amount: this.chargePoint,                                 // 결제금액
                name: '크런치 포인트 구매',                     // 주문명
                buyer_name: '홍길동',                           // 구매자 이름
                buyer_tel: '01012341234',                     // 구매자 전화번호
                buyer_email: 'example@example',               // 구매자 이메일
                buyer_addr: '신사동 661-16',                    // 구매자 주소
                buyer_postcode: '06018',                      // 구매자 우편번호
            };

            /* 4. 결제 창 호출하기 */
            IMP.request_pay(data, this.callback);
        },
        callback(response) {
            /* 3. 콜백 함수 정의하기 */
            const {
                success,
                // merchant_uid,
                error_msg,
            } = response;
            if (success) {
                parseInt(this.chargePoint)
                // let beforpoint = localStorage.getItem('point') //local storage 에 바뀐 포인트 저장해야함 수정필요
                // parseInt(this.chargePoint)
                axios
                    .post('http://localhost:3000/api/chargePoint',{chargePoint: parseInt(this.chargePoint)}, { headers: {'token': this.token}})
                    .then(res => {
                        localStorage.setItem('point',res.data) //local storage 에 바뀐 포인트 저장해야함 수정필요
                        console.log(res.data)
                        this.paymentpoint(res.data)
                        router.push({ name: "MainPage"})
                    })
                    .catch((err) => {
                        console.log(err)
                        alert("에러가 발생했습니다. 다시 시도해주세요")
                    });
                    // console.log('beforpoint : '+beforpoint)
                    // let afterpoint = beforpoint + this.chargePoint
                    // this.paymentpoint(afterpoint)
                    // console.log('\nthis.chargepoint : '+this.chargePoint)
                    // console.log('\nafterpoint : '+afterpoint)
                    alert('결제 성공!');
                    router.push({ name: "MainPage"})
            } else {
                alert(`결제 실패: ${error_msg}`);
            }
        }
    }
}
</script>