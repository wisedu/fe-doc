# LayoutLeftRight

> 左右双栏容器。

------------

## 引入

```javascript
import { LayoutLeftRight } from 'mint-ui';

Vue.component(LayoutLeftRight.name, LayoutLeftRight);
```

## 例子

百分比设置

::: demo
```html
<mt-layout-left-right>
  <mt-layout-left-right-item slot="left" position="left" percentage="30"><div class="aaa">左侧30%</div></mt-layout-left-right-item>
  <mt-layout-left-right-item slot="right" position="right" percentage="70"><div class="bbb">右侧70%</div></mt-layout-left-right-item>
</mt-layout-left-right>
```
:::

像素设置

::: demo
```html
<mt-layout-left-right>
  <mt-layout-left-right-item slot="left" position="left" percentage="40px"><div>左侧40px</div></mt-layout-left-right-item>
  <mt-layout-left-right-item slot="right" position="right" percentage="calc(100% - 40px)"><div>右侧动态变化</div></mt-layout-left-right-item>
</mt-layout-left-right>
```
:::


绑定 click 事件
::: demo
```html
<mt-layout-left-right @click.native="handleClick">点击触发 handleClick</mt-layout-left-right>
```
:::

## API

## Slot
| name | 描述 |
|------|--------|
| left | 左侧容器|
| right | 右侧容器|

