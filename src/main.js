// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import DemoBlock from './components/demo-block'
import 'highlight.js/styles/color-brewer.css'
import VueHighlightJS from 'vue-highlightjs'



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mint from 'bh-mint-ui2'
import 'bh-mint-ui2/lib/style.css'

import Components from './components'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Mint)
Vue.use(Components)
Vue.use(VueHighlightJS)

Vue.component('demo-block', DemoBlock)

Vue.prototype.$SITE_URL = 'http://res.wisedu.com:9900'
// Vue.prototype.$SITE_URL = 'http://172.16.121.201:9900'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Components.router,
  template: '<App/>',
  components: { App }
})
