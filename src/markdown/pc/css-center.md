### 居中

###### 文字居中

```
<div class="tg-text-center"></div>
```

######

###### 容器居中 <span style="color: red;">（注：需对容器设置宽度才能生效）</span>

```
<div class="tg-container-center" style="width:300px;" ></div>
```

######

###### 栅格居中 <span style="color: red;">（注：下面的居中，仅在栅格上生效，不兼容IE9，IE9的表现形式为居上居左）</span>

* 该行下的所有列垂直水平居中 <span style="color: red;">（注：该水平居中仅对内容为文本时生效）</span>

```
<div class="tg-row tg-row-center">
    <div class="tg-col-6"> 内容 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```

* 该行下的所有列垂直居中

```
<div class="tg-row tg-row-center-v">
    <div class="tg-col-6"> 内容 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```

* 该行下的所有列水平居中 <span style="color: red;">（注：该水平居中仅对内容为文本时生效）</span>

```
<div class="tg-row tg-row-center-h">
    <div class="tg-col-6"> 内容 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```

* 对列单独设置垂直水平居中 <span style="color: red;">（注：该水平居中仅对内容为文本时生效）</span>

```
<div class="tg-row">
    <div class="tg-col-6 tg-col-center"> 该列垂直水平居中 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```

* 对列单独设置垂直居中

```
<div class="tg-row">
    <div class="tg-col-6 tg-col-center-v"> 该列垂直居中 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```

* 对列单独设置水平居中 <span style="color: red;">（注：该水平居中仅对内容为文本时生效）</span>

```
<div class="tg-row">
    <div class="tg-col-6 tg-col-center-h"> 该列水平居中 </div>
    <div class="tg-col-6"> 内容 </div>
</div>
```


