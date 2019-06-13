<template>
  <div class="portfolio-section">
    <img
      src="https://aarigato.de/wp-content/uploads/2019/03/Tills-Bude-16jpg.jpg"
      alt="room in cgi"
      class="portfolio-img"
    >
    <div class="portfolio-info">
      <h4>Interior Design</h4>
      <p>
        Modelling and rendering in Cinema4D.
        <br>Personal work.
        <br>
        <br>More stuff coming soon!
      </p>
      <button class="button">
        <a href="#">Interactive Tour</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioSection"
};
</script>

<style>
.portfolio-section {
  background: url(https://aarigato.de/wp-content/uploads/2019/03/background_center.png);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
