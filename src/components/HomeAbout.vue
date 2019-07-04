<template>
  <div
    id="home-about"
    ref="about"
    class="home-about"
  >
    <img
      src="https://www.aarigato.de/assets/images/portrait.png"
      alt="gato on the roof"
      class="about-img"
    />
    <div class="about-info">
      <h4>MOIN MOIN I'M AARON</h4>
      <p>
        I am a Frontend Web Developer from Hamburg, Germany with a background in visual Brand-Development, 3D-Design and CGI. Currently I am looking for a Frontend Job in Hamburg. Please feel free to contact me for feedback, job inquiries or simply to say hello.
        <br />
        <br />Get in touch:
      </p>

      <a href="mailto:aarigato@icloud.com">
        <button class="button">SEND MAIL</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAbout"
};
</script>

<style>
.home-about {
  height: 100vh;
  background: url("https://www.aarigato.de/assets/images/background.png");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.about-img {
  max-height: 60vh;
  width: auto;
  margin-left: 50px;
}

.about-info {
  text-align: left;
  margin: 0 50px;
}

.about-info h4 {
  color: white;
  font-size: 1.5em;
  margin-top: 0;
}

.about-info p {
  font-size: 0.9em;
  max-width: 250px;
  color: white;
}

@media (max-width: 800px) {
  .home-about {
    position: relative;
    flex-direction: column;
  }

  .about-img {
    max-height: 45vh;
    max-width: 90vw;
    margin: 100px 25px 0 25px;
  }

  .about-info {
    margin: 25px;
    align-content: center;
    text-align: center;
  }

  .about-info p {
    max-width: 500px;
  }
}
</style>
