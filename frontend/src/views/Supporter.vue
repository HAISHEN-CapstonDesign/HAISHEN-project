<template>
    <v-app>
        <v-img
            class="white--text"
            max-height="200"
            max-width="100%"
            src="../assets/partership.jpg"
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
                        <p style="font-size:40px">{{this.title}}</p>
                    </v-col>
                </v-row>
            </v-img>
            <br>
            <SupporterList></SupporterList>
    </v-app>
</template>
<script>
import SupporterList from '../components/supporterList'
export default {
    components:{
        SupporterList,
    },
    data(){
        return{
            title:'서포터페이지(제목 들어가는 곳)'
        }
    }
}
</script>