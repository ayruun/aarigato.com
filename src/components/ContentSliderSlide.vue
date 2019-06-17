<template>
  <li class="content-slider-slide">
    <img
      :src="slide.imgSrc"
      :alt="slide.imgAlt"
      class="portfolio-img"
    >
    <div class="portfolio-info">
      <h4>{{ slide.headline }}</h4>
      <p>
        {{ slide.infoText }}
      </p>
      <button class="button">
        <a :href="slide.buttonLink">{{ slide.buttonText }}</a>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "ContentSliderSlide",
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
  width: 100%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 80vh;
}

.portfolio-img {
  max-height: 60vh;
  width: auto;
  margin-left: auto;
}

.portfolio-info {
  text-align: left;
  margin-left: 50px;
  margin-right: auto;
}

.portfolio-info h4 {
  font-size: 1.5em;
  margin-top: 0;
}

.portfolio-info p {
  font-size: 0.9em;
  max-width: 250px;
}
</style>
