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
            <v-card>
            <v-row cols="12" align="center" justify="center">
                <v-col md="8">
                    <v-text-field
                    label="닉네임"
                    placeholder= store.state.userInfo.nickname
                    ></v-text-field>
                    <p> id: {{$store.state.userInfo.nickname}}</p>
                
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p> comment:</p>
                </v-col>
                <v-col>
                    <v-text-field
                    v-model="comment"
                    ></v-text-field>
                </v-col>
            
            </v-row>
            </v-card>
            <v-row>
                <v-btn @click="submit()">submit</v-btn>
            </v-row>
        </v-container>   
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
    name: 'WriterApply',

    data() {
        return{
            comment: '',
            token: localStorage.getItem('access_token'),
        }
    },
    methods:{
        submit(){

            axios.post('/api/writerapply', {comment: this.comment },{ headers: {'token': this.token}})
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
