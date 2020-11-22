<template>
  <v-app>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="500"
        >
            <v-card>
                <v-card-title class="headline">
                    저장하시겠습니까?
                </v-card-title>
                <v-container>
                <v-text-field
                v-model="comment"
                label="Commemt"
                outlined
                ></v-text-field>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green darken-1"
                    text
                    @click="revertYes"
                    >
                        확인
                    </v-btn>
                    <v-btn
                    color="red darken-1"
                    text
                    @click="revertNo"
                    >
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <div>
      <v-img
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
        >
    </v-img>
      <v-col align="end">
        <v-btn
        class="l_btn"
        text
        @click="$router.push(`/${idp}/writerList`)"
        >
          저자Info
        </v-btn>
        <v-btn class="l_btn" text>
          서포터
        </v-btn>
        <v-btn class="l_btn" text>
          프로젝트 종료
        </v-btn>
        <v-btn
                    color="green darken-1"
                    text
                    @click="dialog=true"
                    >
                        dialog test
                    </v-btn>
      </v-col>
    <!-- 개별 작성 페이지-->
    <v-container>
    <v-row cols="12">
        <v-col
        sm="4"
        md="3"
        >
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col
        sm="6"
        md="7"
        >
        <!-- isEditing -->
        <div v-if="isEditing" style="background-color: #FFD0A1">
        <v-container>
          <div style="background-color: white">
            <div v-show="isEditing" style="width: 70px; background-color: #FFD0A1; position: relative; left: 36vw; text-align: center; color: white;">
            수정중
            </div>
          <v-container>
        <v-card
        flat
        tile
        >
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>

          <v-divider></v-divider>
          <Editor v-bind:mainText="nowMainText" @imageFile="imageFileAdd" @event-data="updateText"></Editor>
          <v-text-field
            v-model="comment"
            label="Commemt"
            outlined
          ></v-text-field>
          </v-card>
          </v-container>
          </div>
        </v-container>
        </div>
        <!-- !isEditing -->
        <div v-else style="background-color: white">
        <v-container>
          <div style="background-color: white">
          <v-container>
        <v-card
        flat
        tile
        >
        <v-row cols="12">
          <v-col md="10">
        <div>
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>
          <p>{{$moment(project.time).format('YYYY-MM-DD HH:mm:ss')}}, {{project.writerName}}</p>               
        </div>
          </v-col>
          <v-col md="2" align="center" v-show="modifying">
            <v-avatar
                class="ma-1"
                size="50"
              >
                <v-img :src="hisS3key"></v-img>
              </v-avatar>
              <p>{{hisNickname}}</p>
          </v-col>
        </v-row>
          <v-divider></v-divider>
          <br>
            <div class="content_div" v-html="nowMainText"></div>

          </v-card>
          </v-container>
          </div>
        </v-container>
        </div>
        </v-col>

        <v-col
        sm="2"
        md="2"
        >
          <Menu
          v-model="isEditing"
          v-bind:ids="ids"
          v-bind:idp="idp"
          v-bind:mainText="nowMainText"
          v-bind:title="title"
          v-bind:subtitle="subtitle"
          v-bind:modifying="modifying"
          @changeEdit="editingChange"
          @uploadFile="uploadFile"></Menu>
        </v-col>
    </v-row>
    </v-container>
    </div>
  </v-app>
</template>

<script>
import Editor from '../components/editor';
import Menu from '../components/modeMenu';
import Subtitle from '../components/subtitleList';
import axios from 'axios'

export default {
    components: {
      Editor,
      Menu,
      Subtitle,
    },
    created() {
      this.idp = this.$route.params.idp;
      this.ids = this.$route.params.ids;
      this.subtitle=this.$store.state.subtitle[this.ids-1].text
      this.title=this.$store.state.title
      axios.get(`http://localhost:3000/api/project/1/blob/basicTool/${this.ids}`)
        .then((res) => {
          this.project = res.data;
          this.nowMainText = this.project.post;
          //this.imgUrl = this.project.s3key;
          this.modifying = this.project.modifying;
          this.$store.commit('isModifying', this.modifying)
          this.hisNickname = this.project.hisNickname;
          this.hisS3key = this.project.hisS3key;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },
    data() {
        return{
            modifying: false,
            hisNickname:'',
            hisS3key:'',
            idp:0,
            ids:0,
            token: localStorage.getItem('access_token'),
            isEditing: false,
            title: '',
            subtitle:'',
            nowMainText: '',
            imgUrl: require('../assets/banner2.jpg'),
            dialog:false,
            comment:'',
            project: {},
            subObj:{
              after:'',
              time:'',
              commit_comment:'',
              files:[],
            },
        }
    },
    methods: {
      updateText(newText){
        //본문 변경 내용 저장
        this.nowMainText = newText;
        //post data
        this.subObj.after = newText;
        this.subObj.commit_comment = this.comment;
        this.subObj.time = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        console.log(this.subObj)
        axios.post(`http://localhost:3000/api/project/${this.idp}/modify/basicTool/${this.ids}`, this.subObj,
          {
            headers: {
              'token': localStorage.getItem('access_token')
              //'Content-Type':'multipart/form-data'
            }
          })
        .then((res) => {
          this.project = res.data;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.response);
        });
        this.comment = ''
        this.files = null;
      },
      editingChange(state){
        this.isEditing = state;
      },
      changeSubtitle(idx){
        //목차 클릭시 페이지 변경
        this.$router.push(`/${this.idp}/basicCollaboTool/${idx}`);
      },
      uploadFile(fileText){
        this.nowMainText = fileText;
        this.isEditing = true;
      },
      imageFileAdd(imgfile){
        this.subObj.files=imgfile
      },
      revertYes(){
        this.dialog=false;
      },
      revertNo(){
        this.dialog=false;
      },
    },
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>