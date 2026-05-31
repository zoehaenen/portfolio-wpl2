<script setup>
const asset = (path) => `${import.meta.env.BASE_URL}${path}`
</script>

<template>
  <main class="documents-page">
    <h1>Portfolio documenten</h1>

    <ul>
      <li>
        <a :href="asset('portfolio/situering-profiel-dvo.pdf')" target="_blank" rel="noopener">
          Situering binnen profiel Digitale Vormgever
        </a>
      </li>

      <li>
        <a :href="asset('portfolio/eindreflectie-wpl1-dvo.pdf')" target="_blank" rel="noopener">
          Eindreflectie WPL1 DVO
        </a>
      </li>

      <li>
        <a :href="asset('portfolio/wpl1-opdracht-dashboard-cv.pdf')" target="_blank" rel="noopener">
          WPL1 - opdracht
        </a>
      </li>

      <li>
        <a
          :href="asset('portfolio/eindreflectie-wpl2-haenen-zoe.pdf')"
          target="_blank"
          rel="noopener"
        >
          Eindreflectie WPL2
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.documents-page {
  max-width: 680px;
  padding-top: clamp(28px, 4vw, 70px);
  padding-bottom: 80px;
}

h1 {
  font-size: 20px;
  margin: 0 0 24px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 16px;
}

a {
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  padding-bottom: 2px;
}
</style>
