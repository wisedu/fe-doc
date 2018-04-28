<template>
  <div>
    <div></div>
    <div style="padding: 0 0 48px 48px;background-color: #fff;">
      <!--颜色-->
      <div>
        <h2 class="m-b-24">颜色</h2>
        <div class="portals-colors">
          <template v-for="colorType in colorTypes">
            <div class="portals-colors-block">
              <h3>{{colorType.text}}</h3>
              <div class="portals-colors-container">
                <template v-for="color in colors">
                  <template v-for="index in color.count">
                    <div>
                      <div class="tg-br-white" :class="getClassName(color.name, index, colorType.name, colorType.handle)">{{getClassName(color.name, index, colorType.name, colorType.handle)}}</div>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </template>

          <div class="portals-colors-block">
            <h3>上下左右边框</h3>
            <div class="portals-colors-container">
              <template v-for="color in colors">
                <template v-for="index in color.count">
                  <div >
                    <div :class="getSingleBorderClassName(color.name, index)">
                      <div v-for="handle in ['t', 'b', 'l', 'r']">{{getClassName(color.name, index, 'br', handle)}}</div>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>


      <!--栅格-->
      <div class="m-b-24">
        <h2 class="m-b-24">栅格</h2>
        <div class="portals-grid">
          <h4>使用方式与bootstrap一致</h4>
          <h4>系统会自动分为最多12列</h4>
          <h4>使用单一的一组 .tg-col-* 栅格类，就可以创建一个基本的栅格系统，所有“列（column）必须放在 ” .tg-row 内。</h4>
          <div>
            <div>
              <h5>通用栅格</h5>

              <div>
                <div class="tg-row">
                  <template v-for="index in 12">
                    <div class="tg-col-1">.tg-col-1</div>
                  </template>
                </div>
                <div class="tg-row">
                  <div class="tg-col-8">.tg-col-8</div>
                  <div class="tg-col-4">.tg-col-4</div>
                </div>
                <div class="tg-row">
                  <div class="tg-col-4">.tg-col-4</div>
                  <div class="tg-col-4">.tg-col-4</div>
                  <div class="tg-col-4">.tg-col-4</div>
                </div>
                <div class="tg-row">
                  <div class="tg-col-6">.tg-col-6</div>
                  <div class="tg-col-6">.tg-col-6</div>
                </div>
              </div>

              <pre>
                  <code class="lang-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-1"</span>&gt;</span>.tg-col-1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-8"</span>&gt;</span>.tg-col-8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-4"</span>&gt;</span>.tg-col-4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-4"</span>&gt;</span>.tg-col-4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-4"</span>&gt;</span>.tg-col-4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-4"</span>&gt;</span>.tg-col-4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span>.tg-col-6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span>.tg-col-6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  </code>
                </pre>

            </div>

            <div>
              <h5>多卡片尺寸适配</h5>
              <img class="logo" src="../assets/card-grid.png" alt="">
              <h5>希望在1712px宽度的卡片上使用，则栅格类为 .tg-col-1712-*</h5>
              <h5>希望在1136px宽度的卡片上使用，则栅格类为 .tg-col-1136-*</h5>
              <h5>希望在560px宽度的卡片上使用，则栅格类为 .tg-col-560-*</h5>
              <h5>希望在368px宽度的卡片上使用，则栅格类为 .tg-col-368-*</h5>
              <h5 class="m-b-24">希望在某个宽度的卡片上隐藏列，可在该列上添加隐藏样式类 .tg-col-*-hide，如希望在小于等于1136px的卡片上隐藏列 .tg-col-1136-hide</h5>

              <div class="m-b-24">
                下面的这个例子可以通过拖动浏览器进行查看，出现的效果如上图所示<br>
              </div>
              <div>
                <div class="tg-row">
                  <div class="tg-col-3 tg-col-1136-6 tg-col-560-6 tg-bg-primary-1">1</div>
                  <div class="tg-col-3 tg-col-1136-3 tg-col-560-6 tg-bg-success-1">2</div>
                  <div class="tg-col-3 tg-col-1136-3 tg-col-560-hide tg-bg-danger-1">3</div>
                  <div class="tg-col-3 tg-col-1136-hide tg-bg-warning-1">4</div>
                </div>
              </div>

              <pre>
                  <code class="lang-html">
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-6 tg-col-560-6"</span>&gt;</span> 1 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-6 tg-col-560-6"</span>&gt;</span> 2 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-3 tg-col-560-hide"</span>&gt;</span> 3 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-hide"</span>&gt;</span> 4 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  </code>
              </pre>

            </div>

          </div>

        </div>
      </div>




      <!--开发卡片、内置应用配置-->
      <div class="m-b-24">
        <h2>开发卡片、内置应用配置</h2>
        <div>下载开发环境，操作说明请按 README.md 进行操作</div>
        <div>公共接口请查看 API.md </div>
        <a href="http://res.wisedu.com/FS/portals/portals.zip">下载</a>
      </div>




    </div>

  </div>
