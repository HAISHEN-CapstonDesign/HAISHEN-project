<template>
    <div>
    <v-img
        class="white--text"
        max-height="200"
        max-width="100%"
        v-bind:src="imgUrl"
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
          <p style="font-size:40px">{{title}}</p>
          <v-spacer class="pt-5"></v-spacer>
          <!-- <div>By. Jennie。hello</div> -->
          <v-row justify="center">
                <div>By.  </div>
                <div 
                v-for="writer in writerList"
                :key="writer"
                >{{writer.nickname}}</div>
          </v-row>
          
          <div>2020 년 11 월 22 일</div>
        </v-col>
        </v-row>
    </v-img>
    <v-container>
    <v-col align="end">
      </v-col>
    <v-row>
        <v-col
        cols="12"
        sm="4"
        md="3"
        >
            <Subtitle v-bind:title="title" @selectIndex="selectIndex" v-bind:indexList="indexList"></Subtitle>
        </v-col>
        <v-col
        sm="6"
        md="7"
        >
          <div style="background-color: white">
          <v-container>
        <v-card
        flat
        tile
        >

          <v-row cols="12">
            <v-col md="9">
          <h2 style="display:inline" id="title">{{title}}</h2>
            </v-col>
          <v-col md="3">
          <v-btn dark id="dwn-btn">download PDF</v-btn>
          </v-col>
          </v-row>
            
            <v-row>
              <v-chip
                v-for="tag in tagList"
                :key="tag"
                v-text="tag"
                color="grey"
                class="ml-3 mb-2"
              >
              <!-- <p style="color:white"></p> -->
              </v-chip>
            <v-spacer></v-spacer>
              <v-rating
                background-color="grey"
                color="yellow"
                half-increments
                size="20"
                :value=rating_score
                length="5"
                dense
                class="mr-3"
            ></v-rating>
            {{rating_score}}
            </v-row>
          
          
          <v-divider></v-divider>
          <div id="pdf_wrap">
          <div v-if="idc==1" class="pt-10">
           <h3>{{subtitle_1}}</h3>
           <v-spacer class = "pt-3"></v-spacer>
           <subtitle-2>{{contents_1}}</subtitle-2>
          </div>

          <div v-if="idc==1" class="pt-10">
           <subtitle-2>{{contents_1_1}}</subtitle-2>
          </div>

          <div v-if="idc==1" style="text-align : center; width: 100%;" class="pt-5">
            <img src="../assets/partership.jpg" style="width: 100%; max-width: 760px;" >
          </div>
          <br>
          <div v-if="idc==1" class="pt-10">
           <subtitle-2>{{contents_1_2}}</subtitle-2>
          </div>
          <div v-if="idc==1" class="pt-10">
           <subtitle-2>{{contents_1_3}}</subtitle-2>
          </div>
        </div>
          <div v-if="idc==2" class="pt-10">
           <h3>{{subtitle_2}}</h3>
           <v-spacer class = "pt-3"></v-spacer>
           <subtitle-2>{{contents_2}}</subtitle-2>
          </div>

          <div v-if="idc==2" class="pt-10">
           <subtitle-2>{{contents_2_1}}</subtitle-2>
          </div>

          <div v-if="idc==2" class="pt-10">
           <subtitle-2>{{contents_2_2}}</subtitle-2>
          </div>
          

          <div v-if="idc==3" class="pt-10">
           <h3>{{subtitle_3}}</h3>
           <v-spacer class = "pt-3"></v-spacer>
           <subtitle-2>{{contents_3}}</subtitle-2>
          </div>
          
          <div v-if="idc==3" style="text-align : center; width: 100%;" class="pt-5">
            <img src="../assets/trend.jpg" style="width: 100%; max-width: 760px;" />
          </div>
          <div class="pt-10">
           <PostReply :idp="idp" :idc="idc" @child_replySubmit="parent_replySubmit"></PostReply>
          </div>
           
             <!-- <PostReply @child_replySubmit="parent_replySubmit"></PostReply>
