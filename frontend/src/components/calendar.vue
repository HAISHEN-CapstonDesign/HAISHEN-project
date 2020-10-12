<template>
    <v-app>
      <v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      </v-sheet>
      <v-sheet height="500">
        <v-calendar
        ref="calendar"
        :now="today"
        :value="today"
        v-model="deadline"
        color="primary"
        >
        </v-calendar>
      </v-sheet>
    </v-app>
</template>

<script>
export default {
    name: 'calendar',
    data: () => ({
      today: '2020-10-11',
      deadline: '',
    }),
    
}
</script>