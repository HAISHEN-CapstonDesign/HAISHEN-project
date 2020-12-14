import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import Vue from 'vue';

//알람 관련 코드
const AlarmSocket = new Vue({
    data() {
        return {
            socket: null,
            stompClient: null,
        }
    },
    created() {
        this.socket = new SockJS("http://localhost:3000/ws");
        this.stompClient = Stomp.over(this.socket);
    },

    methods: {
        onConnected() {
            var topic = `/app/session`; // eslint-disable-line no-unused-vars
            var currentSubscription = this.stompClient.subscribe('/server', this.onMessageReceived);
            //    console.log('onconnect????')
            console.log(currentSubscription)
            this.stompClient.send(`${topic}/addUser`,
                JSON.stringify({ sender: localStorage.getItem('nickname') })
            );
        },
        onMessageReceived(payload) {
            var message = JSON.parse(payload.body);
            console.log('알람-받는 message 정보' + message)
            console.log(message)
        },
        connectWs() {
            console.log('connect 테스트')

            this.stompClient.connect({}, this.onConnected);


        }
    },

});

export default AlarmSocket;