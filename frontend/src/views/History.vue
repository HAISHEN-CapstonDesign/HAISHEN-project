<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">Title</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">-subtitle</div>
                    <v-card color="#FFEFD5">
                        <v-list color="#FFEFD5">
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title>시간</v-list-item-title>
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
                            :key="tmp.time"
                            >
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title v-text="tmp.time"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 30%;">
                                    <v-list-item-title v-text="tmp.comment"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content style="flex-basis: 25%;">
                                    <v-list-item-title v-text="tmp.name"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content class="text-center" style="flex-basis: 10%;">
                                    <v-list-btn @click="showDetail(tmp.idx)">
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
                    <Menu v-bind:clicked="isHistory"></Menu>
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
        //projectId, indexId
        axios.get(`http://localhost:3000/api/project/1/commit/basicTool/1`)
        .then((res) => {
          
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error.config);
        });
    },
    data(){
        return{
            isHistory:2, //히스토리 페이지에서 클릭
            histories: [
          {
            idx: 1,
            name: 'Frozen Yogurt',
            comment: 'add sdfdf',
            time:'2020-05-20 15:07:45',
          },
          {
            idx: 2,
            name: 'Ice cream sandwich',
            comment: 'add rutghv',
            time:'2020-05-28 19:34:35',
          },
          {
              idx: 3,
            name: 'Eclair',
            comment: 'change augfgcc',
            time:'2020-06-03 12:29:55',
          },
          {
              idx: 4,
            name: 'Cupcake',
            comment: 'add rutghv',
            time:'2020-06-28 19:34:35',
          },
          {
              idx: 5,
            name: 'Gingerbread',
            comment: 'add rutghv',
            time:'2020-07-10 19:34:35',
          },
          {
              idx: 6,
            name: 'Jelly bean',
            comment: 'add rutghv',
            time:'2020-07-28 19:34:35',
          },
          {
              idx: 7,
            name: 'Lollipop',
            comment: 'add rutghv',
            time:'2020-08-04 19:34:35',
          },
          {
              idx: 8,
            name: 'Honeycomb',
            comment: 'add rutghv',
            time:'2020-08-13 19:34:35',
          },
          {
              idx: 9,
            name: 'Donut',
            comment: 'add rutghv',
            time:'2020-08-28 19:34:35',
          },
          {
              idx: 10,
            name: 'KitKat',
            comment: 'add rutghv',
            time:'2020-09-28 19:34:35',
          },
        ],
        }
    },
    methods: {
        showDetail(idx){
            this.$router.push(`/historyDetail/${idx}`);
        }
    },
}
</script>