<script setup>
import { ref } from "vue";
import { useImageStore } from '../stores/images';

const imageStore = useImageStore();
const props = defineProps(['id']);
let image = ref();

async function onFileChange(e) {
  // Save the file into image
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  image.value = URL.createObjectURL(files[0]); // Corrected reference to use image.value

  // Change store image
  imageStore.changeImage(files[0], props.id);
}

function removeImage() {
  image.value = null; // Corrected reference to use image.value
  // Set image in store to null
  imageStore.changeImage(null, props.id);
}
</script>

<template>
<div id="app">
  <div>
    <div v-if="!image">
      <div class="imageblok">
        <img src="../assets/empty_number_placeholder.png" />
        <input title=" " class="inputveld" :id="'test1'" type="file" @change="onFileChange($event)">
      </div>
      <h2>Select an image</h2>
    </div>
  </div>
  <div v-if="image">
    <div class="imageblok">
      <img :src="image" />
      <input title=" " class="inputveld" :id="'test'" type="file" @change="onFileChange($event)">
    </div>
    <v-btn id="removeButton" @click="removeImage()" class="predictButton" rounded>
      Remove image
    </v-btn>
    <v-btn to="/Prediction" rounded="20" class="predictButton">Guess</v-btn>
  </div>
</div>
</template>

<style scoped>
h2 {
  font-size: 2vw;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
#invisible {
  visibility: hidden;
}
#removeButton {
  font-size: 1vw;
  color: white; 
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-bottom: 10px; 
}
.imageblok {
  position: relative;
}
input[type='file'] {
  opacity: 0;
  position: absolute;
  height: 100%;
  aspect-ratio: 1;
  top: 0;
}
.inputveld {
  position: relative;
  left: 15%;
}

#app {
  text-align: center;
}
img {
  width: 70%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}

.placeholder:hover {
  background: #E0E0E0;
}

.file-input {
  display: none;
}

.v-card {
  height: 100%;
}

.v-card-text {
  background-color: #385379;
  height: 100%;
}


.predictButton {
  font-size: 1vw; 
  color: white; 
  background-color: rgba(0, 0, 0, 0.3);
  border: none; 
  margin-bottom: 10px; 
}

.predictButton:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
