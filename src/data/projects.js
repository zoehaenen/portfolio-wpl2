const asset = (path) => `/${path}`

export const projectSummaries = [
  {
    key: 'wpl2',
    title: 'WPL 2 - Missie Maasland',
    image: asset('afbeeldingen/thumbnail-wpl2.png'),
    alt: 'Missie Maasland website preview',
    summary:
      'Voor Musea Maaseik werkten we aan Missie Maasland: een interactieve museumervaring die archeologie en geschiedenis op een speelse en toegankelijke manier vertaalt naar kinderen, gezinnen en scholen. Binnen dit project nam ik de rol van front-end lead op mij en werkte ik mee aan onderzoek, wireframes, Vue.js-componenten, layouts, interactieve elementen en de koppeling met de back-end API.',
  },
  {
    key: 'scripting',
    title: 'Scripting',
    image: asset('afbeeldingen/il-vicolo-screen.png'),
    alt: 'Il Vicolo project preview',
    summary:
      'Binnen het vak Scripting ontwikkelde ik een interactieve take-away website met HTML, CSS en JavaScript, zonder frameworks. De website toont menu-items dynamisch en bevat filtering, sortering en een winkelmand beheerd via DOM-manipulatie en localStorage. Dit project benadrukt mijn groei in gestructureerd JavaScript en logisch denken binnen een front-end context.',
  },
  {
    key: 'ui',
    title: 'UI design',
    image: asset('afbeeldingen/UI-design_project_thumbnail.jpeg'),
    alt: 'UI design project preview',
    summary:
      'Binnen het vak UI Design ontwierp ik de user interface van een digitale toepassing, van wireframes tot een uitgewerkt visueel design. Ik werkte een volledige taskflow en een eigen homepagina uit in Figma, met aandacht voor branding, usability en consistentie.',
  },
  {
    key: 'fotografie',
    title: 'Fotografie',
    image: asset('afbeeldingen/foto analoog/Ilford_BW_400 (6).jpg'),
    alt: 'Berglandschap fotografie project preview',
    summary:
      'Een persoonlijke collectie analoge fotografie, waarin ik experimenteer met licht, compositie en sfeer. Door te werken met film laat ik ruimte voor imperfectie en toeval, wat elk beeld een eigen karakter geeft.',
  },
  {
    key: 'animatie',
    title: 'Animatie',
    image: asset('afbeeldingen/Untitled_Artwork 3.jpeg'),
    alt: 'Animatie project preview',
    summary:
      'Een selectie van animatieprojecten waarin ik experimenteer met narratief, timing en karakteranimatie. De focus ligt op korte verhalen, eenvoudige maar expressieve vormgeving en het verkennen van beweging als vertelmiddel.',
  },
  {
    key: 'schetsboek',
    title: 'schetsboek',
    image: asset('afbeeldingen/schetsboek/schetsboek23.jpeg'),
    alt: 'Schetsboek project preview',
    summary:
      'Een selectie uit mijn schetsboeken/projecten voor mijn schetsboek, waarin ik ideeën onderzoek, vormen verken en visueel denk. De tekeningen tonen mijn proces: van snelle observaties tot meer uitgewerkte studies.',
  },
]

export const projectNavigation = projectSummaries.map(({ key, title }) => ({
  key,
  title,
}))

export const photoGalleries = {
  blackWhite: Array.from({ length: 26 }, (_, index) => {
    const number = index + 1
    return {
      src: asset(`afbeeldingen/foto analoog/zwart-wit/zwart_wit_${number}.jpeg`),
      alt: `Zwart-wit foto ${number}`,
    }
  }),
  color: Array.from({ length: 22 }, (_, index) => {
    const number = index + 1
    return {
      src: asset(`afbeeldingen/foto analoog/kleur/kleur_${number}.jpeg`),
      alt: `Kleur foto ${number}`,
    }
  }),
  sketchbook: Array.from({ length: 60 }, (_, index) => {
    const number = index + 1
    return {
      src: asset(`afbeeldingen/schetsboek/schetsboek${number}.jpeg`),
      alt: `Schetsboek pagina ${number}`,
    }
  }),
}

export const animationProjects = [
  {
    title: 'Kruipkracht',
    src: 'https://player.vimeo.com/video/1083956273',
    embedTitle: 'Kruipkracht - animatie',
    description:
      'Een man gaat vissen, maar zijn wormen zijn op. Hij gaat op avontuur en vindt een nieuwe voorraad. Maar in alle haast blijft een worm achter, over het hoofd gezien. Terwijl de man vrolijk verder vist, besluit deze worm zijn eigen pad te kiezen... met onverwachte gevolgen.',
  },
  {
    title: 'Connected',
    src: 'https://player.vimeo.com/video/1083959893',
    embedTitle: 'Connected - animatie',
    description:
      'Een korte animatie rond verbondenheid en afstand, waarin beweging en ritme centraal staan. Het project onderzoekt hoe eenvoudige vormen en timing emotie kunnen overbrengen zonder woorden.',
  },
  {
    title: 'Nom',
    src: 'https://www.youtube.com/embed/bIjibxpSVo0',
    embedTitle: 'Nom - animatie',
    description:
      'Een speels animatie-experiment waarin timing, herhaling en eenvoudige actie de basis vormen van het verhaal.',
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  },
]

export const stepAnimations = [
  { label: 'Stap 1', src: 'https://player.vimeo.com/video/1083960784' },
  { label: 'Stap 2', src: 'https://player.vimeo.com/video/1083960818', align: 'right' },
  { label: 'Stap 3', src: 'https://player.vimeo.com/video/1083960870' },
  { label: 'Stap 4', src: 'https://player.vimeo.com/video/1083960834', align: 'right' },
  { label: 'Stap 5', src: 'https://player.vimeo.com/video/1083960945' },
]
