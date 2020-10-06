<template>
    <v-app>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
    tile
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      제목
    </v-card-title>

    <v-card-text>
      간단한 소개 간단한 소개 간단한 소개 간단한 소개 간단한 소개
    </v-card-text>

    <v-card-subtitle>
      작가 목록
    </v-card-subtitle>
    <v-chip>김ㅇㅇ</v-chip>
    <v-chip>이ㅇㅇ</v-chip>
    <v-chip>박ㅇㅇ</v-chip>
    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        진행률
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          목차1 - 20% <br>
          목차2 - 25% <br>
          목차3 - 17% <br>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-app>
</template>

<script>
  export default {
      name: 'Writing',

    data: () => ({
      show: false,
    }),
  }
</script>