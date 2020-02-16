import Vue from 'vue'
import App from './App.vue'
import Header from './Head.vue'
import Footer from './components/Footer.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Header),
}).$mount('#vue_header')

new Vue({
  render: h => h(Footer),
}).$mount('#vue_footer')