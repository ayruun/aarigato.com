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
      <button class="portfolio-btn">
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
  height: 500px; /* TO-DO: dynamischen Wert geben */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.portfolio-img {
  height: auto;
  width: 500px; /* TO-DO: size */
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

.portfolio-btn {
  text-transform: uppercase;
  background-color: var(--accent);
  border: none;
  border-radius: 6px;
  padding: 12px 18px;
}

.portfolio-btn:hover {
  background-color: var(--accent-hover);
}

.portfolio-btn a {
  text-decoration: none;
  color: white;
}
</style>
