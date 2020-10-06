<template>
    <v-card
        :loading="loading"
        class="mx-auto my-12 px-3"
        max-width="280"
        tile
    >
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title class="justify-center">Book Theme</v-card-title>
    <v-card-subtitle>
      주제 간단하게 설명하기 주제 간단하게 설명하기 주제 간단하게 설명하기 주제 간단하게 설명하기 
    </v-card-subtitle>

    <v-divider ></v-divider>

    <v-card-title class="justify-center">모집인원</v-card-title>
    <v-card-subtitle>
        <div><h2 class="text-center">1 / 4</h2></div>
    </v-card-subtitle>
         <!--  v-model="selection" -->
         <!-- active-class="deep-purple accent-4 white--text" -->
    <v-col align-content="center" >
        <div class="text-center">
            <v-chip>김이박</v-chip>
            <v-chip>모집중</v-chip>
        </div>
        <div class="text-center">
            <v-chip>모집중</v-chip>
            <v-chip>모집중</v-chip>
        </div>
    </v-col>
    <v-row align="center" class="align-center">
        <div class="text-center">
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
            펀딩하기
            </v-btn>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
            프로젝트 보러가기
            </v-btn>
        </div>
    </v-row>  
    

  </v-card>
</template>



<script>
export default {
    name: 'Recruitment', //이 이름으로 export하고 딴데서 import해서 쓰면됨
    // 이 안에 data, method 등을 쓰면됨
    data : () => ({
        loading: false,
        // selection:2,
    })

}
</script>