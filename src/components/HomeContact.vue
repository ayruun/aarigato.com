<template>
  <div
    id="home-contact"
    ref="contact"
    class="home-contact"
  >
    <div
      id="contact-container-1"
      class="contact-container"
    >
      <div
        id="contact-1"
        class="contact-box"
      >
        <a
          href="https://github.com/ayruun"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/GitHubLogo.png"
              alt="GitHub Logo"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a
              href="https://github.com/ayruun"
              target="_blank"
            >GitHub</a>
          </h3>
          <p>Check out this Website and more.</p>
        </div>
      </div>
      <div
        id="contact-2"
        class="contact-box"
      >
        <a
          href="https://www.linkedin.com/in/aaron-behrendsen-449a25182/"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/LinkedInLogo.png"
              alt="LinkedIn Logo"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a
              href="https://www.linkedin.com/in/aaron-behrendsen-449a25182/"
              target="_blank"
            >LinkedIn</a>
          </h3>
          <p>Feel free to contact me via LinkedIn.</p>
        </div>
      </div>
      <div
        id="contact-3"
        class="contact-box"
      >
        <a
          href="https://www.freecodecamp.org/aarigato"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/freeCodeCampLogo.png"
              alt="freeCodeCamp Logo"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a
              href="https://www.freecodecamp.org/aarigato"
              target="_blank"
            >CodeCamp</a>
          </h3>
          <p>Have a look at my CodeCamp Profile.</p>
        </div>
      </div>
    </div>

    <div
      v-if="fullContact"
      id="contact-container-2"
      class="contact-container"
    >
      <div
        id="contact-1"
        class="contact-box"
      >
        <a
          href="https://codepen.io/ayruun/"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/CodePenLogo.png"
              alt="CodePen Logo"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a
              href="https://codepen.io/ayruun/"
              target="_blank"
            >CodePen</a>
          </h3>
          <p>Check out my projects on Codepen.</p>
        </div>
      </div>
      <div
        id="contact-2"
        class="contact-box"
      >
        <a
          href="https://www.xing.com/profile/Aaron_Behrendsen/"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/xingLogo.png"
              alt="Xing Logo"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a
              href="https://www.xing.com/profile/Aaron_Behrendsen/"
              target="_blank"
            >Xing</a>
          </h3>
          <p>Feel free to contact me via Xing.</p>
        </div>
      </div>
      <div
        id="contact-3"
        class="contact-box"
      >
        <a
          href="mailto:aarigato@icloud.com"
          target="_blank"
        >
          <div class="img-container">
            <img
              src="../assets/icons/mail.png"
              alt="mail icon"
            />
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a href="mailto:aarigato@icloud.com">Send Mail</a>
          </h3>
          <p>Feel free to contact me via Mail.</p>
        </div>
      </div>
    </div>

    <div class="more-btn-div">
      <button
        class="button"
        @click="toggleShow"
      >
        <span>{{ buttonText }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContact",
  data() {
    return {
      fullContact: false,
      buttonText: "SHOW MORE"
    }
  },
  methods: {
    toggleShow() {
      if(this.fullContact) {
        this.fullContact = false;
        this.buttonText = "SHOW MORE";
        this.$refs.contact.style.height = "50vh";
      } else {
        this.fullContact = true;
        this.buttonText = "SHOW LESS";
        this.$refs.contact.style.height = "80vh";
      }
    }
  }
};
</script>

<style>
.home-contact {
  background-color: white;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.more-btn-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-container {
  display: flex;
  flex-direction: row;
}

.contact-box {
  text-align: center;
  margin: 50px 50px;
  max-width: 200px;
}

.contact-box p {
  font-weight: 100;
  font-size: 0.9em;
  color: var(--secondary);
}

.contact-box a {
  text-decoration: none;
  color: black;
  font-weight: 100;
  cursor: pointer;
}

@media (max-width: 633px) {
  .home-contact {
    height: auto;
  }

  .contact-container {
    flex-direction: column;
  }

  .contact-box {
    margin: 20px 0;
  }

  #contact-2 {
    margin: 0;
  }

  #contact-container-2,
  .more-btn-div {
    display: none;
  }
}
</style>
