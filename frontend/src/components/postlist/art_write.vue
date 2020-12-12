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
                        <v-card width="270px" height="280px" @click="$router.push('/1/contents/1')">
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
export default {
    data(){
        return{
            page:1, //현재 페이지
            dataPerPage:8, //한 페이지에 나올 글의 수
            bookList: [
                {
                    title:'런던, 템즈강에 흘려보낸 것들에 대하여',
                    info:'런던, 템즈강에 흘려보낸 것들에 대하여',
                    src: require('../../assets/contents_picture/travel_temz.jpg'),
                    members: ['포그니', 'pogni'],
                    show: false,
                    like: 3,
                    subscribe: 2,
                },
                {
                    title:'아이패드, 아이폰으로 보는 애플의 컬러 전략',
                    info:'아이패드, 아이폰으로 보는 애플의 컬러 전략 대한 글',
                    src: require('../../assets/Ipad-air.png'),
                    members: ['전느림','테크리뷰'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                }
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