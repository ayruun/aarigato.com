<template>
  <div id="app">
    <UHeader
      @select-contact="selectContact"
      @select-about="selectAbout"
    />
    <router-view ref="homeView" />
    <UFooter />
  </div>
</template>

<script>
import UHeader from "./components/UHeader.vue";
import UFooter from "./components/UFooter.vue";

export default {
  name: "Home",
  components: {
    UHeader,
    UFooter
  },
  methods: {
    selectContact() {
      if (this.$router.currentRoute.name != "HomeRoute") {
        this.$router.push("/");
        this.$router.push("#home-contact");
      } else {
        this.$refs.homeView.$refs.homeContact.$refs.contact.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "center"
        });
      }
    },
    selectAbout() {
      if (this.$router.currentRoute.name != "HomeRoute") {
        this.$router.push("/");
        this.$router.push("#home-about");
      } else {
        this.$refs.homeView.$refs.homeAbout.$refs.about.scrollIntoView();
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
