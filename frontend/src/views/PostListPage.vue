<template>
    <v-app>
        <v-img
        class="white--text"
        max-height="200"
        max-width="100%"
        src=imgsrclist[0]
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
          <p style="font-size:40px">I T</p>

        </v-col>
        </v-row>
      </v-img>
        <v-container>
            <v-row justify="center" no-gutters class="mb-3 pt-5">
                <v-col md="auto" class="pl-4">
                    <v-btn color="teal lighten-1" outlined rounded @click="showCompleteList">완결된 글</v-btn>
                </v-col>
                <v-col md="auto" class="pl-4">
                    <v-btn color="teal lighten-1" outlined rounded @click="showRecruitList">작가 모집중</v-btn>
                </v-col >
            </v-row>
            <CompleteList v-if="showComplete"></CompleteList>
            <RecruitList v-else></RecruitList>
        </v-container>
    </v-app>
</template>
<script>
import CompleteList from '../components/bookList'
import RecruitList from '../components/recruitList'
import axios from 'axios'

export default {
    components:{
        CompleteList,
        RecruitList,
    },
    created(){

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
            imgsrclist:[
                'asdgsadgsgsd',
                'dasgsgsgsdagdsg',
                'sadgsadgdsgsdgsadg',

            ],
            math:'수학',
        }
    },
    methods: {
        showCompleteList(){
            this.showComplete = true
        },
        showRecruitList(){
            this.showComplete = false
        },
    },
}
</script>
