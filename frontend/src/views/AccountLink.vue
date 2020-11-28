<template>
    <v-container fill-height style="max-width:500px;">
    <v-layout align-center row wrap class="mt-15"> 
        <v-flex xs12>      
            <v-card>
            <div style="text-align : center;"> 
                <img src='../assets/Account_font_img.png' height="100px"/>
            </div>
                <div class="pa-3">
                    <v-text-field v-model="accountholder" label="예금주명을 입력하세요">
                    </v-text-field>
                    <v-select :items="items" v-model="bankname" label="은행 선택" required></v-select>
                    <v-text-field v-model="accountnumber" label="계좌번호를 입력해주세요 ('-' 없이 숫자만 입력해주세요)">
                    </v-text-field>
                    <v-btn class="black white--text" depressed block large @click="login({ identity, password })">
                        계좌 등록
                    </v-btn>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
    data: () => ({
        items: ['국민은행', '기업은행', '농협은행', '신한은행','우체국','SC은행','하나은행','한국씨티은행','우리은행','경남은행','광주은행','대구은행','도이치은행','부산은행','산업은행','수협중앙회','전북은행','제주은행','새마을금고연합회','신용협동조합','저축은행','BOA은행','케이은행','카카오뱅크','지역농축협'],
    }),
}
</script>