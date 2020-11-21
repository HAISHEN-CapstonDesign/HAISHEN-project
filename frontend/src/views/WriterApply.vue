<template>
    <v-app>
        <v-container>

        <v-row>
            <v-col>
                <p> id:</p>
                
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
        <v-row>
            <v-btn @click="submit()">submit</v-btn>
        </v-row>
        <v-row>
            
        </v-row>
        <v-row>
            
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
