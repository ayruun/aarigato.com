<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  
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
  scroll-behavior: smooth;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
