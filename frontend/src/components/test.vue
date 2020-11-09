<template>
  <div>
      <br><br><br>
    <editor-content :editor="editor" v-model="content"/>
    <pre>{{ content }}</pre>
  </div>
</template>

<script>
import { Editor } from "tiptap";
import EditorContent from "./editorContent.js";

export default {
  components: {
    EditorContent
  },

  data: () => ({
    content: "<p>Hello</p>",
    editor: new Editor()
  }),

  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>