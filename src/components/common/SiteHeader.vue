<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const navigationItems = [
  { label: 'PROJECTEN', to: '/projecten' },
  { label: 'OVER MIJ', to: '/over-mij' },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/koetje0/',
    external: true,
  },
  { label: 'CONTACT', to: '/contact' },
]

function closeMenu() {
  isOpen.value = false
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
})

watch(
  () => route.fullPath,
  () => closeMenu(),
)
</script>

<template>
  <header class="header" :class="{ 'menu-open': isOpen }" id="siteHeader">
    <nav class="nav-links nav-left" aria-label="Hoofdnavigatie links">
      <RouterLink class="nav-link" to="/projecten">
        <span class="projecten">PROJECTEN</span>
      </RouterLink>
      <RouterLink class="nav-link" to="/over-mij">
        <span class="about">OVER MIJ</span>
      </RouterLink>
    </nav>

    <RouterLink to="/" class="brand-link" aria-label="Zoë Haenen home">
      <span class="naam-occupatie">
        <span class="naam">ZOË HAENEN</span>
        <span class="occupatie">TOEKOMSTIG FRONT-END DEVELOPER</span>
      </span>
    </RouterLink>

    <nav class="nav-links nav-right" aria-label="Hoofdnavigatie rechts">
      <a
        href="https://www.instagram.com/koetje0/"
        target="_blank"
        rel="noopener"
        class="instagram-link"
      >
        <span class="instagram">INSTAGRAM</span>
      </a>
      <RouterLink class="nav-link" to="/contact">
        <span class="contact">CONTACT</span>
      </RouterLink>
    </nav>

    <button
      class="burger"
      type="button"
      aria-label="Menu"
      :aria-expanded="String(isOpen)"
      aria-controls="mobileMenu"
      @click.stop="toggleMenu"
    >
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>

    <div
      class="mobile-menu"
      id="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobiele navigatie"
      @click.self="closeMenu"
    >
      <nav class="mobile-menu-inner" aria-label="Mobiele navigatie links">
        <template v-for="item in navigationItems" :key="item.label">
          <a
            v-if="item.external"
            class="mobile-item"
            :href="item.href"
            target="_blank"
            rel="noopener"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <RouterLink v-else class="mobile-item" :to="item.to" @click="closeMenu">
            {{ item.label }}
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-h);
  padding: 0 var(--side-pad);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: #fff;
  z-index: 3000;
}

body.home-page-shell .header {
  position: relative;
  padding: 0;
}

.projecten,
.about,
.instagram,
.contact {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
}

.naam-occupatie {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  text-align: center;
}

.naam {
  font-size: clamp(22px, 5.5vw, 32px);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.05;
}

.occupatie {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}

.burger {
  display: none;
  width: 44px;
  height: 44px;
  padding: 10px;
  border: 0;
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  position: relative;
  z-index: 4000;
}

.burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #000;
  border-radius: 999px;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease,
    width 0.25s ease;
  transform-origin: center;
}

.header.menu-open .burger-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.header.menu-open .burger-line:nth-child(2) {
  opacity: 0;
  width: 0;
}

.header.menu-open .burger-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.96);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease;
  z-index: 2000;
}

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(16px, 3vh, 28px);
  text-align: center;
  padding: 24px;
}

.mobile-item {
  font-size: clamp(34px, 6vw, 64px);
  line-height: 0.95;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-item:hover {
  opacity: 0.55;
  transform: translateY(-2px);
}

.header.menu-open .mobile-menu {
  opacity: 1;
  pointer-events: auto;
}

@media (min-width: 901px) {
  .nav-links {
    display: contents;
  }

  .instagram-link {
    display: inline-flex;
    align-items: center;
  }

  .naam-occupatie {
    flex: 0 0 auto;
  }
}

@media (max-width: 900px) {
  .header,
  body.home-page-shell .header {
    height: var(--header-fixed-h);
    padding: 18px 16px 10px;
    justify-content: center;
    gap: 12px;
  }

  body.home-page-shell .header {
    height: auto;
    padding: 28px 0 10px;
  }

  .projecten,
  .about,
  .contact {
    display: none;
  }

  .nav-right .instagram-link {
    display: none;
  }

  .burger {
    display: inline-flex;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  body.home-page-shell .burger {
    left: 0;
  }

  .burger-line {
    width: 26px;
    height: 2.5px;
  }

  .occupatie {
    font-size: 12px;
    letter-spacing: 0.8px;
  }
}
</style>
