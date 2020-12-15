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
                        <v-card width="270px" height="280px" @click="$router.push({name:'CollaboProjMain',params:{idp:list.projectId}})">
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
        //     .post('http://localhost:3000/api/getpostlist', { genre: 'IT' }, { headers: {'token': localStorage.getItem('access_token')}})
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
            .post('http://localhost:3000/api/getrecruitingPost', { genre: 'IT' }, { headers: {'token': localStorage.getItem('access_token')}})
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
                                src: require(`../../assets/img/projectBanner/${element.projectId}.jpg`),
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
                    title:'기획자의 트렌드, 소통, 배움, 이타심',
                    info:'기획자의 트렌드, 소통, 배움, 이타심에 관한 글',
                    src: require('../../assets/partership.jpg'),
                    members: ['Jennie', 'hello'],
                    show: false,
                    like: 3,
                    subscribe: 2,
                    projectId: 0
                },
                {
                    title:'아이패드, 아이폰으로 보는 애플의 컬러 전략',
                    info:'아이패드, 아이폰으로 보는 애플의 컬러 전략 대한 글',
                    src: require('../../assets/Ipad-air.png'),
                    members: ['전느림','테크리뷰'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                    projectId: 1
                },
                {
                    title:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    info:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    src: require('../../assets/mclearning.png'),
                    members: ['라인하트','andrew'],
                    show: false,
                    targetNum:4,
                    memberNum:2,
                    projectId: 2
                },
                {
                    title:'[책]알고리즘트레이딩을 위한 파이썬',
                    info:'[책]알고리즘트레이딩을 위한 파이썬',
                    src: require('../../assets/python_book.jpg'),
                    members: ['홍창수','테드니'],
                    show: false,
                    like: 33,
                    subscribe: 21,
                    projectId: 3
                },
                {
                    title:'이번 인스타그램 업데이트가 불편한 이유',
                    info:'이번 인스타그램 업데이트가 불편한 이유',
                    src:require('../../assets/instabanner.jpg'),
                    members: ['zayD','Fd'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 4
                },
                {
                    title:'휴대폰 청소하기',
                    info:'휴대폰 청소하기',
                    src:require('../../assets/myphonebanner.jpg'),
                    members: ['호접몽','butter'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 5
                },
                {
                    title:'가로형과 세로형 이미지의 UX.',
                    info:'가로형과 세로형 이미지의 UX.',
                    src:require('../../assets/phonescreen.jpg'),
                    members: ['Shaun','써니'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 6
                },
                {
                    title:'UX/UI의 10가지 심리학 법칙',
                    info:'UX/UI의 10가지 심리학 법칙',
                    src:require('../../assets/uxuibook.jpg'),
                    members: ['퐝지','dhkdwl01'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 7
                },
                {
                    title:'“UX에 흔히 있는” 바람직하지 않은 UX조직',
                    info:'“UX에 흔히 있는” 바람직하지 않은 UX조직',
                    src:require('../../assets/ux_ui.png'),
                    members: ['UX DAY SEOUL','커먼'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 8
                },
                {
                    title:'휴대폰 청소하기',
                    info:'휴대폰 청소하기',
                    src:require('../../assets/myphonebanner.jpg'),
                    members: ['호접몽','butter'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                    projectId: 9
                },
                {
                    title:'[책]알고리즘트레이딩을 위한 파이썬',
                    info:'[책]알고리즘트레이딩을 위한 파이썬',
                    src: require('../../assets/python_book.jpg'),
                    members: ['홍창수','테드니'],
                    show: false,
                    like: 33,
                    subscribe: 21,
                    projectId: 10
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