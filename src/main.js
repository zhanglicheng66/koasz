// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import 'vant/lib/vant-css/index.css'
import { Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar } from 'vant'


Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(VueAwesomeSwiper).use(List).use(Field).use(NavBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
