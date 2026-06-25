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
const maskerPoster = {
  src: asset('afbeeldingen/masker/masker.jpeg'),
  alt: 'Masker poster met illustratie en tekst',
  caption: 'Poster',
}
const maskerIllustrations = [
  {
    src: asset('afbeeldingen/masker/masker-illustratie.png'),
    alt: 'Getekende maskerillustratie',
    caption: 'Maskerillustratie',
  },
  {
    src: asset('afbeeldingen/masker/zelfportret.png'),
    alt: 'Getekend zelfportret',
    caption: 'Zelfportret',
  },
]
const mierenjachtScreens = [
  {
    src: asset('afbeeldingen/mierenjacht/beginscherm.png'),
    alt: 'Beginscherm van Mierenjacht',
    caption: 'Beginscherm',
  },
  {
    src: asset('afbeeldingen/mierenjacht/mierenhoop.png'),
    alt: 'Ondergronds mierenhol met kamers voor Mierenjacht',
    caption: 'Mierenhol',
  },
  {
    src: asset('afbeeldingen/mierenjacht/water.png'),
    alt: 'Regenseizoen scherm voor Mierenjacht',
    caption: 'Regenseizoen',
  },
]
const mierenjachtAvatars = [
  { file: 'bijtje.png', name: 'Bijtje' },
  { file: 'dragonfly.png', name: 'Dragonfly' },
  { file: 'ghinnie.png', name: 'Ghinnie' },
  { file: 'ladybug.png', name: 'Ladybug' },
  { file: 'rupsie.png', name: 'Rupsie' },
  { file: 'slakkie.png', name: 'Slakkie' },
  { file: 'sprinkhaan.png', name: 'Sprinkhaan' },
  { file: 'voorbeeld-avatar-icon-player.png', name: 'Player icon' },
].map((avatar) => ({
  src: asset(`afbeeldingen/mierenjacht/avatars/${avatar.file}`),
  alt: `${avatar.name} avatar voor Mierenjacht`,
  caption: avatar.name,
}))
</script>

