<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">{{$store.state.title}}</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">_{{$store.state.subtitle[this.subId-1].text}}</div>
                    <v-card color="#FFEFD5">
                        <v-list color="#FFEFD5">
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>시간 </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 30%;">
                                    <v-list-item-title>코멘트</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>작성자</v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-item-title>상세보기</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <div
                            v-for="tmp in histories"
                            :key="tmp.commitId"
                            >
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title v-text="tmp.time"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 30%;">
                                    <v-list-item-title v-text="tmp.commit_comment"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title v-text="tmp.writerName"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-btn @click="showDetail(tmp.commitId)">
                                    <v-btn fab small depressed color="#D7AC87">
                                        <v-icon>
                                            mdi-magnify
                                        </v-icon>
                                    </v-btn>
                                    </v-list-btn>
                                </v-list-item-content>
                            </v-list-item>
                            </div>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col md="2">
                    <Menu
                    v-bind:clicked="isHistory"
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
    name:'historyPage',
    components:{
        Menu,
    },
    created() {
        this.subId = this.$store.state.subId
        axios.get(`http://localhost:3000/api/project/1/commit/basicTool/${this.subId}`)
        .then((res) => {
          this.histories = res.data;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.config);
        });
    },
    data(){
        return{
            isHistory:2, //히스토리 페이지에서 클릭
            subId: 0,
            histories: [
          {
            commitId: 1,
            writerName: 'Frozen Yogurt',
            commit_comment: 'test',
            time:'2020-05-20 15:07:45',
          },
          {
            commitId: 2,
            writerName: 'Ice cream sandwich',
            commit_comment: 'add rutghv',
            time:'2020-05-28 19:34:35',
          },
          {
            commitId: 3,
            writerName: 'Eclair',
            commit_comment: 'change augfgcc',
            time:'2020-06-03 12:29:55',
          },
          {
            commitId: 4,
            writerName: 'Cupcake',
            commit_comment: 'add rutghv',
            time:'2020-06-28 19:34:35',
          },
          {
            commitId: 5,
            writerName: 'Gingerbread',
            commit_comment: 'add rutghv',
            time:'2020-07-10 19:34:35',
          },
          {
            commitId: 6,
            writerName: 'Jelly bean',
            commit_comment: 'add rutghv',
            time:'2020-07-28 19:34:35',
          },
          {
            commitId: 7,
            writerName: 'Lollipop',
            commit_comment: 'add rutghv',
            time:'2020-08-04 19:34:35',
          },
          {
            commitId: 8,
            writerName: 'Honeycomb',
            commit_comment: 'add rutghv',
            time:'2020-08-13 19:34:35',
          },
          {
            commitId: 9,
            writerName: 'Donut',
            commit_comment: 'add rutghv',
            time:'2020-08-28 19:34:35',
          },
          {
            commitId: 10,
            writerName: 'KitKat',
            commit_comment: 'add rutghv',
            time:'2020-09-28 19:34:35',
          },
        ],
        }
    },
    methods: {
        showDetail(idx){
            this.$router.push(`/${this.$store.state.projectId}/${this.subId}/historyDetail/${idx}`);
        }
    },
}
</script>