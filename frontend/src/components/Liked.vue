<template>
    <v-app>
      <v-list
      two-line
      subheader
    >
      <v-subheader>좋아요 한 글</v-subheader>
      <v-divider></v-divider>
      <v-list-item
        v-for="chat in books"
        :key="chat.title">
        <v-list-item-content>
          <v-list-item-title v-text="chat.title"></v-list-item-title>
          <v-list-item-subtitle v-text="chat.intro"></v-list-item-subtitle>
          <v-list-item-subtitle v-text="chat.team"></v-list-item-subtitle>
        </v-list-item-content>
        <div>
          <v-list-item-icon class="mr-1">
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
            <v-list-item-text v-text="chat.like"></v-list-item-text>
            <v-list-item-icon class="mr-1">
              <v-icon>mdi-bookmark</v-icon>
            </v-list-item-icon>
              <v-list-item-text v-text="chat.subscribe"></v-list-item-text>
        </div>
      </v-list-item>
    </v-list>
      
        
    </v-app>
</template>

  <script>
  export default {
      name: 'Liked',
    data: () => ({
      books: [
        {
          title: '제목1',
          intro: '한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'123',
          subscribe:'45',
        },
        {
          title: '제목2',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'243',
          subscribe:'79',
        },
        {
          title: '제목3',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
      ],
    }),
  }
</script>