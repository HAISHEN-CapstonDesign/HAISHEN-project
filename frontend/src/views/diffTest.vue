<template>
<div id="app">  
  <button v-on:click="addItem()">Add Item</button>
  <div id="container" style="max-height:200px; overflow-y: auto;">
    <ul>
      <li v-for="(item,i) in items" :key="i">{{ item }}</li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      items: []
    }
  }, 
  methods: {
  addItem: function() {
  this.items.push("Item #"+this.items.length);
      this.scrollToEnd();
    },
  scrollToEnd: function() {    	
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },
  }
}
</script>