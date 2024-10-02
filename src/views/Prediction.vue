<script setup>

import router from '@/router';

</script>

<template>
<div id ="main">
  <div class="comicSpeechBubble">
    <div class="comicSpeechBubbleContent">
        your number, could it be 8? <br>
        certainty: 96.8%
    </div>
    <div class="comicSpeechBubbleTail"></div>
  </div>
</div>
</template>


<style scoped>
.comicSpeechBubble {
  position: relative;
  background: #f0f8ff;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 2vw 4vw;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  color: #333;
  font-size: 2vw;
  left:10%;
  bottom:10%;
}

.comicSpeechBubbleContent {
  font-size: 1em;

}

.comicSpeechBubbleTail {
  position: absolute;
  top: 25%;
  left: -1vw;
  width: 0;
  height: 0;
  border-top: 1vh solid transparent;
  border-bottom: 1vh solid transparent;
  border-right: 1.1vw solid #f0f8ff;
}

</style>

