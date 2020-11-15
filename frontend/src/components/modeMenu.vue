<template>
    <v-card id="mode_menu" style="top:50px;" max-width="127">

        <v-list
          dense
          rounded
        >
        <v-list-item-group active-class="brown--text">
          <v-list-item
          :disabled="editing"
          @click="clickEdit"
          link
          >
            <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-pencil</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">EDIT</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickHistory" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-history</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">HISTORY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item @click="clickCommunity" link>
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-forum</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">COMMUNITY</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          :disabled="!editing"
          @click="clickSubmit({after, commit_comment, time:new Date()})"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon>mdi-check-circle</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">SUBMIT</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
        </v-list>

            </v-card>
</template>
<script>
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
        }, 500);
	}).scroll();
    });
    },
    props:['isEditing', 'after', 'commit_comment', 'subId'],
    data() {
        return {
            editing: false,
            token: localStorage.getItem('access_token')
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
        this.$router.push(`/${this.subId}/historyPage`);
      },
      clickSubmit(submitObj){
        console.log(submitObj)
        axios.post(`http://localhost:3000/api/project/1/modify/basicTool/${this.subId}`, submitObj,
          {
            headers: {
              'token': this.token
            }
          })
        .then((res) => {
          this.project = res.data;
          console.log(res);
        })
        .catch(function (error) {
          console.log(error.config);
        });
        this.editing = !this.editing
        this.$emit('changeEdit', this.editing);
      },
      clickEdit(){
        if(!this.editing){
          this.editing = !this.editing
          this.$emit('changeEdit', this.editing);
        }
      },
    },
    
}
</script>