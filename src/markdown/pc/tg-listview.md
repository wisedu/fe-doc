## tg-listview

### 例子

#### 基本用法

```html
<tg-listview :datasource="datasource" :page-size="20">
  <template slot="itemTemplate" slot-scope="props">
    项模板
  </template>
  <template slot="alternateTemplate" slot-scope="props">
    交替项模板
  </template>
  <template slot="pager">
    页脚模板
  </template>
</tg-listview>
```


#### 文字列表

```html
<tg-listview :datasource="ds" bordered pagination>
    <template slot="itemTemplate" slot-scope="props">
        <tg-div class="tg-col-6">
            <tg-text class="tg-primary-1">数据内容{{props.data}}</tg-text>
            <tg-text class="tg-grey-3">行标识{{props.index}}</tg-text>
        </tg-div>
        <tg-div class="tg-col-3">
            <tg-text><Badge count="new" class-name="tg-primary-1 tg-bg-white tg-br-primary-1"></Badge></tg-text>
        </tg-div>
        <tg-div class="tg-col-3">
            <tg-text><tg-linkbutton>Text</tg-linkbutton></tg-text>
        </tg-div>
    </template>
</tg-listview>
```


#### 卡片列表

#### 图标列表

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| size | 尺寸 | String | 'small','default','large' | 'default' |
| layout | 排列方式，横向 或 纵向 | String | 'h' | '' |
| bordered | 是否显示边框 | Boolean | | false |
| datasource | 数据源 | DataSource | | |
| pagination | 是否显示分页按钮 | Boolean | | false |
| pageSize | 分页大小 | Number |  | 10 |

## Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click  | 点击项后触发 | `项`,`顺序值`,`原始dom事件`  |
