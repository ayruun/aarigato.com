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

      <nav id="nav-bar">
        <ul>
          <li class="nav-li">
            <a class="nav-links" href="#portfolio-section">PORTFOLIO</a>
          </li>
          <li class="nav-li">
            <a class="nav-links" href="#portfolio-section">GAMES</a>
          </li>
          <li class="nav-li">
            <a class="nav-links" href="#contact-section">CONTACT</a>
            <!-- TODO: links übergeben -->
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderSection"
};
</script>

<style>
.header {
  background: var(--primary);
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 10vh auto minmax(600px, 3fr) 10vh;
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
</style>
