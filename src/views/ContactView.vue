<template>
  <main class="contact-view">
    <section class="contact-grid">
      <div class="contact-left">
        <div class="contact-label">CONTACT</div>

        <h1 class="contact-title">Let's talk.</h1>

        <p class="contact-copy">
          Voor samenwerkingen, vragen of feedback. Kort bericht is perfect.
        </p>
      </div>

      <div class="contact-right" aria-label="Contact links">
        <ul class="contact-list">
          <li class="contact-item">
            <span class="contact-key">E-mail</span>
            <a class="contact-link" href="mailto:zoe.haenen.zh@gmail.com">
              zoe.haenen.zh@gmail.com
            </a>
          </li>

          <li class="contact-item">
            <span class="contact-key">Instagram</span>
            <a
              class="contact-link"
              href="https://www.instagram.com/koetje0/"
              target="_blank"
              rel="noopener"
            >
              @koetje0
            </a>
          </li>
        </ul>

        <div class="contact-note">Als je mailt: zet gerust “Portfolio” in je onderwerpregel.</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-title,
.contact-copy,
.contact-link {
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;
}

.contact-view {
  display: block;
  position: relative;
  padding-top: clamp(28px, 4vw, 70px);
  padding-bottom: clamp(40px, 6vw, 90px);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(24px, 4vw, 64px);
  align-items: start;
  max-width: 1100px;
}

.contact-label {
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.65;
  margin-bottom: 14px;
}

.contact-title {
  margin: 0 0 14px;
  font-size: clamp(40px, 6.5vw, 84px);
  line-height: 0.95;
  letter-spacing: 0;
  font-weight: 600;
}

.contact-copy {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: 0.78;
  max-width: 56ch;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}

.contact-item {
  display: grid;
  gap: 6px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.contact-key {
  font-size: 12px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  opacity: 0.55;
}

.contact-link {
  display: inline-block;
  font-size: 14px;
  letter-spacing: 0.2px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  transition:
    opacity 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.contact-link:hover {
  opacity: 0.65;
  border-color: rgba(0, 0, 0, 0.18);
  transform: translateY(-1px);
}

.contact-note {
  margin-top: 18px;
  font-size: 12px;
  line-height: 1.6;
  opacity: 0.55;
  max-width: 40ch;
}

@media (max-width: 1000px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .contact-title {
    font-size: clamp(34px, 10vw, 52px);
    line-height: 0.98;
  }

  .contact-link {
    display: inline;
  }
}
</style>
