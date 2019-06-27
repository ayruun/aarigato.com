<template>
  <div class="portfolio-view">

    <router-view />

  </div>
</template>

<script>
import { codePens } from "../assets/portfolio-slider-content.json";

export default {
  name: "Portfolio",
  data() {
    return {
      codePens
    };
  }
};
</script>

<style>
</style>
