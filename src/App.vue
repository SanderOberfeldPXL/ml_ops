<script setup>
import {RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
<Navbar />
<RouterView />
<div id="app">

</div>
</template>




<style scoped>
#main {
  position: absolute;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  pointer-events: none;
}

.uploadimage {
  width: 40%;
  height: 90%;
}
:root {
 --color1:rgb(247, 70, 123);
 --color2:#CA4d96;
 --color3:#9257a0;
 --color4:#5d5995;
 --color5:rgb(56, 83, 121);
 --color6:rgb(47, 72, 88);
 overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Event Horizon", sans-serif;
}
#app {
  overflow: hidden;
  z-index: -5;
  height: 100%;
  width: 100%;
  position: absolute;
  background: 
    url('src/assets/scuffed_akinator_waiting.png'),
    linear-gradient(to bottom, #add8e6, #4682b4);
  background-size: 70%,cover;
  background-position: left center,center;
  background-repeat: no-repeat;
  min-height: 100vh;
}

@media only screen and (max-width: 1200px) {
  #toplogo {
    width:200px;
  }
}
</style>

