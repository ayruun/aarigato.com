<template>
  <div
    id="service-section"
    ref="service"
    class="service-section"
  >
    <div
      id="box-1"
      class="service-box"
    >
      <a
        href="#portfolio-section"
        @click="selectApps"
      >
        <div class="img-container">
          <img
            src="https://www.aarigato.de/assets/icons/apps.png"
            alt="apps icon"
          />
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a
            href="#portfolio-section"
            @click="selectApps"
          >APPS</a>
        </h3>
        <p>Have a look at some of my Projects.</p>
      </div>
    </div>
    <div
      id="box-2"
      class="service-box"
    >
      <a
        href="#portfolio-section"
        @click="selectGames"
      >
        <div class="img-container">
          <img
            src="https://www.aarigato.de/assets/icons/controller.png"
            alt="games icon"
          />
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a
            href="#portfolio-section"
            @click="selectGames"
          >GAMES</a>
        </h3>
        <p>Have fun playing some of my Games.</p>
      </div>
    </div>
    <div
      id="box-3"
      class="service-box"
    >
      <a @click="selectContact">
        <div class="img-container">
          <img
            src="https://www.aarigato.de/assets/icons/mail.png"
            alt="contact icon"
          />
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a @click="selectContact">CONTACT</a>
        </h3>
        <p>Feel free to contact me.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeService",
  methods: {
    selectApps() {
      this.$emit("select-apps");
    },
    selectGames() {
      this.$emit("select-games");
    },
    selectContact() {
      this.$emit("select-contact")
    }
  }
};
</script>

<style>
.service-section {
  background-color: white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-box {
  text-align: center;
  margin: 100px 50px;
}

.service-box p {
  font-weight: 100;
  font-size: 0.9em;
  color: var(--secondary);
}

.service-box a {
  text-decoration: none;
  color: black;
  font-weight: 100;
  cursor: pointer;
}

.img-container {
  background-color: var(--accent);
  height: 80px;
  width: 80px;
  margin: auto;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.img-container:hover {
  background-color: var(--accent-hover);
}

.img-container img {
  width: 50%;
  height: auto;
}

@media (max-width: 633px) {
  .service-section {
    flex-direction: column;
    height: auto;
  }

  .service-box {
    margin: 20px 0;
  }

  #box-2 {
    margin: 0;
  }
}
</style>
