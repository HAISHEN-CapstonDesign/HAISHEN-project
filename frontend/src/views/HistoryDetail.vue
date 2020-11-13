<template>
    <v-app>
        <br><br><br>
        <v-container>
            <v-row>
                <v-col md="10">
                    <div style="float:right; font-size:25px; color:#A06641;">HISTORY DETAIL</div>
                    <div style="display: inline-block; font-size:25px; color:#A06641;">Title</div>
                    <div style="display: inline-block; font-size:20px; color:#A06641;">-subtitle</div>
                    <v-card height="100%" color="#FFEFD5">
                        <div>본문 내용</div>
                        <Plus></Plus>
                        <Minus></Minus>
                        <div>본문 내용</div>
                        <div>본문 내용</div>
                        <Plus></Plus>
                        <Minus></Minus>
                        <div>본문 내용</div>
                    </v-card>
                </v-col>
                <v-col md="2">
                    <Menu></Menu>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import Menu from '../components/modeMenu2'
import Plus from '../components/HistoryPlus'
import Minus from '../components/HistoryMinus'
export default {
    name:'historyDetail',
    components:{
        Menu,
        Plus,
        Minus,
    },
    data(){
        return{
            
        }
    },
}
</script>