<template>
    <v-app>
        <v-img
        class="white--text align-end"
        max-height="200px"
        max-width="100%"
        src="../assets/banner2.jpg"
        >
            <p style="position: absolute; top: 25%; left:45%; font-size:60px;">제목</p>
        </v-img>
        <v-container>
            <v-row cols="12">
                <v-col md="8">
                    <Card></Card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import Card from '../components/writerCard'
export default {
    components:{
        Card,
    },
    data() {
        return{

        }
    },
        
}
</script>