-->
<!-- 나중에 하나로 합쳐지면 div에 class="content_div" 추가 -->
          </v-card>
          </v-container>
          </div>
        </v-col>
        
      </v-row>
    </v-container>

    <!-- overlay area -->
        <v-overlay
          :z-index="zIndex"
          :value="overlay"
          :opacity="opacity"
          color="#282828"
        >
          <Advertising @endAd="endAd"></Advertising>
        </v-overlay>

        <!-- dialog area point have-->
      <v-dialog
          v-model="dialog0"
          persistent
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline">
            선택한 컨텐츠는 유료 컨텐츠 입니다.
          </v-card-title>
          <v-card-text>포인트를 차감하고 열람하시겠습니까?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog0 = false"
            >
              아니요
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="getFee_minuspoint(new_selected_idx)"
              >
              네
            </v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog> -->
    <!-- dialog area endline-->

    <!-- dialog area point dont have-->

        <v-dialog
          v-model="dialog1"
          persistent
          max-width="500"
        >
          <v-card>
            <v-card-title class="headline">
              유료 컨텐츠 입니다. 포인트를 충전하거나 광고를 시청해야 열람하실 수 있습니다.
            </v-card-title>
            <v-card-text>광고를 시청하고 무료로 열람하시겠습니까?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog1 = false"
              >
                아니요
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="dialogAd()"
              >
                네
              </v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
    <!-- dialog area endline -->
    
</div>
</template>

<script>
// import ProjIndex fro m '../components/projIndex.vue'
import $ from 'jquery';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import PostReply from '../components/reply.vue'
import Advertising from './Advertising'
import Subtitle from '../components/subtitleForReading';
import axios from 'axios'
import store from '../store'
import {
    mapActions
} from "vuex"

