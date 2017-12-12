import Vue from 'vue'
import Mint from 'bh-mint-ui2'

import MobileMain from './MobileMain'

Vue.prototype.$SITE_URL = 'http://172.16.7.180:9900'

Vue.use(Mint)

new Vue({
  el: '#app',
  template: '<MobileMain/>',
  components: { MobileMain }
})
