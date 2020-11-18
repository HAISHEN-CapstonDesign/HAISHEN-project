<template>
    <v-app>
        <br><br>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY DETAIL</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">{{$store.state.title}}</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">_{{$store.state.subtitle[subId-1].text}}</div>
                    <v-card>
                        <div v-html="prettyHtml" />
                    <v-text-field
                    :disabled="true"
                    v-model="comment"
                    label="Commemt"
                    outlined
                    ></v-text-field>
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
import * as Diff2Html from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css';
export default {
    name:'historyDetail',
    components:{
        Menu,

    },
    created() {
        var idh = this.$route.params.idh;
        var idp = this.$route.params.idp;
        this.subId = this.$store.state.subId;
        axios.get(`http://localhost:3000/api/project/${idp}/commit/basicTool/detail/${idh}`)
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
            subId:0,
            diffs:'',
            comment:'',
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