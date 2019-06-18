<template>
  <div id="app">
    <HeaderSection @select-portfolio="selectPortfolio" @select-games="selectGames"/>
    <WelcomeSection/>
    <ServiceSection @select-portfolio="selectPortfolio" @select-games="selectGames"/>
    <PortfolioSection @select-portfolio="selectPortfolio" @select-games="selectGames" ref="portfolioSection" :tab="selectedTab"/>
    <ContactSection/>
    <FooterSection/>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import ServiceSection from "./components/ServiceSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection,
    WelcomeSection,
    ServiceSection,
    PortfolioSection,
    ContactSection,
    FooterSection
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
    },
    selectGames() {
      if (this.selectedTab === "portfolio") {
        this.selectedTab = "games";
        this.$refs.portfolioSection.$refs.gamesTab.style.color = "white";
        this.$refs.portfolioSection.$refs.portfolioTab.style.color = "grey";
      }
    }
  }
};
</script>

<style>
:root {
  --primary: #222222;
  --secondary: rgb(110, 110, 110);
  --accent: #ffca2f;
  --accent-hover: rgb(255, 217, 0);
}

/* Was genau bedeutet das / was macht es?
*,
*::before,
*::after {
    box-sizing: border-box;
} */

body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: var(--accent);
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

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
