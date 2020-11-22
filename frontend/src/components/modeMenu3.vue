<template>
    <v-card id="mode_menu" style="top:100px; position: absolute;" max-width="127">

        <v-list
          dense
          rounded
        >
        <v-list-item-group active-class="brown--text" v-model="clicked">
        <v-list-item
          @click="clickMain"
          link
          >
          <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-book-open-variant</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">MAIN PAGE</v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-list-item
          @click="clickWriter"
          link
          >
            <v-list-item-content>
            <v-list-item-title class="text-center">
            <v-icon small>mdi-account-edit</v-icon>
            </v-list-item-title>
            <v-list-item-subtitle class="text-center">WRITERS</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :disabled="clicked==2" @click="clickHistory" link>
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
          </v-list-item-group>
        </v-list>

            </v-card>
</template>
<script>
import $ from 'jquery';
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
    },
    props:['clicked','ids', 'idp'],
    data() {
        return {
            editing: false,
        }
    },
    methods: {
        clickCommunity(){
        this.$router.push('/community');
      },
      clickHistory(){
        this.$router.push(`/${this.idp}/${this.ids}/historyPage`);
      },
      clickMain(){
        //나중에 경로 수정
        this.$router.push(`/${this.idp}/basicCollaboTool/${this.ids}`);
      },
      clickWriter(){
        this.$router.push(`/${this.idp}/writerList`);
      },
    },
    
}
</script>