<template>
  <div>
  <article v-if="props.projectKey === 'mierenjacht'" class="project project-detail">
    <div class="project-thumbnail mierenjacht-hero">
      <img
        class="project-img"
        :src="projectByKey.mierenjacht.image"
        :alt="projectByKey.mierenjacht.alt"
        loading="lazy"
      />
    </div>

    <header class="project-header">
      <h1 class="project-titel">Mierenjacht</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving project-omschrijving-wide">
        <section class="project-text-section">
          <h2 class="project-subtitle">Beschrijving</h2>

          <p>
            Mierenjacht is een concept voor een digitaal dobbelspel waarin spelers zoveel mogelijk
            mieren proberen te verzamelen uit een ondergronds mierenhol. Ik bedacht het spel omdat
            mijn vrienden en ik heel graag Regenwormen spelen. Het leek me een leuke kans om dat
            spel te vertalen naar een eigen digitale versie met een nieuwe wereld, eigen visuals en
            een paar extra spelmechanieken.
          </p>

          <p>
            Het project zit momenteel in de conceptuele en designfase. Ik werkte de eerste sfeer,
            enkele schermen, avatars en de basisregels uit, maar nog niet alle schermen en visuals
            zijn volledig afgewerkt. De game is ook nog niet gecodeerd als speelbare versie.
          </p>
        </section>

        <section class="project-text-section">
          <h2 class="project-subtitle">Spelidee</h2>

          <p>
            Spelers gooien met dobbelstenen en kiezen na elke worp een soort resultaat om opzij te
            leggen. Ze proberen genoeg punten te verzamelen om een mierenkamer te pakken. Elke kamer
            heeft een waarde, bijvoorbeeld 21, 25, 30 of 36, en die waarde staat voor het aantal
            mieren dat je verzamelt. Om een kamer te mogen pakken, heb je minstens een mierensymbool
            nodig; dat symbool telt als vijf punten.
          </p>

          <p>
            De twist zit in de risico's. Wie te lang blijft gooien en geen geldige keuze meer kan
            maken, verliest zijn beurt. Dan verschijnt de miereneter: de speler verliest zijn
            bovenste gewonnen kamer en de hoogste beschikbare kamer uit het midden verdwijnt
            definitief uit het spel. Daarnaast is er een regenseizoen, waarbij een kamer tijdelijk
            onder water loopt en niet gepakt kan worden. Zo wordt de regen een tactische hindernis,
            terwijl de miereneter echt voelt als straf voor te veel gulzigheid.
          </p>
        </section>
      </div>

      <div class="project-links">
        <div class="project-platform-note">Concept en designfase</div>
      </div>
    </div>

    <section class="project-showcase mierenjacht-showcase">
      <h2 class="project-subtitle">Designs</h2>

      <div class="mierenjacht-screen-grid">
        <figure
          v-for="(screen, index) in mierenjachtScreens"
          :key="screen.src"
          class="showcase-item"
        >
          <button
            class="mierenjacht-image-button"
            type="button"
            :aria-label="`${screen.caption} groter bekijken`"
            @click="
              emit('open-gallery', {
                images: mierenjachtScreens,
                index,
                title: 'Mierenjacht designs',
              })
            "
          >
            <img :src="screen.src" :alt="screen.alt" loading="lazy" />
          </button>
          <figcaption>{{ screen.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="project-showcase mierenjacht-avatar-section">
      <h2 class="project-subtitle">Avatars</h2>

      <div class="mierenjacht-avatar-grid">
        <figure
          v-for="(avatar, index) in mierenjachtAvatars"
          :key="avatar.src"
          class="showcase-item mierenjacht-avatar"
        >
          <button
            class="mierenjacht-image-button"
            type="button"
            :aria-label="`${avatar.caption} groter bekijken`"
            @click="
              emit('open-gallery', {
                images: mierenjachtAvatars,
                index,
                title: 'Mierenjacht avatars',
              })
            "
          >
            <img :src="avatar.src" :alt="avatar.alt" loading="lazy" />
          </button>
          <figcaption>{{ avatar.caption }}</figcaption>
        </figure>
      </div>
    </section>
  </article>

  <article v-else-if="props.projectKey === 'schoonheidssalon'" class="project project-detail">
    <div class="project-thumbnail schoonheidssalon-hero">
      <img
        class="project-img"
        :src="projectByKey.schoonheidssalon.image"
        :alt="projectByKey.schoonheidssalon.alt"
        loading="lazy"
      />
    </div>

    <header class="project-header">
      <h1 class="project-titel">Schoonheidssalon</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving project-omschrijving-wide">
        <section class="project-text-section">
          <h2 class="project-subtitle">Beschrijving</h2>

          <p>
            Voor schoonheidssalon Freekje Nivelle ontwierp ik een nieuwe website die de
            persoonlijke, rustige sfeer van het salon sterker vertaalt naar een online ervaring.
            De oorspronkelijke website voelde functioneel, maar visueel minder verfijnd en minder
            afgestemd op de zachte uitstraling van een beautysalon.
          </p>

          <p>
            In mijn redesign legde ik de nadruk op verzorgde typografie, zachte roze tinten,
            duidelijke diensten en een heldere call-to-action om een afspraak te boeken. De visuele
            richting werd eerst uitgewerkt in Figma en daarna ontwikkeld met Vue. De website is
            uitgewerkt voor desktop en mobile, met aandacht voor leesbaarheid, rust en een
            consistente visuele stijl.
          </p>
        </section>

        <section class="project-text-section">
          <h2 class="project-subtitle">Mijn aanpak</h2>

          <p>
            Ik vertrok vanuit de bestaande informatie, zoals diensten, contactgegevens,
            openingsuren en locatie, maar gaf de pagina een nieuwe structuur. De hero kreeg een
            warme foto en een duidelijke boodschap, de diensten werden overzichtelijker gegroepeerd
            en de waarden van het salon kregen een rustigere presentatie.
          </p>

          <p>
            Door de mobiele versie compact op te bouwen en de belangrijkste acties bovenaan te
            houden, blijft de website makkelijk bruikbaar voor bezoekers die snel een behandeling
            willen bekijken of een afspraak willen maken.
          </p>
        </section>
      </div>
    </div>

    <section class="project-showcase">
      <h2 class="project-subtitle">Redesign</h2>

      <div class="showcase-grid">
        <figure class="showcase-item showcase-item-large">
          <img
            :src="asset('afbeeldingen/schoonheidssalon/desktop.png')"
            alt="Desktop ontwerp voor de schoonheidssalon website"
            loading="lazy"
          />
          <figcaption>Desktop ontwerp</figcaption>
        </figure>

        <figure class="showcase-item showcase-item-phone">
          <img
            :src="asset('afbeeldingen/schoonheidssalon/gsm.png')"
            alt="Mobiel ontwerp voor de schoonheidssalon website"
            loading="lazy"
          />
          <figcaption>Mobiele versie</figcaption>
        </figure>
      </div>
    </section>

    <section class="project-showcase">
      <h2 class="project-subtitle">Voor en na</h2>

      <div class="before-after-grid">
        <figure class="showcase-item">
          <img
            :src="asset('afbeeldingen/schoonheidssalon/voor.png')"
            alt="Oorspronkelijke website van de schoonheidssalon"
            loading="lazy"
          />
          <figcaption>Oorspronkelijke website</figcaption>
        </figure>

        <figure class="showcase-item">
          <img
            :src="asset('afbeeldingen/schoonheidssalon/hero.png')"
            alt="Nieuwe hero voor de schoonheidssalon website"
            loading="lazy"
          />
          <figcaption>Nieuwe visuele richting - Figma design</figcaption>
        </figure>
      </div>
    </section>
  </article>

  <article v-else-if="props.projectKey === 'masker'" class="project project-detail">
    <div class="project-thumbnail masker-hero masker-video-frame">
      <video
        class="project-video"
        :poster="projectByKey.masker.image"
        autoplay
        muted
        loop
        playsinline
        controls
      >
        <source :src="asset('afbeeldingen/masker/web-demo-masker.mp4')" type="video/mp4" />
      </video>
    </div>

    <header class="project-header">
      <h1 class="project-titel">Masker</h1>
    </header>

    <div class="project-omschrijving-container">
      <div class="project-omschrijving project-omschrijving-wide">
        <section class="project-text-section">
          <h2 class="project-subtitle">Beschrijving</h2>

          <p>
            Masker is een visueel-poetisch werk waarin beeld en tekst elkaar dragen. De poster
            vertrekt vanuit een getekend masker dat tegelijk beschermend en confronterend aanvoelt,
            met daaromheen een Nederlandstalige tekst/gedicht.
          </p>

          <p>
            Door de illustratie centraal te plaatsen en de tekst errond te laten ademen, ontstaat er
            een spanning tussen kijken en gelezen worden. Het werk onderzoekt hoe een gezicht een
            schuilplaats kan worden, maar ook hoe moeilijk het is om dat masker weer af te zetten.
          </p>

          <p>
            Masker onderzoekt hoe een identiteit of beschermlaag gevormd wordt naarmate we ouder
            worden. De manier waarop we behandeld worden tijdens het opgroeien, de reacties uit onze
            omgeving en de middelen die we meekrijgen, bepalen mee welk masker we ontwikkelen.
            Vertrekkend vanuit rituele maskers, de Asaro Mudmen en de quote van Oscar Wilde, maakte
            ik een interactieve uitwerking waarin een masker bij hover plaatsmaakt voor een
            zelfportret.
          </p>

          <p>
            Net zoals de Mudmen hun maskers en overlevingstactiek vormgaven vanuit hun omgeving,
            toont dit project het masker als iets dat ontstaat uit wat ons omringt. Het is geen los
            object, maar een laag die groeit uit ervaring, bescherming en aanpassing.
          </p>

          <p>
            Tegelijk gaat het project over hoe we met dat masker omgaan in het dagelijks leven. Zijn
            we ons bewust van het bestaan ervan, of dragen we het zonder erbij stil te staan? Het
            masker kan invloed hebben op hoe we ons voelen, hoe we reageren en welke keuzes we
            maken. Daardoor blijft de vraag open of het masker iets positiefs of negatiefs is: soms
            beschermt het ons, soms beperkt het ons, en vaak doet het allebei tegelijk.
          </p>

          <p>
            Het project speelt met de spanning tussen verbergen en tonen: het masker als
            bescherming, vervorming en mogelijke waarheid tegelijk. Visueel werkte ik met een ruwe
            etching-stijl, beperkte kleuren en een tekst die rond het beeld zweeft als een innerlijke
            monoloog.
          </p>

          <p>
            De illustraties maakte ik in Procreate. Het algemene design en de feel werkte ik uit in
            Figma, waarna de uiteindelijke interactieve uitwerking werd gebouwd met behulp van Codex
            (ChatGPT).
          </p>
        </section>
      </div>
    </div>

    <section class="project-showcase masker-figjam-section">
      <h2 class="project-subtitle">Procesbord</h2>

      <div class="masker-figjam-wrapper">
        <iframe
          src="https://embed.figma.com/board/EuB0onxsVhKU14BoTjTwnL/Untitled?node-id=0-1&embed-host=share"
          title="FigJam procesbord voor Masker"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="project-showcase masker-showcase">
      <h2 class="project-subtitle">Werk</h2>

      <div class="masker-illustration-grid">
        <figure
          v-for="image in maskerIllustrations"
          :key="image.src"
          class="showcase-item masker-illustration"
        >
          <button
            class="masker-image-button"
            type="button"
            :aria-label="`${image.caption} groter bekijken`"
            @click="emit('open-gallery', { images: [image], index: 0, title: image.caption })"
          >
            <img :src="image.src" :alt="image.alt" loading="lazy" />
          </button>
          <figcaption>{{ image.caption }}</figcaption>
        </figure>
      </div>

      <figure class="showcase-item masker-poster">
        <button
          class="masker-image-button masker-poster-button"
          type="button"
          :aria-label="`${maskerPoster.caption} groter bekijken`"
          @click="emit('open-gallery', { images: [maskerPoster], index: 0, title: maskerPoster.caption })"
        >
          <img :src="maskerPoster.src" :alt="maskerPoster.alt" loading="lazy" />
        </button>
        <figcaption>{{ maskerPoster.caption }}</figcaption>
      </figure>
    </section>
  </article>

  <article v-else-if="props.projectKey === 'scripting'" class="project project-detail">
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
          href="https://missiemaaslandteam16.netlify.app"
          target="_blank"
          rel="noopener"
        >
          OPEN LIVE SITE →
        </a>

        <div class="project-platform-note project-progress-note">
          Bepaalde functionaliteiten werken niet online omdat de back-end lokaal opgestart moet
          worden.
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
  background-color: #fff;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.schoonheidssalon-hero .project-img {
  object-position: center;
}

.mierenjacht-hero .project-img {
  object-position: center;
}

.masker-hero {
  background-color: #fff;
}

.masker-hero .project-img {
  object-fit: contain;
  object-position: center;
}

.masker-video-frame {
  aspect-ratio: 16 / 9;
}

.project-video {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  object-fit: contain;
  object-position: center;
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

.project-showcase {
  margin-top: 48px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 28%);
  gap: 24px;
  align-items: start;
}

.before-after-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
}

