<template>
    <v-card id="contents" style="top:30px; max-width: 200">
            <v-navigation-drawer
            floating
            permanent
            >
        <v-list
          dense
          rounded
          v-model="little_title"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background: little_title.selected ? 'red' : "
          v-for="little_title in little_titles"
          :key="little_title"
          :id="little_title.idx"
          @click="clickSub(little_title.idx)"
          link
          >
            <v-list-item-content>
              <v-list-item-title>{{little_title.idx}}. {{ little_title.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- <v-btn @click="test()">test</v-btn> -->
      </v-navigation-drawer>
      
    </v-card>
</template>
<script>
import $ from 'jquery';
import axios from 'axios';
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
    props: ['title'],
    created() {
      this.idp = this.$route.params.idp;
      this.ids = this.$route.params.ids;
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
              this.little_titles.push({idx:res.data[i].id, text:res.data[i].title, selected:false})
            }
            console.log("@@@@")
            console.log( this.little_titles[0])
            // this.little_titles=[{idx:1, text:"ddd"}]
            // this.res.data.forEach(element => {
            //     // this.little_titles.push({idx:element.id, text:element.title})
            //     console.log(element)
            // });
          
          
        })
        .catch((err) => {
            console.log(err)
            alert("에러가 발생했습니다. 다시 시도해주세요")
        });

    },
    data() {
        return {
            //sample
            little_titles: [],
            // project_id: 1,
            idp:0,
            ids:0,
        }
    },
    methods: {
      clickSub(idx){
        this.selected_idx=idx,
        this.$set(this.little_titles[idx], "selected", true)
        console.log(this.little_titles[idx])
        this.$emit('changeSubtitle', idx)
      },

      // test(){
        
      // axios
      //   .post('http://localhost:3000/api/getindex',
      //       { id: 1 }, 
      //       { headers: {'token':localStorage.getItem('access_token') }})
      //   .then(res => {
      //       console.log("bi")
      //       console.log(res.data);
      //       // this.res.data.forEach(element => {
      //       //     this.little_titles.push({idx:element.id, text:element.title})
      //       // });
          
          
      //   })
      //   .catch((err) => {
      //       console.log(err)
      //       alert("에러가 발생했습니다. 다시 시도해주세요")
      //   });
      // }
    },
}
</script>