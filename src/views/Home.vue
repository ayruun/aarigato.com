<template>
  <div>
    <HomeStage @scroll-down="scrollToMiddle"/>
    <HomeService
      @select-apps="selectApps"
      @select-games="selectGames"
      ref="HomeService"
    />
    <HomePortfolio
      @select-apps="selectApps"
      @select-games="selectGames"
      ref="portfolioSection"
      :tab="selectedTab"
    />
    <HomeContact/>
    <HomeAbout/>
  </div>
</template>

<script>
import HomeStage from "../components/HomeStage.vue";
import HomeService from "../components/HomeService.vue";
import HomePortfolio from "../components/HomePortfolio.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomeContact from "../components/HomeContact.vue";

export default {
  name: "Home",
  components: {
    HomeStage,
    HomeService,
    HomePortfolio,
    HomeContact,
    HomeAbout
  },
  data() {
    return {
      selectedTab: "apps"
    };
  },
  methods: {
    selectApps() {
       if (this.selectedTab === "games") {
        this.$refs.portfolioSection.$refs.homePortfolioSlider.slideCount = 0;
        this.$refs.portfolioSection.$refs.homePortfolioSlider.$refs.ul.style.left = 0;
        this.selectedTab = "apps";
        this.$refs.portfolioSection.$refs.appsTab.style.color = "white";
        this.$refs.portfolioSection.$refs.gamesTab.style.color = "grey";
      }
    },
    selectGames() {
      if (this.selectedTab === "apps") {
        this.$refs.portfolioSection.$refs.homePortfolioSlider.slideCount = 0;
        this.$refs.portfolioSection.$refs.homePortfolioSlider.$refs.ul.style.left = 0;
        this.selectedTab = "games";
        this.$refs.portfolioSection.$refs.gamesTab.style.color = "white";
        this.$refs.portfolioSection.$refs.appsTab.style.color = "grey";
      }
    },
    scrollToMiddle() {
      this.$refs.HomeService.$refs.service.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
    }
  }
};
</script>

<style>
.button {
  text-transform: uppercase;
  color: white;
  background-color: var(--accent);
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
}

.button:hover {
  background-color: var(--accent-hover);
  cursor: pointer;
}
</style>
