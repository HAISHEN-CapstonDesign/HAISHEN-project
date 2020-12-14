<template>
<v-app>
  <v-img
      max-height="200px"
      max-width="100%"
      src="@/assets/watch.jpg"
      gradient="to top right, rgba(150,150,150,.30), rgba(52,52,52,.9)"
    ></v-img>
    <v-container>
      <v-row cols="12">
        <v-col md="10">
          <v-card outlined tile>
            <v-list class="pa-0">
              <v-list-item-group
              v-model="deleteList"
              multiple
              >
                <template v-for="(item, i) in items">
                  <v-divider
                  :key="`divider-${i}`"
                  ></v-divider>
                  <v-list-item
                  :key="`item-${i}`"
                  :value="i"
                  active-class="brown--text text--accent-4"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content @click="$router.push(item.url)">
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-checkbox
                        :input-value="active"
                        color="#816551"
                        ></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col md="2">
          <v-btn @click="deleteAlarm">
            삭제
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
</v-app>
</template>

<script>
//import axios from 'axios'
  export default {
    created(){
      /*
      axios.get(`http://localhost:3000/api/project/...`)
        .then((res) => {
          this.items = res.data;
          for(var i=0; i<res.data.length; i++){
            if(res.data[i].state == "community"){
              state에 따라서 text 정하는 코드
            }
          }
          
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error.config);
        });
      */
    },
    data: () => ({
      items: [
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.1',
          url:`/${1}/${6}/community`
        },
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.2',
          url:`/${1}/${6}/community`
        },
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.3',
          url:`/${1}/${6}/community`
        },
      ],
      deleteList: [],
    }),
    methods:{
      deleteAlarm(){
        for(var i=0; 0<this.deleteList.length;i++){
          this.items.splice(this.deleteList[0]-i,1);
          this.deleteList.splice(0,1);
        }
        /* 삭제 후 list 보내기
        axios.post('/api/project/...', this.items, { headers: {'token': localStorage.getItem('access_token')}})
          .then(res => {
            console.log(res)   
          })
          .catch((err) => {
            console.log(err)
          });
        */
      },
    },
  }
</script>