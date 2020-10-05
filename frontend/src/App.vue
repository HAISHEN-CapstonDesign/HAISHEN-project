<template>
  <v-app>
    <router-view></router-view>
  <v-card
    class="overflow-hidden"
    height="3000"
  >
    <v-app-bar
      color="deep-purple"
      dark
      absolute
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-row align="center" justify="end">
            <v-btn icon class="mr-2">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn small class="mr-2" >login</v-btn>
            <v-btn small class="mr-2" >sign up</v-btn>
            <v-btn small class="mr-2" >My</v-btn>
      </v-row>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >

    <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>logo...T-T change plz</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    <template>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Name ex)Amy</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list>
      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
          <v-list-item-title>My</v-list-item-title>
        </template> 

        <v-list-item>
        <v-list-item-title>Login/Sign up</v-list-item-title>
        </v-list-item>

        <v-list-item>
        <v-list-item-title>Info</v-list-item-title>
        </v-list-item>

      </v-list-group>

      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-icon>
          <v-icon>mdi-book-open-variant</v-icon>
        </v-list-item-icon>
          <v-list-item-title>Read</v-list-item-title>
        </template> 

        <v-list-item>
        <v-list-item-title>Completed</v-list-item-title>
        </v-list-item>

        <v-list-item>
        <v-list-item-title>Funding</v-list-item-title>
        </v-list-item>

      </v-list-group>

      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-icon>
          <v-icon>mdi-lead-pencil</v-icon>
        </v-list-item-icon>
          <v-list-item-title>Writer</v-list-item-title>
        </template> 

        <v-list-item>
        <v-list-item-title>Recruiting writers</v-list-item-title>
        </v-list-item>

      </v-list-group>

        <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-bell</v-icon>
        </v-list-item-icon>

        <v-list-item-title>alarm</v-list-item-title>
      </v-list-item>

    </v-list>
    </v-navigation-drawer>

    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <h1>Genre</h1>
    <v-row justify="center">
      <v-col>
        <v-card width="150" height="150">
          Economy
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="mb-6"
      justify="center"
      no-gutters
			width="50"
    >
			<v-col
				justify="center"
        v-for="n in 8"
        :key="n"
      >
        <v-card
          class="pa-2"
          tile
          outlined
        >
          col
        </v-card>
      </v-col>
      <!-- <v-col lg="1">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          1 of 3
				</v-card>
      </v-col>
      <v-col lg="1">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          2 of 3
        </v-card>
      </v-col>
      <v-col lg="1">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          3 of 3
        </v-card>
      </v-col> -->
    </v-row>

    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 4"
        :key="n"
      >
        <v-card
          class="pa-2"
          tile
          outlined
        >
          col
        </v-card>
      </v-col>
    </v-row>

    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col
        v-for="n in 4"
        :key="n"
      >
        <v-card
          class="pa-2"
          tile
          outlined
        >
          col
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row
      class="ma-0 pa-0"
      no-gutters
    >
      <v-col
          v-for="n in genre_num"
          :key="n"
          
        >
        <v-card
          class="pa-2 ma-"
          tile
          outlined
          height="150"
          width="150"
        >
          col
        </v-card>
      </v-col>
    </v-row> -->

  </v-card>



    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
    drawer: false,
    collapseOnScroll: true,
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ],
    slides: [
      'First',
      'Second',
      'Third',
      'Fourth',
      'Fifth',
    ],
      
    genre_num: 8
  }),
};
</script>
