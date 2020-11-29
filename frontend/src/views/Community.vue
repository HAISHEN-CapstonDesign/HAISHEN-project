<template>
<v-app>
    <v-container fluid grid-list-sm pa-5>
        <v-row justify="center">
            <v-col>
                <h3>title, subtutle 나중에 정리</h3>
            </v-col>
        </v-row>
    <v-row cols="12">
        <v-col md="2">
            <Subtitle></Subtitle>
        </v-col>
        <v-col md="6">
            <v-card height="668px">
                <div class="content_div" v-html="nowMainText"></div>
            </v-card>
        </v-col>
        <v-col md="4">
        <v-card min-height="650px">
            <div id="container"
            style="overflow-y:auto; overflow-x:hidden; height:430px;">
                <v-card
                v-for="(item) in items"
                v-bind:key="item.subtitle"
                cols="12"
                class="ma-1 pa-0"
                flat 
                >
                    <v-row v-if="item.subtitle!=me" cols="12" justify="left">
                        <v-col md="2" align="center">
                            <v-avatar size="50px">
                                <img :src="item.avatar">
                            </v-avatar>
                        </v-col>
                        <v-col md="10">
                            <v-card flat style="background-color: #ECDACE" width="70%">
                                <v-card-text>{{item.title}}</v-card-text>
                            </v-card>
                            <p>{{item.date}}</p>
                        </v-col>
                    </v-row>
                    <v-row v-else justify="right">
                        <v-col align="right">
                            <v-card flat style="background-color: #D5F3E9" width="60%">
                                <v-card-text align="left">{{item.title}}</v-card-text>
                            </v-card>
                            <p>{{item.date}}</p>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <br>
            <v-divider></v-divider>
        <v-card-actions class="pt-0">
            <v-row>
                <v-col>
                    <v-btn
                    text
                    v-for="writer in writers"
                    :key="writer.nicname"
                    @click="tag(writer.nickname)"
                    >@{{writer.nickname}}</v-btn>
                    <v-textarea
                    label="내용을 입력하세요."
                    v-model="message"
                    solo
                    outlined
                    height="100px"
                    onfocus="textClear()"
                    ></v-textarea>
                    <v-btn style="float: right" dark @click="pushSubmit">작성</v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
</v-app>
</template>

<script>
//import axios from 'axios'
import Subtitle from '../components/subtitleList'
export default {
    components:{
        Subtitle,
    },
    data : () => ({
        me: localStorage.getItem('nickname') ,
        nowMainText:`<p>글 내용</p>`,
        message: '',
        writers:[
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                nickname: '기획자할래',
                tag: false,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                nickname: 'crunch_good',
                tag: false,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                nickname: 'finn',
                tag: false,
            },
        ],
        items: [
            { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
                title: `기획자의 트렌드에 대해서 알 수 있었습니다 감사합니다.`, 
                subtitle: '기획자할래',
                date: '2020.10.25'
            },
            { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
                subtitle: 'crunch_good', 
                title: '좋은글 감사합니다!', 
                date: '2020.10.25'
            },
            { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
                subtitle: 'finn', 
                title: '추천 누르고 갑니다!',
                date: '2020.10.25'
            },
        ],
    }),
    created() {
      this.getcomment()
      console.log('items url :'+this.items[0].avatar)
    },
    methods:{
        clickmethod: function(){
            alert("dsfsdf")
        },
        replyNum(){
            alert(this.items.length)
        },
        pushSubmit(){
            let today = this.$moment(new Date()).format('YYYY-MM-DD HH:mm');   
            this.items.push({
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', //여기서 본인 사진넣기
                title: this.message,
                subtitle: localStorage.getItem('nickname'),
                date: today.toLocaleString()
            })
            this.message='';

        },
        scrollToEnd: function() {    	
            var container = this.$el.querySelector("#container");
            container.scrollTop = container.scrollHeight;
        },
        //나중에 전송으로 이동
        tag(writer){
            alert(writer+'에게 알람')
        },
        /*
        getcomment(){
        console.log("hy22")
        axios
            .post('http://localhost:3000/api/getcomment',
            { projectId: 1 , postIndex: 3}, 
            { headers: {'token': this.token}}
            )
            .then(res => {
                    // localStorage.setItem('point',this.chargePoint)
                    console.log((res.data))
                
                })
                .catch((err) => {
                    console.log(err)
                    alert("에러가 발생했습니다. 다시 시도해주세요")
                });
        },
        */
    }
}
</script>
<style>
.v-text-field__details {
    display: none;
    flex: 1 0 auto;
    max-width: 100%;
    min-height: 14px;
    overflow: hidden;
}
</style>