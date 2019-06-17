<template>
  <div class="portfolio-section" id="portfolio-section">
    <ContentSlider/>
  </div>
</template>

<script>
import ContentSlider from "./ContentSlider.vue";

export default {
  name: "PortfolioSection",
  components: {
    ContentSlider
  }
};
</script>

<style>
.portfolio-section {
  background: url(https://aarigato.de/wp-content/uploads/2019/03/background_center.png);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
