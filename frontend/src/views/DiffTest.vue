<template>
<v-container>
    <v-col>
        <v-card height="100"></v-card>
        
        <v-textarea
            solo
            class="mt-20"
            background-color="blue lighten-2"
            v-model="blue"
            height="200"
            full-width="100"
        ></v-textarea>
        <v-btn @click="blue_click">blue submit</v-btn>
            
        <v-textarea
            solo
            background-color="grey lighten-2"
            color="cyan"
            class="mt-10"
            full-width="100"
            height="200"
            v-model="grey"
        ></v-textarea>
        <v-btn @click="grey_click">grey submit</v-btn>
    </v-col>

</v-container>




</template>

<script>
import axios from 'axios'

export default {
    name: 'diffTest',

  data() {
    return {
        blue:'',
        grey:''
    }
  },

  methods:{
      blue_click(){
          alert(this.blue)
          axios.post('/api/difftest/blue',{
              headers:{

              },
              params:{
                 before: this.blue 
              }
          })
      },

      grey_click(){
          alert(this.grey)
          axios.post('/api/difftest/grey',{
              params:{
                  after:this.grey
              }
          })
      }
  }


}
</script>