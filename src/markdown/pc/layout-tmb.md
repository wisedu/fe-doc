## 上中下布局

![上中下布局](/static/md/layout-tmb.png)


### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| menu | 菜单数据 | Array | `[{"name":"A","icon":"ios-people","url":"http://www.baidu.com"},{"name":"D","url":"","icon":"stats-bars","items":[{"name":"DD","icon":"settings","url":""}]}]` |  |
| logo | logo url地址 | String |  |  |
| userImage | 用户头像url | String |  |  |
| userName | 用户名称 | String |  |  |
| dropMenu | 下拉菜单 | Array | `[{name:"退出",url:"http://www.baidu.com",callback: function() {alert("退出");}}]` |  |
| navPath | 导航路径，层级以数组顺序决定 | Array | `[{"name":"应用","icon":"ios-people","url":"http://www.baidu.com"},{"name":"菜单","url":"http://www.baidu.com"},{"name":"页面","url":"http://www.baidu.com"}]` |  |
| header | 整个头部插槽 | Slot |  |  |
| logo | logo 插槽 | Slot |  |  |
| menu | menu 插槽 | Slot |  |  |
| nav | 路径导航插槽 | Slot | | |
| content | 内容插槽 | Slot |  |  |
| footer | 页脚插槽 | Slot |  |  |

