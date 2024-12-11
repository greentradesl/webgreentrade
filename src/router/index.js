import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/canjear',
      name: 'Canjear',
      component: () => import('@/views/principalView.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },

    {
      path: '/buscar-local',
      name: 'BuscarLocal',
      component: () => import('@/views/BuscarLocal.vue')
    },
    {
      path: '/solicitar-reparacion',
      name: 'SolicitarReparacion',
      component: () => import('@/views/SolcitarReparacion.vue')
    },
    {
      path: '/encargar-recogida',
      name: 'EncargarRecogida',
      component: () => import('@/views/EncargarRecogida.vue')
    },
    {
      path: '/quienes-somos',
      name: 'QuienesSomos',
      component: () => import('@/views/QuienesSomos.vue')
    },
  ]
})

export default router
