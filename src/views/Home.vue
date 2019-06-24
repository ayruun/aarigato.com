<template>
  <div>
    <UHeader
      @select-portfolio="selectPortfolio"
      @select-games="selectGames"
      @select-contact="selectContact"
      ref="headerSection"
    />
    <HomeStage @scroll-down="scrollToMiddle"/>
    <HomeService
      @select-portfolio="selectPortfolio"
      @select-games="selectGames"
      ref="HomeService"
    />
    <HomePortfolio
      @select-portfolio="selectPortfolio"
      @select-games="selectGames"
      ref="portfolioSection"
      :tab="selectedTab"
    />
    <HomeContact/>
  </div>
</template>

<script>
import UHeader from "../components/UHeader.vue";
import HomeStage from "../components/HomeStage.vue";
import HomeService from "../components/HomeService.vue";
import HomePortfolio from "../components/HomePortfolio.vue";
import HomeContact from "../components/HomeContact.vue";

export default {
  name: "home",
  components: {
    UHeader,
    HomeStage,
    HomeService,
    HomePortfolio,
    HomeContact,
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
        this.$refs.portfolioSection.$refs.portfolioTab.style.color = "white";
        this.$refs.portfolioSection.$refs.gamesTab.style.color = "grey";
      }
      if (this.$refs.headerSection.isActive) {
        this.$refs.headerSection.isActive = false;
      }
    },
    selectGames() {
      if (this.selectedTab === "portfolio") {
        this.selectedTab = "games";
        this.$refs.portfolioSection.$refs.gamesTab.style.color = "white";
        this.$refs.portfolioSection.$refs.portfolioTab.style.color = "grey";
      }
      if (this.$refs.headerSection.isActive) {
        this.$refs.headerSection.isActive = false;
      }
    },
    selectContact() {
      if (this.$refs.headerSection.isActive) {
        this.$refs.headerSection.isActive = false;
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
  background-color: var(--accent);
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
}

.button:hover {
  background-color: var(--accent-hover);
}

.button a {
  text-decoration: none;
  color: white;
}
</style>
