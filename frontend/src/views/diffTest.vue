<template>
<div>
  <v-list>
    <v-list-item
      v-click-outside="onClickOutsideStandard"
      @click="models[id].base = true"
    >
      <v-list-item-title>Default Click Outside</v-list-item-title>

      <v-list-item-action>
        <v-icon :color="models[id].base ? 'green' : 'red'">
          mdi-record
        </v-icon>
      </v-list-item-action>
    </v-list-item>

    <v-list-item
      v-click-outside="{
        handler: onClickOutsideWithConditional,
        closeConditional,
      }"
      @click="models[id].conditional = true"
    >
      <v-list-item-title>Default w/ Close Conditional</v-list-item-title>

      <v-list-item-action>
        <v-icon :color="models[id].conditional ? 'green' : 'red'">
          mdi-record
        </v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
  {{id}}
</div>
</template>

<script>
  export default {
    data: () => ({
      models: [
        {
        base: false,
        conditional: false,
      },
      {
        base: false,
        conditional: false,
      },
      {
        base: false,
        conditional: false,
      },
      ],
      id:0,
    }),
    created(){
     // this.id=this.$route.params.id;
     this.models[this.id].base=true;
     //console.log(this.id)
    },
    methods: {
      onClickOutsideStandard () {
        this.models[this.id].base = false
      },
      onClickOutsideWithConditional () {
        this.models[this.id].conditional = false
      },
      closeConditional (e) { // eslint-disable-line no-unused-vars
        return this.models[this.id].conditional
      },
    },
  }
</script>