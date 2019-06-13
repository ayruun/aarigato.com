<template>
  <div id="app">
    <HeaderSection/>
    <WelcomeSection/>
    <ServiceSection/>
    <PortfolioSection/>
    <ContactSection/>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import ServiceSection from "./components/ServiceSection.vue";
import PortfolioSection from "./components/PortfolioSection.vue";
import ContactSection from "./components/ContactSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection,
    WelcomeSection,
    ServiceSection,
    PortfolioSection,
    ContactSection
  }
};
</script>

<style>
:root {
  --primary: #222222;
  --secondary: rgb(189, 189, 189);
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
