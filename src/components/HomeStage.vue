<template>
  <div class="welcome-section">
    <h1>WELCOME TO</h1>
    <h2>AARIGATO</h2>
    <h3>Contents of the page are currently updated. Feel free to contact me anyways!</h3>
    <div class="start-btn">
      <a @click="scrollDown">
        <i class="material-icons">keyboard_arrow_down</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeStage",
  methods: {
    scrollDown() {
      this.$emit("scroll-down");
    }
  }
};
</script>

<style scoped>
.welcome-section {
  background: url("https://www.aarigato.de/assets/images/background.png");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

h1 {
  font-size: 0.9em;
  font-weight: 100;
  margin: 0;
  letter-spacing: 0.5em;
}

h2 {
  font-size: 3em;
  margin: 5px;
  letter-spacing: 0.025em;
}

h3 {
  font-size: 0.8em;
  font-weight: 100;
  margin: 0 20px;
}

.start-btn {
  padding-top: 10px;
}

.start-btn:hover {
  cursor:pointer;
  color: var(--accent);
}
</style>
