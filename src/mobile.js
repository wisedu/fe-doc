import Vue from 'vue'
import Mint from 'bh-mint-ui2'

import MobileMain from './MobileMain'

Vue.prototype.$SITE_URL = 'https://res.wisedu.com/designer'

Vue.use(Mint)

new Vue({
  el: '#app',
  template: '<MobileMain/>',
  components: { MobileMain }
})
