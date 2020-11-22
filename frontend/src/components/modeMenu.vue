<template>
    <v-card id="mode_menu" style="top:10px;" max-width="127">

        <v-list
          dense
          rounded
        >
        <v-list-item-group active-class="brown--text">
          <v-list-item
          v-show="!editing"
          :disabled="modifying"
          @click="clickEdit"
          link
          >
            <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-pencil</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">EDIT</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
          v-show="editing"
          @click="cancelEdit"
          link
          >
            <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-pencil-off</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">CANCEL</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickHistory" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-history</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">HISTORY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickCommunity" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-forum</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">COMMUNITY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          :disabled="!editing"
          @click="clickSubmit"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-check-circle</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">SUBMIT</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          id="dwn-btn"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-download</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">DOWNLOAD</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          @click="onClickFileUpload"
          :disabled="modifying"
          link
          >
          <input ref="fileInput" type="file" hidden @change="importFile">
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-upload</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">UPLOAD</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>
        <div id="text-val" v-html="mainText" v-show="false"></div>
        <div id="title" v-show="false">{{title}}</div>
        <div id="subtitle" v-show="false">{{subtitle}}</div>
            </v-card>
</template>
<script>
import EventBus from '../EventBus.js';
import $ from 'jquery';
import axios from 'axios'

export default {
    mounted(){
    //list가 스크롤을 따라오게 하는 코드
    $(document).ready(function() {
        var floatPosition_mode = parseInt($("#mode_menu").css('top'));
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
        var newPosition_mode = scrollTop + floatPosition_mode + "px";
	$("#mode_menu").stop().animate({
	"top" :  newPosition_mode
        }, 1000);
	}).scroll();
    });
    //download code
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
      }
      document.getElementById("dwn-btn").addEventListener("click", function(){
        var text = document.getElementById("text-val").innerHTML;
        var date = new Date().toLocaleString();
        var title = document.getElementById("title").innerText;
        var subtitle = document.getElementById("subtitle").innerText;
        var filename = `${title}_${subtitle}_${date}.html`;
    
        download(filename, text);
      }, false);
    },
    props:['isEditing', 'mainText', 'ids', 'title', 'subtitle', 'modifying','idp'],
    data() {
        return {
            editing: false,
            file: [],
            data:'',
        }
    },
    methods: {
        clickCommunity(){
        if(this.editing == true){
          alert('수정한 내용이 저장되지 않습니다.');
          this.editing = !this.editing
          this.$emit('changeEdit', this.editing);
        }
        this.$router.push('/community');
      },
      clickHistory(){
        if(this.editing){
          alert('수정한 내용이 저장되지 않습니다.');
          this.editing = !this.editing
          this.$emit('changeEdit', this.editing);
        }
        this.$router.push(`/${this.idp}/${this.ids}/historyPage`);
      },
      clickSubmit(){
        EventBus.$emit('submit');       
        this.editing = !this.editing
        this.$emit('changeEdit', this.editing);
      },
      clickEdit(){
          axios.post(`http://localhost:3000/api/project/${this.idp}/pressModifyButton/${this.ids}`, {tmp:''},
          {
            headers: {
              'token': localStorage.getItem('access_token')
            }
          })
          .then((res) => {
            if(res.data =='failed'){
              alert('다른 사람이 수정중인 글입니다.')
            }
            else{
              this.editing = !this.editing
              this.$emit('changeEdit', this.editing);
            }
            console.log(res);
          })
          .catch(function (error) {
            console.log(error.response);
          });
      },
      cancelEdit(){
        this.editing = !this.editing
        this.$emit('changeEdit', this.editing);
      },
      importFile(e) {
        this.file = e.target.files[0];
        if (!this.file) {this.data = "No File Chosen"}
        var reader = new FileReader();
        reader.readAsText(this.file);
        reader.onload = () => {
          this.data = reader.result;
          this.editing = !this.editing;
          this.$emit('uploadFile',this.data);
        }
      },
      onClickFileUpload() {
        this.$refs.fileInput.click();
      },
    }, 
}
</script>