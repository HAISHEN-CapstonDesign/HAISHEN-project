<template>
    <v-card id="contents" style="top:30px; max-width: 150">
            <v-navigation-drawer
            floating
            permanent
            >
        <v-list
          dense
          rounded
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
          v-for="index in indexList"
          :key="index"
          @click="clickSub(index.indexId)"
          link
          >
            <v-list-item-content>
              <v-list-item-title>{{index.indexId}}. {{ index.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
	</v-card>
</template>
<script>
import $ from 'jquery';
export default {

    mounted(){
    //list가 스크롤을 따라오게 하는 코드
    $(document).ready(function() {
        var floatPosition = parseInt($("#contents").css('top'));
	$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
            var newPosition = scrollTop + floatPosition + "px";
	$("#contents").stop().animate({
	"top" : newPosition
            }, 1000);
	}).scroll();
    });
    },
    props: ['title', 'selectIndex', 'indexList'],
    created() {
		// this.little_titles=this.$store.state.subtitle

    },
    data() {
        return {
			//sample
			// subtitleList: this.indexList,
            little_titles: [],
        }
    },
    methods: {
      clickSub(idx){
        this.$emit('selectIndex', idx)
      }
    },
}
</script>