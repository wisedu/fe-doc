## Steps 步骤条

### 使用指南
``` javascript
import { Step, Steps } from 'bh-mint-ui2';

Vue.component(Step.name, Step);
Vue.component(Steps.name, Steps);
```

### 代码演示

#### 基础用法

```html
<mt-steps direction="horizontal">
    <mt-step status="finish">买家下单</mt-step>
    <mt-step status="finish">商家接单</mt-step>
    <mt-step status="process">买家提货</mt-step>
    <mt-step>交易完成</mt-step>
</mt-steps>

```



#### 物流描述


通过`title`和`description`属性来定义物流描述信息


```html
<mt-steps
  icon-class="steps-success"
  title="等待商家发货"
  description="物流描述"
>
  <mt-step status="finish">买家下单</mt-step>
  <mt-step status="finish">商家接单</mt-step>
  <mt-step status="process">买家提货</mt-step>
  <mt-step>交易完成</mt-step>
</mt-steps>
```


#### 竖向步骤条


可以通过设置`direction`属性来改变步骤条的显示方式

```html
<mt-steps direction="vertical">
    <mt-step>
        <label>【城市】物流状态1</label>
        <p slot="left">12:40<br>2016-07-12</p>
    </mt-step>
    <mt-step status="process">
        <label>【城市】物流状态2</label>
        <p slot="left">10:00<br>2016-07-11</p>
    </mt-step>
    <mt-step status="finish">
        <label>快件已发货</label>
        <p slot="left">09:30<br>2016-07-10</p>
    </mt-step>
</mt-steps>
```





### Steps API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| title | 当前步骤标题 | `String` | - | - |
| description | 当前步骤描述 | `String` | - | - |
| direction | 显示方向 | `String` | `horizontal` | `vertical` |


### Step API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
|-----------|-----------|-----------|-------------|-------------|
| status | 当前步骤状态 | `String` | ` ` | `finish` `process` `error` |

### Step Slot

| Name | 说明 |
|-----------|-----------|
| - | 默认区域 |
| left | 垂直时，左侧区域 |

如：
```html
<mt-steps>
  <mt-step status="process">默认区域</mt-step>
  <mt-step status="finish">
      <label>默认区域</label>
      <p slot="left">左侧区域</p>
  </mt-step>
</mt-steps>
```
