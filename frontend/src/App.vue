<template>
<v-app>
    <div>
        <v-app-bar elevation="2" color="white" absolute dense>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <img src='./assets/crunch_logo2_1.png' height="45px" v-on:click="to_main"/>
            <v-row align="center" justify="end">
            <v-row class="mb-3" align="center" justify="center">
                
                <v-combobox
                v-model="select"
                :items="items"
                :menu-props="menuProps"
                :search-input.sync="search"
                dense
                ></v-combobox>
                <v-btn icon class="mt-4">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-row>
                <v-btn text small class="mr-1" v-if="isLoginError" router :to="{name: 'LoginPage'}">login</v-btn>
                <v-btn text small class="mr-1" v-if="isLogin" @click="logout">logout</v-btn>
                <v-btn text small class="mr-1" v-if="isLoginError" router :to="{name: 'SignUpPage'}">sign up</v-btn>
                <v-btn text small class="mr-1" v-if="isLogin" router :to="{name:'MyPage'}">My</v-btn>
                
                <v-badge
                color="red"
                v-if="isLogin"
                :content="messages"
                :value="messages"
                overlap
                >
                    <v-btn
                    text
                    fab
                    dark
                    x-small
                    color="black"
                    @click="alarmPage"
                    >
                        <v-icon dark>
                            mdi-bell
                        </v-icon>
                    </v-btn>
                </v-badge>
                <v-btn text rounded small class="ma-2" color="black" v-if="isLogin" text-color="white" router :to="{name:'PaymentPage'}">
                     <p style="font-size:15px">{{ $store.state.userInfo.point }}</p>
                     <img class="ml-1" height="16px" src="./assets/CPoint_icon.png">
                </v-btn>
            </v-row>
        </v-app-bar>
        
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <img src='./assets/crunch_logo2.png' height="60px" dark v-on:click="to_main"/>
            <template>
                <v-list-item two-line>
                    <v-list-item-avatar size="50">
                        <img src="./assets/jenny2.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-if="isLoginError">로그인 해주세요</v-list-item-title>
                        <v-list-item-title v-if="isLogin">{{ $store.state.userInfo.nickname }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-group >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-account-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>My</v-list-item-title>
                    </template>

                    <v-list-item v-if="isLoginError" to="/login">
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="isLogin" @click="logout">
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="isLoginError" to="/signup">
                        <v-list-item-title>Sign up</v-list-item-title>
                    </v-list-item>

                    <v-list-item v-if="isLogin" to="/myPage">
                        <v-list-item-title>Info</v-list-item-title>
                    </v-list-item>

                </v-list-group>

                <v-list-group >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-book-open-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Read</v-list-item-title>
                    </template>

                    <v-list-item>
                        <v-list-item-title>Completed</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Funding</v-list-item-title>
                    </v-list-item>

                </v-list-group>

                <v-list-group >
                    <template v-slot:activator>
                        <v-list-item-icon>
                            <v-icon>mdi-lead-pencil</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Writer</v-list-item-title>
                    </template>

                    <v-list-item>
                        <v-list-item-title>Recruiting writers</v-list-item-title>
                    </v-list-item>

                </v-list-group>
                <v-list-item to="/projectStart">
                    <v-list-item-icon>
                        <v-icon>mdi-book-plus-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Project</v-list-item-title>
                </v-list-item>
                <v-badge
                v-show="isLogin"
                color="red"
                inline
                :content="messages"
                :value="messages"
                >
                <v-list-item style="padding-right:105px" @click="alarmPage">
                    <v-list-item-icon>
                        <v-icon>mdi-bell</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Alarm</v-list-item-title>
                </v-list-item>
                </v-badge>
                <v-list-item router :to="{name: 'PaymentPage'}">
                    <v-list-item-icon>
                        <v-icon>mdi-currency-usd-circle-outline</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>결제</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-alarm-light</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>신고 접수</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <br><br>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</v-app>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex"
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'

export default {
    name: 'App',
    data: () => ({
        drawer: false,
        count: 0,
        collapseOnScroll: true,
        autoselectMenu: false,
        search: null,
        items: ['foo', 'bar', 'fizz', 'buzz'],
        value: null,
        select: '',
        colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
        ],
        messages: 0,
    }),
    computed: {
        menuProps(){
            return !this.search ? {value: false} : {}
        },
        ...mapState(['isLogin', 'isLoginError','userInfo'])
    },
    watch: {
        search (val) {
            if(val && val !== this.select) {
                //this.querySelections(val)
            } else {
                console.log(val)
            }
        },
        isLogin(aft, bef){
            if(aft == true && bef == false){
                this.connect()
                console.log('로그인 watch 테스트')
            }
        }
    },
    methods: {
        //alarm
        connect() {
            console.log('connect 테스트')
            var socket = new SockJS('http://localhost:3000/ws');
            this.stompClient = Stomp.over(socket);
            this.stompClient.connect({}, this.onConnected);
        },
        onConnected() {
            var topic = `/app/session`; // eslint-disable-line no-unused-vars
            var currentSubscription = this.stompClient.subscribe('/server', this.onMessageReceived);
            console.log(currentSubscription)
            this.stompClient.send(`${topic}/addUser`,
                JSON.stringify({sender: localStorage.getItem('nickname')})
            );
        },
        onMessageReceived(payload) {
            var message = JSON.parse(payload.body);
            console.log('받는 message 정보'+message)
            console.log(message)
        },
        /*
        sendMessage(event) {
  var messageContent =  this.message;
  if (messageContent.startsWith('/join ')) {
    this.enterRoom(this.roomId);
  } else if (messageContent && this.stompClient) {
    var chatMessage = {
        userName: localStorage.getItem('nickname'),
        content: this.message,
        time: this.$moment(new Date()).format('YYYY-MM-DD HH:mm'),
        tagName:this.tagLists,
        //state:"community",
        //url:this.document.location.href,
    };
    console.log('보낸 message 정보'+chatMessage)
    this.stompClient.send(`/app/chat/${this.roomId}/sendMessage`
    , JSON.stringify(chatMessage));
  }
  this.message = '';
  this.tagLists=[];
  event.preventDefault();
},
        */

        to_main() {
            this.$router.push('/');
        },
        alarmPage(){
            this.messages =0;
            this.$router.push("/alarm");
        },
        ask_charge_point() {

        },
        ...mapActions(['logout'])
    },
};
</script>
<!-- 스크롤 style -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
html, body {
  font-family: 'Nanum Gothic', sans-serif;
}
#app {
  font-family: 'Nanum Gothic', sans-serif;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: gray;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
</style>
<style scoped>
.v-input {
    align-items: flex-start;
    display: flex;
    flex: 1 1 auto;
    font-size: 16px;
    letter-spacing: normal;
    max-width: 50%;
    text-align: left;
    position: relative;
    top: 12px;
}

</style>