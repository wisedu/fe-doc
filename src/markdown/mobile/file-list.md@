# File list

> 文件列表

-------------

## 引入

```javascript
import { FileList } from 'mint-ui';

Vue.component(FileList.name, FileList);
```

## 例子

`label` 属性为文件列表的名称。

`token` 属性为文件列表的token。

`fileList` 属性表示文件列表数据，数组对象格式，每个对象有两个属性：
*  `id`: 文件id，`id` 值为一个 `string` 
*  `name`: 文件名称，`name` 值为一个 `string`


:::
::: demo
```html
<template>
  <mt-file-list 
    :file-list="fileList" 
    label="这里是传进来的标题"
    @tokenChange="tokenChange">
  </mt-file-list>
</template>

<script>
  export default {
    methods: {
      tokenChange(param) {
        console.log(param)
      }
    }
  };
</script>
```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| label | 文件列表的名称 | String | | '' |
| token | 文件列表的token | String | | '' |
| fileList | 文件列表数据 | Array | | [] |


## Events
| 事件名称 | 说明 | 回调参数 |
|------|-------|---------|
| tokenChange | token变化时的回调函数 | 变化后的值 |
