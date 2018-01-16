# Navbar

> 顶部选项卡，与 <router-link to="tabbar">Tabbar</router-link> 类似，依赖 tab-item 组件。

------------

## 引入

```javascript
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
```

## 例子
搭配 <router-link to="tab-container">tab-container</router-link> 组件使用


```html
<mt-navbar v-model="selected">
  <mt-tab-item id="1" componentname="navbar">
    选项一
    <mt-badge size="normal" padding="3px" color="red" slot="badge"></mt-badge>
  </mt-tab-item>
  <mt-tab-item id="2" componentname="navbar">选项二</mt-tab-item>
  <mt-tab-item id="3" componentname="navbar">选项三</mt-tab-item>
  <mt-tab-item id="4" componentname="navbar">选项四</mt-tab-item>
  <mt-tab-item id="5" componentname="navbar">选项五</mt-tab-item>
  <mt-tab-item id="6" componentname="navbar">选项六</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell-group>
      <mt-cell v-for="n in 20" :title="'内容 ' + n" wrapperpaddingleft="20px"/>
    </mt-cell-group>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell-group>
      <mt-cell v-for="n in 10" :title="'测试 ' + n" wrapperpaddingleft="20px"/>
    </mt-cell-group>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell-group>
      <mt-cell v-for="n in 6" :title="'选项 ' + n" wrapperpaddingleft="20px"/>
    </mt-cell-group>
  </mt-tab-container-item>
</mt-tab-container>
```


## API

### navbar

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面顶部 | Boolean | | false |
| value | 返回当前选中的 tab-item 的 id | * | |  |

### tab-item
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | 选中后的返回值 | * | |  |
| icontype | 选用的字体图标名称 | String | 参看字体图标 |  |
| componentname | 组件名称，匹配样式 | String | 必选（navbar） |  |

## Slot
### navbar
| name | 描述 |
|------|--------|
| - | 内容 |

### tab-item
| name | 描述 |
|------|--------|
| - | 显示文字|
|icon | icon 图标，用于插入图片（与icontype效果相同，两者可选其一）|
|badge | badge 徽章，绝对定位（top:0,right:0）,可自定义样式修改 |
