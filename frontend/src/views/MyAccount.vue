<template>
    <v-container fill-height style="max-width:1050px;">
    <v-layout align-center row wrap class="mt-15">
    <v-row no-gutters>
        <v-col
        v-for="( item , i ) in account"
        :key="i"
        >
            <v-card
            width="150"
            height="150"
            outlined="false"
            hover="true"
            class="text-center"
            @click="$router.push('/postlist')"
            >
                <div style="position: absolute; top: 40%; width:100%">
                <h3>test</h3>
                </div>
            </v-card>
        </v-col>
    </v-row>
    </v-layout>
</v-container>
</template>
<script>
export default {
    data: () => ({
      account: [],
    }),
    methods: {
        
    }
}
</script>