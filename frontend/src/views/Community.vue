<template>
<v-app>
    <v-container fluid grid-list-sm pa-15>
        <v-row justify="center">
            <v-col>
                <h3>{{title}} _ {{subtitle}}</h3>
            </v-col>
        </v-row>
    <v-row cols="12">
        <v-col md="2">
            <v-card flat tile outlined style="border: 2px solid #36B8B2;" class="text-center">공용 채팅방</v-card>
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col md="6">
            <v-card height="668px">
                <div class="content_div pa-3" v-html="readText">
                    {{readText}}
                </div>
            </v-card>
        </v-col>
        <v-col md="4">
        <v-card min-height="650px">
            <div id="container"
            style="overflow-y:auto; overflow-x:hidden; min-height:430px; max-height:430px;">
            <v-card
                v-for="(item) in chat"
                v-bind:key="item.time"
                cols="12"
                class="ma-1 pa-0"
                flat 
                >
                    <v-row v-if="item.userNickname!=me" cols="12" justify="left">
                        <v-col md="10">
                            <span>{{item.userNickname}}</span>
                            <v-card flat style="background-color: #ECDACE" width="70%">
                                <v-card-text class="ma-0 pa-2">
                                    {{item.text}}
                                </v-card-text>
                            </v-card>
                            <p>{{item.time}}</p>
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
                                    v-for="tags in item.tagName"
                                    :key="tags.name"
                                    >{{tags.name}}</v-chip>
                                    {{item.text}}
                                    </v-card-text>
                            </v-card>
                            <p>{{item.time}}</p>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                v-for="(item) in recvList"
                v-bind:key="item.time"
                cols="12"
                class="ma-1 pa-0"
                flat 
                >
                    <v-row v-if="item.userName!=me" cols="12" justify="left">
                        <v-col md="10">
                            <span>{{item.userName}}</span>
                            <v-card flat style="background-color: #ECDACE" width="70%">
                                <v-card-text class="ma-0 pa-2">
                                    {{item.content}}
                                </v-card-text>
                            </v-card>
                            <p>{{item.time}}</p>
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
                                    v-for="tags in item.tagName"
                                    :key="tags.name"
                                    >{{tags.name}}</v-chip>
                                    {{item.content}}
                                    </v-card-text>
                            </v-card>
                            <p>{{item.time}}</p>
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
                    v-for="writer in writerCrew"
                    :key="writer.writerName"
                    @click="tag(writer.writerName)"
                    :id="writer.writerName"
                    v-show="writer.writerName!=me"
                    >@{{writer.writerName}}</v-btn>
                    <v-textarea
                    label="내용을 입력하세요."
                    v-model="message"
                    solo
                    outlined
                    height="100px"
                    ></v-textarea>
                    <v-btn style="float: right" dark @click="sendBtn">작성</v-btn>
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
import axios from 'axios'
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
        
        tagLists:[],
        recvList: [],
    //    lists:[],
        chat:[],
        roomId:0,
        text:'',
        writerCrew:[],
        postDetail:[],
        readText:'',
        little_titles:[],
    }),
    created() {
        var color=['#FF8787','#FFBB67','#68BE66','#689CDD','#9668DD','#E778E0']
        this.title=this.$store.state.title;
        this.idp = this.$route.params.idp;
        this.ids = this.$route.params.ids;
       // this.subtitle=this.$store.state.subtitle[this.ids-1].text
        console.log("88")
        axios
            .get(`http://localhost:3000/api/project/${this.idp}/index/${this.ids}/CommunityBlob`)
                .then(res => {
                    this.roomId = res.data.roomId;
                    this.chat = res.data.chat;
                    this.writerCrew = res.data.writerCrew;
                    this.postDetail = res.data.blobDTO.postDetailList;
                 //   else this.postDetail = null;
                    console.log(res.data.writerCrew)
                    if(this.postDetail ==null){
                        this.readText = `[트렌드와 소통, 끊임없는 배움] <br>
주중 저녁, 오랜만에 공동 창업을 하였던 친구를 만나 저녁을 먹었습니다. 친구의 사무실도 근처이기에, 얼른 퇴근을 하여 강남역 11번 출구 근처 중식당을 갔습니다. 만나자마자 인사도 제대로 하지 않고 편하게 밥을 먹으며 각자의 회사와 앞으로 배워야할 것들, 미래에 대해 시끄러운 이야기를 이어갔습니다. 그러다 자연스레 좋은 사업기획, 서비스기획자(PM/PO), 나아가 좋은 팀원이 되기 위해 갖추면 좋을 것들에 대해 얘기하게 되었습니다.
<br>그러던 중 저는 작가분들과 함께 이것에 대해 구체적으로 글로 작성해보면 어떨까 생각하게 되었어요. 분명 독자분들도 알게 되면 좋은 것들로 글이 구성이 될것 같아요. 기획자 분들에게 도움 될 만한 정보, 기획자가 되고 싶은 분들께도 분명 좋은 정보가 되는 글 일 겁니다.`
                    }
                    else{
                    for(var i=0; i<this.postDetail.length; i++){
                let colorText = null;
                let colorIndex = 0;
                for(var j=0; j<this.writerCrew.length; j++){
                  if(this.postDetail[i].writerName == this.writerCrew[j].writerName){
                    colorIndex = j;
                  }
                }
                if(this.postDetail[i].text.includes("<p></p>")) colorText = "<br>"
                else colorText = this.postDetail[i].text.replace("<p>", `<p style="color:${color[colorIndex]};">`);

                this.readText = this.readText + colorText;
              }
                    }
                    this.connect(event)
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err)
                    // alert("에러가 발생했습니다. 다시 시도해주세요")
                });
                axios
        .post('http://localhost:3000/api/getindex',
            { id: this.idp }, 
            { headers: {'token':localStorage.getItem('access_token') }})
        .then(res => {
            console.log("bi")
            console.log(res.data);
            console.log(res.data[0]);
            for(var i = 0; i<res.data.length; i++){
              this.little_titles.push({idx:res.data[i].id, text:res.data[i].title})
            }
            //this.subtitle = this.little_titles[this.ids].text;
           // console.log("로그 테스트"+ this.little_titles,this.ids)
           if(this.ids >0){
               this.subtitle = this.little_titles[this.ids-1].text;
           }
           else{
               this.subtitle=''
           }
            console.log( this.little_titles[this.ids-1])
            // this.little_titles=[{idx:1, text:"ddd"}]
            // this.res.data.forEach(element => {
            //     // this.little_titles.push({idx:element.id, text:element.title})
            //     console.log(element)
            // });
          
          
        })
        .catch((err) => {
            console.log(err)
            alert("에러가 발생했습니다. 다시 시도해주세요")
        });
       // this.getcomment()
       // this.connect()
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
            console.log(idx+"받아오나??")
            this.$router.push(`/${this.idp}/${idx}/community`);
        },
        sendBtn () {
        if(this.message !== ''){
            var clearTag = document.getElementsByClassName("writerTagBtn");
            this.sendMessage(event)
            for(var j=0; j<clearTag.length; j++){
                clearTag[j].style.color = "black";
            }
            
            this.scrollToEnd();
      }
    },
  /*  send() {
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
    },*/
    sendMessage(event) {
  var messageContent =  this.message;
  if (messageContent.startsWith('/join ')) {
   // var this.roomId = messageContent.substring('/join '.length);
    this.enterRoom(this.roomId);
    /*
    while (messageArea.firstChild) {
      messageArea.removeChild(messageArea.firstChild);
    }*/
  } else if (messageContent && this.stompClient) {
    var chatMessage = {
        userName: localStorage.getItem('nickname'),
        content: this.message,
        time: this.$moment(new Date()).format('YYYY-MM-DD HH:mm'),
        tagName:this.tagLists,
    };
    console.log('보낸 message 정보'+chatMessage)
    this.stompClient.send(`/app/chat/${this.roomId}/sendMessage`
    , JSON.stringify(chatMessage));
  }
  this.message = '';
  this.tagLists=[];
  event.preventDefault();
},
connect(event) {
  var username = localStorage.getItem('nickname');
  //Cookies.set('name', username);
  if (username) {
   // usernamePage.classList.add('hidden');
   // chatPage.classList.remove('hidden');
    var socket = new SockJS('http://localhost:3000/ws');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected, this.onError);
  }
  event.preventDefault();
},
    onMessageReceived(payload) {
  var message = JSON.parse(payload.body);
  console.log('받는 message 정보'+message)
console.log(message)
this.recvList.push(message)
  //var messageElement = document.createElement('li'); 
  
  //  messageElement.classList.add('chat-message');
//     var avatarElement = document.createElement('i');
//     var avatarText = document.createTextNode(message.sender[0]);
//     avatarElement.appendChild(avatarText);
//   //  avatarElement.style['background-color'] = getAvatarColor(message.sender);
//   //  messageElement.appendChild(avatarElement);
//     var usernameElement = document.createElement('span');
//     var usernameText = document.createTextNode(message.sender);
//     usernameElement.appendChild(usernameText);
//   //  messageElement.appendChild(usernameElement);
  
//   var textElement = document.createElement('p');
//   var messageText = document.createTextNode(message.content);
//   textElement.appendChild(messageText);
//  // messageElement.appendChild(textElement);
//  // messageArea.appendChild(messageElement);
},
enterRoom(roomId) {
  //Cookies.set('roomId', roomId);
  //roomIdDisplay.textContent = roomId;
  var topic = `/app/chat/${roomId}`;
  var currentSubscription = this.stompClient.subscribe(`/channel/${roomId}`, this.onMessageReceived); // eslint-disable-line no-unused-vars
  console.log(currentSubscription)
  this.stompClient.send(`${topic}/addUser`,
    JSON.stringify({sender: localStorage.getItem('nickname')})
  );
},
onConnected() {
  this.enterRoom(this.roomId);
  //connectingElement.classList.add('hidden');
},
onError(error) {
  alert(error)
},
/*
    connect() {
      const serverURL = "http://localhost:3000/ws"
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
    },*/
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