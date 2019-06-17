<template>
  <div class="portfolio-section" id="portfolio-section">
    <ContentSlider :tab="this.selectedTab"/>
    <div class="slider-tabs">
      <a
        href="#portfolio-section"
        id="portfolio-tab"
        ref="portfolioTab"
        @click="emitPortfolio"
      >PORTFOLIO</a>
      <p>//</p>
      <a href="#portfolio-section" id="games-tab" ref="gamesTab" @click="emitGames">GAMES</a>
    </div>
  </div>
</template>

<script>
import ContentSlider from "./ContentSlider.vue";

export default {
  name: "PortfolioSection",
  components: {
    ContentSlider
  },
  data() {
    return {
      selectedTab: "portfolio"
    };
  },
  methods: {
    selectPortfolio() {
      if (this.selectedTab === "games") {
        this.selectedTab = "portfolio";
        this.$refs.portfolioTab.style.color = "white";
        this.$refs.gamesTab.style.color = "grey";
      }
    },
    selectGames() {
      if (this.selectedTab === "portfolio") {
        this.selectedTab = "games";
        this.$refs.gamesTab.style.color = "white";
        this.$refs.portfolioTab.style.color = "grey";
      }
    },
    emitGames() {
      this.$emit("select-games");
    },
    emitPortfolio() {
        this.$emit("select-portfolio");
    }
  }
};
</script>

<style>
.portfolio-section {
  background: url(https://aarigato.de/wp-content/uploads/2019/03/background_center.png);
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

#portfolio-tab {
  color: white;
}

#games-tab {
  color: grey;
}
</style>
