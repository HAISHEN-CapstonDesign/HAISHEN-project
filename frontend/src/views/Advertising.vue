<template>
    <v-container fill-height style="max-width:720px;">
        <v-layout align-center row wrap class="mt-15">
            <video id="advertise" width="720" height="440" controls autoplay muted @ended="onEnd()">
                <source src="../assets/ad01.mp4" type ="video/mp4">
                이 브라우저는 html video 태그를 지원하지 않습니다
            </video>
        </v-layout>
    </v-container>
</template>

<script>
//import router from '../routes/page_index.js'

export default {
    data: () => ({
        videoElement: null,
  }),
  methods: {
   onEnd: function () {
      console.log('video ended')
      alert('광고 시청이 완료되었습니다. 컨텐츠를 열람합니다')
      //router.push({ name: "ContentsReadingPage" })
      this.$emit('endAd', false);
    }  
  }
}
</script>