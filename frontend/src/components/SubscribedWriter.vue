<template>
<v-app>
    <v-list-item>
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
</v-app>
</template>

<script>
  export default {
      name: 'SubscribedWriter',
   data: () => ({

    }),
  }
</script>