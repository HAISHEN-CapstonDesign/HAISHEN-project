<template>
    <v-app>
          <v-card
          outlined
          tile
          v-for="writer in items"
          v-bind:key="writer.title">
            <v-row cols="12">
              <v-col md="3" align="center">
              <div>
                <v-avatar
                class="ma-3"
                size="110"
              >
                <v-img :src="writer.src"></v-img>
              </v-avatar>
                <v-card-title id="title" class="justify-center">{{writer.title}}</v-card-title>
              </div>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col md="8">
              <v-card-title>작가 소개</v-card-title>
              <v-card-subtitle>작가소개작가소개작가소개</v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
    </v-app>
</template>
<script>

export default {
    data() {
        return{
            items:[
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              }
            ],
        }
    },
        
}
</script>
<style scoped>
#title{
  padding:0;
}
</style>