</template>
<style>
  .m-b-24{
    margin-bottom: 24px;
  }
  .portals-colors{
    background-color: #fff;
  }
  .portals-colors-container{
    position: relative;
    width: 900px;
  }
  .portals-colors-container:after{
    content: "";
    display: table;
    clear: both;
  }

 .portals-colors-container > div{
   position: relative;
   float: left;
   width: 208px;
   /*border: 1px solid #ddd;*/
   margin: 4px;
   /*padding: 8px;*/
 }

  .portals-colors-container > div > div{
    padding: 8px;
  }

  [flag="tg-grey-4"],
  [flag="tg-grey-5"],
  [flag="tg-white"],
  [flag="tg-bg-white"],
  [flag="tg-bg-hover-white"],
  [flag="tg-bg-transparent"],
  [flag="tg-bg-hover-transparent"],
  [flag="tg-hover-grey-4"],
  [flag="tg-hover-grey-5"],
  [flag="tg-hover-white"],
  [flag="tg-hover-transparent"]{
    background-color: #ddd;
  }

  .portals-colors-block{
    margin-bottom: 12px;
  }

  .portals-grid .tg-row > div{
    border: 1px solid #ddd;
  }
</style>
<script>
  export default {
    data () {
      return {
        colors: [
          {name: "primary", count: 2},
          {name: "secondary", count: 2},
          {name: "success", count: 2},
          {name: "warning", count: 2},
          {name: "danger", count: 2},
          {name: "grey", count: 5},
          {name: "white", count: 1},
          {name: "transparent", count: 1},
        ],
        colorTypes: [
          {name: '', handle: '', text: '字体色'},
          {name: '', handle: 'h', text: 'hover时的字体色'},
          {name: 'bg', handle: '', text: '背景色'},
          {name: 'bg', handle: 'h', text: 'hover时的背景色'},
          {name: 'br', handle: '', text: '边框'},
          {name: 'br', handle: 'h', text: 'hover时的边框'}
        ],
        classPrefix: 'tg'
      }
    },
    methods: {
      getClassName: function (name, index, position, handle) {
        position = position ? `-${position}` : '';
        handle = handle ? `-${handle}` : '';
        index = `-${index}`;
        if(name === 'white' || name === 'transparent'){
            index = '';
        }
        return `${this.classPrefix}${position}${handle}-${name}${index}`;
      },
      getSingleBorderClassName: function (name, index, isDom) {
        index = `-${index}`;
        if(name === 'white' || name === 'transparent'){
          index = '';
        }

        let _class = '';
        let positions = ['t', 'b', 'l', 'r'];
        for(let position of positions){
            if(isDom){
              _class += `<div>${this.classPrefix}-br-${position}-${name}${index} </div>`;
            }else{
              _class += `${this.classPrefix}-br-${position}-${name}${index} `;
            }
        }
        return _class;
      }
    }
  }
</script>

