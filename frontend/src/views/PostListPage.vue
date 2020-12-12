<template>
    <v-app>
        <div>
        <v-img
        class="white--text"
        max-height="200"
        max-width="100%"
        :src="genres[imgsrc_index].img"
        gradient="to top right, rgba(150,150,150,.60), rgba(52,52,52,.7)"
        >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <v-col
          align="center"
          justify="center"
        >
          <p style="font-size:40px">{{$route.params.postname}}</p>

        </v-col>
        </v-row>
      </v-img>
        </div>
        <v-container>
            <v-row justify="center" no-gutters class="mb-3 pt-5">
                <v-col md="auto" class="pl-4">
                    <v-btn color="teal lighten-1" outlined rounded @click="showCompleteList">완결된 글</v-btn>
                </v-col>
                <v-col md="auto" class="pl-4">
                    <v-btn color="teal lighten-1" outlined rounded @click="showRecruitList">작가 모집중</v-btn>
                </v-col >
            </v-row>
            <art_write v-if="imgsrc_index == 9"></art_write>
            <it_write v-if="imgsrc_index == 3"></it_write>
            <build_write v-if="imgsrc_index == 8"></build_write>
            <cook_write v-if="imgsrc_index == 5"></cook_write>
            <economy_write v-if="imgsrc_index == 4"></economy_write>
            <game_write v-if="imgsrc_index == 13"></game_write>
            <health_write v-if="imgsrc_index == 6"></health_write>
            <history_write v-if="imgsrc_index == 7"></history_write>
            <love_write v-if="imgsrc_index == 14"></love_write>
            <math_write v-if="imgsrc_index == 1"></math_write>
            <parenting_write v-if="imgsrc_index == 12"></parenting_write>
            <preview_write v-if="imgsrc_index == 10"></preview_write>
            <science_write v-if="imgsrc_index == 2"></science_write>
            <travel_write v-if="imgsrc_index == 0"></travel_write>
            <work_write v-if="imgsrc_index == 11"></work_write>
        </v-container>
    </v-app>
</template>
<script>
// import CompleteList from '../components/bookList'
// import RecruitList from '../components/recruitList'
import art_write from '../components/postlist/art_write'
import it_write from '../components/postlist/it_write'
import build_write from '../components/postlist/build_write'
import cook_write from '../components/postlist/cook_write'
import economy_write from '../components/postlist/economy_write'
import game_write from '../components/postlist/game_write'
import health_write from '../components/postlist/health_write'
import history_write from '../components/postlist/history_write'
import love_write from '../components/postlist/love_write'
import math_write from '../components/postlist/math_write'
import parenting_write from '../components/postlist/parenting_write'
import preview_write from '../components/postlist/preview_write'
import science_write from '../components/postlist/science_write'
import travel_write from '../components/postlist/travel_write'
import work_write from '../components/postlist/work_write'

import axios from 'axios'

export default {
    components:{
        // CompleteList,
        // RecruitList,
        art_write,
        it_write,
        build_write,
        cook_write,
        economy_write,
        game_write,
        health_write,
        history_write,
        love_write,
        math_write,
        parenting_write,
        preview_write,
        science_write,
        travel_write,
        work_write
    },
    created(){
        //this.imgsrc_string = this.genres.map(function(e) { return e.img; }).indexOf(this.$route.params.postname);
        //console.log('정보 전부'+this.imgsrc_string)
        this.imgsrc_index = this.genres.findIndex(search => search.name == this.$route.params.postname)
        console.log('ww ' + this.imgsrc_index)     

        axios    
            .post('http://localhost:3000/api/getpostlist', { genre: '수학' }, { headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                    // 이런형식으로 response 받음
                    // {
                    //     title: "adsgasdgas",
                    //     writerList: ["mumu", "momo"],
                    //     LikeNum: 0
                    // }
 
                    
                })
                .catch((err) => {
                    console.log(err)
                });

        axios    
            .post('http://localhost:3000/api/getrecruitingPost', { genre: '수학' }, { headers: {'token': localStorage.getItem('access_token')}})
                .then(res => {
                    console.log(res.data)
                    // 아래 형태 Json 리스트 형식으로 반환됨
                    // {
                    //     applyingNum: 0
                    //     mainWriter: "mumu"
                    //     recruitingNum: 1
                    //     targetDDay: null
                    //     title: "sagadgawgwge"
                    // }
                    
                })
                .catch((err) => {
                    console.log(err)
                });
    },
    data(){
        return{
            showComplete:true,
            imgsrc_string:null,
            real_img:null,
            imgsrc_index:0,
            genres:[
            {
                name: '여행',
                post_name: 'Travel',
                post_img_id: '0',
                img: require('../assets/여행.jpg')
            },
            {
                name: '수학',
                post_name: 'Math',
                post_img_id: '1',
                img: require('../assets/수학.jpg')
            },
            {
                name: '과학',
                post_name: 'Science',
                post_img_id: '2',
                img: require('../assets/과학.jpg')
            },
            {
                name: 'IT',
                post_name: 'IT',
                post_img_id: '3',
                img: require('../assets/IT.jpg')
            },
            {
                name: '경제',
                post_name: 'Economy',
                post_img_id: '4',
                img: require('../assets/경제.jpg')
            },
            {
                name: '요리',
                post_name: 'Cook',
                post_img_id: '5',
                img: require('../assets/요리.jpg')
            },
            {
                name: '건강',
                post_name: 'Health',
                post_img_id: '6',
                img: require('../assets/건강.jpg')
            },
            {
                name: '역사',
                post_name: 'History',
                post_img_id: '7',
                img: require('../assets/역사.jpg')
            },
            {
                name: '건축',
                post_name: 'Build',
                post_img_id: '8',
                img: require('../assets/건축.jpg')
            },
            {
                name: '문화, 예술',
                post_name: 'Art',
                post_img_id: '9',
                img: require('../assets/문화, 예술.jpg')
            },
            {
                name: '시사',
                post_name: 'Preview',
                post_img_id: '10',
                img: require('../assets/시사.jpg')
            },
            {
                name: '직장',
                post_name: 'Work',
                post_img_id: '11',
                img: require('../assets/직장.jpg')
            },
            {
                name: '육아',
                post_name: 'Parenting',
                post_img_id: '12',
                img: require('../assets/육아.jpg')
            },
            {
                name: '게임',
                post_name: 'Game',
                post_img_id: '13',
                img: require('../assets/게임.jpg')
            },
            {
                name: '연애',
                post_name: 'Love',
                post_img_id: '14',
                img: require('../assets/연애.jpg')
            },
        ],
        }
    },
    methods: {
        showCompleteList(){
            this.showComplete = true
        },
        showRecruitList(){
            this.showComplete = false
        },
        findbannerimg(){
            //this.imgsrc_string = this.genres.map(function(e) { return e.img; }).indexOf(this.$route.params.postname);
            //this.$route.params.postname
            this.imgsrc_string = this.genres.findIndex(search => search.name == this.$route.params.postname)

        },
        findid(element,findname) {
            if(element.post_name === findname){
                return true;
            }    
        },
    },
}
</script>
