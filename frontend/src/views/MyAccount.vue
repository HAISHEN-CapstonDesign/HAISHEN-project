<template>
    <v-container fill-height style="max-width:730px;">
    <v-layout align-center row wrap class="mt-15">
        <v-flex xs12>      
            <v-card
            color="blue-grey darken-4"
            class="pb-5"
            >
            <div style="text-align : center;"> 
                <img src='../assets/myaccount_img_white.png' height="100px"/>
            </div>
                <div class="ml-15">
                   
                    <v-col
                    v-for="( item , i ) in account"
                    :key="i"
                    class="ml-15"
                    >
                        <v-card
                        color="yellow darken-1"
                        width="450"
                        height="150"
                        outlined="false"
                        hover="true"
                        class="text-center"
                        @click="$router.push('/postlist')"
                        >
                            <div style="position: absolute; top: 40%; width:100%">
                            <h3>등록된 계좌가 없습니다</h3>
                            </div>
                        </v-card>
                    </v-col>
                    <div class="ml-16">
                        <v-card
                        color="blue-grey darken-3"
                        width="450"
                        height="80"
                        outlined="false"
                        hover="true"
                        class="text-center ml-2"
                        to='/accountlink'
                        >
                            <div style="position: absolute; top: 40%; width:100%">
                            <v-icon>
                                mdi-plus
                            </v-icon>
                            </div>
                        </v-card>
                    </div>
                </div>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
    data: () => ({
      account: ['start'],
    }),
    methods: {
        
    }
}
</script>