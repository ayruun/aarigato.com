<template>
  <div class="portfolio-circle-of-kings">
    <iframe
      class="iframe"
      src="https://aarigato.de/CircleOfKingsV1-0/"
      frameborder="0"
    />
    <div class="error">
      <i class="material-icons">report_problem</i>
      <span>Please open this page on a larger device.</span>
      <span>Bitte öffne die Seite auf einem größeren Gerät.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCircleOfKings"
};
</script>

<style>
.portfolio-circle-of-kings {
  height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iframe {
  height: 100%;
  width: 100%;
}

.error {
  display: none;
}

@media (max-width: 655px), (max-height: 830px) {
  .portfolio-circle-of-kings {
    background: var(--accent);
  }
  
  iframe {
    display: none;
  }

  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
}
</style>
