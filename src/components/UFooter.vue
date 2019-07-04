<template>
  <div class="footer-section">
    <p class="copyright">
      &copy; COPYRIGHT AARIGATO
    </p>
    <router-link
      :to="{ path: '/impressum/' }"
      class="impressum"
    >
      IMPRESSUM
    </router-link>
  </div>
</template>

<script>
export default {
    name: "UFooter"
}
</script>

<style>
    .footer-section {
        background-color: var(--primary);
        font-size: 0.8em;
        display: grid;
        grid-template-columns: 10vh auto auto 10vh;
    }

    .copyright {
        grid-column: 2 / 3;
        color: white;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .impressum {
        grid-column: 3 / 4;
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .impressum:hover {
        color: var(--secondary);
    }

    @media (max-width: 595px) {
        .footer-section {
            grid-template-columns: 5vh auto auto 5vh;
            font-size: 0.7em;
        }
    }
</style>
