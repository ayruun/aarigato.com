<template>
  <div class="impressum-view" id="impressum-view">
    <div class="impressum-container">
      <div class="impressum-content"><p>Impressum</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impressum",
};
</script>

<style>
.impressum-view {
  height: 100vh; /* auf 100% oder auto stellen wenn content drin ist */
  width: auto;
  background: white;
}

.impressum-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}

.impressum-content {
  height: 80vh; /* auf 100% stellen wenn content drin ist */
  width: 75vw;
  background: var(--secondary);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
