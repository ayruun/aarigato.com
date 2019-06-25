<template>
  <div class="portfolio-project">
    <iframe
      class="iframe"
      height="265"
      style="width: 100%;"
      scrolling="no"
      :title="codePens[index].title"
      :src="codePens[index].src"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a :href="codePens[index].link" target="_blank">{{ codePens[index].title }}</a> by aarigato
      (
      <a href="https://codepen.io/ayruun">@ayruun</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </div>
</template>

<script>
import {codePens} from "../assets/portfolio-slider-content.json";

export default {
  name: "PortfolioProject",
  props: {
    project: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      codePens,
      index: 0
    }
  },
  created: function() {
    this.index = parseInt(this.project); 
  }
};
</script>

<style>
.portfolio-project {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.iframe {
  margin-top: 80px;
  height: 100%;
}
</style>
