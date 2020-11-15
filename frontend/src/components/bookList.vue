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
                        <v-card width="250px">
                                <v-img
                                :src="`https://picsum.photos/200/300?image=${getImage()}`"
                                height="100px"
                                ></v-img>
                                <div style="height:100px;">
                                <v-card-title v-text="list.genre" class="justify-center"></v-card-title>
                                <v-card-subtitle v-text="list.title" class="text-center"></v-card-subtitle>
                                </div>
                                <v-divider ></v-divider>
                                <v-col align-content="center" >
                                    <div class="text-center">
                                        <v-chip v-for="member in list.members" :key="member" v-text="member"></v-chip>
                                    </div>
                                </v-col>
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
                        :length="4"
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
                    genre:'여행',
                    title:'여행이란 무엇인가',
                    info:'여행이란 무엇인가, 여행에 대한 고찰',
                    members: ['철수'],
                    show: false,
                },
                {
                    genre:'요리',
                    title:'라면 끓이는법',
                    info:'라면 끓이는법에 대한 글',
                    members: ['영희'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
                },
                {
                    genre:'역사',
                    title:'한 눈에 보는 한국사',
                    info:'한국사의 모든 것을 목표로 하는 프로젝트',
                    members: ['경수','미영'],
                    show: false,
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
    },
}
</script>
