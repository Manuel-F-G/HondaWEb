import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import Cascos from '../components/Cascos.vue'
import Ropa from '../components/Ropa.vue'
import Formulario from '../components/Formulario.vue'
import Cajas from '../components/Cajas.vue'
import Llantas from '../components/Llantas.vue'
import Varios from '../components/Varios.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Principal',
    component: Principal
}, {
    path: '/components/Cascos.vue',
    name: 'Cascos',
    component: Cascos
},  {
    path: '/components/Ropa.vue',
    name: 'Ropa',
    component: Ropa
},  {
    path: '/components/Formulario.vue',
    name: 'Formulario',
    component: Formulario
}, {
    path: '/components/Cajas.vue',
    name: 'Cajas',
    component: Cajas
}, {
    path: '/components/Llantas.vue',
    name: 'Llantas',
    component: Llantas
},  {
    path: '/components/Varios.vue',
    name: 'Varios',
    component: Varios
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router