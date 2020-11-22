<template>
    <v-app>
        <v-img
        max-height="200"
        max-width="100%"
        src="../assets/banner.jpg"
        >
        <p style="position: absolute; top: 32%; left:45%; font-size:50px; color: white;">주제</p>
        </v-img>
        <v-container>
            <v-row cols="12" align="center" justify="center">
                <v-col md="8">
                    <v-card> 
                        <v-container>
                            <v-row cols="12" justify="center">
                                <v-col md="3" align="center">
                                    <v-avatar
                                    size="110"
                                    >
                                    <v-img :src="'https://cdn.vuetifyjs.com/images/cards/halcyon.png'"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col md="9" align="center">
                                <v-text-field
                                label="닉네임"
                                disabled
                                outlined
                                :placeholder= $store.state.userInfo.nickname
                                ></v-text-field>
                                <v-autocomplete
                                v-model="intre"
                                :items="items"
                                :disabled="profile_radios == 'radio-1'"
                                outlined
                                dense
                                chips
                                small-chips
                                label="관심분야"
                                multiple
                                ></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-textarea
                            label="지필 이력"
                            v-model="carrer"
                            outlined
                            ></v-textarea>
                        <v-textarea
                        outlined
                        name="comment"
                        label="comment"
                        v-model="comment"
                        ></v-textarea>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row cols="12" justify="center">
                <v-col md="8" align="right">
                <v-btn v-show="false" class="ma-2" @click="submit()">임시저장</v-btn>
                <v-btn class="ma-2" @click="submit()">제출</v-btn>
                </v-col>
            </v-row>
        </v-container>   
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
    name: 'WriterApply',
    created() {
        this.idp = this.$route.params.idp;
    },

    data() {
        return{
            idp:0,
            comment: '',
            token: localStorage.getItem('access_token'),
            intre:['IT'],
            items:['여행', '수학', '과학', 'IT', '요리','건강','역사','건축','문화,예술'],
            carrer:`1. 아이폰 12 생태계,
2. 일상을 담는 모빌리티 - 총 12회차`,
        }
    },
    methods:{
        submit(){

            axios.post('/api/writerapply', {projectId: this.idp, comment: this.comment },{ headers: {'token': this.token}})
            .then(res => {
                console.log(res)
                
            })
            .catch((err) => {
                console.log(err)
            });
        }
    }
        
}
</script>
