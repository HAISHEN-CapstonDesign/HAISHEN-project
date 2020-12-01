<template>
    <v-app>
      <v-container>
        <v-row col="12">
            <v-col
            v-for="writer in items"
            v-bind:key="writer.title"
            md="3">
            <v-card
            width="250px"
            height="200px"
            outlined
            tile
            >
            <v-row>
              <v-col align="center">
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
            </v-row>
          </v-card>
            </v-col>
        </v-row>
      </v-container>
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
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
              {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
              },
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
