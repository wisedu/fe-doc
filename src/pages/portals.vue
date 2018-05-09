<template>
  <div>
    <div></div>
    <div style="padding: 0 0 48px 48px;background-color: #fff;">
      <!--颜色-->
      <div>
        <div class="m-b-24 tg-h2">颜色</div>
        <div class="portals-colors">
          <template v-for="colorType in colorTypes">
            <div class="portals-colors-block">
              <div class="tg-h3">{{colorType.text}}</div>
              <div class="portals-colors-container">
                <template v-for="color in colors">
                  <template v-for="index in color.count">
                    <div>
                      <div :class="getClassName(color.name, index, colorType.name, colorType.handle)">{{getClassName(color.name, index, colorType.name, colorType.handle)}}</div>
                    </div>
                  </template>
                </template>
              </div>
            </div>
          </template>

          <div class="portals-colors-block">
            <div class="tg-h3">上下左右边框</div>
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
        <div class="m-b-24 tg-h2">栅格</div>
        <div class="portals-grid">
          <div class="tg-h4">使用方式与bootstrap一致</div>
          <div class="tg-h4">系统会自动分为最多12列</div>
          <div class="tg-h4">使用单一的一组 .tg-col-* 栅格类，就可以创建一个基本的栅格系统，所有“列（column）必须放在 ” .tg-row 内。</div>
          <div>
            <div>
              <div class="tg-h5">通用栅格</div>

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
              <div class="tg-h5">多卡片尺寸适配</div>
              <img class="logo" src="../assets/card-grid.png" alt="">
              <div class="tg-h5">希望在1712px宽度的卡片上使用，则栅格类为 .tg-col-1712-*</div>
              <div class="tg-h5">希望在1136px宽度的卡片上使用，则栅格类为 .tg-col-1136-*</div>
              <div class="tg-h5">希望在560px宽度的卡片上使用，则栅格类为 .tg-col-560-*</div>
              <div class="tg-h5">希望在368px宽度的卡片上使用，则栅格类为 .tg-col-368-*</div>
              <div class="m-b-24 tg-h5">希望在某个宽度的卡片上隐藏列，可在该列上添加隐藏样式类 .tg-col-*-hide，如希望在小于等于1136px的卡片上隐藏列 .tg-col-1136-hide</div>

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
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-6 tg-col-560-6 tg-bg-primary-1"</span>&gt;</span> 1 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-3 tg-col-560-6 tg-bg-success-1"</span>&gt;</span> 2 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-3 tg-col-560-hide tg-bg-danger-1"</span>&gt;</span> 3 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-3 tg-col-1136-hide tg-bg-warning-1"</span>&gt;</span> 4 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  </code>
              </pre>

            </div>

          </div>

        </div>
      </div>



      <div>
        <div class="tg-h2">居中</div>
        <div>

          <div>
            <div  class="float-left m-r-16 tg-h3">文字居中</div>
            <div>
                <pre>
                    <code class="lang-html">
                      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-text-center"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    </code>
                </pre>
            </div>
          </div>

          <div>
            <div class="float-left m-r-16 tg-h3">容器居中<span style="color: red;">（注：需对容器设置宽度才能生效）</span></div>
            <div>
                <pre>
                    <code class="lang-html">
                      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-container-center"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:300px;"</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    </code>
                </pre>
            </div>
          </div>

          <div>
            <div class="tg-h3">栅格居中<span style="color: red;">（注：下面的居中，仅在栅格上生效，不兼容IE9，IE9的表现形式为居上居左）</span></div>
            <div>
              <div>
                <div  class="float-left m-r-16 tg-h3">该行下的所有列垂直水平居中（水平居中仅对内容为文本时生效）</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row tg-row-center"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>


              <div>
                <div  class="float-left m-r-16 tg-h3">该行下的所有列垂直居中</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row tg-row-center-v"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>


              <div>
                <div  class="float-left m-r-16 tg-h3">该行下的所有列水平居中（水平居中仅对内容为文本时生效）</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row tg-row-center-h"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>


              <div>
                <div  class="float-left m-r-16 tg-h3">对列单独设置垂直水平居中（水平居中仅对内容为文本时生效）</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6 tg-col-center"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>


              <div>
                <div  class="float-left m-r-16 tg-h3">对列单独设置垂直居中</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6 tg-col-center-v"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>


              <div>
                <div  class="float-left m-r-16 tg-h3">对列单独设置水平居中（水平居中仅对内容为文本时生效）</div>
                <div>
                  <pre>
                      <code class="lang-html">
                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-row"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6 tg-col-center-h"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tg-col-6"</span>&gt;</span> 内容 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                      </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div class="m-b-24">
        <div class="tg-h2">字体</div>
        <div>

        </div>
      </div>


      <div class="m-b-24">
        <div class="tg-h2">边距</div>
        <div v-for="type in mp.type"  class="m-b-24">
          <div class="tg-h3">{{type.text}}</div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td v-for="direct in mp.direct">{{direct.name}}</td>
                </tr>
                <tr v-for="step in (mp.max / mp.step)">
                  <td>{{step * mp.step}}px</td>
                  <td v-for="direct in mp.direct">{{getMPClass(type.name, step * mp.step, direct.ab)}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div class="m-b-24">
        <div class="tg-h2">其他常用样式</div>
        <div>
          <table class="utils-class">
            <tbody>
            <tr><td>左浮动</td><td>tg-left</td></tr>
            <tr><td>右浮动</td><td>tg-right</td></tr>
            <tr><td>清除浮动</td><td>tg-clear</td></tr>
            <tr><td>仅清除子节点浮动</td><td>tg-clear-child</td></tr>
            </tbody>
          </table>
        </div>
      </div>




      <!--开发卡片、内置应用配置-->
      <div class="m-b-24">
        <div class="tg-h2">开发卡片、内置应用配置</div>
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

  .m-r-16{
    margin-right: 16px;
  }

  .float-left{
    float: left;
  }

  .clear:after{
    content: "";
    display: table;
    clear: both;
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

  [class*="tg-br-h"]{
    border: 1px solid #fff;
  }

  .utils-class tr > td:nth-child(1){
    width: 200px;
  }
</style>
<script>
  export default {
    data () {
      return {
        colors: [
          {name: "primary", count: 4},
          {name: "success", count: 4},
          {name: "warning", count: 4},
          {name: "danger", count: 4},
          {name: "grey", count: 6},
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
        classPrefix: 'tg',
        mp: {
          step: 4,
          max: 32,
          direct: [
            {name: '所有的', ab: ''},
            {name: '上边距', ab: 't'},
            {name: '下边距', ab: 'b'},
            {name: '左边距', ab: 'l'},
            {name: '右边距', ab: 'r'}
          ],
          type: [
            {name: 'm', text: '外边距'},
            {name: 'p', text: '内边距'}
          ]
        }
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

        let className = `${this.classPrefix}${position}${handle}-${name}${index}`;

        return className;
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
      },
      getMPClass: function (type, step, ab) {
        ab = ab ? `-${ab}` : '';
        return `${this.classPrefix}-${type}${ab}-${step}`;
      }
    }
  }
</script>

