import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',

        component: function() {
            return import ('../views/About.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',

        component: function() {
            return import ('../views/login.vue')
        }
    },


    {
        path: '/beauty_store',
        name: 'Beauty Store',

        component: function() {
            return import ('../components/beautyStore')
        },
    },

    {
        path: '/fashion_store/:details/:e',
        name: 'Fashion Product Details',

        component: function() {
            return import ('../components/fashionProduct')
        },

    },

    {
        path: '/beauty_store/:details/:e',
        name: 'Beauty Product Details',

        component: function() {
            return import ('../components/beautyProduct')
        },

    },

    {
        path: '/machine_store/:details/:e',
        name: 'Machine Product Details',

        component: function() {
            return import ('../components/machineProduct')
        },

    },

    {
        path: '/machine_store',
        name: 'Machine Store Details',

        component: function() {
            return import ('../components/machineStore')
        },

    },

    {
        path: '/fashion_store',
        name: 'Fashion Store Details',

        component: function() {
            return import ('../components/fashionStore')
        },

    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router