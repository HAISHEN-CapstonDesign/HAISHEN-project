<template>
  <div class="editor">
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
          :class="{
            'is-active': isActive.customstyle({ level: 'body-black' }),
          }"
          @click="commands.customstyle({ level: 'body-black' })"
        >
          <v-icon color="black">mdi-format-color-text</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.customstyle({ level: 'body-blue' }) }"
          @click="commands.customstyle({ level: 'body-blue' })"
        >
          <v-icon color="blue">mdi-format-color-text</v-icon>
        </button>
        </v-col>
        <v-col md="1">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.customstyle({ level: 'body-red' }) }"
          @click="commands.customstyle({ level: 'body-red' })"
        >
          <v-icon color="red">mdi-format-color-text</v-icon>
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
    
    <pre>{{editor.content}}</pre>
  </div>
</template>

<script>
import EventBus from '../EventBus.js';
import { Editor, EditorMenuBar, EditorContent } from 'tiptap';
import CustomStyle from "./CustomStyle";
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
} from 'tiptap-extensions'
export default {
  name: 'editor',
  components: {
    EditorContent,
    EditorMenuBar,
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
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new CustomStyle()
        ],
        content: '',
        onUpdate: ({ getHTML }) => {
          this.contE = getHTML();
          console.log(this.contE);
        },
      }),
      contE:this.mainText,
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  props:['mainText'],
  created() {
    EventBus.$on('submit',()=>{
      this.$emit('event-data', this.contE);
    })
  },
  mounted() {
    this.setContent()
  },
  methods: {
    setContent() {
      this.editor.setContent(this.contE);
    }
  },
}
</script>
