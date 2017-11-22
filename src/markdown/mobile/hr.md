# Hr

> 分割线

-------------

## 引入

```javascript
import { Hr } from 'mint-ui';

Vue.component(Hr.name, Hr);
```

## 例子

`height` 属性为分割线的高度，线的粗细。

`margin` 属性为分割线的外边距。

`background` 属性为分割线的背景颜色。



:::
类型
::: demo
```html
<template>
  <div class="item">
      <div>normal</div>
      <!--start
      @name normal
      -->
      <mt-hr></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>weight 4px</div>
      <!--start
      @name height-4px
      -->
      <mt-hr height="4px"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>primary</div>
      <!--start
      @name primary
      -->
      <mt-hr background="#06c1ae"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>warning</div>
      <!--start
      @name warning
      -->
      <mt-hr background="#ffb200"></mt-hr>
      <!--end-->
    </div>

    <div class="item">
      <div>danger</div>
      <!--start
      @name danger
      -->
      <mt-hr background="#ef4f4f"></mt-hr>
      <!--end-->
    </div>
</template>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| height | 分割线的高度 | String | | '' |
| margin | 分割线的外边距 | String | | '' |
| background | 分割线的背景颜色 | String | | '' |


