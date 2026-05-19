<script setup>
import HeroPortfolio from '../components/home/HeroPortfolio.vue'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
</script>

<template>
  <HeroPortfolio />

  <div class="privacy-link">
    <a :href="asset('privacy.txt')" target="_blank" rel="noopener">Privacy</a>
  </div>
</template>

<style scoped>
.privacy-link {
  position: fixed;
  bottom: 12px;
  right: 140px;
  font-size: 11px;
  letter-spacing: 0.5px;
  opacity: 0.45;
  z-index: 100;
}

.privacy-link a {
  text-decoration: none;
  color: inherit;
}

.privacy-link a:hover {
  opacity: 0.8;
}

@media (max-width: 900px) {
  .privacy-link {
    right: 16px;
  }
}
</style>
