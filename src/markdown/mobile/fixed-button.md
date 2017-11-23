<style>
.mint-navbar.is-fixed{
    position: relative !important;
}
.mint-navbar .mint-tab-item.is-selected{
    margin-bottom: 0 !important;
}

.mint-fixed-button{
    position: absolute !important;
}
div[smile-category="FixedButton"] > .smile-classify-item-content{
    min-height: 110px;
}
</style>

# FixedButton

> 浮动按钮，永久浮动在页面上。

------------

## 引入

```javascript
import { FixedButton } from 'mint-ui';

Vue.component(FixedButton.name, FixedButton);
```

## 例子
浮动位置

::: demo
```html
<mt-fixed-button position="bottom-right">+</mt-fixed-button>
<mt-fixed-button position="bottom-left">+</mt-fixed-button>
<mt-fixed-button position="top-right">+</mt-fixed-button>
<mt-fixed-button position="top-left">+</mt-fixed-button>
```
:::

样式类型

::: demo
```html
<mt-fixed-button type="primary">+</mt-fixed-button>
<mt-fixed-button type="warning">+</mt-fixed-button>
<mt-fixed-button type="danger">+</mt-fixed-button>
<mt-fixed-button type="grey">+</mt-fixed-button>
```
:::

内容大小

::: demo
```html
<mt-fixed-button size="20px">+</mt-fixed-button>
```
:::

内容颜色

::: demo
```html
<mt-fixed-button color="green">+</mt-fixed-button>
```
:::

圆角
::: demo
```html
<mt-fixed-button borderRadius="100%">+</mt-fixed-button>
```
:::

背景
::: demo
```html
<mt-fixed-button background="red">+</mt-fixed-button>
```
:::

宽高
::: demo
```html
<mt-fixed-button width="40px" height="40px">+</mt-fixed-button>
```
:::

浮动位置微调
::: demo
```html
<mt-fixed-button left="40px" top="40px">+</mt-fixed-button>
<mt-fixed-button right="40px" buttom="40px">+</mt-fixed-button>
```
:::

内容距离按钮顶部位置微调
::: demo
```html
<mt-fixed-button contentmargintop="10px">+</mt-fixed-button>
```
:::

绑定 click 事件
::: demo
```html
<mt-fixed-button @click.native="handleClick">+</mt-fixed-button>
```
:::

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| position | 浮动位置 | String | bottom-right, <br>bottom-left, <br>top-right, <br>top-left | bottom-right |
| type | 显示样式 | String |  primary,<br> danger,<br> warning,<br> grey | primary |
| size | 尺寸 | String |  |  |
| borderRadius | 圆角 | String | | |
| color | 内容颜色 | String | | |
| background | 背景 | String | | |
| width | 宽度 | String | | |
| height | 高度 | String | | |
| left | 距离左侧位置 | String | | |
| right | 距离右侧位置 | String | | |
| top | 距离顶部位置 | String | | |
| buttom | 距离底部位置 | String | | |
| contentmargintop | 内容距离按钮顶部位置 | String | | |


