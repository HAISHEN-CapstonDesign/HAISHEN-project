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
                        <v-card width="270px" router :to="{name:'CollaboProjMain',params:{idp:67}}">
                                <!--<v-img
                                :src="`https://picsum.photos/200/300?image=${getImage()}`"
                                height="100px"
                                ></v-img>-->
                                <v-img
                                    :src="list.src"
                                    height="100px"
                                ></v-img>
                                <v-card-title v-text="list.title" class="justify-center" style="font-size:15px"></v-card-title>
                                    <div class="text-center">
                                        <v-chip class="mx-1" color="deep-purple" outlined v-for="member in list.members" :key="member" v-text="member"></v-chip>
                                    </div>
                                    <v-card-title class="justify-center" style="font-size:15px">모집인원</v-card-title>
                                <v-card-subtitle>
                                    <h3 class="text-center">{{list.memberNum}} / {{list.targetNum}}</h3>
                                </v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                    color="orange lighten-2"
                                    text
                                    @click="list.show = !list.show"
                                    >
                                        주제 설명
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                    icon
                                    @click="list.show = !list.show"
                                    >
                                        <v-icon>{{ list.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-card-actions>
                                <v-expand-transition>
                                    <div v-show="list.show">
                                        <v-divider></v-divider>
                                        <v-card-text v-text="list.info"></v-card-text>
                                    </div>
                                </v-expand-transition>
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
                    members: ['Jennie', 'hello'],
                    show: false,
                    targetNum:6,
                    memberNum:2,
                },
                {
                    title:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    info:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    src: require('../assets/mclearning.png'),
                    members: ['라인하트','andrew'],
                    show: false,
                    targetNum:4,
                    memberNum:2,
                },
                {
                    title:'치매, 그리고 AI',
                    info:'치매, 그리고 AI',
                    members: ['글쓰는 몽글c'],
                    src: require('../assets/chimae.jpg'),
                    show: false,
                    targetNum:5,
                    memberNum:1,
                },
                {
                    title:'드디어! - 애플 아이폰 12 프로 맥스 실버 언박싱!',
                    info:'드디어! - 애플 아이폰 12 프로 맥스 실버 언박싱!',
                    members: ['비범한츈','나도개봉'],
                    src: require('../assets/appleunboxing.jpg'),
                    show: false,
                    targetNum:6,
                    memberNum:2,
                },
                {
                    title:'아이폰 12 화면 결함 소프트웨어 업데이트로 해결 예정',
                    info:'아이폰 12 화면 결함 소프트웨어 업데이트로 해결 예정',
                    members: ['시류아','잉여공학도'],
                    src: require('../assets/iphoneupdate.png'),
                    show: false,
                    targetNum:4,
                    memberNum:2,
                },
                {
                    title:'데이터프로젝트의 단단한 초석 쌓기',
                    info:'데이터프로젝트의 단단한 초석 쌓기',
                    src: require('../assets/bigdataproject.jpg'),
                    members: ['Suki','스시조아','너랑나랑은'],
                    show: false,
                    targetNum:6,
                    memberNum:3,
                },
                {
                    title:'아이폰 `미리알림` 어디까지 써봤니?',
                    info:'아이폰 `미리알림` 어디까지 써봤니?',
                    src: require('../assets/iphone_002.jpg'),
                    members: ['Dave','Davit'],
                    show: false,
                    targetNum:4,
                    memberNum:2,
                },
                {
                    title:'내 폰에게 칭찬을',
                    info:'내 폰에게 칭찬을',
                    src: require('../assets/myphone_01.jpg'),
                    members: ['점제이','l_luv'],
                    show: false,
                    targetNum:6,
                    memberNum:2,
                },
                {
                    title:'드디어! - 애플 아이폰 12 프로 맥스 실버 언박싱!',
                    info:'드디어! - 애플 아이폰 12 프로 맥스 실버 언박싱!',
                    members: ['비범한츈','나도개봉'],
                    src: require('../assets/appleunboxing.jpg'),
                    show: false,
                    targetNum:6,
                    memberNum:2,
                },
                {
                    title:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    info:'앤드류 응의 머신러닝(13-1):비지도학습 클러스터링',
                    src: require('../assets/mclearning.png'),
                    members: ['라인하트','andrew'],
                    show: false,
                    targetNum:4,
                    memberNum:2,
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
