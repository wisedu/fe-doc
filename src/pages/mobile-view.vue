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
      combination: [],
      template: []
    }
  },
  computed: {
    menuData () {
      return {
        combination: this.combination,
        template: this.template
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
      return result

    },
    getCeilsList (type) {
       axios.post(this.$SITE_URL + '/mobile/getClassifyCategory', {
        type: type
      }).then(({data: resp}) => {
        if (!resp.first || resp.first.length === 0) {
          alert('ceils无数据')
          return
        }
        this[type] = this.sortCeilList(resp)
      })
    }
  },
  created () {
    this.getCeilsList('combination')
    this.getCeilsList('template')

  }
}
</script>
<style>
.demo-block.demo-mobile .source{
  width: 375px;
  border-right: 1px solid #ddd;
}
</style>
