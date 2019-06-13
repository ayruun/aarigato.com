<template>
  <div class="welcome-section">
    <h1>WELCOME TO</h1>
    <h2>AARIGATO</h2>
    <h3>Have a look at my Frontend Portfolio and have fun playing my games!</h3>
  </div>
</template>

<script>
export default {
  name: "WelcomeSection",
  //props: {
  //  msg: String
  //}
};
</script>

<!-- Add "scoped" attribute to the style tag to limit CSS to this component only -->
<style scoped>
.welcome-section {
  background: url(https://aarigato.de/wp-content/uploads/2019/03/background_center.png);
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
  margin: 0;
}
</style>
