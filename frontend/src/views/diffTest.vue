<template>
  <div>
    <v-badge
        color="purple"
        content="3"
        overlap
      >
        <v-btn slot="badge"
               flat
               icon
               dark
               small

               @click="togglePopover">
3
        </v-btn>
      </v-badge>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    togglePopover() {
      alert('click action');
    }
  }
}
</script>
