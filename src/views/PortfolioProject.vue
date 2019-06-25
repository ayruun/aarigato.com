<template>
  <div class="portfolio-project">{{ project }}</div>
</template>

<script>
export default {
  name: "PortfolioProject",
  props: {
    project: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.portfolio-project {
  background: rgb(127, 127, 177);
}
</style>
