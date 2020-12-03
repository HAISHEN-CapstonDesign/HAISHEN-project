<template>
<v-app>
    <v-container fluid grid-list-sm pa-5>
        <v-row justify="center">
            <v-col>
                <h3>{{title}} _ {{subtitle}}</h3>
            </v-col>
        </v-row>
    <v-row cols="12">
        <v-col md="2">
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col md="6">
            <v-card height="668px">
                <div class="content_div">
                    흔히 트렌드란 뭔가 재빠르게 세상을 따라가고, 핫플레이스를 좋아하는 패피들로 연상됩니다. 하지만 저는 트렌드를, 팀원과의 소통에 관한 관점으로 얘기해보려 합니다. 트렌드는 어떠한 방향으로 쏠리는 사회적 추세, 경향을 뜻합니다. 소통은 사회성, 사람들과의 커뮤니케이션 활동입니다. 트렌드와 소통을 같은 선상에 놓고 비교하면, 트렌드는 앞서 나가는 멋진 사람에 대한 좁은 정의 뿐만 아니라, 사람(팀원)들이 자주 사용하는 언어와 행동, 도구를 파악하는 넓은 의미로도 비춰질 수 있습니다. 사람들과 더 잘 대화하고 함께 가기 위해 그들의 행동과 방향성을 읽고 공감하며, 그들의 언어로 대화를 나누는 것도 트렌드를 읽는 것입니다.
                </div>
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