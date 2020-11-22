<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      persistent
      max-width="350"
    >
    <v-card>
        <v-card-title>
          이미지 업로드
        </v-card-title>
        <v-divider></v-divider>
        <v-container>
        <input type="file" @change="fileChange" id="up" ref="file" />
        <v-card-actions>
          <v-btn
          @click="insertImage"
          >
          Add Image
          </v-btn>
        <v-btn @click="show = false">Close modal</v-btn>
        </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import axios from "axios";

export default {

  data() {
    return {
      imageSrc: "",
      command: null,
      show: false,
      imgfile:null,
    };
  },
  methods: {
    showModal(command) {
      this.command = command;
      this.show = true;
    },
    fileChange(e) { // eslint-disable-line no-unused-vars
      const file = this.$refs.file.files[0]; 
      this.imgfile = file;
      const uploadUrl = `https://httpbin.org/post`;
      let formData = new FormData();
      formData.append("file", this.file);
      //this.imgfile = formData;
      axios.post(uploadUrl).then(data => { // eslint-disable-line no-unused-vars
        this.imageSrc = URL.createObjectURL(file);
      });
    },
    insertImage() {
      const data = {
        command: this.command,
        data: {
          src: this.imageSrc,
          file: this.imgfile
        }
      };
      this.$emit("onConfirm", data);
      this.closeModal();
    },

    closeModal() {
      this.show = false;
      this.imageSrc = "";
    }
  }
};
</script>