import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage';
import WhatWeOffer from './components/pages/WhatWeOffer';
import AboutUs from './components/pages/AboutUs';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/what-we-offer', component: WhatWeOffer },
        { path: '/about', component: AboutUs },
    ],
    mode: 'history'
});
