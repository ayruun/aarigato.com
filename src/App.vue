<template>
  <div id="app">
    <HeaderSection/>
    <WelcomeSection/>
    <ServiceSection/>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";
import ServiceSection from "./components/ServiceSection.vue";

export default {
  name: "app",
  components: {
    HeaderSection,
    WelcomeSection,
    ServiceSection
  }
};
</script>

<style>
:root {
  --primary: #222222;
  --secondary: rgb(189, 189, 189);
  --accent: #ffca2f;
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
</style>
