<template>
  <v-app>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="300"
      max-width="100%"
      src="https://picsum.photos/id/11/500/300"
    ></v-img>
    <br><br>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
        <v-layout column wrap align-center>
          <v-flex>
        <!--업로드 아바타-->
        <v-avatar
          v-if="imageUrl"
          size="270">
          <img
            v-if="imageUrl" :src="imageUrl"
          ></v-avatar>
        <!--업로드 전 아바타-->
        <v-avatar
          v-else
          color="blue"
          size="270"
        >avatar</v-avatar>
        </v-flex>
        <br>
        <v-flex>
          <input ref="imageInput" type="file" hidden @change="onChangeImages">
          <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
        </v-flex>
        </v-layout>
        </v-flex>
    <!--좌측 끝 / 우측 시작-->
      <v-flex>
        
<v-card
    color="blue darken-1"
    dark
    :loading="isUpdating"
  >  
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
          >
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              filled
              color="blue lighten-2"
              label="닉네임"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="interests"
              :disabled="isUpdating"
              :items="interest"
              filled
              chips
              color="blue lighten-2"
              label="관심분야"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  @click="data.select"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col
            cols="12"
          >
            <v-textarea
              v-model="career"
              :disabled="isUpdating"
              filled
              color="blue lighten-2"
              label="이력"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        :loading="isUpdating"
        color="blue-grey darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left>
          mdi-update
        </v-icon>
        Update
      </v-btn>
    </v-card-actions>
  </v-card>


      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'myPageEdit',

  data () {
      return {
        isUpdating: false,
        name:'',
        career:'',
        imageUrl:'',
        interests:[],
        interest: [
          { name: '여행'},
          { name: '수학'},
          { name: '과학'},
          { name: '경제'},
        ],
      }
    },
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    methods: {
      onClickImageUpload() {
            this.$refs.imageInput.click();
      },
      onChangeImages(e) {
            console.log(e.target.files)
            const file = e.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
      },
    },
};
</script>