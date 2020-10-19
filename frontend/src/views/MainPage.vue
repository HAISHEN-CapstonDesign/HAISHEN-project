<template>
    <div>
        <v-app>
            <!-- <v-app-bar
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
                    <v-btn small class="mr-2" router :to="{name: 'LoginPage'}">login</v-btn>
                    <v-btn small class="mr-2" to ="/signup" >sign up</v-btn>
                    <v-btn small class="mr-2" to ="/mypage" >My</v-btn>
            </v-row>
            </v-app-bar> -->

            <!-- <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                >
        <!--나중에 로고 이미지로 변경-->
                <img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                height="70px"
                width="100%"
                dark
                >

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

                <v-list-item to="/login">
                <v-list-item-title>Login/Sign up</v-list-item-title>
                </v-list-item>

                <v-list-item to="/MyPage">
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
                <v-list-item to ="/projectStart">
                <v-list-item-icon>
                <v-icon>mdi-book-plus-multiple</v-icon>
                </v-list-item-icon>

                <v-list-item-title>project</v-list-item-title>
            </v-list-item>
                <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-bell</v-icon>
                </v-list-item-icon>

                <v-list-item-title>alarm</v-list-item-title>
            </v-list-item>
            
            </v-list>
            </v-navigation-drawer> -->

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
            

            <v-btn to ="/postlist">글목록으로</v-btn>
            <v-btn to ="/collaboProjMain">공동프로젝트 메인페이지로</v-btn>
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

            
            <v-row align="start" justify="space-around">
            <h1>Writer Recruitement & Funding</h1>
            <v-btn
            color="deep-purple lighten-2"
            text
            
            >더 보기</v-btn>
            </v-row>
            
            <v-row
            class="justify-center"
            no-gutters
            dense
            
            >
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
            <!-- <Recruitment></Recruitment>
            <Recruitment></Recruitment> -->
            </v-row>
            <v-row
            class="justify-center"
            no-gutters
            dense
            
            >
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
                <Recruitment></Recruitment>
            <!-- <Recruitment></Recruitment>
            <Recruitment></Recruitment> -->
            </v-row>
        </v-app>
        

  </div>

</template>

<script>
import Recruitment from '../components/recruit.vue'

export default {
    components: {
        Recruitment,
    
    // HelloWorld,
    // 여기에 자기가 만든 component 를 써넣고 위에 템플릿에 추가하면됩니다
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
}
</script>

