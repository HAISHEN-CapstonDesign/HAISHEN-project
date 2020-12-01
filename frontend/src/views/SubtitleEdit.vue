<template>
    <v-app>
        <v-container>
            <v-row justify="center">
                <v-col align="center">
                    <v-card>
                        <v-list>
                            <v-list-item
                            v-for="little_title in little_titles"
                            :key="little_title"
                            >
                                <v-list-item-content>
                                    <v-list-item-title class="text-left">{{little_title.idx}}. {{ little_title.text }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item
                            @click="plusSubtitle"
                            >+</v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
export default {
    data(){
        return{
            little_titles: [],
            clicked:[],
        }
    },
    created() {
      this.little_titles=this.$store.state.subtitle
    },
    methods:{
        plusSubtitle(){
            
        },
    },
}
</script>