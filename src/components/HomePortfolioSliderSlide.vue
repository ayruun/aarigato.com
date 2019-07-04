<template>
  <li class="content-slider-slide">
    <img
      :src="`https://www.aarigato.de/assets/images/${slide.imgSrc}`"
      :alt="slide.imgAlt"
      class="portfolio-img"
    />
    <div class="portfolio-info">
      <h4>{{ slide.headline }}</h4>
      <p>{{ slide.infoText }}</p>
      <router-link :to="slide.buttonLink">
        <button class="button">
          {{ slide.buttonText }}
        </button>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: "HomePortfolioSliderSlide",
  props: {
    slide: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.content-slider-slide {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100%;
}

.portfolio-img {
  max-height: 60vh;
  max-width: 90vw;
  margin-left: 50px;
}

.portfolio-info {
  text-align: left;
  margin: 0 50px;
}

.portfolio-info h4 {
  font-size: 1.5em;
  margin-top: 0;
}

.portfolio-info p {
  font-size: 0.9em;
  max-width: 250px;
  margin-top: 0;
  margin-bottom: 32px;
}

@media (max-width: 680px) {
  .content-slider-slide {
    flex-direction: column; 
  }

  .portfolio-img {
    max-height: 50vh;
    margin: 0 50px;
  }

  .portfolio-info {
    margin-top: 20px;
    align-content: center;
    text-align: center;
  }
}
</style>
