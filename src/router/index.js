import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoonView from '../views/MoonView'
import MarsView from '../views/MarsView'
import EuropaView  from '../views/EuropaView'
import TitanView from '../views/TitanView'
import TechnologyLaunch from '../views/TechnologyLaunch'
import TechnologySpace from '../views/TechnologySpace'
import TechnologyCapsule from '../views/TechnologyCapsule'
import CrewDouglas from '../views/CrewDouglas'
import CrewMark from '../views/CrewMark'
import CrewVictor from '../views/CrewVictor'
import CrewAnsari from '../views/CrewAnsari'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/destination/mars',
    name: 'mars',
    component: MoonView
  },

  {
    path: '/destination/moon',
    name: 'moon',
    component: MarsView
  },

  {
    path: '/destination/europa',
    name: 'europa',
    component: EuropaView
  },

  {
    path: '/destination/titan',
    name: 'titan',
    component: TitanView
  },

  {
    path: '/technology/launch',
    name: 'launch',
    component: TechnologyLaunch
  },

  {
    path: '/technology/spaceport',
    name: 'spaceport',
    component: TechnologySpace
  },

  {
    path: '/technology/capsule',
    name: 'capsule',
    component: TechnologyCapsule
  },

  {
    path: '/crew/douglas',
    name: 'douglas',
    component: CrewDouglas
  },

  {
    path: '/crew/mark',
    name: 'mark',
    component: CrewMark
  },

  {
    path: '/crew/victor',
    name: 'victor',
    component: CrewVictor
  },

  {
    path: '/crew/ansari',
    name: 'ansari',
    component: CrewAnsari
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
