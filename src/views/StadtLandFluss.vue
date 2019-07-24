<template>
  <div>
    <iframe
      src="https://www.aarigato.de/myApps/stadt-land-fluss/"
      frameborder="0"
    />
    <div class="error">
      <span>Please open this page on a larger device.</span>
      <span>Bitte öffne die Seite auf einem größeren Gerät.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
iframe {
  display: block;
  width: 100%;
  height: 100vh;
}

.error {
  display: none;
}


@media (max-width: 655px), (max-height: 715px) {
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
