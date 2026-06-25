<template>
  <main class="contact-view">
    <section class="contact-grid">
      <div class="contact-left">
        <div class="contact-label">CONTACT</div>

        <h1 class="contact-title">Let's talk.</h1>

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

          <li class="contact-item">
            <span class="contact-key">LinkedIn</span>
            <a
              class="contact-link contact-link-with-icon"
              href="https://www.linkedin.com/in/zo%C3%ABhaenen"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn profiel van Zoë Haenen"
            >
              <svg
                class="linkedin-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
                />
              </svg>
              <span>zoëhaenen</span>
            </a>
          </li>
        </ul>
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  letter-spacing: 0.2px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  transition:
    opacity 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;
}

.linkedin-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
  flex: 0 0 auto;
}

.contact-link:hover {
  opacity: 0.65;
  border-color: rgba(0, 0, 0, 0.18);
  transform: translateY(-1px);
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
