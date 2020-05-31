<template>
  <div class="home">
    <video autoplay muted loop id="myVideo">
      <source src="../assets/he.mp4" type="video/mp4" />
    </video>
    <div class="content">
      <!-- <h1>Welcome</h1> -->
      <img src="../assets/elih.png" />
      <!-- Use a button to pause/play the video with JavaScript -->
      <!-- <button id="myBtn" onclick="myFunction()">Pause</button> -->
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -600;
}
</style>
