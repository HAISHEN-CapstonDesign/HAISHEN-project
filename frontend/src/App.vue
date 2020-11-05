<template>
  <v-app>
    <div>
      <v-app-bar
        color="deep-purple"
        dark
        absolute
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        
          <v-row align="center" justify="end">
            <v-btn icon class="mr-2">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn small class="mr-2" router :to="{name: 'LoginPage'}">login</v-btn>
            <v-btn small class="mr-2" router :to="{name: 'SignUpPage'}">sign up</v-btn>
            <v-btn small class="mr-2" router :to="{name:'MyPage'}">My</v-btn>
           
          </v-row>
        </v-app-bar>


        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
                >
            <img
                src='./assets/crunch_logo2.png'
                height="60px"              
                dark
                v-on:click="to_main"
                >
            <template>
                <v-list-item two-line>
                <v-list-item-avatar size="50">
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
                <v-list-item-title>Login</v-list-item-title>
                </v-list-item>

                <v-list-item to="/signup">
                <v-list-item-title>Sign up</v-list-item-title>
                </v-list-item>

                <v-list-item to="/myPage">
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
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-currency-usd-circle-outline</v-icon>
                </v-list-item-icon>

                <v-list-item-title>결제</v-list-item-title>
            </v-list-item>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-alarm-light</v-icon>
                </v-list-item-icon>

                <v-list-item-title>신고 접수</v-list-item-title>
            </v-list-item>
            </v-list>
            </v-navigation-drawer>
      <router-view></router-view>
    </div>


  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    count: 0,
    collapseOnScroll: true,
    colors: [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ]
  }),
  methods:{
    to_main(){
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
body, a:hover {cursor: url(../assets/cursor.cur), auto;}
</style>