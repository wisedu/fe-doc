# Cell

> 单元格，可用作展示列表信息、链接或者表单等。

----------


## 引入

```javascript
import { Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
```

## 例子

将mt-cell-group组件看成一个容器即可

::: demo
```html
<mt-cell-group>
  <mt-cell title="标题文字"></mt-cell>
  <mt-cell title="标题文字" value="说明文字"></mt-cell>
  <mt-cell title="标题文字" to="//github.com" is-link value="带链接 github.com"></mt-cell>
  <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
  <mt-cell title="标题" label="描述信息" is-link></mt-cell>
</mt-cell-group>
```
:::


带自定义图标
如以上用法不能满足你的需求，可以使用对应的slot来自定义显示的内容
::: demo
```html
<mt-cell-group>
  <mt-cell title="标题文字">
    <span>icon 是图片</span>
    <img slot="icon" src="" width="24" height="24">
  </mt-cell>
</mt-cell-group>
```
:::

自定义内容，监听cellClick事件

::: demo
```html
<mt-cell-group>
  <mt-cell title="标题文字" is-link to="click" @cellClick="cellClick">
    <span style="color: green">这里是元素</span>
  </mt-cell>
</mt-cell-group>
```
:::



## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|   icon  |  图标   | String    |  back, more   |     |
| title | 标题 | String | | |
| to    | 跳转链接 | String | | |
| value | 内容 | * | | |
| label | 备注信息，显示在标题下方 | String | | |
| is-link | 链接，会显示箭头图标。搭配 to 属性使用 | Boolean | | |

## Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| cellClick  | 点击时触发，仅设置 to="click" 时才会触发 | `原始dom事件`,`组件所携带的所有属性`  |

## Slot
| name | 描述 |
|------|--------|
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |
