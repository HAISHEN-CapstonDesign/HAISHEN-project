<template>
    <v-app>
        <v-img
        class="white--text align-end"
        max-height="150px"
        max-width="100%"
        src="../assets/computer.jpeg"
        gradient="to top right, rgba(150,150,150,.80), rgba(52,52,52,.7)"
        >
        <p style="position: absolute; top: 20%; left:48%; font-size:50px;">I T</p>
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
