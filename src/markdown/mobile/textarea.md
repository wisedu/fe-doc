# Textarea

> 文本域，配合Field使用。

----------

## 引入

```javascript
import { Textarea } from 'mint-ui';

Vue.component(Textarea.name, Textarea);
```

## 例子

基础用法
::: demo
```html
<mt-textarea label="有标题" placeholder="全宽度" rows=3 maxlength=100 ></mt-textarea>
<mt-textarea placeholder="全宽度" rows=3 maxlength=100 ></mt-textarea>
```
:::

设置校验状态
::: demo
```html
<mt-textarea label="success" placeholder="success" rows=3 maxlength=50 state="success"></mt-textarea>
<mt-textarea label="error" placeholder="error" rows=3 maxlength=20 state="error"></mt-textarea>
<mt-textarea label="warning" placeholder="warning" rows=3 maxlength=10 state="warning"></mt-textarea>
<mt-textarea placeholder="右侧自定义内容" rows=3 maxlength=50>自定义</mt-textarea>
<mt-textarea placeholder="同时出现" rows=3 maxlength=20 state="error">
  <mt-icon type="icon-wifi"></mt-icon>
</mt-textarea>
```
:::



## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| label| 标签 | String | | |
| value| 绑定表单输入值 | String | | |
| rows | 类型为 textarea 时可指定高度（显示行数）| Number | | |
| maxlength | 最大填写的字数 | Number | |  |
| placeholder | 占位内容 |String | | |
| disableClear | 禁用 clear 按钮 | Booean | | false |
| readonly | readonly |Boolean | | false |
| disabled | disabled |Boolean | | false |
| state | 校验状态 | String | error, success, warning | |
| attr | 设置原生属性，例如 `:attr="{ maxlength: 10 }"` | Object | |

## Slot
| name | 描述 |
|------|--------|
| - | 显示的 HTML 内容|

<script>
  export default {
    data: function(){
      return {
        username:"",
        email:"",
        password:"",
        phone:"",
        website:"",
        number:"",
        birthday:"",
        introduction:"",
        captcha:""
      }
    },
    methods:{
    }
  };
</script>
