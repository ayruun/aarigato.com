<template>
  <div id="app">
    <WelcomeSection/>
  </div>
</template>

<script>
import WelcomeSection from "./components/WelcomeSection.vue";

export default {
  name: "app",
  components: {
    WelcomeSection
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
