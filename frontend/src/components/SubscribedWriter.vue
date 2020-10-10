<template>
<v-app>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list subheader>
      <v-subheader>구독한 작가</v-subheader>
      <v-list-item
        v-for="chat in recent"
        :key="chat.title"
      >
        <v-list-item-avatar>
          <v-img
            :alt="`${chat.title} avatar`"
            :src="chat.avatar"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="chat.title"></v-list-item-title>
        </v-list-item-content>
        <!--tag 수정 -> 여러개 표시하도록 바꿔야함-->
        <v-list-item-chip>
          <v-chip v-text="chat.tag"></v-chip>
        </v-list-item-chip>
      </v-list-item>
    </v-list>
  </v-card>
  <!--
    <v-list-item >
        <v-list-item-avatar>
          <v-img
            src = 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Ali Connors</v-list-item-title>
        </v-list-item-content>

        <v-list-item-chip>
            <v-chip>수학</v-chip>
            <v-chip>과학</v-chip>
            <v-chip>IT</v-chip>
        </v-list-item-chip>
      </v-list-item>
      -->
</v-app>
</template>

<script>
  export default {
      name: 'SubscribedWriter',
   data: () => ({
     recent: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
          tag: '건강'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
          tag: '건강'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
          tag: '건강'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
          tag: '요리'
        },
      ],

    }),
  }
</script>