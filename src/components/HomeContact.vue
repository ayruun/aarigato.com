<template>
  <div class="home-contact" id="home-contact">
    <div class="service-box" id="contact-1">
      <a href="#">
        <div class="img-container">
          <img src="../assets/icons/apps.png" alt="apps icon">
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a href="#">GitHub</a>
        </h3>
        <p>Check out this Website and more.</p>
      </div>
    </div>
    <div class="service-box" id="contact-2">
      <a href="#">
        <div class="img-container">
          <img src="../assets/icons/controller.png" alt="games icon">
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a href="#">LinkedIn</a>
        </h3>
        <p>Feel free to contact me via LinkedIn.</p>
      </div>
    </div>
    <div class="service-box" id="contact-3">
      <a href="#">
        <div class="img-container">
          <img src="../assets/icons/mail.png" alt="contact icon">
        </div>
      </a>
      <div class="service-content">
        <h3>
          <a href="#">CodeCamp</a>
        </h3>
        <p>Have a look at my CodeCamp Profile.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContact"
};
</script>

<style>
.home-contact {
  background-color: white;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 633px) {
  .home-contact {
    flex-direction: column;
    height: auto;
  }
}
</style>
