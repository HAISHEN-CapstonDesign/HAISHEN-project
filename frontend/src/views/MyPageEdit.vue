<template>
  <v-app>
    <!--업로드 이미지-->
        <v-img
        v-if="imageUrl" :src="imageUrl"
        max-height="200"
        max-width="100%"
        ></v-img>
        <!--기본 이미지-->
        <v-img
        v-else
        max-height="200"
        max-width="100%"
        src="../assets/banner.jpg"
        ></v-img>
    <br><br>
    <v-container>
      <v-row cols="12">
        <v-col md="3" sm="4">
          <!--업로드 아바타-->
        <v-avatar
          v-if="avatarImageUrl"
          size="270">
          <img
            v-if="avatarImageUrl" :src="avatarImageUrl"
          ></v-avatar>
        <!--업로드 전 아바타-->
        <v-avatar
          v-else
          color="blue"
          size="270"
        >avatar</v-avatar>
        </v-col>
        <v-col md="9" sm="8">
          <v-card
          color="#FFDFB0"
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
                :disabled="!isUpdating"
                filled
                label="닉네임"
                ></v-text-field>
              </v-col>
            <v-col cols="12">
            <v-autocomplete
              v-model="interests"
              :disabled="!isUpdating"
              :items="interest"
              filled
              chips
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
          <v-col cols="12">
            <v-textarea
              v-model="career"
              :disabled="!isUpdating"
              filled
              label="이력"
            ></v-textarea>
          </v-col>
          <v-col>
          <v-row>
            <input id="change_image" ref="avatarImageInput" type="file" hidden @change="onChangeAvatarImages">
            <v-btn type="button" :disabled="!isUpdating" @click="onClickAvatarImageUpload">프로필 사진 업로드</v-btn>

            <input ref="imageInput" type="file" hidden @change="onChangeImages">
            <v-btn type="button" :disabled="!isUpdating" @click="onClickImageUpload">배경 이미지 업로드</v-btn>
          </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
        <v-btn
        v-if="!isUpdating"
        color="#FFDFB0"
        @click="isUpdating = true"
        >
        <v-icon left>
          mdi-lead-pencil
        </v-icon>
          Edit
        </v-btn>
        <v-btn
        v-else
        color="#FFDFB0"
        @click="clickSave({ name, interests, career, change_image })"
        >
        <v-icon left>
          mdi-check-circle
            </v-icon>
              Save
            </v-btn>
            <v-btn
            v-show="isUpdating"
            color="#FFDFB0"
            @click="isUpdating = false"
            >
              <v-icon left>
                mdi-lead-pencil
              </v-icon>
              Cancel
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios"

export default {
  name: 'myPageEdit',
  created() {
    this.name = this.$store.state.userInfo.nickname;
  },
  data () {
      return {
        isUpdating: false,
        name:'',
        career:'',
        avatarImageUrl:null,
        interests:[],
        interest: [
          { name: '여행'},
          { name: '수학'},
          { name: '과학'},
          { name: 'IT'},
          { name: '경제'},
          { name: '요리'},
          { name: '건강'},
          { name: '역사'},
          { name: '건축'},
          { name: '문화, 예술'},
          { name: '시사'},
          { name: '직장'},
          { name: '육아'},
          { name: '게임'},
          { name: '연애'},
        ],
        imageUrl: null,
      }
    },
    methods: {
      onClickAvatarImageUpload() {
            this.$refs.avatarImageInput.click();
      },
      onChangeAvatarImages(e) {
            console.log(e.target.files)
            const file = e.target.files[0];
            this.avatarImageUrl = URL.createObjectURL(file);
      },
      onClickImageUpload() {
            this.$refs.imageInput.click();
        },
        onChangeImages(e) {
            console.log(e.target.files)
            const file = e.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
        },
      clickSave(saveObj){
        this.isUpdating = false;
        console.log('saveobj :'+ JSON.stringify(saveObj))
          axios
            .post('http://localhost:3000/api/user/edit', saveObj)
            .then(res => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            });
        // 변경 내용 저장 기능 추가 필요
      },

    },
};
</script>