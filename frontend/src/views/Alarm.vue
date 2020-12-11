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
              v-model="model"
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
                      <v-list-item-content @click="$router.push(item.path)">
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
  export default {
    data: () => ({
      items: [
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.1',
          path:`/${1}/${6}/community`
        },
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.2',
          path:`/${1}/${6}/community`
        },
        {
          text:'(1번프로젝트-목차6번)의 커뮤니티에서 (닉네임)님을 태그하였습니다.3',
          path:`/${1}/${6}/community`
        },
      ],
      model: [],
    }),
    methods:{
      deleteAlarm(){
        for(var i=0; 0<this.model.length;i++){
          this.items.splice(this.model[0]-i,1);
          this.model.splice(0,1);
        }
      },
    },
  }
</script>