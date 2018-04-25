---
title: JS魔法堂：函数节流（throttle）与函数去抖（debounce）
date: 2018-02-23 14:55:43
tags:
---

[原文链接](http://www.cnblogs.com/fsjohnhuang/p/4147810.html)



一、前言　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**

  以下场景往往由于事件频繁被触发，因而频繁执行DOM操作、资源加载等重行为，导致UI停顿甚至浏览器崩溃。

<!--more-->

  1. window对象的resize、scroll事件

  2. 拖拽时的mousemove事件

  3. 射击游戏中的mousedown、keydown事件

  4. 文字输入、自动完成的keyup事件

  实际上对于window的resize事件，实际需求大多为停止改变大小n毫秒后执行后续处理；而其他事件大多的需求是以一定的频率执行后续处理。针对这两种需求就出现了debounce和throttle两种解决办法。

**二、什么是debounce　　　　　　　　　　　　　　　　　　　　　　　　　　　　**

**   1. 定义**

　　如果用手指一直按住一个弹簧，它将不会弹起直到你松手为止。

​      也就是说当调用动作n毫秒后，才会执行该动作，若在这n毫秒内又调用此动作则将重新计算执行时间。

　　 *接口定义*：

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
/**
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
* @param idle   {number}    空闲时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/
debounce(idle,action)
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

  ** 2. 简单实现**

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var debounce = function(idle, action){
  var last
  return function(){
    var ctx = this, args = arguments
    clearTimeout(last)
    last = setTimeout(function(){
        action.apply(ctx, args)
    }, idle)
  }
}
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**三、什么是throttle　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 **

**   1. 定义**

　　如果将水龙头拧紧直到水是以水滴的形式流出，那你会发现每隔一段时间，就会有一滴水流出。

　　也就是会说预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期。

​     * 接口定义：*

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
/**
* 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
* @param delay  {number}    延迟时间，单位毫秒
* @param action {function}  请求关联函数，实际应用需要调用的函数
* @return {function}    返回客户调用函数
*/
throttle(delay,action)
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

  ** 2. 简单实现**

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
var throttle = function(delay, action){
  var last = 0return function(){
    var curr = +new Date()
    if (curr - last > delay){
      action.apply(this, arguments)
      last = curr 
    }
  }
}
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**四、underscore v1.7.0相关的源码剖析　　　　　　　　　　　　　　　　　　　　　　　　　　**

   **1. _.throttle函数**

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
 _.throttle = function(func, wait, options) {
    /* options的默认值
     *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
     *  options.leading = true;
     * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
     *  options.trailing = true; 
     * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
     */
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      // 计算剩余时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 当到达wait指定的时间间隔，则调用func函数
      // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
      if (remaining <= 0 || remaining > wait) {
        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        // options.trailing=true时，延时执行func函数
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
   按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，至于remaining > wait的作用是什么，我现在也不太清楚。

```

```
   精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。这里谢谢@GreatFeng的提示！
```

```

```

　**2. _.debounce函数** 

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
_.debounce = function(func, wait, immediate) {
    // immediate默认为false
    var timeout, args, context, timestamp, result;

    var later = function() {
      // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      // 第一次调用该方法时，且immediate为true，则调用func函数
      var callNow = immediate && !timeout;
      // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };
```

[![复制代码](http://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

​          _.debounce实现的精彩之处我认为是通过递归启动计时器来代替通过调用clearTimeout来调整调用func函数的延时执行。

**五、总结　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　**

   throttle和debounce均是通过减少实际逻辑处理过程的执行来提高事件处理函数运行性能的手段，并没有实质上减少事件的触发次数。两者在概念理解上确实比较容易令人混淆，结合各js库的具体实现进行理解效果将会更好。