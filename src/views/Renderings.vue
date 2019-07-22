<template>
  <div class="renderings">
    <div class="renderings-content">
      <p>This Site is currently under construction. Feel free to visit again soon!</p>
      <br />
      <router-link to="/">
        <button class="button">
          <span>Home</span>
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Renderings"
};
</script>

<style>
.renderings {
  height: 100vh;
  width: 100vw;
  background: url("https://www.aarigato.de/assets/images/interior-rendering.jpg");
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.renderings-content {
  height: 40vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.renderings-content p {
  margin: 0 10px;
}
</style>
