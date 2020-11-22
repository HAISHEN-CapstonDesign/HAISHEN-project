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
                                disabled
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
                <v-btn class="ma-2" @click="submit()">임시저장</v-btn>
                <v-btn class="ma-2" @click="submit()">제출</v-btn>
                </v-col>
            </v-row>
                <v-dialog
                    v-model="dialog0"
                    persistent
                    max-width="500"
                    >
                    <v-card>
                    <v-card-title class="headline">
                        지원이 완료되었습니다
                    </v-card-title>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="green darken-1"
                        text
                        @click="goto_main()"
                        >
                        확인
                        </v-btn>
                       
                    </v-card-actions>
                </v-card>
                </v-dialog>
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
            dialog0: false,
            comment: '',
            token: localStorage.getItem('access_token'),
        }
    },
    methods:{
        submit(){

            axios.post('/api/writerapply', {projectId: this.idp, comment: this.comment },{ headers: {'token': this.token}})
            .then(res => {
                console.log(res)
                this.dialog0=true
                
            })
            .catch((err) => {
                console.log(err)
            });
        },
        goto_main(){
            this.$router.push('/')

        }
    }
        
}
</script>
