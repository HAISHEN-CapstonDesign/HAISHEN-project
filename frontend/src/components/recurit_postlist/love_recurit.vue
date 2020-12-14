<template>
    <v-app>
        <v-card flat>
            <v-container>
                <v-row>
                    <v-col
                    v-for="(list, i) in calData"
                    :key="i"
                    cols="12"
                    sm="4"
                    md="3"
                    >
                    <!-- 임의로 ContentsReadingPage에 연결해둠 -->
                        <v-card width="270px" height="280px" @click="$router.push({name:'ContentsReadingPage',params:{idp:list.projectId, idc:1}})">
                            <!--
                            <v-img
                            :src="`https://picsum.photos/200/300?image=${getImage()}`"
                            height="100px"
                            ></v-img>-->
                            <v-img
                            :src="list.src"
                            height="100px"
                            ></v-img>
                            <v-card-title v-text="list.title" class="justify-center" style="font-size:15px"></v-card-title>
                            <div class="text-center">
                                <v-chip class="mx-1" color="grey" outlined v-for="member in list.members" :key="member" v-text="member"></v-chip>
                            </div>
                            <v-card-text>
                                <div style="float:right">
                                <v-icon>mdi-heart</v-icon>{{list.like}}
                                <v-icon>mdi-bookmark</v-icon>{{list.subscribe}}
                                </div>
                                </v-card-text>       
                            </v-card>
                        </v-col>
                    </v-row>
                    <div class="text-center">
                        <v-pagination
                        flat
                        v-model="page"
                        :length="numOfPages"
                        @input="changePage"
                        ></v-pagination>
                    </div>
                </v-container>
        </v-card>
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
     created(){
        //this.imgsrc_string = this.genres.map(function(e) { return e.img; }).indexOf(this.$route.params.postname);
        //console.log('정보 전부'+this.imgsrc_string)

        // axios    
        //     .post('http://localhost:3000/api/getpostlist', { genre: '연애' }, { headers: {'token': localStorage.getItem('access_token')}})
        //         .then(res => {
        //             console.log('찾는거 : '+res.data)
        //             // 이런형식으로 response 받음
        //             // {
        //             //     title: "adsgasdgas",
        //             //     projectId: "139",
        //             //     writerList: ["mumu", "momo"], writerList를 member로 바꾸어서 주기
        //             //     LikeNum: 0 like로 바꿔서 주기
        //             // }
        //             // this.tempbookList = JSON.parse(this.bookList)
        //             // this.tempbookList.push(res.data)
        //             // this.bookList = JSON.stringify(this.tempbookList)
        //             //this.bookList.push.apply(this.bookList,res.data)
        //             this.tempbookList = res.data;
        //             this.tempbookList.forEach(element => {
        //                 this.bookList.push(
        //                     {
        //                         title: element.title,
        //                         info: element.info,
        //                         src: require('../../assets/contents_picture/travel_temz.jpg'),
        //                         members: element.writeList,
        //                         show: false,
        //                         like: element.LikeNum,
        //                         subscribe: 2,
        //                     }
                            
        //                 )
        //             })
        //             console.log('booklist :'+JSON.stringify(this.bookList))
        //             console.log('tempbooklist :'+JSON.stringify(this.tempbookList))
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         });

        axios    
            .post('http://localhost:3000/api/getrecruitingPost', { genre: '연애' }, { headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                    // 아래 형태 Json 리스트 형식으로 반환됨
                    // {
                    //     applyingNum: 0
                    //     mainWriter: "mumu"
                    //     recruitingNum: 1
                    //     targetDDay: null
                    //     title: "sagadgawgwge"
                    //     projectId: "139"
                    // }
                    this.temprecuritList = res.data;
                    this.temprecuritList.forEach(element => {
                        this.bookList.push(
                            {
                                title: element.title,
                                info: element.info,
                                src: require('../../assets/contents_picture/travel_temz.jpg'),
                                members: element.mainWriter,
                                show: false,
                                like: element.LikeNum,
                                subscribe: 2,
                                projectId: element.projectId
                            }
                            
                        )
                    })
                    
                })
                .catch((err) => {
                    console.log(err)
                });
    },
    data(){
        return{
            tempbookList: [],
            temprecuritList: [],
            page:1, //현재 페이지
            dataPerPage:8, //한 페이지에 나올 글의 수
            bookList: [
                {
                    title:'한잔할래, 우리?',
                    info:'한잔할래, 우리?',
                    src: require('../../assets/contents_picture/love01.jpg'),
                    members: ['다희', '혜정'],
                    show: false,
                    like: 3,
                    subscribe: 2,
                    projectId: 0
                },
                {
                    title:'사랑은 타이밍',
                    info:'사랑은 타이밍',
                    src: require('../../assets/contents_picture/love02.jpg'),
                    members: ['소소담'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                    projectId: 1
                },
                
                {
                    title:'너는 잘 있을까',
                    info:'너는 잘 있을까',
                    src: require('../../assets/contents_picture/love03.jpeg'),
                    members: ['알트맨노이'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                    projectId: 2
                },
                {
                    title:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    info:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    src: require('../../assets/mclearning.png'),
                    members: ['라인하트','andrew'],
                    show: false,
                    targetNum:4,
                    memberNum:2,
                    projectId: 3
                },
            ],
        }
    },
    methods: {
      getImage () {
        const min = 550
        const max = 560
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      changePage(newPage){
          this.page = newPage;
      },
    },
    computed: {
        startOffset() {
        return ((this.page - 1) * this.dataPerPage);
      },
      endOffset() {
        return (this.startOffset + this.dataPerPage);
      },
      calData() {
        return this.bookList.slice(this.startOffset, this.endOffset)
      },
      numOfPages() {
        return Math.ceil(this.bookList.length / this.dataPerPage);
      },
    },
}
</script>