<template>
<div>
    <div class="page-container">
      <md-side-nav type="mobile" :menu-data="menuData" ></md-side-nav>
      <div class="page-component">
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import MdSideNav from '../components/side-nav'
export default {
  components: { MdSideNav },
  data () {
    return {
      ceils: []
    }
  },
  computed: {
    menuData () {
      return {
        combination: this.ceils
      }
    }
  },
  methods: {
    sortCeilList (data) {
      const result = data.first
      data.second.forEach(item => {
        const first = result.find(f => f.id === item.firstCategoryId)
        if (first) {
          first.children = first.children || []
          first.children.push(item)
        }
      })
      this.ceils = result
    }
  },
  created () {
    axios.post(this.$SITE_URL + '/mobile/getClassifyCategory', {
      type: 'combination'
    }).then(({data: resp}) => {
      console.log(resp)
      if (!resp.first || resp.first.length === 0) {
        alert('ceils无数据')
        return
      }
      this.sortCeilList(resp)
    })
  }
}
</script>

