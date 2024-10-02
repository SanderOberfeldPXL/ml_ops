<script setup>
import ImagePreview from '../components/ImagePreview.vue'
import { useImageStore } from '../stores/images';

import router from '@/router';



let ImageStore = useImageStore();
</script>

<template>
  
<div id ="main">
  <div id="imageblock">
      <div class="uploadimage">
        <ImagePreview :id="0"/>
      </div> 
  </div>
</div>
</template>


<style scoped>

#imageblock {
  position: relative;
  pointer-events: all;
  width: 16%;
  right:10%;
  top:18%;
}

.uploadimage {
  width: 80%;
  height: 80%;
}


</style>