# ButtonList

> 按钮组

-----------

## 引入

```javascript
import { ButtonList } from 'mint-ui';

Vue.component(ButtonList.name, ButtonList);
```

## 例子

单选按钮组
::: demo
```html
<mt-button-list label="单选按钮组" :options="options" v-model="value" :display.sync="value_display"></mt-button-list>
<p>value: {{value}}</p>
<p>display: {{value_display}}</p>
```
:::

多选按钮组
::: demo
```html
<mt-button-list label="多选按钮组" :multiple="true" :options="options" v-model="multiValue" :display.sync="multiValue_display"></mt-button-list>
<p>value: {{multiValue}}</p>
<p>display: {{multiValue_display}}</p>
```
:::


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| label | 字段中文名 | String | - | - |
| value | 字段绑定值 | String | - | - |
| display | 字段的显示值 | String | - | "" |
| options | 选项数据 | Array | - | [] |

<script>
  export default {
    data: function() {
    return {
      value: '',
      value_display: '',
      'multiValue': '',
      'multiValue_display': '',
      options: [
        { id: 0, name: '女' },
        { id: 1, name: '男' },
        { id: 2, name: '未知' }
      ]
    };
  }
};
</script>