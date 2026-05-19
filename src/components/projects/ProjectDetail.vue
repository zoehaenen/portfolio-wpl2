<script setup>
import AnimationEmbed from './AnimationEmbed.vue'
import PhotoGallery from './PhotoGallery.vue'
import {
  animationProjects,
  photoGalleries,
  projectSummaries,
  stepAnimations,
} from '../../data/projects'

const props = defineProps({
  projectKey: { type: String, required: true },
})

const emit = defineEmits(['open-gallery'])

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const projectByKey = Object.fromEntries(projectSummaries.map((project) => [project.key, project]))
</script>

<template>
  <div>
  <article v-if="props.projectKey === 'scripting'" class="project project-detail">
    <div class="project-thumbnail">
      <img
        class="project-img"
        :src="projectByKey.scripting.image"
        :alt="projectByKey.scripting.alt"
        loading="lazy"
      />
    </div>

    <header class="project-header">
      <h1 class="project-titel">Scripting</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving">
        <p>
          Il Vicolo is een fictieve take-away/restaurantwebsite die ik ontwikkelde binnen
          het vak Scripting. Het project focust op het dynamisch weergeven van menu-items,
          filtering en sortering, en het beheren van een winkelmand via pure JavaScript,
          zonder frameworks. State zoals het winkelmandje, het gerecht van de dag,
          adminstatus en promotiecodes wordt bijgehouden via localStorage, waardoor
          interacties persistent blijven over pagina's heen.
        </p>

        <p>
          Naast de basisvereisten implementeerde ik uitbreidingen zoals een admin login om
          het gerecht van de dag aan te passen, promotiecodes met korting, en een aparte
          winkelmandpagina met overzicht en prijsberekening. Niet alle uitbreidingen werden
          afgewerkt door tijdsgebrek, maar de gemaakte keuzes en beperkingen tonen mijn
          leerproces en inzicht in DOM-manipulatie, event handling en state management binnen
          een realistische front-end context.
        </p>
      </div>

      <div class="project-links">
        <a
          class="project-linkout"
          href="https://scripting-takeaway-project.netlify.app"
          target="_blank"
          rel="noopener"
        >
          OPEN LIVE SITE →
        </a>

        <div class="project-platform-note">Enkel gemaakt voor desktop.</div>
      </div>
    </div>
  </article>

  <article v-else-if="props.projectKey === 'ui'" class="project project-detail">
    <header class="project-header">
      <h1 class="project-titel">UI design</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving">
        <p>
          Binnen het vak UI Design werkte ik in groep aan het ontwerp van een digitale
          toepassing, van concept en sitemap tot wireframes en een uitgewerkt visueel design.
          Ik was individueel verantwoordelijk voor een taskflow en een eigen uitwerking van de
          homepagina, uitgewerkt in Figma voor desktop en mobile. Het project focuste op
          usability, consistentie en branding, en resulteerde in een professioneel UI-design
          onderbouwd met duidelijke flows en componenten.
        </p>
      </div>

      <div class="project-links">
        <div class="project-platform-note">Project in progress</div>
      </div>
    </div>

    <div class="ui-pdf-wrapper">
      <iframe
        :src="asset('afbeeldingen/doc-gecomprimeerd.pdf')"
        title="UI design case document"
        loading="lazy"
      ></iframe>
    </div>
  </article>

  <article v-else-if="props.projectKey === 'wpl2'" class="project project-detail">
    <div class="project-thumbnail">
      <img
        class="project-img"
        :src="projectByKey.wpl2.image"
        :alt="projectByKey.wpl2.alt"
        loading="lazy"
      />
    </div>

    <header class="project-header">
      <h1 class="project-titel">WPL 2 - Missie Maasland</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving project-omschrijving-wide">
        <section class="project-text-section">
          <h2 class="project-subtitle">Beschrijving</h2>

          <p>
            Voor Musea Maaseik werkten we aan Missie Maasland: een interactieve museumervaring
            die archeologie en geschiedenis op een speelse en toegankelijke manier vertaalt naar
            kinderen, gezinnen en scholen. Het project ontstond vanuit de vraag om de verouderde,
            passieve schermen in het museum te vernieuwen en bezoekers sterker te betrekken via
            storytelling en korte interactieve ervaringen.
          </p>

          <p>
            Naast interactieve museumtoepassingen ontwikkelden we ook een website die bezoekers
            informeert over de experience, praktische informatie bundelt en de visuele identiteit
            van het concept ondersteunt. De website combineert een speelse uitstraling voor kinderen
            met duidelijke en overzichtelijke content voor ouders, leerkrachten en andere bezoekers.
            Gebruiksvriendelijkheid, storytelling en een doelgroepgerichte visuele stijl stonden
            centraal binnen het ontwerp.
          </p>

          <p>
            Het concept focust op korte interactieve mini-games, touchscreen-opdrachten en een
            begeleidende mascotte die bezoekers doorheen de geschiedenis van het Maasland leidt.
            Daarnaast onderzochten we hoe het museum visueel onderscheid kan maken tussen een
            speelse kinderroute en meer verdiepende content voor volwassen bezoekers, volledig
            aansluitend bij de bestaande branding van Musea Maaseik.
          </p>
        </section>

        <section class="project-text-section">
          <h2 class="project-subtitle">Mijn aandeel</h2>

          <p>
            Binnen Missie Maasland nam ik de rol van front-end lead op mij binnen een
            multidisciplinair team van drie studenten Programmeren en vijf studenten Digitale
            Vormgeving, waarvan ik de enige student was binnen de webrichting. Hierdoor lag mijn
            focus zowel op de technische uitwerking van de website als op de brug tussen design en
            development.
          </p>

          <p>
            In de startfase speelde ik een grote rol in het uitdenken van het concept en werkte ik
            vrijwel het volledige onderzoeksdeel uit. Op basis van interviews, doelgroepanalyse en
            concurrentieonderzoek hielp ik mee bepalen hoe storytelling, interactie en educatie samen
            konden komen binnen de museumervaring.
          </p>

          <p>
            Daarnaast werkte ik mee aan de wireframes van de homepage, waarbij ik hielp een duidelijke
            structuur en visuele richting voor de volledige website vast te leggen. Hoewel het nog om
            wireframes ging zonder finale styling of kleurkeuzes, vormde dit mee de basis voor de
            verdere uitwerking van het platform.
          </p>

          <p>
            Op technisch vlak was ik verantwoordelijk voor alle front-end taken binnen het project. Ik
            zette de Vue.js-structuur op, werkte component-based pagina's uit, implementeerde layouts
            en interactieve elementen, beheerde de GitHub-omgeving en ondersteunde de integratie met
            de back-end API van het programmeerteam.
          </p>
        </section>
      </div>

      <div class="project-links">
        <a
          class="project-linkout"
          href="https://zoehaenen.github.io/missie-maasland/"
          target="_blank"
          rel="noopener"
        >
          OPEN LIVE SITE →
        </a>

        <div class="project-platform-note project-progress-note">
          Project in progress: deze website is nog niet volledig afgewerkt. Bepaalde
          functionaliteiten werken niet online omdat de back-end lokaal opgestart moet worden.
        </div>
      </div>
    </div>

    <section class="project-text-section wpl-wireframe-section">
      <h2 class="project-subtitle">Homepage wireframe</h2>

      <div class="wpl-pdf-wrapper">
        <iframe
          :src="asset('portfolio/homepage-wireframe.pdf')"
          title="Homepage wireframe Missie Maasland"
          loading="lazy"
        ></iframe>
      </div>
    </section>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving project-omschrijving-wide">
        <section class="project-text-section">
          <h2 class="project-subtitle">Wat heb ik geleerd</h2>

          <p>
            Uit dit project heb ik vooral geleerd hoe belangrijk de samenwerking tussen design,
            development en onderzoek is binnen een digitaal product. Omdat ik als enige student uit de
            webrichting samenwerkte met zowel designers als programmeurs, leerde ik werken tussen
            concept, UI en technische uitwerking.
          </p>

          <p>
            Daarnaast deed ik veel ervaring op met het structureren van een grotere front-end
            applicatie in Vue.js. Ik leerde werken met herbruikbare componenten, een duidelijke
            projectstructuur en het vertalen van wireframes naar responsieve en interactieve layouts.
            Ook het samenwerken via GitHub, branches en API-integraties met het programmeerteam gaf
            me een beter inzicht in hoe een echte development workflow verloopt binnen een
            multidisciplinair team.
          </p>

          <p>
            Op conceptueel vlak leerde ik hoe sterk onderzoek de richting van een project bepaalt.
            Door interviews, doelgroepanalyse en usability-inzichten kreeg ik meer inzicht in hoe je
            digitale ervaringen afstemt op verschillende gebruikersgroepen en hoe storytelling
            educatieve content toegankelijker kan maken.
          </p>

          <p>
            Persoonlijk heb ik binnen dit project ook geleerd om beter mijn grenzen te bewaken. Omdat
            ik naast mijn rol als front-end lead ook extra meewerkte aan designtaken, zoals het
            uitwerken van wireframes, werd de totale workload op een bepaald moment moeilijk
            combineerbaar binnen de afgesproken projectstructuur. Dat heeft me geleerd hoe belangrijk
            duidelijke taakafspraken, communicatie en een realistische verdeling van
            verantwoordelijkheden zijn binnen een multidisciplinair team.
          </p>
        </section>
      </div>
    </div>
  </article>

  <article v-else-if="props.projectKey === 'fotografie'" class="project project-detail">
    <header class="project-header">
      <h1 class="project-titel">Fotografie</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving">
        <p>
          Deze fotoreeks is een persoonlijke collectie analoge fotografie, waarin ik
          experimenteer met licht, compositie en sfeer. Ik werkte met verschillende camera's,
          waaronder de Canon AE-1 Program en de Pentax Zoom P280, en gebruikte diverse
          filmsoorten om te spelen met kleur, contrast en korrel. De negatieven werden
          digitaal gescand met een Plustek OpticFilm 8100, waarbij ik veel aandacht besteedde
          aan het bewaren van het karakter van film. Door bewust analoog te werken laat ik
          ruimte voor toeval en imperfectie, wat elk beeld een eigen, tastbare identiteit
          geeft.
        </p>
      </div>
    </div>

    <PhotoGallery
      title="zwart-wit"
      :images="photoGalleries.blackWhite"
      @open="emit('open-gallery', $event)"
    />
    <PhotoGallery
      title="kleur"
      :images="photoGalleries.color"
      @open="emit('open-gallery', $event)"
    />
  </article>

  <article v-else-if="props.projectKey === 'animatie'" class="project project-detail">
    <header class="project-header">
      <h1 class="project-titel">Animatie</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving">
        <p>
          Een selectie van animatieprojecten waarin ik experimenteer met narratief, timing en
          karakteranimatie. De focus ligt op korte verhalen, eenvoudige maar expressieve
          vormgeving en het verkennen van beweging als vertelmiddel.
        </p>
      </div>
    </div>

    <section v-for="animation in animationProjects" :key="animation.title" class="animation-project">
      <h3 class="animation-title">{{ animation.title }}</h3>
      <AnimationEmbed
        :src="animation.src"
        :title="animation.embedTitle"
        :allow="animation.allow"
      />
      <p class="animation-description">{{ animation.description }}</p>
    </section>

    <section class="animation-project steps">
      <h3 class="animation-title">Stappen</h3>

      <p class="animation-description">
        Een reeks korte animaties waarin beweging stap voor stap wordt opgebouwd. Elk fragment
        onderzoekt een volgende fase binnen dezelfde beweging.
      </p>

      <div
        v-for="step in stepAnimations"
        :key="step.label"
        class="step-item"
        :class="{ 'is-right': step.align === 'right' }"
      >
        <p class="animation-description">{{ step.label }}</p>
        <AnimationEmbed :src="step.src" :title="`${step.label} - animatie`" />
      </div>
    </section>
  </article>

  <article v-else-if="props.projectKey === 'schetsboek'" class="project project-detail">
    <header class="project-header">
      <h1 class="project-titel">Schetsboek</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving">
        <p>
          Een selectie uit mijn schetsboeken/projecten voor mijn schetsboek, waarin ik ideeën
          onderzoek, vormen verken en visueel denk. De tekeningen tonen mijn proces: van snelle
          observaties tot meer uitgewerkte studies.
        </p>
      </div>
    </div>

    <PhotoGallery
      title="selectie"
      :images="photoGalleries.sketchbook"
      @open="emit('open-gallery', $event)"
    />
  </article>
  </div>
