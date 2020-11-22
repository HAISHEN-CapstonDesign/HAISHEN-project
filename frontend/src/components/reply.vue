<template>
    <v-card width="1000" class="pa-6">
        <v-row class="ml-3">
            <h3> 댓글 </h3>
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
                            <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                            >
                            </v-avatar>
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
                title: `뭇 대중을 구할 피다. 아니한 그들의 거선의 사랑의 가슴에 봄바람이다. 용감하고 생생하며, 이상 속잎나고, 못할 이것이다. 할지니, 가지에 커다란 것은 청춘 뜨거운지라, 없는 낙원을 피가 있다. 싸인 속에 오아이스도 시들어 대고, 곳이 이것이다. 이상은 그들은 설레는 대고, 오직 따뜻한 대한 우리 그들은 운다. 인간은 평화스러운 하는 청춘은 사라지지 그들은 싶이 피부가 봄바람이다. 동산에는 사랑의 무엇을 사는가 곳으로 있으랴? 커다란 우리 하는 아니다. 것은 거선의 소담스러운 무엇을 방황하였으며, 있는 풀이 따뜻한 되는 피다. 크고 인간이 끝까지 속잎나고, 위하여서.`, 
                subtitle: 'hyejinJeon',
                date: '2020.10.25'
            },
            { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', 
                subtitle: 'asdad', 
                title: '본인나라에는 신분제도가 있다하더라도 외국인에게까지 그것을 강요하는것은 문제가 있는 태도라고 생각합니다. ㅡ ㅡ 고생많으셨어요', 
                date: '2020.10.25'
            },
            { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', 
                subtitle: 'Oui oui', 
                title: 'ㅠㅠㅠ 참 신기해요 아직도 그런 신분제도가 있다는게!! ㅠㅠㅠ',
                date: '2020.10.25'
            },
        ]
    }),
    created() {
      this.getcomment()
    },
    methods:{
        replySubmit: function(message){
            // this.$emit('child_replySubmit')
            alert(this.items.length)
            alert(message)
            this.$set(this.message, '')
            this.items.push({
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
                title: `뭇 대중을 구할 피다. 아니한 그들의 거선의 사랑의 가슴에 봄바람이다. 용감하고 생생하며, 이상 속잎나고, 못할 이것이다. 할지니, 가지에 커다란 것은 청춘 뜨거운지라, 없는 낙원을 피가 있다. 싸인 속에 오아이스도 시들어 대고, 곳이 이것이다. 이상은 그들은 설레는 대고, 오직 따뜻한 대한 우리 그들은 운다. 인간은 평화스러운 하는 청춘은 사라지지 그들은 싶이 피부가 봄바람이다. 동산에는 사랑의 무엇을 사는가 곳으로 있으랴? 커다란 우리 하는 아니다. 것은 거선의 소담스러운 무엇을 방황하였으며, 있는 풀이 따뜻한 되는 피다. 크고 인간이 끝까지 속잎나고, 위하여서.`, 
                subtitle: 'hyejinJeon',
                date: '2020.10.25'
            })
            alert(this.items.length)
        },
        clickmethod: function(){
            alert("dsfsdf")
        },
        replyNum(){
            alert(this.items.length)
        },
        pushSubmit(){
            let today = new Date();   
            this.items.push({
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', 
                title: this.message,
                subtitle: 'hyejinJeon',
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