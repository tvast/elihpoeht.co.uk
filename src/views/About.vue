<template>
  <div class="about">
    <!-- <canvas id="c" ref="myCanvas"></canvas> -->
    <agile :initial-slide="3">
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 588px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3450742190/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a
            href="http://elihpoehtrecord.bandcamp.com/album/without-words"
          >Without words by ELIHPOEHT records</a>
        </iframe>
      </div>
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 588px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=1066367559/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a href="http://elihpoehtrecord.bandcamp.com/album/power">Power by ELIHPOEHT records</a>
        </iframe>
      </div>
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 720px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=2896597964/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a
            href="http://elihpoehtrecord.bandcamp.com/album/relovution"
          >Relovution by ELIHPOEHT records</a>
        </iframe>
      </div>
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 522px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=1465202985/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a
            href="http://elihpoehtrecord.bandcamp.com/album/sad-morning"
          >Sad morning by ELIHPOEHT records</a>
        </iframe>
      </div>
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 654px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=4292621044/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a href="http://elihpoehtrecord.bandcamp.com/album/memories">Memories by ELIHPOEHT records</a>
        </iframe>
      </div>
      <div class="slide">
        <iframe
          style="border: 0; width: 350px; height: 786px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3263780869/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/"
          seamless
        >
          <a
            href="http://elihpoehtrecord.bandcamp.com/album/samples-from-the-sun"
          >Samples from the sun by ELIHPOEHT records</a>
        </iframe>
      </div>
      <template slot="prevButton">
        <i class="fas fa-chevron-left"></i>
      </template>
      <template slot="nextButton">
        <i class="fas fa-chevron-right"></i>
      </template>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  data() {
    return {
      vueCanvas: null
    };
  },
  components: {
    agile: VueAgile
  },
  methods: {},
  mounted() {}
};
</script>

<style >
#app {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
}

.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 800px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide h3 {
  font-size: 32px;
  font-weight: 300;
}
</style>