</template>

<style scoped>
.project {
  scroll-margin-top: calc(var(--header-h) + 24px);
  margin-bottom: 100px;
}

.project-detail .project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.project-titel {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.project-thumbnail {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
  margin-bottom: 48px;
  background-color: rgba(128, 128, 128, 0.22);
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.project-omschrijving-container {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.project-omschrijving {
  width: min(68%, 760px);
  text-transform: none;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.45;
}

.project-omschrijving p {
  margin: 0 0 10px;
}

.project-omschrijving-wide {
  width: min(82%, 920px);
}

.project-text-section {
  margin-bottom: 28px;
}

.project-text-section:last-child {
  margin-bottom: 0;
}

.project-subtitle {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.78);
}

.project-links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.project-platform-note {
  font-size: 11px;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.45);
}

.project-progress-note {
  max-width: 260px;
  font-size: 10px;
  line-height: 1.35;
  text-align: right;
}

.project-linkout {
  font-size: 12px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.project-linkout:hover {
  opacity: 0.6;
  transform: translateY(-1px);
}

.ui-pdf-wrapper {
  width: 100%;
  margin-top: 40px;
}

.ui-pdf-wrapper iframe {
  width: 100%;
  height: 85vh;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
}

.wpl-pdf-wrapper {
  width: 100%;
  margin-top: 14px;
}

.wpl-wireframe-section {
  margin-top: 34px;
  margin-bottom: 34px;
}

.wpl-pdf-wrapper iframe {
  width: 100%;
  height: 72vh;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
}

.animation-project {
  margin-top: 48px;
}

.animation-project:first-of-type {
  margin-top: 24px;
}

.animation-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.animation-description {
  width: min(68%, 760px);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.45;
  letter-spacing: 0.2px;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
}

.animation-project.steps {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.animation-project.steps .animation-title {
  margin-bottom: 0;
}

.animation-project.steps > .animation-description {
  margin: 0 0 14px;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.step-item :deep(.animation-video) {
  max-width: 640px;
  margin-bottom: 0;
}

.step-item .animation-description {
  position: static;
  width: auto;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.75);
}

.step-item.is-right {
  align-items: flex-end;
}

.step-item.is-right .animation-description {
  text-align: left;
}

@media (max-width: 900px) {
  .project-detail .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .project-omschrijving-container {
    flex-direction: column;
    gap: 10px;
  }

  .project-links {
    align-items: flex-start;
    justify-content: flex-start;
  }

  .project-progress-note {
    max-width: 100%;
    text-align: left;
  }

  .project-omschrijving,
  .animation-description {
    width: 100%;
  }

  .step-item,
  .step-item.is-right {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .step-item :deep(.animation-video) {
    max-width: 100%;
  }
}
</style>
