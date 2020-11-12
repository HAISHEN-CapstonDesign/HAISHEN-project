<template>

 <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap class="mt-15">
      <v-flex xs12 >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>회원가입</v-toolbar-title>
          </v-toolbar>
            <div>
                <v-dialog @before-opened="dialogEvent('before-open')" @before-closed="dialogEvent('before-close')" @opened="dialogEvent('opened')" @closed="dialogEvent('closed')" />
            </div>     


          <div class="pa-3">
            <button class="btn" @click="showButtonsDialog">Dialog: buttons</button>

        
          </div>

                 



        </v-card>
        
      </v-flex>
      
    </v-layout>

    

  </v-container>



</template>

<script>


export default {
    data: () => {
        return {
           canBeShown: false
        }
    },
     created() {
        setInterval(() => {
            this.canBeShown = !this.canBeShown
        }, 5000)
    },
    methods:{
        showButtonsDialog() {
            console.log('함수 실행')
            this.$modal.show('dialog', {
                title: 'The standard Lorem Ipsum passage',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                buttons: [{
                        title: 'Cancel',
                        handler: () => {
                            this.$modal.hide('dialog')
                        }
                    },
                    {
                        title: 'Like',
                        default: true,
                        handler: () => {
                            alert('Like action')
                        }
                    },
                    {
                        title: 'Repost',
                        handler: () => {
                            alert('Repost action')
                        }
                    }
                ]
            })
            console.log('함수 종료')

        },
        dialogEvent(eventName) {
            console.log('Dialog event: ' + eventName)
        }
    }
}
</script>