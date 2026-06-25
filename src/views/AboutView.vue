<script setup>
const asset = (path) => `${import.meta.env.BASE_URL}${path}`
</script>

<template>
  <main class="about-page">
    <section class="about-text">
      <h1 class="about-title">Over mij</h1>

      <p>
        Ik ben Zoë Haenen, een student aan PXL Digital met een achtergrond in animatie aan
        het KASK, en een groeiende passie voor front-end development. Mijn werk bevindt zich
        op het snijvlak van visueel denken en technisch bouwen.
      </p>

      <p>
        Ik denk in beelden, ritme en structuur. Interfaces zie ik niet als statische schermen,
        maar als sequenties: wat gebeurt eerst, wat volgt, waar ligt de focus?
      </p>

      <p>
        Mijn creatieve basis ligt in animatie, waar ik leerde werken met narratief, timing en
        detail. Die manier van denken neem ik mee in mijn digitale werk. De overstap naar
        Digital Design was voor mij een bewuste keuze: ik wilde mijn visuele vaardigheden
        uitbreiden met technische kennis.
      </p>

      <p>
        Binnen mijn opleiding ontwikkel ik projecten in HTML, CSS, JavaScript en Vue.js, werk
        ik UI-flows uit in Figma en leer ik denken in structuur, herbruikbaarheid en
        gebruikservaring. Ik heb een sterke interesse in UX en ook een kleine achtergrond in
        back-end, waardoor ik graag meedenk over hoe een digitaal product zowel visueel als
        technisch in elkaar zit.
      </p>

      <p>
        Later zou ik graag terechtkomen op een plek waar er een leuke wisselwerking is tussen
        design, het coderen ervan en contact met klanten, omdat ik die combinatie net heel
        graag doe. Die invulling mag voor mij ook heel breed liggen.
      </p>

      <p>
        Naast digitaal werk hou ik me bezig met analoge fotografie, waar toeval en imperfectie
        een belangrijke rol spelen. Die gevoeligheid voor materiaal en detail sijpelt ook door
        in mijn ontwerp- en codewerk.
      </p>

      <a
        class="about-social-link"
        href="https://www.linkedin.com/in/zo%C3%ABhaenen"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn profiel van Zoë Haenen"
      >
        <svg class="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
          />
        </svg>
        <span>LinkedIn</span>
      </a>
    </section>

    <aside class="about-avatar">
      <img :src="asset('afbeeldingen/ikknop.png')" alt="Zoë Haenen portret" />
    </aside>
  </main>
</template>

<style scoped>
.about-page {
  position: relative;
  min-height: calc(100vh - var(--header-fixed-h));
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(32px, 5vw, 80px);
  padding-top: clamp(16px, 3vw, 36px);
  padding-bottom: 0;
}

.about-text {
  max-width: 640px;
}

.about-title {
  margin: 0 0 24px;
  font-size: clamp(40px, 6vw, 84px);
  line-height: 0.95;
  letter-spacing: 0;
  font-weight: 600;
}

.about-text p {
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.78);
  margin: 0 0 18px;
}

.about-social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  font-size: 12px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.78);
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  padding-bottom: 3px;
  transition:
    opacity 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.about-social-link:hover {
  opacity: 0.65;
  border-color: rgba(0, 0, 0, 0.18);
  transform: translateY(-1px);
}

.linkedin-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  flex: 0 0 auto;
}

.about-avatar {
  position: fixed;
  right: var(--side-pad);
  bottom: 0;
  width: clamp(220px, 26vw, 420px);
  height: clamp(320px, 55vh, 600px);
  overflow: hidden;
  z-index: 1;
}

.about-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

@media (max-width: 900px) {
  .about-page {
    grid-template-columns: 1fr;
    padding-top: 18px;
    gap: 22px;
  }

  .about-avatar {
    position: fixed;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: min(80vw, 360px);
    height: min(55vh, 520px);
  }

  .about-text {
    padding-bottom: min(55vh, 520px);
  }
}
</style>
