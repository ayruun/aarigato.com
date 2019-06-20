<template>
  <div class="header-section" id="header-section">
    <header class="header">
      <div class="logo">
        <a href="#header-section">
          <img
            class="logo-img"
            src="https://aarigato.de/wp-content/uploads/2019/03/Aarigato_white-01.png"
            alt="aarigato logo"
          >
        </a>
      </div>

      <input type="checkbox" id="nav-toggle" class="nav-toggle">
      <nav id="nav-bar">
        <ul>
          <li class="nav-li">
            <a class="nav-links" href="#portfolio-section" @click="selectPortfolio">PORTFOLIO</a>
          </li>
          <li class="nav-li">
            <a class="nav-links" href="#portfolio-section" @click="selectGames">GAMES</a>
          </li>
          <li class="nav-li">
            <a class="nav-links" href="#contact-section">CONTACT</a>
          </li>
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    selectPortfolio() {
      this.$emit("select-portfolio");
    },
    selectGames() {
      this.$emit("select-games");
    }
  }
};
</script>

<style>
.header {
  background: var(--primary);
  position: fixed;
  z-index: 999;
  width: 100%;
  display: grid;
  grid-template-columns: 10vh auto 3fr 10vh;
}

.logo {
  grid-column: 2 / 3;
  margin: 20px;
  width: 60px;
}

.logo img {
  width: 100%;
  height: auto;
}

.nav-toggle {
  display: none;
}

#nav-bar {
  grid-column: 3 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9em;
}

#nav-bar li {
  list-style: none;
  margin: 0 15px;
}

#nav-bar ul {
  display: flex;
  margin: 0;
}

#nav-bar a {
  text-decoration: none;
  color: white;
  position: relative;
}

#nav-bar a:hover {
  color: var(--secondary);
}

#nav-bar a::before {
  content: "";
  display: block;
  height: 2px;
  background: var(--secondary);
  position: absolute;
  bottom: -0.5em;
  left: 0;
  right: 0;
  transform: scale(0, 1);
  transition: transform ease-in-out 150ms;
}

#nav-bar a:hover::before {
  transform: scale(0.5, 1);
}

/* media query für evtl. mittlere Größen hier hin */

@media (max-width: 700px) {
  .header {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .logo {
    grid-column: 2 / 3;
    justify-self: center;
  }

  #nav-bar {
    position: relative;
    top: 100%;
    justify-content: center;
    text-align: right;
    right: 0;
    background-color: var(--primary);
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 200ms ease-in-out;
  }

  #nav-bar ul {
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  #nav-bar li {
    margin: 0;
    padding-top: 7px;
  }

  #nav-bar a::before {
    display: none;
  }

  .nav-toggle {
    display: none;
  }

  .nav-toggle-label {
    grid-column: 3 / 4;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: "";
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 7px;
  }

  .nav-toggle-label span::after {
    top: 7px;
  }

  /* ~ looks for any preceeding sibling */
  .nav-toggle:checked ~ #nav-bar {
    transform: scale(1, 1);
  }
}
</style>
