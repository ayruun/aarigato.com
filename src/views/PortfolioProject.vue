<template>
  <div class="portfolio-project">
    <iframe
      class="iframe"
      height="265"
      style="width: 100%;"
      scrolling="no"
      :title="apps[index].title"
      :src="apps[index].src"
      frameborder="no"
      allowtransparency="true"
      allowfullscreen="true"
    >
      See the Pen
      <a
      :href="apps[index].link"
      target="_blank"
      >{{ apps[index].title }}</a> by aarigato
      (
      <a href="https://codepen.io/ayruun">@ayruun</a>) on
      <a href="https://codepen.io">CodePen</a>.
    </iframe>

    <div class="error">
      <i class="material-icons">report_problem</i>
      <span>Please open this page on a larger device.</span>
      <span>Bitte öffne die Seite auf einem größeren Gerät.</span>
    </div>
  </div>
</template>

<script>
import { apps } from "../assets/portfolio-slider-content.json";

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
      apps,
      index: 0
    };
  },
  created: function() {
    this.index = parseInt(this.project.match(/\d+/g).join(""));
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
  display: block;
}

.error {
  display: none;
}

@media (max-width: 655px), (max-height: 830px) {
  .iframe {
    display: none;
  }

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
}
</style>
