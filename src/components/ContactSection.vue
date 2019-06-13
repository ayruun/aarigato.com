<template>
  <div class="contact-section">
    <img
      src="https://aarigato.de/wp-content/uploads/2019/03/aari_center.png"
      alt="gato on the roof"
      class="contact-img"
    >
    <div class="contact-info">
      <h4>MOIN MOIN I'M AARON</h4>
      <p>
        I am a visual generalist whose specialty is working in 3 dimensions, always with one eye on the brand and the other one on the purpose of the design. I love good briefings and working conceptually and like to keep key elements in focus when others get stuck on details.
        <br><br>Get in touch:
      </p>
      <button class="button">
        <a href="mailto:aarigato@icloud.com">SEND MAIL</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection"
};
</script>

<style>
.contact-section {
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.contact-img {
  max-height: 60vh;
  width: auto;
  margin-left: auto;
}

.contact-info {
  text-align: left;
  margin: 0 auto 0 50px;
}

.contact-info h4 {
  font-size: 1.5em;
  margin-top: 0;
}

.contact-info p {
    font-size: 0.9em;
    max-width: 250px;
    color: var(--secondary);
}
</style>
