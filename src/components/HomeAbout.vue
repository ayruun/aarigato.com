<template>
  <div class="home-about" id="home-about" ref="about">
    <img src="../assets/images/portrait.png" alt="gato on the roof" class="about-img">
    <div class="about-info">
      <h4>MOIN MOIN I'M AARON</h4>
      <p>
        I am a visual generalist whose specialty is working in 3 dimensions, always with one eye on the brand and the other one on the purpose of the design. I love good briefings and working conceptually and like to keep key elements in focus when others get stuck on details.
        <br>
        <br>Get in touch:
      </p>
      <button class="button">
        <a href="mailto:aarigato@icloud.com">SEND MAIL</a>
      </button>
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
  background: url("../assets/images/background.png");
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
