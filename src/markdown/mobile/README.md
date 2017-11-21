# Mint UI 使用文档

本文将介绍 Mint UI 的安装方式和基本的用法。

---------


### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i mint-ui -S
```

### CDN
目前可以通过 [unpkg.com/mint-ui](https://unpkg.com/mint-ui/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

::: demo
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
```
:::


### Hello world
通过 CDN 的方式我们可以很容易地使用 Mint UI 写出一个 Hello world 页面。

::: demo
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
</head>
<body>
  <div id="app">
    <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</body>
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- 引入组件库 -->
  <script src="https://unpkg.com/mint-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      methods: {
        handleClick: function() {
          this.$toast('Hello world!')
        }
      }
    })
  </script>
</html>
```
:::
<iframe width="100%" height="300" src="//jsfiddle.net/cinwell_li/Lr75y28t/1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<router-link to="/zh-cn2/quickstart">快速上手</a>。

<br>

**关于事件绑定**

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：
::: demo
```html
<my-component @click.native="handleClick">Click Me</my-component>
```
:::
从易用性的角度出发，我们对 `Button` 组件进行了处理，使它可以监听 `click` 事件：
::: demo
```html
<mt-button @click="handleButtonClick">Click Me</mt-button>
```
:::
但是对于其他组件，还是需要添加 `.native` 修饰符。
<script>
  export default {
    methods:{
      handleClick:function() {

      },
      handleButtonClick:function(){
      }
    }
  };
</script>


# 快速上手

本节将介绍如何在项目中使用 Mint UI。

-----------

## 使用 vue-cli

```bash
npm install -g vue-cli

vue init webpack projectname
```

## 引入 Mint UI

你可以引入整个 Mint UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Mint UI。

### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
  el: '#app',
  components: { App }
})
```
以上代码便完成了 Mint UI 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "mint-ui",
      "style": true
    }
  ]]]
}
```

如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { Button, Cell } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Cell)
 */

new Vue({
  el: '#app',
  components: { App }
})
```

## 开始使用

至此，一个基于 Vue 和 Mint UI 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：

```bash
npm run dev
```

编译：

```bash
npm run build
```
各个组件的使用方法请参阅它们各自的文档。
