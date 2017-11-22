# Side Navbar

> 侧边导航

-------------

## 引入

```javascript
import { SideNavbar } from 'mint-ui';

Vue.component(SideNavbar.name, SideNavbar);
```

## 例子

`fixed` 属性为是否为绝对定位侧边导航,值为Boolean类型。

`top` 属性为侧边导航距离顶部的位置。

`width` 属性为侧边导航的宽度。


:::
::: demo
```html
<template>
  <mt-side-navbar class="page-part" v-model="selected">
      <div slot="nav">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </div>
      <mt-tab-container v-model="selected" slot="content">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </mt-side-navbar>
</template>

```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 侧边导航是否绝对定位 | Boolean | | '' |
| top | 侧边导航距离顶部位置 | String | | '' |
| width | 侧边导航的宽度 | String | | '' |

<style>
  .mint-side-navbar .navbar.is-fixed {
    position:absolute !important;
  }
  .demo-block .source {
    position:relative !important;
  }
  .page-component .side-nav {
    margin-left:0;
  }
</style>