<template>
    <v-app>
    <v-simple-table height="720px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            제목
          </th>
          <th class="text-left">
            한줄소개
          </th>
          <th class="text-left">
            팀이름
          </th>
          <th class="text-left">
            좋아요/구독 수
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in books"
          :key="item.title"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.intro }}</td>
          <td>{{ item.team}}</td>
          <td>
            <v-icon>mdi-heart</v-icon>
            {{ item.like }}
            <v-icon>mdi-bookmark</v-icon>
            {{ item.subscribe }}
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-app>
</template>

  <script>
  export default {
      name: 'Liked',

    data() {
      return{
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
        {
          title: '제목4',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목5',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목6',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목7',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        {
          title: '제목8',
          intro:'한줄소개한줄소개한줄소개',
          team:'팀이름',
          like:'142',
          subscribe:'63',
        },
        ],
      }

    },
  }
</script>