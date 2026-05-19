import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import PortfolioDocumentsView from '../views/PortfolioDocumentsView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: { bodyClass: 'home-page-shell', title: 'Zoë Haenen' },
      },
      {
        path: 'projecten',
        name: 'projects',
        component: ProjectsView,
        meta: { title: 'Zoë Haenen - Projecten' },
      },
      {
        path: 'over-mij',
        name: 'about',
        component: AboutView,
        meta: { title: 'Zoë Haenen - Over mij' },
      },
      {
        path: 'contact',
        name: 'contact',
        component: ContactView,
        meta: { title: 'Zoë Haenen - Contact' },
      },
      {
        path: 'portfolio',
        name: 'portfolio-documents',
        component: PortfolioDocumentsView,
        meta: { title: 'Portfolio documenten - WPL1' },
      },
    ],
  },
  { path: '/index.html', redirect: '/' },
  { path: '/projecten.html', redirect: '/projecten' },
  { path: '/about.html', redirect: '/over-mij' },
  { path: '/contact.html', redirect: '/contact' },
  { path: '/portfolio/portfolio.html', redirect: '/portfolio' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash && to.name !== 'projects') return { el: to.hash, top: 120 }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Zoë Haenen'
  document.body.className = to.meta.bodyClass || ''
})

export default router
