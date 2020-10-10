<template>
    <v-app>
        <v-list-item >
            <v-list-item-content>
            <v-list-item-title>제목</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
            <v-list-item-subtitle>한줄소개한줄소개한줄소개한줄소개</v-list-item-subtitle>
            </v-list-item-content>
        <v-list-item-content>
          <v-list-item-subtitle> 집필 팀 이름 </v-list-item-subtitle>
        </v-list-item-content>
        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-notebook-check
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
        
    </v-app>
</template>

  <script>
  export default {
      name: 'Liked',
    data: () => ({
     
    }),
  }
</script>