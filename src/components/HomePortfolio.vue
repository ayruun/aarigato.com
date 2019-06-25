<template>
  <div class="portfolio-section" id="portfolio-section">
    <HomePortfolioSlider ref="homePortfolioSlider" :tab="this.tab"/>
    <div class="slider-tabs">
      <a
        href="#portfolio-section"
        id="apps-tab"
        ref="appsTab"
        @click="selectApps"
      >APPS</a>
      <p>//</p>
      <a href="#portfolio-section" id="games-tab" ref="gamesTab" @click="selectGames">GAMES</a>
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
    }
  }
};
</script>

<style>
.portfolio-section {
  background: url("../assets/images/background.png");
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
</style>
