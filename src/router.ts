import Act from '@/views/Act.vue'
import Contact from '@/views/Contact.vue'
import Who from '@/views/Who.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/act',
            name: 'act',
            component: Act,
        },
        {
            path: '/who',
            name: 'who',
            component: Who,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
})
