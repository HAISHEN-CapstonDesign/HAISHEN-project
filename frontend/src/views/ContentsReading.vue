<template>
<div>
 <h1>컨텐츠 열람 페이지</h1>
    <v-row>
        <v-img
        class="white--text align-end"
        height="300"
        src="../assets/banner2.jpg"
        >
        </v-img>

    </v-row>
    <v-col align="end">
        <v-btn @click="sss">저자 info</v-btn>
        <v-btn>서포터</v-btn>
        <v-btn>커뮤니티</v-btn>
    </v-col>

    
    <v-row>
        <!-- <v-col cols=3><ProjIndex></ProjIndex></v-col> -->
        <v-col col-4>
            <v-card width="300" height="600">
                <v-navigation-drawer
                    v-model="drawer"
                    permanent
                    floating
                    width="400"         
                >
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="../assets/grid.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>{{title}}</v-list-item-title>

                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list dense>
                        <v-list-item
                            v-for="little_title in little_titles"
                            :key="little_title"
                            link
                        >

                        <v-list-item-content>
                            <v-list-item-title @click="showButtonsDialog()">
                                {{little_title.idx}}, {{ little_title.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card>
        </v-col>

        <v-col cols=4 align="center">
            <ProjContent></ProjContent>
            <PostReply @child_replySubmit="parent_replySubmit"></PostReply>
             
        </v-col>

        <v-col cols=4></v-col>
    </v-row>
     


    
    
</div>
   
</template>

<script>
// import ProjIndex fro m '../components/projIndex.vue'
import ProjContent from '../components/projContent.vue'
import PostReply from '../components/reply.vue'
// import store from '../store'

export default {
    components: {
        // ProjIndex,
        PostReply,
        ProjContent
    },
    data: () => ({
        menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '#',
                    title: 'Charts',
                    icon: 'fa fa-chart-area'
                },
            ],
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
        mini: true,

        title: '캡디 기획 보고서 작성하기',
        date: '2020.10.12 05:55',
        writer: ['김김김', '이이이', '박박박'],
        little_titles: [
            { idx:1, text:'기획보고서란'},
            { idx:2, text:'유사 제품 서비스 동향'},
            { idx:3, text:'관련 기술 동향'},
            { idx:4, text:'유저 스토리'},
            { idx:5, text:'UX/UI 설계'},
            { idx:6, text:'시스템 설계'},
            { idx:7, text:'청춘예찬'},
            { idx:8, text:'별헤는밤'},
           
        ],
        selected_idx: 0
  }),
  methods:{
      showButtonsDialog() {
        this.$modal.show('dialog', {
            title: 'The standard Lorem Ipsum passage',
            text: 'Lorem ipsum dolor sit amet, ...',
            buttons: [
                {
                    title: 'Cancel',
                    handler: () => {
                        this.$modal.hide('dialog')
                    }
                },
                {
                    title: 'Like',
                    handler: () => {
                        alert('Like action')
                    }
                },
                {
                    title: 'Repost',
                    handler: () => {
                        alert('Repost action')
                    }
                }
            ]
            })
        },
        dialogEvent(eventName) {
            console.log('Dialog event: ' + eventName)
        },
    // selectIndex: function(title_idx){
    //     // this.selected_idx= title_idx
    //     if(title_idx > 2){
    //         if( store.state.userInfo.point > 100 ){
    //             alert('유료컨텐츠 입니다. 포인트 100을 차감하여 열람할까요?')
    //         }
    //         alert('유료컨텐츠 입니다. 광고페이지로 넘어갑니다')
    //         this.$router.push({ name: 'AdvertisingPage' })
    //         showButtonsDialog()
    //     }
    //     else{
    //         alert('무료컨텐츠 입니다.')
    //         alert(title_idx)
    //     }
    // },
    parent_replySubmit: function(){
        alert("hello")
    },
    sss(){
        alert('dfasd')
    },
  }
}
</script>
