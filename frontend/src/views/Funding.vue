<template>
    <v-app>
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
          <p style="font-size:40px">제목</p>

        </v-col>
        </v-row>
      </v-img>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="8" align="center">
                    <v-card>
                        <v-card-title>소개 내용</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="8" align="center">
                    <v-text-field
                    label="후원 금액"
                    suffix="point"
                    v-model="fundingMoney"
                    type="number"
                    style="width:50%"
                    ></v-text-field>
                    <v-btn @click="dialogPT()">test</v-btn>
                </v-col>
            </v-row>
        </v-container>


<!-- dialog area point have-->
      <v-dialog
          v-model="dialog"
          persistent
          max-width="500"
        >
        <v-card>
          <v-card-title class="headline">
           서포터로 후원하시겠습니까?
          </v-card-title>
          <v-card-text>포인트가 차감됩니다</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
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

    </v-app>

    
</template>
<script>

export default {
    data() {
        return {
            fundingMoney:0,
            dialog: false,
             overlay: false,
             point:0
        }
    },methods:{
        getFee_minuspoint(){
            //여기에 포인트 차감 짜야함
            //text field 값 가져와서 this.point에 넣기만하면돼
            this.point = localStorage.getItem('point') //여기에 빼기 text filed값
            localStorage.setItem('point',this.point)
            this.dialog = false
        },
        dialogPT(){
            this.dialog = true
            
        }
    }
}
</script>