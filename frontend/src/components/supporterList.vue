<template>
    <v-app>
      <v-container>
        <v-row>
            <v-col
            v-for="writer in items"
            v-bind:key="writer.title">
            <v-card
            elevation="0"
            width="100px"
            height="150px"
            align="center"
            tile
            >

              <div>
                <v-avatar size="80">
                <v-img :src="writer.src" height="130px"></v-img>
                </v-avatar>
                <v-card-title id="title" class="justify-center" style="font-size:12px">{{writer.title}}</v-card-title>
              </div>

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
