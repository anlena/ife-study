---
title: HTML头部声明文件类型
date: 2017-05-09 16:23:43
tags:
---

**在你每一个页面的顶端，你需要文件声明。是的，必须。**

　　如果不指定文件类型，你的HTML不是合法的HTML，并且大部分浏览器会用“怪癖模式（quirks mode）”来处理页面，这意味着浏览器认为你自己也不知道究竟做什么，并且按浏览器自己的方式来处理你的代码。你能是个HTML大师，在地球上打遍天下无敌手，或你的HTML能无瑕疵，CSS能非常完美，但如果没有文件声明，或错误的文件声明，你的网页和一个短视的，独眼的长臂猿婴儿十分艰难地堆砌起来的没两样。

<!--more-->

​      要想写出跨浏览器的CSS，必须知道浏览器解析CSS的两种模式：标准模式(strict mode)和怪异模式(quirks mode)。
所谓的标准模式是指，浏览器按W3C标准解析执行代码；怪异模式则是使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以我们称之为怪异模式。浏览器解析时到底使用标准模式还是怪异模式，与你网页中的DTD声明直接相关，DTD声明定义了标准文档的类型（标准模式解析）文档类型，会使浏览器使用相应的方式加载网页并显示，忽略DTD声明,将使网页进入怪异模式(quirks mode)。

　　标准模式中IE6不认识!important声明，IE7、IE8、Firefox、Chrome等浏览器认识；而在怪异模式中，IE6/7/8都不认识!important声明，这只是区别的一种，还有很多其它区别。所以，要想写出跨浏览器的CSS，你必须采用标准模式。好像太绝对了，呵呵。好吧，要想写出跨浏览器CSS，你最好采用标准模式。

## 常用的 DOCTYPE 声明

### HTML 5

```
<!DOCTYPE html>
```

### HTML 4.01 Strict

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

 

### HTML 4.01 Transitional

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

 

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

 

### HTML 4.01 Frameset

该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">
```

### XHTML 1.0 Strict

该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

### XHTML 1.0 Transitional

该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

### XHTML 1.0 Frameset

该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```