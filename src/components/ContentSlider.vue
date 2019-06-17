<template>
  <div class="content-slider">
    <ul class="content-slider-wrap" ref="ul">
      <ContentSliderSlide v-for="item in items" :key="item.id" :slide="item"></ContentSliderSlide>
    </ul>
    <a id="prev" href="#portfolio-section" @click="prevSlide">&#8810;</a>
    <a id="next" href="#portfolio-section" @click="nextSlide">&#8811;</a>
  </div>
</template>

<script>
import ContentSliderSlide from "./ContentSliderSlide";
import json from "../assets/portfolio-slider-content.json";

export default {
  name: "ContentSlider",
  components: {
    ContentSliderSlide
  },
  data() {
      return {
          myJson: json,
          items: json.items
      }
  },
  methods: {
    nextSlide() {
      this.$refs.ul.style.left = "-100vw"; /* calculate value */
      console.log(this.items);
    },
    prevSlide() {
      this.$refs.ul.style.left = "0"; /* calculate value */
    }
  }
};
</script>

<style>
.content-slider {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.content-slider-wrap {
  margin: 0;
  padding: 0;
  height: 80vh;
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transition: all 750ms ease;
  left: 0; /* diesen wert in js verändern */
}

#prev,
#next {
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 150ms ease;
}
#prev {
  left: 10px;
}
#next {
  right: 10px;
}
</style>
