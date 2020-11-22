<template>
  <div class="editor">
    <Modal ref="ytmodal" @onConfirm="addCommand" />
    <div class="warning">
      Please note this is a demo and there isn't a real backend to process the
      image. <br />
      Once you "upload" the image, a random image from `unsplash.com` will be
      added.
    </div>

    <EditorMenuBar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          B
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          I
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <s>S</s>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          U
        </button>
        <button class="menubar__button" @click="openModal(commands.image);">
          <svg width="14" height="14" viewBox="0 0 58 58">
            <path
              d="M57 6H1a1 1 0 0 0-1 1v44c0 .6.4 1 1 1h56c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1zm-1 44H2V8h54v42z"
            />
            <path
              d="M16 28.1A5.6 5.6 0 1 0 16 17 5.6 5.6 0 0 0 16 28zm0-9.1a3.6 3.6 0 1 1 0 7.1 3.6 3.6 0 0 1 0-7.1zM7 46c.2 0 .5 0 .7-.2L24 31.4l10.3 10.3a1 1 0 1 0 1.4-1.4l-4.8-4.8 9.2-10 11.2 10.2a1 1 0 0 0 1.4-1.4l-12-11a1 1 0 0 0-1.4 0l-9.8 10.8-4.8-4.8a1 1 0 0 0-1.3 0l-17 15A1 1 0 0 0 7 46z"
            />
          </svg>
        </button>
      </div>
    </EditorMenuBar>

    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import Modal from "../components/Modal";
import { Bold, Italic, Strike, Underline, Image } from "tiptap-extensions";

export default {
  name: "editor",
  components: {
    EditorContent,
    EditorMenuBar,
    Modal,
  },
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Bold(),
          new Italic(),
          new Strike(),
          new Underline(),
          new Image()
        ],
        content: "",
        onUpdate: ({ getHTML }) => {
          let content = getHTML();
          console.log(content);
        }
      })
    };
  },
  mounted() {
    this.setContent();
  },
  beforeDestroy() {
    this.editor.destroy();
  },
  methods: {
    openModal(command) {
      this.$refs.ytmodal.showModal(command);
    },
    addCommand(data) {
      if (data.command !== null) {
        data.command(data.data);
      }
    },
    setContent() {
      this.editor.setContent(this.content);
    }
  }
};
</script>

