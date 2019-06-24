<template>
  <div class="header-section" id="header-section">
    <header class="header">
      <div class="logo">
        <router-link :to="{ path: '/', hash: '#header-section' }">
          <img class="logo-img" src="../assets/logo.png" alt="aarigato logo">
        </router-link>
      </div>

      <div class="burger-menu" @click="toggleMenu" v-click-outside="closeMenu">
        <span></span>
      </div>

      <nav class="nav-bar" v-bind:class="{ active: isActive }">
        <ul>
          <li class="nav-li">
            <router-link :to="{ path: '/', hash: '#portfolio-section' }" class="nav-links">
              <span @click="selectPortfolio">PORTFOLIO</span>
            </router-link>
          </li>
          <li class="nav-li">
            <router-link :to="{ path: '/', hash: '#portfolio-section' }" class="nav-links">
              <span @click="selectGames">GAMES</span>
            </router-link>
          </li>
          <li class="nav-li">
            <router-link :to="{ path: '/', hash: '#contact-section' }" class="nav-links">
              <span @click="selectContact">CONTACT</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "UHeader",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.isActive ? (this.isActive = false) : (this.isActive = true);
    },
    closeMenu() {
      this.isActive = false;
    },
    selectPortfolio() {
      this.$emit("select-portfolio");
    },
    selectGames() {
      this.$emit("select-games");
    },
    selectContact() {
      this.$emit("select-contact");
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
  grid-template-columns: 10vh auto 1fr 10vh;
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

.nav-bar {
  grid-column: 3 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9em;
}

.nav-bar li {
  list-style: none;
  margin: 0 15px;
}

.nav-bar ul {
  display: flex;
  margin: 0;
}

.nav-bar a {
  text-decoration: none;
  color: white;
  position: relative;
}

.nav-bar a:hover {
  color: var(--secondary);
}

.nav-bar a::before {
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

.nav-bar a:hover::before {
  transform: scale(0.5, 1);
}

.burger-menu {
  display: none;
}

@media (max-width: 700px) {
  .nav-bar {
    display: none;
    text-align: right;
  }

  .active {
    display: flex;
  }

  .nav-bar ul {
    flex-direction: column;
  }

  .nav-bar li {
    margin: 0 0 15px 0;
  }

  .nav-bar a::before {
    left: 0;
    right: 1;
    transform: scale(0, 1);
    transform-origin: right;
    transition: transform ease-in-out 150ms;
  }

  .nav-bar a:hover::before {
    transform: scale(0.5, 1);
  }

  .burger-menu {
    display: flex;
    flex-direction: flex-end;
    justify-content: flex-end;
    align-items: center;
    grid-column: 3 / 4;
    color: white;
    cursor: pointer;
  }

  .burger-menu span,
  .burger-menu span::before,
  .burger-menu span::after {
    display: block;
    background: white;
    height: 2px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .burger-menu span::before,
  .burger-menu span::after {
    content: "";
    position: absolute;
  }

  .burger-menu span::before {
    bottom: 7px;
  }

  .burger-menu span::after {
    top: 7px;
  }
}
</style>
