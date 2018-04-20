# Infinite scroll

> 无限滚动指令。

-------------

## 引入

```javascript
import { InfiniteScroll } from 'bh-mint-ui2';

Vue.use(InfiniteScroll);
```

## 例子

为 HTML 元素添加 `v-infinite-scroll` 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 `infinite-scroll-distance` 设置）时，绑定到 `v-infinite-scroll` 指令的方法就会被触发。

```html
<ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul>
<p v-show="loading" class="page-infinite-loading">
  <mt-spinner type="fading-circle"></mt-spinner>
  加载中...
</p>
<p v-show="allLoaded" class="page-infinite-loading">没有更多数据了</p>
```

```javascript
data() {
  return {
    list: [],
    loading: false,
    allLoaded: false
  };
},
methods: {
  loadMore() {
    if(this.list.length && this.list[this.list.length - 1]>=50) {
      this.allLoaded = true;
      return
    };
    this.loading = true;
    //api数据请求
    axios.get('https://res.wisedu.com/fe_components/mock/select.json').then(resp => {
      let last = this.list.length?this.list[this.list.length - 1]:0;
      for (let i = 1; i <= 5; i++) {
        this.list.push(last + i);
      }
      this.loading = false;
    });
  }
}
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| infinite-scroll-disabled | 若为真，则无限滚动不会被触发 | Boolean | | false |
| infinite-scroll-distance | 触发加载方法的滚动距离阈值（像素） | Number | | 0 |
| infinite-scroll-immediate-check | 若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。 | Boolean | | true |
