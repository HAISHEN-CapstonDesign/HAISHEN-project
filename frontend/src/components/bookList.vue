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
                                <v-img
                                :src="`https://picsum.photos/200/300?image=${getImage()}`"
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
                    members: ['기획자01', '기획이조아'],
                    show: false,
                    like: 4,
                    subscribe: 4,
                },
                {
                    title:'라면 끓이는법',
                    info:'라면 끓이는법에 대한 글',
                    members: ['영희'],
                    show: false,
                    like: 48,
                    subscribe: 29,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 33,
                    subscribe: 21,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
                },
                {
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                    like: 38,
                    subscribe: 25,
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
