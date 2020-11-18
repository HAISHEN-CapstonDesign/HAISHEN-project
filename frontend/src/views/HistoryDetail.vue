<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY DETAIL</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">{{$store.state.title}}</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">_{{$store.state.subtitle[subId-1].text}}</div>
                    <v-card height="500px">
                        <v-simple-table>
                            <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left" style="width:5%;">b_idx</th>
                                    <th class="text-left" style="width:5%;">a_idx</th>
                                    <th class="text-left" style="width:5%;">+/-</th>
                                    <th class="text-left" style="width:85%;">text</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="tmp in example"
                                :key="tmp.idx">
                                    <td
                                    v-if="tmp.state == ''"
                                    style="background-color:white"
                                    >{{beforeIdx[tmp.idx-1]}}</td>
                                    <td
                                    v-else-if="tmp.state == '+'"
                                    style="background-color:#AAEBAA;"
                                    >{{beforeIdx[tmp.idx-1]}}</td>
                                    <td v-else-if="tmp.state == '-'"
                                    style="background-color:#FAA8A8;"
                                    >{{beforeIdx[tmp.idx-1]}}</td>
                                    <td
                                    v-if="tmp.state == ''"
                                    style="background-color:white"
                                    >{{afterIdx[tmp.idx-1]}}</td>
                                    <td
                                    v-else-if="tmp.state == '+'"
                                    style="background-color:#AAEBAA;"
                                    >{{afterIdx[tmp.idx-1]}}</td>
                                    <td
                                    v-else-if="tmp.state == '-'"
                                    style="background-color:#FAA8A8;"
                                    >{{afterIdx[tmp.idx-1]}}</td>
                                    <td
                                    v-if="tmp.state == ''"
                                    style="background-color:white"
                                    >{{tmp.state}}</td>
                                    <td
                                    v-else-if="tmp.state == '+'"
                                    style="background-color:#AAEBAA;"
                                    >{{tmp.state}}</td>
                                    <td
                                    v-else-if="tmp.state == '-'"
                                    style="background-color:#FAA8A8; font-size:25px;"
                                    >{{tmp.state}}</td>
                                    <td
                                    v-if="tmp.state == ''"
                                    style="background-color:white"
                                    >{{tmp.text}}</td>
                                    <td
                                    v-else-if="tmp.state == '+'"
                                    style="background-color:#AAEBAA;"
                                    >{{tmp.text}}</td>
                                    <td
                                    v-else-if="tmp.state == '-'"
                                    style="background-color:#FAA8A8;"
                                    >{{tmp.text}}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        <br>
                        <div class="text-center">
                        <v-btn small>
                            <v-icon>
                                mdi-replay
                            </v-icon>
                            되돌리기
                        </v-btn>
                        </div>
                    </v-card>
                </v-col>
                <v-col md="2">
                    <Menu
                    v-bind:subId="subId"
                    ></Menu>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Menu from '../components/modeMenu2'
import axios from 'axios'
export default {
    name:'historyDetail',
    components:{
        Menu,

    },
    created() {
        var idh = this.$route.params.idh;
        var idp = this.$route.params.idp;
        this.subId = this.$store.state.subId;
        axios.get(`http://localhost:3000/api/${idp}/commit/basicTool/detail/${idh}`)
        .then((res) => {
          
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.config);
        });

        for(var i=0, cnt=1; i<this.example.length; i++){
            if(this.example[i].state == '' || this.example[i].state == '-'){
                this.beforeIdx[i] = cnt;
                cnt++;
            }
            else{
                this.beforeIdx[i] = null;
            }
        }
        for(var j=0, cntt=1; j<this.example.length; j++){
            if(this.example[j].state == '' || this.example[j].state == '+'){
                this.afterIdx[j] = cntt;
                cntt++;
            }
            else{
                this.afterIdx[j] = null;
            }
        }
    },
    data(){
        return{
            subId:0,
            beforeIdx: [],
            afterIdx: [],
            example: [
                {
                    idx: 1,
                    state: '',
                    text: 'Hello'
                },
                {
                    idx: 2,
                    state: '-',
                    text: 'World'
                },
                {
                    idx: 3,
                    state: '+',
                    text: 'My'
                },
                {
                    idx: 4,
                    state: '+',
                    text: 'Name'
                },
                {
                    idx: 5,
                    state: '+',
                    text: 'Is'
                },
                {
                    idx: 6,
                    state: '',
                    text: 'Jin'
                },
                {
                    idx: 7,
                    state: '-',
                    text: 'World'
                },
                {
                    idx: 8,
                    state: '',
                    text: 'World'
                },
            ]
        }
    },
    methods: {
        
    },
}
</script>
<!--
되돌리기 버튼 추가
<v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-btn>
                                        <v-btn fab small depressed color="#D7AC87">
                                        <v-icon>
                                            mdi-replay
                                        </v-icon>
                                        </v-btn>
                                    </v-list-btn>
                                </v-list-item-content>
-->