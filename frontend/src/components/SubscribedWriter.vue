<template>
<v-app>

  <v-simple-table height="720px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-cneter">
            구독한 작가들
          </th>
          <th class="text-left">
          </th>
          <th class="text-left">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in recent"
          :key="item.title"
        >
          <td>
            <v-avatar>
              <v-img
                :alt="`${item.title} avatar`"
                :src="item.avatar"
              ></v-img>
            </v-avatar>
          </td>
          <td>{{ item.title }}</td>
          <td>
            <v-chip v-for="tags in item.tag" :key="tags" v-text="tags"></v-chip>
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</v-app>
</template>

<script>
  export default {
      name: 'SubscribedWriter',
   data() {
     return{
      recent: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Jason Oner',
          tag: ['건강','요리']
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
          tag: ['건강','운동']
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
          tag: ['건강']
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Ali Connors',
          tag: ['요리']
        },
      ],

     }
    },
  }
</script>