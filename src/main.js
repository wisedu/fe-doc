// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import DemoBlock from './components/demo-block'
import 'highlight.js/styles/color-brewer.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mint from 'bh-mint-ui2'
import 'bh-mint-ui2/lib/style.css'

import Components from './components'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(Components)

Vue.component('demo-block', DemoBlock)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Components.router,
  template: '<App/>',
  components: { App }
})