export default {
    components: {
        // ProjIndex,
        PostReply,
        Advertising,
        Subtitle
    },
    
    data: () => ( 
        {
        rating_size: 20,
        rating_score: 4,
        click_like: false,
        contents_like: 0, //axios로 좋아요 수 가져와야함
        zIndex: 0,
        dialog: false,
        dialog0: false,
        dialog1: false,
        opacity: 0.9,
        overlay: false,
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
        mini: true,
        project_id: 1,
        imgUrl: require('../assets/partership.jpg'),
        title: '기획자의 트렌드, 소통, 배움, 이타심',
        subtitle_1: '트렌드와 소통, 끊임없는 배움',
        contents_1: '흔히 트렌드란 뭔가 재빠르게 세상을 따라가고, 핫플레이스를 좋아하는 패피들로 연상됩니다. 하지만 저는 트렌드를, 팀원과의 소통에 관한 관점으로 얘기해보려 합니다. 트렌드는 어떠한 방향으로 쏠리는 사회적 추세, 경향을 뜻합니다. 소통은 사회성, 사람들과의 커뮤니케이션 활동입니다. 트렌드와 소통을 같은 선상에 놓고 비교하면, 트렌드는 앞서 나가는 멋진 사람에 대한 좁은 정의 뿐만 아니라, 사람(팀원)들이 자주 사용하는 언어와 행동, 도구를 파악하는 넓은 의미로도 비춰질 수 있습니다. 사람들과 더 잘 대화하고 함께 가기 위해 그들의 행동과 방향성을 읽고 공감하며, 그들의 언어로 대화를 나누는 것도 트렌드를 읽는 것입니다.',
        contents_1_1: '팀원과의 소통을 위한 트렌드 읽기는, 끊임없는 배움으로 이어집니다. 우리는 각자 다른 관점과, 스킬, 방향성을 가진 팀원들과 만납니다. 직군마다 다양한 마이크로 트렌드가 있습니다. 기획자로 예를 들면, PPT, XD, Figma, Axure, Sketch, Power mockup, Notion, SQL, R, Python, Amplitude, GA 등 업무에 대한 다양한 트렌드를 볼 수 있습니다. 팀원들의 수많은 트렌드, 관점을 읽고 함께 `공감`하기 위해서는 지속적으로 새로운 지식에 대한 배움을 이어가야 합니다.',
        contents_1_2: '배움과 소통의 관계는 업무/협업툴에서 가장 직접적으로 드러납니다. 피그마와 제플린을 사용하지 못하는 기획자와 디자이너, 개발자의 소통은 얼마나 힘들까요? 당장의 프로젝트에는 영향을 미치지 않는다는 이유로 통일된 기획툴을 사용하지 않고, 각기 다른 익숙한 툴로 기획서를 작성하는 팀의 기획 시스템과 히스토리 관리는 어떻게 안정될 수 있을까요? 디자인과 개발, 기획 등 서로의 분야에 대한 기본적인 관심조차 없는, 혹은 고객에 대한 관심이 없는 팀원과의 대화는 얼마나 괴로울까요? 데이터를 추출할 수 없어서 매번 개발자에게 부탁해야 하는 마케터/기획자/디자이너의 마음은 얼마나 무겁고, 개발자의 고충은 어떠할까요',
        contents_1_3: '우리는 개발, 디자인, 사업, 데이터, 고객에 대해 끊임없는 관심을 가지고, 더뎌 보일지라도 새로운 것들을 알아가고 익숙해지는 과정을 좋아해야 합니다. 특히 기획자에게 이러한 배움은 필수적입니다. 이를 보며 어떤 사람들은(심지어 기획자도) 제너럴리스트가 되는 길, 잡일을 하는 직군으로 바라보기도 합니다. 하지만 이는 `기획자`라는 중간자만이 가질 수 있는 스페셜리티가 될 수 있습니다. 기획자는 팀과 고객의 중간에서 `제품`이라는 그릇을 만드는 역할입니다. 모든 팀원들이 함께 제품을 만들지만, 기획자는  팀원들이 만든 각 요소들의 논리적인 연결과 역할, 자리를 그려 "제품"의 전체적 형태를 설계하는 사람입니다. 그렇기에 각 분야에 대한 넓은 지식은 `제품`이라는 깊은 지식으로 이어져, 기획자의 스페셜 스킬이 될 것입니다.',
        subtitle_2:'수용성과 타인을 돕는 것, 이타심',
        contents_2:'제품은 사업/디자인/개발/기획이 맞물려 함께 만들어가는 것입니다. 그렇기에 지속적인 수정, 방향전환은 곳곳에서 지속적으로 발생합니다. 고심하여서 그린 제품의 방향성이 지나가다 본 팀원에 의해, 디자인/개발/사업/운영단의 피드백으로 완전히 변경될 수도 있습니다.(이는 모든 직군이 마찬가지 입니다.)',
        contents_2_1:'이러한 상황을 흔히 비효율성, 쓸데없는 참견 혹은 존중을 하지 않는 것, 잡일을 하는 것으로 치부할 수도 있습니다. 하지만 우리는 `좋은 제품`을 만드는 과정에 있습니다. 팀원들은 또 하나의 고객이며, 실제로 제품에 관심이 집중된 전문가입니다. 그렇기에 우리는 팀원들의 피드백을 수용하고 이를 고찰하며 더 나은 제품을 그리는 재료로 사용해야 합니다. 팀원들의 피드백 하나하나는, 서로를 위한 도움이며 관심입니다. 우리에게는 동료의 합리적인 피드백을 감사하게 여기는 수용성이 필요합니다.',
        contents_2_2:'이렇듯 팀원을 향한 관심은 나 자신에게도 동일하게 적용됩니다. 제품은 함께 만들어지는 것이기에, 사업/개발/디자인/기획단의 동료들이 진행한 것들을 관심있게 보고, 사려깊은 마음으로 의견을 제시하는 것이 필요합니다. 또한 기획자는 사업/디자인/개발단에서 제품을 구현하는데 어려움이 발생하면, 최대한 관심을 기울이고 이를 해결하기 위해, 기꺼이 최선의 도움을 주는 태도를 가져야 합니다. 이러한 이타적인 태도를 통해서만 우리는 팀원의 도움과 협동을 이끌어낼 수 있으며, 우당탕탕 굴러가는 제품을 발전시켜 고객을 만족시키는 상품을 만들 수 있습니다.',
        subtitle_3:'함께 만드는 것',
        contents_3:'글을 쓰다보니 내용이 적절하지 않은 듯도 하고, 엉켜서 의미가 분명하게 전달되지 않는 문장들도 참 많은거 같습니다. 이렇듯 미숙한 글을 통해 전달하고 싶은건, 미숙한 사람들이 함께 모여 함께 멋진 제품을 만드는 것. 협동하여 서로의 부족을 채워주는 것. 그러기 위해 끊임없이 배우는 것과 이타심의 가치입니다.',
        idc: 1,
        idp:0,
        date: '2020.10.12 05:55',
        writerList: [],
        selected_idx: 0,
 
        // router :to="{ 
        //       name: 'ContentsReadingPage',
        //       params: {idc: this.selected_idx}}"
        //       >
        temp_title_index:3,
        new_selected_idx: 1,
        comment_selected_idx: 3,
        indexList:[]
        
        // token: localStorage.getItem('access_token'),
        // idp:0,
  }),
    created(){ 
    this.idc = this.$route.params.idc;
    this.idp = this.$route.params.idp;
    console.log(this.idc);
    console.log(this.idp);
    axios.post('http://localhost:3000/api/getContentsReading', 
        {projectId: this.idp, postIndex:this.idc},
        {
            headers: {
                'token': localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            console.log(res.data);

            this.title = res.data.title;
            this.subtitle_1 = res.data.subtitle;
            this.tagList = res.data.tagList
            this.writerList = res.data.writerNicknameList
            
            // {
            //   completePost: null
            //   complete_time: null
            //   projectId: 171
            //   starRate: 4
            //   subtitle: "크런치 프로젝트란"
            //   tagList: []
            //   title: "캡스톤디자인! 크런치 프로젝트의 운명은..? "
            //   writerNicknameList: Array(1)
            //     0: {userId: 78, nickname: "mumu"
            // }
        })
        .catch(function (error) {
            console.log(error.response);
        });

    axios.post('http://localhost:3000/api/getContentsReadingIndexList', 
        {id: this.idp},
        {
            headers: {
                'token': localStorage.getItem('access_token')
            }
        })
        .then((res) => {
            console.log(res.data);
            // 리스트 형식
            // {
            //   fee: 100
            //   indexId: 1
            //   projectId: 171
            //   title: "크런치 프로젝트란"
            // }   
            
        this.indexList = res.data
        })
        .catch(function (error) {
            console.log(error.response);
        });

  },
  methods:{
    ...mapActions(['paymentpoint']),
    selectIndex(title_idx){
      console.log("title_idx : "+title_idx)
        this.selected_idx = title_idx
        console.log("selected_idx :"+this.selected_idx)
        this.new_selected_idx = title_idx
        console.log("new_selected_idx :"+this.new_selected_idx)

        if(title_idx > 2){
            if( store.state.userInfo.point > 100 ){
                // alert('유료컨텐츠 입니다. 포인트를 차감하여 열람하겠습니다') //진짜 결제할건지 dialog창 띄우기
                // console.log('before click :' + this.ifpointhave )
                // this.ifpointhave = 1
                // console.log('after click :' + this.ifpointhave )
                this.dialog0 = true
                // this.getFee_minuspoint(title_idx)
                //여기에 axios 요청 보내야함
            }
            else{
              console.log("dialog")
              this.dialog1 = true
            }
            // alert('유료컨텐츠 입니다.\n포인트가 없으므로 광고 시청후 열람하도록 하겠습니다.')
            //this.$router.push({ name: 'ContentsReadingPage',params: {idc: title_idx} })
            // this.overlay = !this.overlay
        }
        else{
          // alert('무료컨텐츠 입니다.')
          // alert(title_idx)
          this.$router.push({ name: 'ContentsReadingPage',params: {idc: title_idx} })
        }
    },
    addbuyer(){
          axios
                .post('http://localhost:3000/api/addbuyercrew',
                  {postindexId: 3,projectId:1,  purchaseDate:'2020-11-30'}, 
                  { headers: {'token': localStorage.getItem('access_token')}}
                )
                .then(res => {
                    console.log(res.data)
                    
                })
                .catch((err) => {
                    console.log(err)
                    //alert("에러가 발생했습니다. 다시 시도해주세요")
                });
        },
    getFee_minuspoint(title_idx){
        console.log('title_idx'+title_idx)
        axios
            .post('http://localhost:3000/api/getfee',{ id: this.idc, projectId:this.idp}, { headers: {'token': localStorage.getItem('access_token')}} )
            .then(res => {
                // localStorage.setItem('point',this.chargePoint)
                console.log(res.data)
                
                axios
                  .post('http://localhost:3000/api/minuspoint', {id:this.idc, projectId:this.idp, fee: res.data},{ headers: {'token': localStorage.getItem('access_token')}})
                  .then(request=> {
                      console.log(request.data)
                      localStorage.setItem('point',request.data) //local storage 에 바뀐 포인트 저장해야함 수정필요
                      console.log(request.data)
                      this.paymentpoint(request.data)
                      this.$router.push({ name: 'ContentsReadingPage',params: {idc: title_idx} })
                  })
                  .catch((error) => {
                      console.log(error)
                  });
                  this.dialog0=false
            })
            .catch((err) => {
                console.log(err)
                //alert("에러가 발생했습니다. 다시 시도해주세요")
            });
    },
    request_minus_point(){
        axios
            .post('http://localhost:3000/api/minuspoint', {postId:parseInt(this.temp_title_index), projectId:1, minusPoint: 100},{ headers: {'token': this.token}})
            .then(res=> {
                console.log(res.data)
            })
    },

    parent_replySubmit: function(){
        alert("hello")
    },
    sss(){
        alert('dfasd')
    },
    endAd(over){
        this.overlay = over;
        this.$router.push({ name: 'ContentsReadingPage',params: {idc: this.new_selected_idx} })
    },
    dialogAd(){
      this.dialog1 = false
      this.overlay = !this.overlay
    },
    increment() {
      let like_click_user_nickname = localStorage.getItem('nickname')
      if(like_click_user_nickname != null && this.click_like == false){
        this.contents_like++;
        this.click_like = true
      }
      else if(like_click_user_nickname != null && this.click_like == true){
        this.contents_like--;
        this.click_like = false
      }
      
    },
      addcomment(){
          axios
          .post('http://localhost:3000/api/addcomment',
          { postindexId: this.comment_selected_idx, projectId: this.project_id, text:"포스트 잘봤어요! 자주 소통하고 지내요 ~ 제 블로그에도 놀러오세요!"}, 
          { headers: {'token': this.token}}
          )
          .then(res => {
                  // localStorage.setItem('point',this.chargePoint)
                  console.log(res.data)
                
              })
              .catch((err) => {
                  console.log(err)
                  //alert("에러가 발생했습니다. 다시 시도해주세요")
              });
      }
//나중에 페이지 나누고 코드 수정 후 활성화
    //  changeSubtitle(idx){
        //목차 클릭시 페이지 변경
        //this.$router.push(`/${this.$store.state.projectId}/basicCollaboTool/${idx}`);
     //},
  },
  mounted(){
     $('#dwn-btn').click(function() {
  //pdf_wrap을 canvas객체로 변환
  html2canvas($('#pdf_wrap')[0]).then(function(canvas) {
    var doc = new jsPDF('p', 'mm', 'a4'); //jspdf객체 생성
    var imgData = canvas.toDataURL('image/png'); //캔버스를 이미지로 변환
    var imgWidth = 210; var pageHeight = 295; 
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight; 
    var position = 0; doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); heightLeft -= pageHeight; 
    while (heightLeft >= 0) {
       position = heightLeft - imgHeight; doc.addPage(); 
       doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); 
       heightLeft -= pageHeight; 
       }

    var date = new Date().toLocaleString();
    var title = document.getElementById("title").innerText
    doc.save(`${title}_${date}.pdf`); //pdf저장
  });
});
      
  },

}
</script>
<style scoped>
.l_btn:hover{
  color: brown;
}
</style>
