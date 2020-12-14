<template>
    <v-card width="1000" class="pa-6">
        <v-row class="ml-3">
        <div class="pb-3 pr-1">
            <h3> 댓글 </h3>
        </div>
            <h3> {{ items.length}} </h3>
        <v-spacer></v-spacer>
        <v-rating
                background-color="grey"
                color="yellow"
                half-increments
                size="25"
                length="5"
                dense
                class="mr-3"
                v-model="star_rating"
                value="star_rating"
            ></v-rating>
            <v-btn class="mb-5" outlined @click="star()">별점 주기</v-btn>
        <div class="pb-1 pr-3">
            <v-btn @click="increment" icon color="deep-orange">
                <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            {{ contents_like }}
        </div>
        
        

        </v-row>
        <v-divider></v-divider>

        <v-row no-gutters>
            <v-col
            v-for="(item) in items"
            v-bind:key="item.subtitle"
            cols=12>

                <v-card class="ma-0 pa-n3" flat  align="left" width="800">
                    <v-row>
                        <v-col cols=1>
                         <v-avatar  justify="space-around">
                        <img :src="item.avatar">
                         </v-avatar>
                        
                        <!--<v-avatar  justify="space-around">
                            <img
                                src=item[cols].avatar
                            >
                            </v-avatar>-->
                        </v-col>
                        <v-col cols=10 class="ml-2">
                            <div>
                                <p style="font-size:14px; color:grey">{{item.nickname}} -
                                {{item.time}}</p>
                            </div>
                            <div>
                                <p>{{item.text}}</p>
                            </div>
                            
                        </v-col>
        
                    </v-row> 
                </v-card>
                <v-divider></v-divider>
            </v-col>
     
            <div class="pt-10">
                <div class="pt-10">
                    <v-card flat width="595">
                        <v-textarea height= "0.5px"
                            :value="value"
                            v-model="message"
                            onfocus="textClear()"
                        ></v-textarea>
                    </v-card>
                </div>
                <div style="float: right">
                <v-btn dark @click="pushSubmit">댓글등록</v-btn>
                </div>
            </div>
            <!-- <v-btn @click="alert('sdafasdf')">asfasfasf</v-btn> -->

        </v-row>
    </v-card>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PostReply',
    data : () => ({
        star_rating: 0,
        contents_like: 3, //axios로 좋아요 수 가져와야함
        message: '',
        click_like: false,
        value: '댓글을 입력하세요',
        // replyNum: ,
        items: [
            // { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
            //     title: `기획자의 트렌드에 대해서 알 수 있었습니다 감사합니다.`, 
            //     subtitle: '기획자할래',
            //     date: '2020.10.25'
            // },
            // { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
            //     subtitle: 'crunch_good', 
            //     title: '좋은글 감사합니다!', 
            //     date: '2020.10.25'
            // },
            // { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
            //     subtitle: 'finn', 
            //     title: '추천 누르고 갑니다!',
            //     date: '2020.10.25'
            // },
            // ==============================================================
            // {
            //     indexId: 1
            //     nickname: "mumu"
            //     projectId: 174
            //     text: "ㄴㅁㅇㅎㅁㄴㅇㅎㅁㄴㅇㅎㅁ"
            //     time: "2020-12-14 00:00:00"
            //     userId: 78
            // }
        ]
    }),
    props:['idp','idc'],
    created() {
      this.getcomment()
      console.log('items url :'+this.items[0].avatar)


    },
    methods:{
        star(){
            console.log(this.star_rating)
           axios
                .post('http://localhost:3000/api/addRating',
                    { projectId: this.idp, indexId: this.idc, rate: this.star_rating}, 
                    { headers: {'token':localStorage.getItem('access_token') }}
                )
                .then(res => {
                    console.log((res.data)) 
                    // res.data 는 true 아니면 false
                    // true면 처음 별점 넣는거
                    // false면 이미 별점 준거
                    if(res.data ==true) alert("별점이 등록되었습니다!" )
                    else if(res.data ==false) alert("이미 별점을 등록한 포스트 입니다")

                })
                .catch((err) => {
                    console.log(err)
                    //alert("에러가 발생했습니다. 다시 시도해주세요")
                });
            
            this.star_rating = 0;


        },
        clickmethod: function(){
            alert("dsfsdf")
        },
        replyNum(){
            alert(this.items.length)
        },
        pushSubmit(){
            console.log("###########")
            console.log(this.idp)
            console.log(this.idc)
            console.log(this.message)
            axios
                .post('http://localhost:3000/api/submitComment',
                { projectId: this.idp , postindexId: this.idc, text:this.message }, 
                { headers: {'token':localStorage.getItem('access_token') }}
                )
                .then(res => {
                        // localStorage.setItem('point',this.chargePoint)
                        console.log("~~~~~~~~~~~~~~~~~")
                        console.log((res.data))                    
                    })
                    .catch((err) => {
                        console.log(err)
                        //alert("에러가 발생했습니다. 다시 시도해주세요")
                    });
            let today = new Date();   
            this.items.push({
                avatar: require('../assets/face_10.jpg'), //여기서 본인 사진넣기
                title: this.message,
                subtitle: localStorage.getItem('nickname'),
                date: today.toLocaleString()
            })
            this.textClear()



        },
        textClear(){
            this.message='';
        },
        getcomment(){
        console.log("$$%$%$%$%$%")
        console.log(this.idp, this.idc)
        axios
            .post('http://localhost:3000/api/getCommentList',
            { projectId: this.idp , postIndex: this.idc}, 
            { headers: {'token': localStorage.getItem('access_token')}}
            )
            .then(res => {
                    // localStorage.setItem('point',this.chargePoint)
                    console.log("~~~~~~~~~~~~~~~~~")
                    console.log((res.data))
                    // {
                    //     indexId: 1
                    //     nickname: "mumu"
                    //     projectId: 174
                    //     text: "ㄴㅁㅇㅎㅁㄴㅇㅎㅁㄴㅇㅎㅁ"
                    //     time: "2020-12-14 00:00:00"
                    //     userId: 78
                    // }
                    this.items = res.data
                    this.items.forEach((element, idx) => {
                        var dateArr = element.time.split('-');
                        var dateString = dateArr[0]+'년 '+ dateArr[1]+'월 '+ dateArr[2].split(" ")[0]+'일'
                        this.items[idx].time = dateString
                        this.items[idx].avatar = 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
                        
                    });

                
                })
                .catch((err) => {
                    console.log(err)
                    //alert("에러가 발생했습니다. 다시 시도해주세요")
                });
        },
        increment() {
            let like_click_user_nickname = localStorage.getItem('nickname')
            if(like_click_user_nickname != null && this.click_like == false){
                this.contents_like++;
                this.click_like = true
            }
            else if(like_click_user_nickname != null && this.click_like == true){
                this.contents_like--;
                this.click_like = false
            } 
        }
    }
}
</script>