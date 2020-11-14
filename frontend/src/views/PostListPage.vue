<template>
    <v-app>
        <v-img
        class="white--text align-end"
        max-height="150px"
        max-width="100%"
        src="../assets/banner2.jpg"
        >
        <p style="position: absolute; top: 20%; left:45%; font-size:70px;">장르</p>
        </v-img>
        <v-container>
            <v-row>
                <v-col>
                    <v-btn>완결된 글</v-btn>
                    <v-btn>작가 모집중</v-btn>
                </v-col>
            </v-row>
            <CompleteList v-if="showComplete"></CompleteList>
            <RecruitList v-else></RecruitList>
        </v-container>
    </v-app>
</template>
<script>
import CompleteList from '../components/bookList'
import RecruitList from '../components/recruitList'
export default {
    components:{
        CompleteList,
        RecruitList,
    },
    data(){
        return{
            showComplete:true,
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
