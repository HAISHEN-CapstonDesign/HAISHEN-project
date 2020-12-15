<template>
  <v-app>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="500"
        >
            <v-card>
              <v-container>
                <v-row cols="12" justify="center">
                  <v-col md="12" align="center">
                <v-card-text>
                    <p style="font-size:20px;">{{title}}</p>
                    <p>{{ids}}. {{subtitle}}</p>
                </v-card-text>
                  </v-col>
                  <v-col md="12">
                    <v-text-field
                    v-model="comment"
                    label="Commemt"
                    outlined
                    ></v-text-field>
                    <p>저장하시겠습니까?</p>
                  </v-col>
                </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green darken-1"
                    text
                    @click="updateText"
                    >
                        확인
                    </v-btn>
                    <v-btn
                    color="red darken-1"
                    text
                    @click="submitNo"
                    >
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- 취소버튼 dialog 만드는중 
        <v-dialog
        v-model="cancelDialog"
        persistent
        max-width="500"
        >
            <v-card>
                <v-card-title class="headline">
                    이 버전으로 되돌리시겠습니까?
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="green darken-1"
                    text
                    @click="cancelYes"
                    >
                        확인
                    </v-btn>
                    <v-btn
                    color="red darken-1"
                    text
                    @click="cancelDialog = false"
                    >
                        취소
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        -->
    <div>
      <v-img
        class="white--text"
        max-height="200"
        max-width="100%"
        v-bind:src="banner_src"
        gradient="to top right, rgba(150,150,150,.60), rgba(52,52,52,.7)"
        >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <v-col
          align="center"
          justify="center"
        >

          <p style="font-size:40px">{{projectTitle}}</p>

          <v-spacer class="pt-5"></v-spacer>
          <!-- <div>By. Jennie。hello</div> -->
          <v-row justify="center">
                <div>By.  </div>
                <div 
                v-for="writer in writerList"
                :key="writer"
                >{{writer.nickname}}</div>
          </v-row>
        </v-col>
        </v-row>
      </v-img>
      <v-col align="end">
        <v-btn
        class="l_btn"
        text
        @click="$router.push(`/${idp}/writerList`)"
        >
          저자Info
        </v-btn>
        <v-btn class="l_btn" text @click="$router.push(`/${idp}/supporter`)">
          서포터
        </v-btn>
        <v-btn @click="$router.push(`/${idp}/projectend`)" class="l_btn" text>
          프로젝트 종료
        </v-btn>
      </v-col>
    <!-- 개별 작성 페이지-->
    <v-container fluid grid-list-sm pa-5 pt-0>
      <v-row col="12" class="ma-0 pa-0" justify="end">
        <v-col md="3" class="ma-0 pa-0" align="center">
          <!-- 이미지 연결 되면 writerCrew로 변경 -->
          <v-avatar
          v-for="(avatar, i) in avatars"
          :key="i"
          :id="'border'+i"
          >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-img
            v-bind="attrs"
          v-on="on"
            :src="avatar.src"
            ></v-img>
            </template>
          <span>{{avatar.writerName}}</span>
          </v-tooltip>
          </v-avatar>
          
        </v-col>
      </v-row>
    <v-row cols="12">
        <v-col
        sm="4"
        md="2"
        >
            <Subtitle v-bind:title="title" @changeSubtitle="changeSubtitle"></Subtitle>
        </v-col>
        <v-col
        sm="6"
        md="8"
        >
        <!-- isEditing -->
        <div v-if="isEditing" style="background-color: #FFD0A1; min-height:700px;">
        <v-container>
          <div style="background-color: white; min-height:700px;">
          <v-container>
        <v-card
        flat
        tile
        >
          <h3>{{title}}</h3>
          <h1>{{subtitle}}</h1>

          <v-divider></v-divider>
          <Editor v-bind:mainText="nowMainText" @imageFile="imageFileAdd" @event-data="clickSubmit"></Editor>
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
          <p>{{$moment(project.time).format('YYYY-MM-DD HH:mm')}}, 작성자 {{project.writerName}}</p>               
        </div>
          </v-col>
          <v-col md="2" align="center" v-show="modifying">
            <v-avatar
                class="ma-1"
                size="50"
              >
              <!-- <v-img :src="hisS3key"></v-img> -->
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
              </v-avatar>
              <p>{{hisNickname}}</p>
          </v-col>
        </v-row>
          <v-divider></v-divider>
          <br>
            <div class="content_div" v-html="readText"></div>
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
import EventBus from '../EventBus.js';

