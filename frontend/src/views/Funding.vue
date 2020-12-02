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
          <h2>제목</h2>

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
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>

export default {
    data() {
        return {
            fundingMoney:0,
        }
    },
}
</script>