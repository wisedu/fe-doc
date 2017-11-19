# Checklist

> 复选框列表，依赖 <router-link to="cell">cell</a> 组件。

-------------

## 引入

```javascript
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);
```

## 例子

基本用法

::: demo
```html
<mt-checklist
  title="复选框列表"
  v-model="value1"
  :options="['选项A', '选项B', '选项C']">
</mt-checklist>
```
:::

设置禁用选项
```javascript
this.options = [
  {
    label: '被禁用',
    value: '值F',
    disabled: true
  },
  {
    label: '选中禁用',
    value: '选中禁用的值',
    disabled: true
  },
  {
    label: '选项A',
    value: '值A'
  },
  {
    label: '选项B',
    value: '值B'
  }
];
```

::: demo
```html
<mt-checklist
  v-model="value2"
  :options="options">
</mt-checklist>
```
:::

设置最大可选数

::: demo
```html
<mt-checklist
  :max="2"
  v-model="value3"
  :options="options">
</mt-checklist>
```
:::

选择框右对齐

::: demo
```html
<mt-checklist
  align="right"
  title="右对齐"
  v-model="value4"
  :options="options">
</mt-checklist>
```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| options | 选择项，可直接传字符串数组或者对象数组 | Array | |
|value | 绑定值 | Array | | |
|title | 标题，显示在列表上方 | string | | |
|max| 最多可选个数，超过后其他未选择的选项变成禁用状态 | Number | | |
|align| 复选框对其位置| String | left, right | left |


<script>
  export default {
    data: function(){
      return {
        value1:[],
        value2:[],
        value3:[],
        value4:[],
        options:[
          {
            label: '被禁用',
            value: '值F',
            disabled: true
          },
          {
            label: '选中禁用',
            value: '选中禁用的值',
            disabled: true
          },
          {
            label: '选项A',
            value: '值A'
          },
          {
            label: '选项B',
            value: '值B'
          }
        ]
      }
    },
    methods:{
    }
  };
</script>
