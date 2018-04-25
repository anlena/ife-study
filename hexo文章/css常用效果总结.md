---
title: css常用效果总结
date: 2017-06-20 17:05:03
tags: 
---

# css常用效果总结

[原文地址](http://www.haorooms.com/post/css_common)

css有不少常用的效果，你在平时浏览网站的时候可能会看到，但是真的要自己写的时候，有时候会突然忘记，今天稍微对那些常见的效果做一下小结。

<!--more-->

### 1、每逢大的灾难的时候，很多网站变成了灰色，如何让网站快速变灰？css代码是很简单的，用的是css的filter功能。

代码如下：

```
html {
   filter: grayscale(100%);//IE浏览器
  -webkit-filter: grayscale(100%);//谷歌浏览器
  -moz-filter: grayscale(100%);//火狐
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
  -webkit-filter: grayscale(1);//谷歌浏览器
}
```

有一些网站FLASH动画的颜色不能被CSS滤镜控制，可以在FLASH代码的和之间插入：

```
<param value="false" name="menu"/>
<param value="opaque" name="wmode"/>
```

### 2、DIV可编辑，就是让一个div变成一个类似input输入框的效果。

在div中添加contentEditable="true" 属性就可以了，如下：

```
<div id="div1" contentEditable="true"  ></div>  

<div id="div2" contentEditable="true" ></div>  

 <div contentEditable="true"  id="div3"></div> 
```

其中，我后面有篇编辑器的文章 [http://www.haorooms.com/post/js_guangbiao](http://www.haorooms.com/post/js_guangbiao) 就用到了这个功能！这个是获得iframe光标所在位置的父节点名称，iframe中就用到了contentEditable="true" 属性。

### 3、有些网站为了不让用户复制，设置了div禁止选择的功能，设置如下属性：

```
unselectable="on" onselectstart="return false;"
```

具体代码：

```
<div unselectable="on" onselectstart="return false;">
sdfsdfswerwer324234234234
</div>
```

这样，DIV里面的东西就不能选择复制了！

### 4、CSS 中form表单两端对齐

做form表单的时候，前面经常有姓名，年龄，公司名称等等，有的是2个字，有的是4个字，如何让字对齐呢？有的人的做法是打几个空格，但是这样不是很准确，最好的办法是如下：

css代码:

```
 .test1 {
            text-align:justify;
            text-justify:distribute-all-lines;/*ie6-8*/
            text-align-last:justify;/* ie9*/
            -moz-text-align-last:justify;/*ff*/
            -webkit-text-align-last:justify;/*chrome 20+*/
        }
        @media screen and (-webkit-min-device-pixel-ratio:0){/* chrome*/
            .test1:after{
                content:".";
                display: inline-block;
                width:100%;
                overflow:hidden;
                height:0;
            }
        }
```

html代码：

```
<div class="box1">
    <div class="test1">姓 名</div>
    <div class="test1">姓 名 姓 名</div>
    <div class="test1">姓 名 名</div>
    <div class="test1">所 在 地</div>
    <div class="test1">工 作 单 位</div>
</div>
```

### 5、input声音录入按钮，（紧支持谷歌）

如下图红色框框中的按钮

![enter image description here](http://www.haorooms.com/uploads/images/speach.jpg)

代码如下：

```
<input type="text" class="box" name="s" id="s" class="inputText" placeholder="输入关键词"  x-webkit-speech>
```

添加 x-webkit-speech 属性就可以了。

### 6、给input的placeholder设置颜色

设置方法如下：

```
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
}
```

### 7、[css3实现一个div设置多张背景图片及background-image属性](http://www.haorooms.com/post/css3_bg_multi)

### 8、[CSS选中状态修改，谷歌滚动轴修改](http://www.haorooms.com/post/CSS_selections)

### 9、[css input[type=file\] 样式美化，input上传按钮美化](http://www.haorooms.com/post/css_input_uploadmh)

### 10、CSS :after 和：before选择器

after选择器通常在clear中使用，用法如下：

```
.clearfix:after{display:block;visibility:hidden;clear:both;height:0;content:'.';font-size:0}
```

写了这个clearfix，可以让外层div包裹整个内层，符合谷歌闭合机制。

也可以在某个元素前面或者后面追加，例如：

```
p:after
{ 
content:"haorooms：-";
background-color:yellow;
color:red;
font-weight:bold;
}
```

每个p标签后面都加了一个 -haorooms

### 11、透明度

```
opacity: .9; 
filter:alpha(opacity=90)
```

IE7和IE6中opacity是没有用的，在IE6中DIV透明的方法一般用filter；

```
.haorooms{opacity: 0; cursor:pointer;  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);}
```

### 12、超出长度显示省略号

**单行文本显示...**

一般要指定宽度，然后给如下四个属性。

```
display:bolck;
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
```

案例代码：

```
.haorooms{width:200px;display:bolck;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
```

**多行文本显示....**

主要属性-webkit-line-clamp

```
p {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
```

这个属性比较合适WebKit浏览器或移动端（绝大部分是WebKit内核的）浏览器。

**跨浏览器兼容的方案**

比较靠谱简单的做法就是设置相对定位的容器高度，用包含省略号(…)的元素模拟实现；

```
p {
    position:relative;
    line-height:1.4em;
    /* 3 times the line-height to show 3 lines */
    height:4.2em;
    overflow:hidden;
}
p::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 20px 1px 45px;
   // background:url(和网页背景颜色一样的一张背景图) repeat-y;
  background-color:#fff;
}
```

**注意：**

> height高度正好是line-height的3倍；
>
> 结束的省略好用了半透明的png做了减淡的效果，或者设置背景颜色；
>
> IE6-7不显示content内容，所以要兼容IE6-7可以是在内容中加入一个标签，比如用...去模拟；
>
> 要支持IE8，需要将::after替换成:after；

### 13、阴影效果

```
-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.2);
-moz-box-shadow: 0 1px 1px rgba(0,0,0,.2);
box-shadow: 0 1px 1px rgba(0,0,0,.2);
```

### 14、CSS强制换行和不换行

自动换行

```
div{ 
word-wrap: break-word; 
word-break: normal; 
}
```

强制英文单词断行

```
div{
word-break:break-all;
}
```

强制不换行

```
div{
white-space:nowrap;
}
```

### 15、CSS 圆角

IE 9、Opera 10.5、Safari 5、Chrome 4和Firefox 4，都支持上述的border-radius属性。早期版本的Safari和Chrome，支持-webkit-border-radius属性，早期版本的Firefox支持-moz-border-radius属性。 目前来看，为了保证兼容性，只需同时设置-moz-border-radius和border-radius即可。

```
-moz-border-radius: 15px;
border-radius: 15px;
```

（注意：border-radius必须放在最后声明，否则可能会失效。）

另外，早期版本Firefox的单个圆角的语句，与标准语法略有不同。

```
-moz-border-radius-topleft（标准语法：border-top-left-radius）
-moz-border-radius-topright（标准语法：border-top-right-radius）
-moz-border-radius-bottomleft（标准语法：border-bottom-left-radius）
-moz-border-radius-bottomright（标准语法：border-bottom-right-radius）
```

### 16、[css浏览器兼容问题的一些总结（IE6等）](http://www.haorooms.com/post/IE_jianrong)

### 17、[IE6 中png背景透明的最好方法及谈谈IE6和我的博客](http://www.haorooms.com/post/IE6_tt)

### 18、css3弹性盒子

```
#haorooms ul { //父亲
            display: -moz-box;
            display: -webkit-box;
            display: box;
            -moz-box-orient: horizontal;
            -webkit-box-orient: horizontal;
            box-orient: horizontal;
        }
        #haorooms  ul li{ //儿子设置
            -moz-box-flex: 1;
            -webkit-box-flex: 1;
            box-flex: 1;
            float:none;
}
```

关于css3弹性盒子模型之box-flex，我在博客中暂时没有写相关文章，因为这个属性不支持IE，且是老版本的用法。

**新版本用法：**

html如下：

```
<div class="m_topnav">
    <a class="m_navli m_current" href="#">员工管理</a>
    <a class="m_navli" href="#">员工动态</a>
</div>
```

css如下：

```
.m_topnav{ display: -webkit-flex;display: -moz-flex;display:flex;width:100%;height:1rem;background-color:#fff;border-bottom:1px solid #ddd;}
.m_navli{-webkit-flex:1;-moz-flex:1;flex:1;position: relative;font-size:.24rem;text-align: center;line-height: 1rem;}
```

直接用display:flex方法，支持IE11+ 及所有主流浏览器。

另外，jquery mobile 有一套网格布局法，很不错，支持IE的，有时间可以参考一下，或者研究一下他们是怎么写的，参照他们的方法可以自己改写一下！

关于弹性盒子式的布局，大家也可以看下bootstrap,bootstrap提出栅格类的一个说法，你引进他的css之后，可以用col-mid-*来进行布局。例如：

```
<div class="row">
  <div class="col-md-6">.col-md-6</div>
  <div class="col-md-6">.col-md-6</div>
</div>
```

各站一半！

```
<div class="row">
  <div class="col-md-8">.col-md-8</div>
  <div class="col-md-4">.col-md-4</div>
</div>
```

前面的是整个宽度的三分之二，后面是整个宽度的三分之一！

具体可以看看bootstrap的样式解释：[http://v3.bootcss.com/css/](http://v3.bootcss.com/css/)

### 19、textarea禁止拖动

```
resize: none; //禁止拖动
```

**以下是resize属性的的各个取值:**

```
none：用户不能操纵机制调节元素的尺寸；
both：用户可以调节元素的宽度和高度；
horizontal：用户可以调节元素的宽度；
vertical：让用户可以调节元素的高度；
inherit：默认继承。
```

### 20、div垂直居中的方法总结

[div垂直居中](http://www.haorooms.com/post/css_div_juzhong)的方法，看我写的一篇文章吧！[http://www.haorooms.com/post/css_div_juzhong](http://www.haorooms.com/post/css_div_juzhong)

### 21、css固定宽高DIV内部元素垂直居中的方法

和上面的20不同，这里说的是一个div内部元素如何垂直居中，具体请看：[http://www.haorooms.com/post/div_guding_inner_center](http://www.haorooms.com/post/div_guding_inner_center)

### 22、纯css制作鼠标移上去显示图片效果

具体请看我的一篇文章：[http://www.haorooms.com/post/css_hover_jqs](http://www.haorooms.com/post/css_hover_jqs)

### 23、CSS3的一些前缀总结

css3为了更好的兼容多个浏览器，通常前面加一大堆前缀，有时候感觉很烦，前缀也容易忘记或者漏掉。下面总结一下！

```
-webkit  /*为Chrome/Safari*/
-moz  /*为Firefox*/
-ms   /*为IE*/
-o  /*为Opera*/
```

以旋转为例

```
-webkit-transform:rotate(-3deg); /*为Chrome/Safari*/
-moz-transform:rotate(-3deg); /*为Firefox*/
-ms-transform:rotate(-3deg); /*为IE*/
-o-transform:rotate(-3deg); /*为Opera*/
transform:rotate(-3deg); /*为nothing*/
```

以border-radius为例(本文上面案例15，CSS 圆角已经提过圆角的问题，下面我们再来重提一下)：

```
-moz-border-radius: 12px; /* FF1-3.6 */
-webkit-border-radius: 12px; /* Saf3-4, iOS 1-3.2, Android <1.6 */
border-radius: 12px; /* Opera 10.5, IE9, Saf5, Chrome, FF4, iOS 4, Android 2.1+ */
```

FF4、Saf5以及Chrome都支持border-radius属性了，我们就没有必要写以上两条了，代码变成：

```
border-radius: 12px;
```

所以有些常用的CSS3效果，由于浏览器都支持了，就不需要前缀，但是为了保险起见，你也可以加上前缀！

### 24、css3的box-sizing

给了两个并排带边框的div百分比宽度，假如不用box-sizing，边框的宽度会在行内显示。用box-sizing：border-box,可以去除边框的占位。

浏览器支持IE9以上及火狐、谷歌、Opera等等。

案例如下：

```
<style> 
div.container
{
width:30em;
border:1em solid;
}
div.box
{
box-sizing:border-box;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */
width:50%;
border:1em solid red;
float:left;
}
</style>
</head>
<body>

<div class="container">
<div class="box">这个 div 占据左半部分。</div>
<div class="box">这个 div 占据右半部分。</div>
</div>
```

语法：

```
box-sizing: content-box|border-box|inherit;
```

### 25、模糊遮罩效率，模糊滤镜效果

```
-webkit-filter: blur(3px);
-moz-filter: blur(3px);
-o-filter: blur(3px);
-ms-filter: blur(3px);
filter: blur(3px);
```

Blur：模糊效果。使选择区内的影像产生虚化的效果，可以平滑的转换影像中的生硬部分。

### 26、渐变效果

默认渐变是从上往下代码如下：

```
background:#ed4a60; 
background: -webkit-linear-gradient(#ed5a5e, #ed3a61);
background: -o-linear-gradient(#ed5a5e, #ed3a61); 
 background: -moz-linear-gradient(#ed5a5e, #ed3a61); 
background: linear-gradient(#ed5a5e, #ed3a61);
```

前面加一个参数，right,left,bottom,top等，就可以指定渐变方向：

```
background:-moz-linear-gradient(left,#ace,#f96);/*Mozilla*/
background:-webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96));/*Old gradient for webkit*/
background:-webkit-linear-gradient(left,#ace,#f96);/*new gradient for Webkit*/
background:-o-linear-gradient(left,#ace,#f96); /*Opera11*/
```

还可以从左上角开始渐变left top，right top(右上角)以此类推，代码如下：

```
background: -moz-linear-gradient(left top, #ace, #f96);
background: -webkit-linear-gradient(left top, #ace, #f96);
background: -o-linear-gradient(left top, #ace, #f96);
```

另外还可以指定渐变角度，这个角度是一个由水平线与渐变线产生的的角度，逆时针方向。因此，使用0deg将产生一个左到右横向梯度，而90度将创建一个从底部到顶部的垂直渐变。

代码如下：

```
background: -moz-linear-gradient(<angle>, #ace, #f96);
background: -webkit-gradient(<type>,<angle>, from(#ace), to(#f96));//老的写法
background: -webkit-linear-gradient(<angle>, #ace, #f96);
background: -o-linear-gradient(<angle>, #ace, #f96);

.deg45 {
  background: -moz-linear-gradient(45deg, #ace, #f96);
  background: -webkit-gradient(linear,0 100%,100% 0%,from(#ace),to(#f96));
  background: -webkit-linear-gradient(45deg, #ace, #f96);
  background: -o-linear-gradient(45deg, #ace, #f96);
}
```