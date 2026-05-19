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
        Binnen mijn opleiding ontwikkel ik projecten in HTML, CSS en JavaScript, werk ik
        UI-flows uit in Figma en leer ik denken in structuur, herbruikbaarheid en
        gebruikservaring.
      </p>

      <p>
        Naast digitaal werk hou ik me bezig met analoge fotografie, waar toeval en imperfectie
        een belangrijke rol spelen. Die gevoeligheid voor materiaal en detail sijpelt ook door
        in mijn ontwerp- en codewerk.
      </p>
    </section>

    <aside class="about-avatar">
      <img src="/afbeeldingen/ikknop.png" alt="Zoë Haenen portret" />
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
  padding-top: clamp(40px, 6vw, 80px);
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
    padding-top: 32px;
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
