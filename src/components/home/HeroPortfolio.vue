<template>
  <main class="hero">
    <section class="portfolio-container" aria-labelledby="portfolio-title">
      <h1 id="portfolio-title" class="portfolio-tekst portfolio-letters" aria-label="PORTFOLIO">
        <span v-for="(letter, index) in 'PORTFOLIO'" :key="`${letter}-${index}`">{{ letter }}</span>
      </h1>

      <p class="portfolio-sub">Neem een kijkje!</p>
    </section>

    <div class="avatar-outer-container">
      <div class="avatar-container">
        <img class="avatar" src="/afbeeldingen/ikknop.png" alt="Zoë Haenen portret" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  height: calc(100svh - var(--header-h));
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  column-gap: clamp(16px, 3vw, 60px);
  padding-bottom: clamp(18px, 5vh, 60px);
}

.portfolio-container {
  justify-self: start;
  align-self: start;
  margin-top: clamp(19vh, 14vh, 20vh);
  margin-left: 40px;
  width: fit-content;
  text-align: right;
}

.portfolio-tekst {
  font-family: 'mati', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: clamp(60px, 9vw, 140px);
  line-height: 0.95;
  margin: 0;
}

.portfolio-sub {
  margin-top: clamp(6px, 1vh, 12px);
  font-size: clamp(12px, 1.2vw, 16px);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  opacity: 0.75;
}

.avatar-outer-container {
  justify-self: end;
  align-self: end;
  width: clamp(220px, 26vw, 420px);
  height: clamp(320px, 55vh, 600px);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.avatar-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.portfolio-letters span {
  display: inline-block;
  transform: translateY(0);
  transition: transform 120ms cubic-bezier(0.3, 0.9, 0.4, 1);
}

.portfolio-letters span:hover {
  transform: translateY(-24px);
  transition-duration: 80ms;
}

@media (hover: none) {
  .portfolio-letters span {
    transition: none;
    transform: none;
  }
}

@media (max-width: 900px) {
  .hero {
    height: calc(100svh - 140px);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1.2fr;
    padding-top: 12svh;
    padding-bottom: 0;
  }

  .portfolio-container {
    align-self: center;
    justify-self: center;
    width: 100%;
    margin-top: 0;
    margin-left: 0;
    text-align: center;
  }

  .avatar-outer-container {
    align-self: end;
    justify-self: center;
    transform: translateY(5svh);
    width: min(80vw, 360px);
    height: min(55vh, 520px);
  }
}
</style>
