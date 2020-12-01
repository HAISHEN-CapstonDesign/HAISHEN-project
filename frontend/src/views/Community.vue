<template>
<v-app>
    <v-container fluid grid-list-sm pa-5>
        <v-row justify="center">
            <v-col>
                <h3>{{title}}(title), {{subtitle}}(subtutle) 나중에 정리</h3>
            </v-col>
        </v-row>
    <v-row cols="12">
        <v-col md="2">
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col md="6">
            <v-card height="668px">
                <div class="content_div" v-html="nowMainText"></div>
            </v-card>
        </v-col>
        <v-col md="4">
        <v-card min-height="650px">
            <div id="container"
            style="overflow-y:auto; overflow-x:hidden; min-height:430px; max-height:430px;">
                <v-card
                v-for="(item) in recvList"
                v-bind:key="item.date"
                cols="12"
                class="ma-1 pa-0"
                flat 
                >
                    <v-row v-if="item.userName!=me" cols="12" justify="left">
                        <v-col md="2" align="center">
                            <v-avatar size="50px">
                                <img :src="item.avatar">
                            </v-avatar>
                        </v-col>
                        <v-col md="10">
                            <v-card flat style="background-color: #ECDACE" width="70%">
                                <v-card-text class="ma-0 pa-2">
                                    {{item.content}}
                                </v-card-text>
                            </v-card>
                            <p>{{item.date}}</p>
                        </v-col>
                    </v-row>
                    <v-row v-else justify="right">
                        <v-col align="right">
                            <v-card flat style="background-color: #D5F3E9" width="60%">
                                <v-card-text align="left" class="ma-0 pa-2">
                                    <v-chip
                                    small
                                    text
                                    class="ma-1 pa-2"
                                    color="blue"
                                    outlined
                                    v-for="tags in item.tagList"
                                    :key="tags.name"
                                    >{{tags.name}}</v-chip>
                                    {{item.content}}
                                    </v-card-text>
                            </v-card>
                            <p>{{item.date}}</p>
                        </v-col>
                    </v-row>
                </v-card>
            </div>
            <v-divider></v-divider>
        <v-card-actions class="pt-0">
            <v-row>
                <v-col>
                    <v-btn
                    text
                    class="writerTagBtn"
                    v-for="writer in writers"
                    :key="writer.nickname"
                    @click="tag(writer.nickname)"
                    :id="writer.nickname"
                    >@{{writer.nickname}}</v-btn>
                    <v-textarea
                    label="내용을 입력하세요."
                    v-model="message"
                    solo
                    outlined
                    height="100px"
                    ></v-textarea>
                    <v-btn style="float: right" dark @click="sendMessage">작성</v-btn>
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
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
export default {
    components:{
        Subtitle,
    },
    data : () => ({
        title:'',
        subtitle:'',
        idp:0,
        ids:0,
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
        
        tagLists:[],
       // userName: "",
       // message: "",
        recvList: [],
    }),
    created() {
        this.title=this.$store.state.title;
        this.idp = this.$route.params.idp;
        this.ids = this.$route.params.ids;
        this.subtitle=this.$store.state.subtitle[this.ids-1].text
       // this.getcomment()
        this.connect()
      //  this.connect()
       // console.log('items url :'+this.items[0].avatar)
    },
    methods:{
        clickmethod: function(){
            alert("dsfsdf")
        },
        replyNum(){
            alert(this.items.length)
        },
    /*    async pushSubmit(){
            var clearTag = document.getElementsByClassName("writerTagBtn");
            let today = this.$moment(new Date()).format('YYYY-MM-DD HH:mm');   
            await this.items.push({
             //   avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', //여기서 본인 사진넣기
                title: this.message,
                subtitle: localStorage.getItem('nickname'),
                date: today,
                tagList:this.tagLists,
            })
            this.tagLists=[];
            this.message='';
            //버튼 색 초기화
            for(var j=0; j<clearTag.length; j++){
                clearTag[j].style.color = "black";
            }
            
            this.scrollToEnd();

        },*/
        scrollToEnd() {    	
            var container = this.$el.querySelector("#container");
            container.scrollTop = container.scrollHeight;
        },
        tag(writer){
            var bodyTag = document.getElementById(writer);
            var plusTag= "@" + writer
            var check=false;
            for(var i=0; i<this.tagLists.length; i++){
                if(this.tagLists[i].name==plusTag){
                    check=true;
                    bodyTag.style.color = "black";
                    this.tagLists.splice(i,1);
                    break;
                }
            }
            if(check == false){
                bodyTag.style.color = "blue";
                this.tagLists.push({
                    name:plusTag
                })
            }

           // alert(writer+'에게 알람')
        },
        changeSubtitle(idx){
            this.$router.push(`/${this.idp}/${idx}/community`);
        },
        sendMessage () {
        if(this.message !== ''){
            var clearTag = document.getElementsByClassName("writerTagBtn");
            this.send()
            this.message = '';
            this.tagLists=[];
            for(var j=0; j<clearTag.length; j++){
                clearTag[j].style.color = "black";
            }
            
            this.scrollToEnd();

      }
    },    
    send() {
      console.log("Send message:" + this.message);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { 
          userName: localStorage.getItem('nickname'),
          content: this.message,
          time: this.$moment(new Date()).format('YYYY-MM-DD HH:mm'),
          tagName:this.tagLists,
        };
        this.stompClient.send("/receive", JSON.stringify(msg), {});
      }
    },    
    connect() {
      const serverURL = "http://localhost:3000"
      let socket = new SockJS(serverURL);
      this.stompClient = Stomp.over(socket);
      console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
      this.stompClient.connect(
        {},
        frame => {
          // 소켓 연결 성공
          this.connected = true;
          console.log('소켓 연결 성공', frame);
          // 서버의 메시지 전송 endpoint를 구독합니다.
          // 이런형태를 pub sub 구조라고 합니다.
          this.stompClient.subscribe("/send", res => {
            console.log('구독으로 받은 메시지 입니다.', res.body);

            // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
            this.recvList.push(JSON.parse(res.body))
          });
        },
        error => {
          // 소켓 연결 실패
          console.log('소켓 연결 실패', error);
          this.connected = false;
        }
      );        
    }
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
.container::-webkit-scrollbar {
  width: 6px;
}
.container::-webkit-scrollbar-track {
  background-color: transparent;
}
.container::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: gray;
}
.container::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
</style>