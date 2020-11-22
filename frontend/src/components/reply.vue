<template>
    <v-card width="1000" class="pa-6">
        <v-row class="ml-3">
        <div class="pb-3">
            <h3> 댓글 </h3>
        </div>
            <h3> {{items.length}} </h3>
            

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
                                {{item.subtitle}} -
                                {{item.date}}
                            </div>
                            <div>
                                {{item.title}}
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
        message: '',
        value: '댓글을 입력하세요',
        // replyNum: ,
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
        ]
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
            let today = new Date();   
            this.items.push({
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', //여기서 본인 사진넣기
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
    }
}
</script>