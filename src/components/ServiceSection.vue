<template>
  <div class="service-section">
      <div class="service-box" id="box-1">
        <a href="#">
          <div class="img-container">
            <img src="https://aarigato.de/wp-content/uploads/2019/03/3d.png" alt="apps icon">
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a href="#">APPS</a>
          </h3>
          <p>Portfolio is coming soon.</p>
        </div>
      </div>
      <div class="service-box" id="box-2">
        <a href="#">
          <div class="img-container">
            <img
              src="https://aarigato.de/wp-content/uploads/2019/03/controller.png"
              alt="games icon"
            >
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a href="#">GAMES</a>
          </h3>
          <p>Play Orange Blossom now! More coming soon!</p>
        </div>
      </div>
      <div class="service-box" id="box-3">
        <a href="#">
          <div class="img-container">
            <img src="https://aarigato.de/wp-content/uploads/2019/03/mail.png" alt="contact icon">
          </div>
        </a>
        <div class="service-content">
          <h3>
            <a href="#">CONTACT</a>
          </h3>
          <p>Feel free to contact me.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSection"
};
</script>

<style>
.service-section {
  background-color: white;
  height: auto; /* TO-DO: change size */
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
    color: rgb(87, 87, 87);
}

.service-box a {
    text-decoration: none;
    color: black;
    font-weight: 100;
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
    background-color: rgb(247, 222, 80);
}

.img-container img {
    width: 50%;
    height: auto;
}
</style>
