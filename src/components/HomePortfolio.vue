<template>
  <div
    id="portfolio-section"
    class="portfolio-section"
  >
    <HomePortfolioSlider
      ref="homePortfolioSlider"
      :tab="tab"
    />
    <div class="slider-tabs">
      <a
        id="apps-tab"
        ref="appsTab"
        href="#portfolio-section"
        @click="selectApps"
      >APPS</a>
      <p>//</p>
      <a
        id="games-tab"
        ref="gamesTab"
        href="#portfolio-section"
        @click="selectGames"
      >GAMES</a>
      <p>//</p>
      <a
        id="renderings-tab"
        ref="renderingsTab"
        href="#portfolio-section"
        @click="selectRenderings"
      >3D</a>
    </div>
  </div>
</template>

<script>
import HomePortfolioSlider from "./HomePortfolioSlider.vue";

export default {
  name: "HomePortfolio",
  components: {
    HomePortfolioSlider
  },
  props: {
    tab: {
      type: String,
      required: true
    }
  },
  methods: {
    selectGames() {
      this.$emit("select-games");
    },
    selectApps() {
      this.$emit("select-apps");
    },
    selectRenderings() {
      this.$emit("select-renderings");
    }
  }
};
</script>

<style>
.portfolio-section {
  background: url("https://www.aarigato.de/assets/images/background.png");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-tabs {
  display: flex;
  flex-direction: row;
}

.slider-tabs a,
.slider-tabs p {
  text-decoration: none;
  color: white;
  margin: 0 1em;
}

#apps-tab {
  color: white;
}

#games-tab {
  color: grey;
}

#renderings-tab {
  color: grey;
}
</style>
