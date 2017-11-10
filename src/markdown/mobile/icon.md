# Icon

> 字体图标

----------


## 引入

```javascript
import { icon } from 'mint-ui';

Vue.component(icon.name, icon);
```

## 例子

基础用法

```html
<mt-icon  type="icon-pinglun"></mt-icon>
```

`type` 是字体图标库的图标class。图标地址是：http://res.wisedu.com/fe_components/iconfont_mobile/demo_fontclass.html

设置图标颜色

```html
<mt-icon type="icon-pinglun" color="green"></mt-icon>
```

设置字体图标点击之后的颜色
```html
<mt-icon type="icon-pinglun" changeColor="red"></mt-icon>
```
`changeColor` 是字体图标点击之后的颜色。

设置图标点击事件

```html
<mt-icon type="icon-pinglun" @click="doSome"></mt-icon>
```
```javascript
methods:{
  doSome () {
    alert('you are clcik');
  }
}
```
设置字体图标点击时的动画
```html
mt-icon type="icon-pinglun" animate="animated shake"></mt-icon>
```
`animate` 是给字体图标设置点击动画样式。动画由Animate.css提供：https://daneden.github.io/animate.css/?


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type  |  图标样式   | String    |    |     |
| fontSize | 图标大小 | String | | |
| padding  | 图标间距 | String | | |
| value | 图标颜色 | String | | |
| changeColor | 图标点击之后的颜色 | String | | |
| animate | 图标点击时的动画效果 | String | | |