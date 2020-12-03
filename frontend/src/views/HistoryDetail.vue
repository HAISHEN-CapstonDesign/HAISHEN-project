<template>
    <v-app>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="500"
        >
            <v-card>
                <v-card-title class="headline">
                    이 버전으로 되돌리시겠습니까?
                </v-card-title>
                <v-container>
                <v-text-field
                v-model="comment"
                label="Commemt"
                outlined
                ></v-text-field>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green darken-1"
                    text
                    @click="revertYes"
                    >
                        확인
                    </v-btn>
                    <v-btn
                    color="red darken-1"
                    text
                    @click="revertNo"
                    >
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <br><br>
        <v-container>
            <v-row>
                <v-col md="10" sm="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY DETAIL</div>
                    <div style="font-size:25px; color:#A06641;">{{$store.state.subtitle[ids-1].text}}</div>
                    <v-card>
                        <div v-html="prettyHtml" />
                    </v-card>
                </v-col>
                <v-col md="2" sm="2">
                    <Menu
                    v-bind:ids="ids"
                    v-bind:idp="idp"
                    @revert="revert"
                    ></Menu>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Menu from '../components/modeMenu2'
import axios from 'axios'
import * as Diff2Html from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css';
export default {
    name:'historyDetail',
    components:{
        Menu,

    },
    created() {
        this.idh = this.$route.params.idh;
        this.idp = this.$route.params.idp;
        this.ids = this.$route.params.ids;
        axios.get(`http://localhost:3000/api/project/${this.idp}/commit/basicTool/detail/${this.idh}`)
        .then((res) => {
          this.diffs = res.data
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.config);
        });
    },
    data(){
        return{
            idp:0,
            ids:0,
            idh:0,
            diffs:'',
            comment:'',
            dialog:false,
            reObj:{
                commit_comment:'',
                time: ''
            }
        }
    },
    computed: {
        prettyHtml() {
            return Diff2Html.html(this.diffs, {
                drawFileList: false,
                matching: 'lines',
                outputFormat: 'line-by-line',
            });
        },
    },
    methods: {
        revert(){
            this.dialog = true;
        },
        revertYes(){
            this.dialog = false;
            this.reObj.commit_comment = this.comment;
            this.reObj.time = this.$moment(new Date()).format('YYYY-MM-DD HH:mm')
            console.log(this.reObj);
            axios.post(`http://localhost:3000/api/project/${this.idp}/commit/basicTool/detail/revert/${this.idh}`, this.reObj,
            {
                headers: {
                    'token': localStorage.getItem('access_token')
                }
            })
            .then((res) => {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error.response);
            });
            this.comment = ''
            this.$router.push(`/${this.idp}/basicCollaboTool/${this.ids}`);
        },
        revertNo(){
            this.dialog = false;
            this.comment = ''
        },
    },
}
</script>
<style>
.d2h-file-header {
    display: none;
    height: 35px;
    padding: 5px 10px;
    border-bottom: 1px solid #d8d8d8;
    background-color: #f7f7f7;
}
.d2h-file-diff .d2h-del.d2h-change {
    background-color: #fdd0d0;
}
.d2h-file-diff {
    overflow-y: auto;
}
.d2h-code-line, .d2h-code-line-ctn {
      white-space: normal;
}
</style>