.showcase-item {
  margin: 0;
}

.showcase-item img {
  display: block;
  width: 100%;
  height: auto;
  background-color: #fff;
}

.masker-showcase {
  margin-top: 42px;
}

.mierenjacht-showcase {
  margin-top: 46px;
}

.mierenjacht-screen-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  margin-top: 14px;
}

.mierenjacht-avatar-section {
  margin-top: 40px;
}

.mierenjacht-avatar-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-top: 14px;
}

.mierenjacht-image-button {
  width: 100%;
  border: 0;
  padding: 0;
  background: #fff;
  cursor: zoom-in;
  display: block;
  overflow: hidden;
}

.mierenjacht-image-button img {
  display: block;
  width: 100%;
  height: auto;
  background-color: #fff;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.mierenjacht-image-button:hover img {
  opacity: 0.92;
  transform: scale(1.01);
}

.mierenjacht-avatar .mierenjacht-image-button {
  aspect-ratio: 1;
  background: #fff;
}

.mierenjacht-avatar .mierenjacht-image-button img {
  height: 100%;
  object-fit: contain;
  padding: 12px;
}

.masker-poster {
  margin-top: 28px;
}

.masker-illustration-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: start;
  margin-top: 14px;
}

.masker-image-button {
  width: 100%;
  border: 0;
  padding: 0;
  background: #fff;
  cursor: zoom-in;
  display: block;
  overflow: hidden;
}

.masker-image-button img {
  display: block;
  width: 100%;
  height: auto;
  background: #fff;
  object-fit: contain;
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.masker-poster-button img {
  width: 100%;
}

.masker-illustration .masker-image-button img {
  height: clamp(320px, 42vw, 620px);
}

.masker-image-button:hover img {
  opacity: 0.92;
  transform: scale(1.015);
}

.masker-figjam-section {
  margin-top: 42px;
}

.masker-figjam-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 14px;
  background: #fff;
}

.masker-figjam-wrapper iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #fff;
}

.showcase-item-phone {
  max-width: 320px;
  justify-self: end;
}

.showcase-item figcaption {
  margin-top: 8px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.48);
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

  .showcase-grid,
  .before-after-grid,
  .masker-illustration-grid {
    grid-template-columns: 1fr;
  }

  .mierenjacht-avatar-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .masker-illustration .masker-image-button img {
    height: auto;
    max-height: 620px;
  }

  .showcase-item-phone {
    max-width: 360px;
    justify-self: start;
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
