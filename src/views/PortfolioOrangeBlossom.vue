<template>
  <div class="portfolio-orange-blossom">
    <iframe
      class="iframe"
      src="https://www.aarigato.de/OrangeBlossomV1.1/"
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
  name: "PortfolioOrangeBlossom"
};
</script>

<style>
.portfolio-orange-blossom {
  height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error {
  display: none;
}

@media (max-width: 655px), (max-height: 830px) {
  .portfolio-orange-blossom {
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
