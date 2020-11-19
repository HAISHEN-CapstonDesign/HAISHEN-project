<template>
    <v-app>
        <br><br>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY DETAIL</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">{{$store.state.title}}</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">_{{$store.state.subtitle[ids-1].text}}</div>
                    <v-card>
                        <div v-html="prettyHtml" />
                    <v-text-field
                    v-model="comment"
                    label="Commemt"
                    outlined
                    ></v-text-field>
                    </v-card>
                </v-col>
                <v-col md="2">
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
            reObj:{
                commit_comment:'',
                time: new Date()
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
            this.reObj.commit_comment = this.comment;
            this.reObj.time = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            console.log(this.reObj);
            axios.post(`http://localhost:3000/api/project/${this.idp}/commit/basicTool/detail/revert/${this.idh}`, this.reObj,
            {
                headers: {
                    token: localStorage.getItem('access_token')
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
        }
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
</style>