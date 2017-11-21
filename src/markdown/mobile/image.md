# Image

> 图片

-------------

## 引入

```javascript
import { Image } from 'mint-ui';

Vue.component(Image.name, Image);
```

## 例子

`src` 属性为图片的地址。

`width` 属性为图片的宽度。

`height` 属性为图片的高度。

`watermark` 属性为图片是否需要水印。

`top` 属性为图片距离顶部的距离。

`left` 属性为图片距离左边的距离。




:::
::: demo
```html
<template>
    <div>定宽定高</div>
    <!--start
      @name fixed-width-height
      -->
    <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/no_search_result2.png" width="200px" height="200px"></mt-image>
    <!--end-->

    <div>图片100%自适应</div>
    <!--start
      @name normal
      -->
    <mt-image src="http://res.wisedu.com/fe_components/images/errorTip/System_upgrade.png"></mt-image>
</template>

```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| src | 图片的地址 | String | | '' |
| width | 图片的宽度 | String | | '' |
| height | 图片的高度 | String | | '' |
| watermark | 图片是否需要水印 | Boolean | | '' |
| top | 图片的顶部位置 | String | | '' |
| left | 图片的左侧位置 | String | | '' |


