<template>
  <div id="app">
    <router-view/>
    <UFooter/>
  </div>
</template>

<script>
import UFooter from './components/UFooter.vue';

export default {
  name: "home",
  components: {
    UFooter
  }
};
</script>

<style>
:root {
  --primary: #222222;
  --secondary: rgb(110, 110, 110);
  --accent: #ffca2f;
  --accent-hover: rgb(255, 217, 0);
  scroll-behavior: smooth;
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
