# Text

> 文本

-------------

## 引入

```javascript
import { Text } from 'mint-ui';

Vue.component(Text.name, Text);
```

## 例子


默认
::: demo
```html
<mt-text type="default">默认文本</mt-text>
```
:::


字体大小
::: demo
```html
<mt-text size="24px">设置字体大小</mt-text>
```
:::


可换肤颜色
::: demo
```html
<mt-text type="primary">primary文本</mt-text>
<mt-text type="warning">warning文本</mt-text>
<mt-text type="danger">danger文本</mt-text>
<mt-text type="grey">grey文本</mt-text>
```
:::


自定义颜色
::: demo
```html
<mt-text color="#dd8811">grey文本</mt-text>
```
:::


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | 可换肤颜色 | String | `default` `primary` `warning` `danger` `grey` | `default` |
| color | 自定义颜色值| String | `#ddd` |  |
| size | 尺寸 | String | `12px` |  |

