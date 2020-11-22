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
                        <v-card width="270px" router :to="{name:'ContentsReadingPage',params:{idc:1}}">
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
                                    <v-chip v-for="member in list.members" :key="member" v-text="member"></v-chip>
                                </div>
                                <v-card-text class="text-right">
                                    <v-icon>mdi-heart</v-icon>{{list.like}}
                                    <v-icon>mdi-bookmark</v-icon>{{list.subscribe}}
                                </v-card-text>       
                            </v-card>
                        </v-col>
                    </v-row>
                    <div class="text-center">
                        <v-pagination
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
export default {
    data(){
        return{
            page:1, //현재 페이지
            dataPerPage:8, //한 페이지에 나올 글의 수
            bookList: [
                {
                    title:'기획자의 트렌드, 소통, 배움, 이타심',
                    info:'기획자의 트렌드, 소통, 배움, 이타심에 관한 글',
                    src: require('../assets/partership.jpg'),
                    members: ['editor', '기획이조아'],
                    show: false,
                    like: 3,
                    subscribe: 2,
                },
                {
                    title:'아이패드, 아이폰으로 보는 애플의 컬러 전략',
                    info:'아이패드, 아이폰으로 보는 애플의 컬러 전략 대한 글',
                    src: require('../assets/Ipad-air.png'),
                    members: ['전느림','테크리뷰'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                },
                {
                    title:'[책]알고리즘트레이딩을 위한 파이썬',
                    info:'[책]알고리즘트레이딩을 위한 파이썬',
                    src: require('../assets/python_book.jpg'),
                    members: ['홍창수','테드니'],
                    show: false,
                    like: 33,
                    subscribe: 21,
                },
                {
                    title:'이번 인스타그램 업데이트가 불편한 이유',
                    info:'이번 인스타그램 업데이트가 불편한 이유',
                    src:require('../assets/instabanner.jpg'),
                    members: ['zayD','Fd'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'휴대폰 청소하기',
                    info:'휴대폰 청소하기',
                    src:require('../assets/myphonebanner.jpg'),
                    members: ['호접몽','butter'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'가로형과 세로형 이미지의 UX.',
                    info:'가로형과 세로형 이미지의 UX.',
                    src:require('../assets/phonescreen.jpg'),
                    members: ['Shaun','써니'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'UX/UI의 10가지 심리학 법칙',
                    info:'UX/UI의 10가지 심리학 법칙',
                    src:require('../assets/uxuibook.jpg'),
                    members: ['퐝지','dhkdwl01'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'“UX에 흔히 있는” 바람직하지 않은 UX조직',
                    info:'“UX에 흔히 있는” 바람직하지 않은 UX조직',
                    src:require('../assets/ux_ui.png'),
                    members: ['UX DAY SEOUL','커먼'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'휴대폰 청소하기',
                    info:'휴대폰 청소하기',
                    src:require('../assets/myphonebanner.jpg'),
                    members: ['호접몽','butter'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'[책]알고리즘트레이딩을 위한 파이썬',
                    info:'[책]알고리즘트레이딩을 위한 파이썬',
                    src: require('../assets/python_book.jpg'),
                    members: ['홍창수','테드니'],
                    show: false,
                    like: 33,
                    subscribe: 21,
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
