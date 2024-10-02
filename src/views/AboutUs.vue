<script setup>

</script>

<template>
  <div id="main">
      <div id="aboutusblock">
  
          <div id="title">
              <p><b>meet the team</b><br></p>
          </div>
          <div><br></div>
          <v-divider class="border-opacity-75" length="80%" inset="10%" color="#ffffff" thickness="2"></v-divider> 
          <div id="us">
              <div class="row">
                  <div class="column">
                      <div class="card">
                          <img src="../assets/placeholderpic.jpg" alt="Stijn" style="width:100%">
                          <div class="container">
                              <h2>Stijn Hilkens</h2>
                              <p class="title">father figure</p>
                              <p>im out for smokes</p>
                              <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button class="button">Contact</button></a></p>
                          </div>
                      </div>
                  </div>
  
                  <div class="column">
                      <div class="card">
                          <img src="../assets/placeholderpic.jpg" alt="Andreas" style="width:100%">
                          <div class="container">
                              <h2>Andreas Steegmens</h2>
                              <p class="title">eyecandy</p>
                              <p>Sander i swear to god change this text</p>
                              <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button class="button">Contact</button></a></p>
                          </div>
                      </div>
                  </div>
  
                  <div class="column">
                      <div class="card">  
                          <img src="../assets/placeholderpic.jpg" alt="Sander" style="width:100%">
                          <div class="container">
                              <h2>Sander Oberfeld</h2>
                              <p class="title">fuckup</p>
                              <p>if something went wrong it was probably me</p>
                              <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button class="button">Contact</button></a></p>
                          </div>
                      </div>
                  </div>
  
                  <div class="column">
                      <div class="card">  
                          <img src="../assets/placeholderpic.jpg" alt="Lucas" style="width:100%">
                          <div class="container">
                              <h2>Lucas Caubergh</h2>
                              <p class="title">outside hire</p>
                              <p>bottom text</p>
                              <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button class="button">Contact</button></a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="aboutustext">
              <p>Disclaimer</p>
              <p id="disclaimer">we is not responsible for injury or death as result of use of our products. If using this application brings up suicidal thought, please advise a licensed professional. With further use of the site you acknowledge and accept these terms.</p>
          </div>
      </div>
  </div>
  </template>
  


<style scoped>
#disclaimer {
    font-size: 12px;
}
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
#aboutusblock{
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  padding:16px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border-color: #385379;
  border-style: solid;
  pointer-events: all;  
  overflow: hidden;
  background-color:rgb(47, 72, 88,0.85);

}

#title {
    height: 5%;
    font-size: 32px;
    color:white;
    align-self: center;
}

#aboutustext {
    height: 5%;
    font-size: 20px;
    color:white;
    align-self: center; 
    text-align: center;
}

img{
    border-radius: 20px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 25%;
  margin-bottom: 16px;
  padding: 0 8px;
  
}

@media (max-width: 768px) {
  .column {
    width: 50%; 
  }
}

@media (max-width: 480px) {
  .column {
    width: 100%;
  }
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
    background-color: rgba(56, 83, 121, 0.2);
    border-radius: 20px 20px 0 0;
  
}


.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  border-radius: 20px 20px 0 0;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>