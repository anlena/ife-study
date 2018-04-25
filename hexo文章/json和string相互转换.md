---
title: json和string相互转换
date: 2017-05-18 16:01:59
tags:
---

1. jQuery插件支持的转换方式

   ```javascript
   $.parseJSON( jsonstr ); //
   jQuery.parseJSON(jsonstr),可以将json字符串转换成json对象 
   ```

2. **浏览器支持的转换方式**(Firefox，chrome，opera，safari，ie9，ie8)等浏览器：

   ```javascript
   JSON.parse(jsonstr); //可以将json字符串转换成json对象 
   JSON.stringify(jsonobj); //可以将json对象转换成json对符串 
   ```

3. **Javascript支持的转换方式**： 

   <!--more-->

   eval('(' + jsonstr + ')'); //可以将json字符串转换成json对象,注意需要在json字符外包裹一对小括号 
   注：ie8(兼容模式),ie7和ie6也可以使用eval()将字符串转为JSON对象，但不推荐这些方式，这种方式不安全eval会执行json串中的表达式。 

4. **JSON官方的转换方式**： 

   http://www.json.org/提供了一个json.js,这样ie8(兼容模式),ie7和ie6就可以支持JSON对象以及其stringify()和parse()方法； 
   可以在https://github.com/douglascrockford/JSON-js上获取到这个js，一般现在用json2.js。

