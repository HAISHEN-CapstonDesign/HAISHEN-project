<template>
  <div class="editor">
    <Modal ref="ytmodal" @onConfirm="addCommand" />
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <v-row cols="12" justify="center">
          <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon>mdi-format-bold</v-icon>
        </button>
          </v-col>
          <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
            <v-icon>mdi-format-italic</v-icon>
        </button>
          </v-col>
          <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <v-icon>mdi-format-strikethrough</v-icon>
        </button>
          </v-col>
          <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <v-icon>mdi-format-underline</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <v-icon>mdi-code-tags</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <v-icon>mdi-format-pilcrow</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <v-icon>mdi-format-header-1</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <v-icon>mdi-format-header-2</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <v-icon>mdi-format-header-3</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          @click="openModal(commands.image)"
        >
          <v-icon>mdi-image</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <v-icon>mdi-format-list-bulleted</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <v-icon>mdi-format-list-numbered</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <v-icon>mdi-format-quote-close</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <v-icon>mdi-code-tags</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <v-icon>mdi-minus</v-icon>
        </button>
        </v-col>
        <v-col md="1">
          <button
          class="menubar__button"
          @click="commands.undo"
        >
          <v-icon>mdi-undo</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <v-icon>mdi-redo</v-icon>
        </button>
        </v-col>
        </v-row>
        
      </div>
    </editor-menu-bar>
    <v-divider></v-divider>
    <br>
    <editor-content class="editor__content" :editor="editor" v-model="content"/>
  </div>
</template>

<script>
import EventBus from '../EventBus.js';
import { Editor, EditorMenuBar, EditorContent } from 'tiptap';
import Modal from "./Modal";
//import EditorContent from "../components/editorContent.js";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
} from 'tiptap-extensions'
export default {
  name: 'editor',
  components: {
    EditorContent,
    EditorMenuBar,
    Modal,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Image(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: '',
        onUpdate: ({ getHTML }) => {
          this.contE = getHTML();
          console.log(this.contE);
        },
      }),
      contE:this.mainText,
      test:'',
      imgFile: null,
      files:[],
    }
  },
  beforeDestroy() {
    this.editor.destroy()
    EventBus.$off('submit');
  },
  props:['mainText'],
  created() {
    EventBus.$on('submit',()=>{
      this.$emit('event-data', this.contE, this.files);
    //  this.$emit('imageFile', this.files);
    })
  },
  mounted() {
    this.setContent()
  },
  methods: {
    setContent() {
      this.editor.setContent(this.contE);
    },
    openModal(command) {
      this.$refs.ytmodal.showModal(command);
     // this.$emit('imageFile',imgfile)
    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
        this.imgFile = data.data.file;
        this.files.push(this.imgFile);
      }
    },
  },
}
</script>
<style>
.editor__content img {
  width: 100%;
}
.content_div img{
  width: 100%;
}
</style>