export default {
    components: {
      Editor,
      Menu,
      Subtitle,
    },
    created() {
      var color=['#ff7777','#ffc455','#68BE66','#689CDD','#9668DD','#ff62f5']
      this.idp = this.$route.params.idp;
      this.ids = this.$route.params.ids;
      this.banner_src = require(`../assets/img/projectBanner/${this.idp}.jpg`)
    // this.subtitle=this.$store.state.subtitle[this.ids-1].text
      this.title=this.$store.state.title;
      axios.post('http://localhost:3000/api/getTitle', 
          { id: this.idp}, 
          { headers: {'token':localStorage.getItem('access_token') }})
        .then(res=>{
            this.projectTitle= res.data
            this.title = res.data
            console.log('projectTitle : '+this.projectTitle+'title : '+this.title)
        })
        .catch((err) => {
                console.log(err)
        });
      axios.post('http://localhost:3000/api/getWriterListOfBasicCollaboTool', 
          { id: this.idp}, 
          { headers: {'token':localStorage.getItem('access_token') }})
        .then(res=>{
            console.log(res.data)
            this.getData=res.data;
            // {userId: 78, nickname: "mumu", mainOrnot: 1}
            this.getData.forEach(element => {
              
              this.writerList.push(element);
            });
            

        })  
        .catch((err) => {
                console.log(err)
        });
      axios.get(`http://localhost:3000/api/project/${this.idp}/blob/basicTool/${this.ids}`)
        .then((res) => {
          this.project = res.data;
          this.nowMainText = this.project.post;
          
          //this.imgUrl = this.project.s3key;
          this.modifying = this.project.modifying;
          this.$store.commit('isModifying', this.modifying)
          this.hisNickname = this.project.hisNickname;
          this.hisS3key = this.project.hisS3key;
          this.postDetail = this.project.postDetailList;
          console.log(this.postDetail)
          axios.get(`http://localhost:3000/api/project/${this.idp}/writercrew`)
            .then((res2) => {
              this.writerCrew = res2.data;
              for(var i=0; i<this.postDetail.length; i++){
                let colorText = null;
                let colorIndex = 0;
                for(var j=0; j<this.writerCrew.length; j++){
                  if(this.postDetail[i].writerName == this.writerCrew[j].writerName){
                    colorIndex = j;
                  }
                }
                if(this.postDetail[i].text.includes("<p></p>")) colorText = "<br>"
                else colorText = this.postDetail[i].text.replace("<p>", `<p style="color:${color[colorIndex]};">`);

                this.readText = this.readText + colorText;
              }
              console.log(res2.data);
            })
            .catch(function (error) {
              console.log(error);
            });
          })
          .catch(function (error) {
            console.log(error);
          });

      this.idp = this.$route.params.idp;
      // this.little_titles=this.$store.state.subtitle
      axios
        .post('http://localhost:3000/api/getindex',
            { id: this.idp }, 
            { headers: {'token':localStorage.getItem('access_token') }})
        .then(res => {
            console.log("bi")
            console.log(res.data);
            console.log(res.data[0]);
            for(var i = 0; i<res.data.length; i++){
              console.log("--------------")
              console.log({idx:res.data[i].id, text:res.data[i].title})
              this.little_titles.push({idx:res.data[i].id, text:res.data[i].title})
            }
            // console.log(this.ids)
            // console.log(this.little_titles)
            // console.log(this.little_titles[0].text)
            this.subtitle = this.little_titles[this.ids-1].text;
          
        })
        .catch((err) => {
            console.log(err)
            // alert("에러가 발생했습니다. 다시 시도해주세요")
        });
      this.imgUrl=require(`../assets/img/projectBanner/${this.idp}.jpg`)
          
      
    },
    data() {
        return{
            // title:'',
            getData:'',
            writerList:[],
            banner_src:'',
            projectTitle:'',
            little_titles:[],
            postDetail:[],
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
            readText:'',
            editText:'',
            editFiles:[],
            writerCrew:[], //프로필 사진 추가해야함 -> avatars로 대체중
            imgUrl: require('../assets/partership.jpg'),
            //this.banner_src = require(`../assets/img/projectBanner/${this.idp}.jpg`)
            dialog:false,
            cancelDialog: false,
            avatars:[
              {
                src: require('@/assets/jenny2.jpg'),
                writerName:"작가1"
              },
              {
                src: require('@/assets/jenny2.jpg'),
                writerName:"작가2"
              },
              {
                src: require('@/assets/jenny2.jpg'),
                writerName:"작가3"
              },
              {
                src: require('@/assets/jenny2.jpg'),
                writerName:"작가4"
              },
            ],
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
      updateText(){
        //본문 변경 내용 저장
        this.nowMainText = this.editText;
        this.subObj.files=this.editFiles

        let form2 = new FormData()

        for(var i=0; i<this.subObj.files.length; i++){
          form2.append('files',this.subObj.files[i]);
        }

        this.subObj.after = this.editText;
        this.subObj.commit_comment = this.comment;
        this.subObj.time = this.$moment(new Date()).format('YYYY-MM-DD HH:mm')
        console.log(this.subObj)
        axios.post(`http://localhost:3000/api/project/file`, form2)
        .then((res) => {
          axios.post(`http://localhost:3000/api/project/${this.idp}/modify/basicTool/${this.ids}`, this.subObj,
          {
            headers: {
              'token': localStorage.getItem('access_token')
              //'Content-Type':'multipart/form-data'
            }
          })
            .then((res) => {
            this.project = res.data;
            location.reload(); //새로고침
            console.log(res);
          })
          .catch(function (error) {
            console.log(error.response);
          });
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.response);
        });
        
        this.comment = '';
        this.subObj.files = null;
        this.dialog = false;
     //   this.isEditing = false;
        EventBus.$emit('submitOk'); 
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
      //  console.log(fileText)
        this.isEditing = true;
      },
      clickSubmit(newText, imgfile){
        this.dialog=true;
        this.editText = newText;
        this.editFiles=imgfile
      },
      submitNo(){
        this.dialog=false;
        this.comment = '';
      },
      cancelYes(){

      },
    },
}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
#border0{
  border: 5px solid #ff7777;
}
#border1{
  border: 5px solid #ffc455;
}
#border2{
  border: 5px solid #68BE66;
}
#border3{
  border: 5px solid #689CDD;
}
#border4{
  border: 5px solid #9668DD;
}
#border5{
  border: 5px solid #ff62f5;
}
</style>
<style>
.v-application p {
    margin-bottom: 0px;
}
</style>
