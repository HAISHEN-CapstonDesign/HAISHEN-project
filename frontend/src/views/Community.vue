<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col>
                    <Subtitle></Subtitle>
                </v-col>
                <v-col>
                    <v-card></v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import Subtitle from '../components/subtitleList';

export default {
    components:{
        Subtitle,
    }
}
</script>