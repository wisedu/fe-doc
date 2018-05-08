## turing 数据适配组件

### 示例

```js

var hqjxjzlbgsj = new window.turing.DataSource("hqjxjzlbgsj", pageMeta, {userid:"aa"});
window.turing.DataSource.set(hqjxjzlbgsj);

var testDS = window.turing.DataSource.get("hqjxjzlbgsj");

/***
 * 框架会做初始化的动作
exports.DataSource.ready(function() {
		//数据集已经准备完毕，启动页面js
})
 *  /

emapDS.execute({url:"http://res.wisedu.com/fe_components/mock/table.json", method:"get"}).then(function(result){
  console.log(result)
  debugger
});
testDS.execute(testDS.actions.find).then(function(result){
  console.log(result)
  debugger
});

testDS.findAll().then(function(result){
  console.log(result)
  debugger
});

```
