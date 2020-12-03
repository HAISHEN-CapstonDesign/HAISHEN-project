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
                
                <v-img 
                v-bind:src="writer.src" 
                height="130px">
                </v-img>
                
                </v-avatar>
                <v-card-title id="title" class="justify-center" style="font-size:12px">{{writer.title}}</v-card-title>
                <p class="justify-center" style="font-size:12px">{{writer.support_money}} P</p>
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
                src: require('../assets/face_01.jpg'),
                title: 'Park_Min',
                support_money: 1800
              },
              {
                color: '#952175',
                src: require('../assets/face_02.jpg'),
                title: 'share',
                support_money: 2500
              },
              {
                color: '#952175',
                src: require('../assets/face_04.jpg'),
                title: 'sky_Oo',
                support_money: 4000
              },
              {
                color: '#952175',
                src: require('../assets/face_05.jpg'),
                title: 'Ryu',
                support_money: 3500
              },
              {
                color: '#952175',
                src: require('../assets/face_09.jpg'),
                title: 'SiverOo',
                support_money: 2200
              },
              {
                color: '#952175',
                src: require('../assets/face_11.jpg'),
                title: 'BBobley',
                support_money: 800
              },
              {
                color: '#952175',
                src: require('../assets/face_13.jpg'),
                title: 'Sword',
                support_money: 7400
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
