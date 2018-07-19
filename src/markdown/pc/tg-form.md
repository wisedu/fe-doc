## tg-form

该组件是弹窗中的输入项的集合，可以放置在弹窗中 或者 平铺在页面上

通过模型生成表单，主要特性：

* 排列方式：1列、2列、3列、4列 ...
* 组织形式：平铺、分组
* 显示形式：可填写、只读、混排

可以根据实现组件，切换显示组件，以下为PC端的iview组件库的实现。亦或是可以切换为移动端组件库

[formConnector](https://github.com/wisedu/turing/blob/master/formConnector.md)

### 2列/只读/平铺 表单

![2列只读表单](/static/md/form-2-readonly.png)

```html
<tg-form :fields="fields" v-model="formData" :column="2" :readonly="true"></tg-form>
```

#### 平铺表单格式

```js
let fields = [
    {"name":"WID","xtype":"text","caption":"WID"},
    {"name":"ACCOUNTID","xtype":"text","caption":"登录账号","dataSize":40}
    ...
]
```

### 弹窗内的 2列/可编辑/分组 表单

![弹窗内的2列表单](/static/md/form-2cols.png)

```html
<Modal v-model="isModalShow" title="用户信息" @on-ok="ok" @on-cancel="cancel" :width="800">
    <tg-form :fields="fields" v-model="formData" :column="2"></tg-form>
</Modal>
```

### 分组表单格式

```js
let fields = [
    {
        "name":"group:[基本信息]",
        "title":"基本信息",
        "desc":"~基本信息~",
        "items":[
            {"name":"ACCOUNTID","xtype":"text","caption":"登录账号","dataSize":40}
            ...
        ]
    },{
        "name":"group:[附加信息]",
        "title":"附加信息",
        "desc":"~附加信息~",
        "items":[
            {"name":"USERTYPE","url": "/axsfw/code/12eb4f7c-69a1-41c2-b21e-c99fe850264a.do","xtype": "select","dataSize": 6}
            ...
        ]
    },
    ...
]
```

### 页面内的 3列/可编辑/平铺 表单

![页面内的3列表单](/static/md/form-3cols.png)

```html
<tg-form :fields="fields" v-model="formData" :column="3">
    <div slot="after">
        <FormItem>
            <Button @click="search" type="primary" shape="circle" icon="ios-search">查询</Button>
            <Button @click="clear" type="default" shape="circle">清空</Button>
        </FormItem>
    </div>
</tg-form>
```

### 替换表单字段内容

这样可以将fields模型中XSBH的字段显示替换为 sortable 的自定义组件

```html
<tg-form :fields="fields" :column="4" :value="data" displayFieldFormat="_DISPLAY">
    <div slot="XSBH">
        <ul id="sortable">
            <li class="ui-state-default">Item 1</li>
            <li class="ui-state-default">Item 2</li>
            <li class="ui-state-default">Item 6</li>
            <li class="ui-state-default">Item 7</li>
        </ul>
    </div>
</tg-form>
```


### 表单最后追加项

```html
<tg-form :fields="fields" :value="formValue">
    <div slot="after">
        <FormItem>
            <Button @click="search" type="primary" shape="circle" icon="ios-search">查询</Button>
            <Button @click="clear" type="default" shape="circle">清空</Button>
        </FormItem>
    </div>
</tg-form>
```

### 标准属性

| 属性 | 描述 | 数据类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 字段名 | String | 必填 |
| caption | 显示文字 | String | 空 |
| hidden | 是否隐藏 | Boolean | false |
| format | 前端只读文本格式化 | String | 空 |
| xtype | 显示控件类型 | Enum | text |
| required | 必填 | Boolean | false |
| url | 远程数据地址 | String | 空 |
| fullrow | 占满一行 | Boolean | false |
| placeholder | 提示文字 | String | 空 |
| options | 数据选项 | Array | 空 |
| default | 默认值 | String | 空 |
| dataSize | 最大长度校验值 | Integer | 空 |
| checkType | 校验类型 | Enum | 空 |
| params | 传递个实际组件的参数 | Object | 空 |

format：日期、数字、金额，或字符串格式化，因效率一般通过后端处理

#### xtype 控件类型枚举

| 属性 | 描述 | 特征 |
| :--- | :--- | :--- |
| select | 单选下拉 | 大量数据，远程搜索，展开，字典映射 |
| multi-select | 多选下拉 | |
| autocomplete | 下拉表格/模糊搜索 | 大数据量，远程搜索，展开，补全选择内容 |
| date-ym | 年月选择框， 默认 yyyy-MM | 年月 |
| date-local | 日期选择框， 默认 yyyy-MM-dd | 年月日 |
| date-full | 日期时间选择框， 默认 yyyy-MM-dd HH:mm | 年月日时分 |
| date-range | 日期范围选择， 默认 yyyy-MM-dd | 年月日，开始、结束 |
| radiolist | 单选按钮组 | 平铺，适用极少选项，字典映射 |
| checkboxlist | 多选按钮组 | 平铺，适用极少选项，字典映射 |
| tree | 单选下拉树 | 展开，大量数据，树状结构，字典映射 |
| multi-tree | 多选下拉树
| switcher | 开关
| buttonlist | 单选按钮组
| multi-buttonlist | 多选按钮组
| textarea | 计数文本域
| number | 数字文本框
| number-range | 数字区间
| uploadfile | 文件上传
| uploadsingleimage | 单图片上传
| uploadmuiltimage | 多图片上传
| text | 文本
| div | div占位
| static | 表单静态字段

## API


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fields | 字段模型 | Array | | [] |
| value | 表单值 | Object |  | {} |
| column | 每行显示字段数量 | Number | | 4 |
| labelWidth | 字段前的标签宽度 | Number | | 100 |
| readonly | 只读表单 | Boolean | | false |
| displayFieldFormat | 字典翻译列的后缀 | String | `_DISPLAY` | 空 |
| before | 表单开头追加项 | Slot |  |  |
| after | 表单最后追加项 | Slot |  |  |
| 动态：字段名 | 可以替换某个字段 | Slot |  |  |

### Methods

| 方法名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| validate  | 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise | callback |
| validateField  | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息 | callback  |
| resetFields  | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | 无  |

### Events

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-value-change  | 表单项的数据变化时触发 | name, value, display, model, formValue  |
| input  | 支持v-model | formValue |
