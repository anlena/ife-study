---
title: JavaScript回调函数
date: 2017-05-10 10:47:59
tags:
---

### JavaScript回调函数

[原文地址](https://cnodejs.org/topic/564dd2881ba2ef107f854e0b)

#### 什么是回调函数

In computer programming, a callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time［引自 维基百科 callback］

回调函数是一段可执行的代码段，它作为一个参数传递给其他的代码，其作用是在需要的时候方便调用这段（回调函数）代码。

在JavaScript中函数也是对象的一种，同样对象可以作为参数传递给函数，因此函数也可以作为参数传递给另外一个函数，这个作为参数的函数就是回调函数。

<!--more-->

回调函数

```javascript
function add(num1, num2, callback){
	var sum = num1 + num2;
	callback(sum);
}

function print(num){
	console.log(num);
}

add(1, 2, print);		//=>3
```

匿名回调函数

```javascript
function add(num1, num2, callback){
	var sum = num1 + num2;
	callback(sum);
}

add(1, 2, function(sum){
	console.log(sum);		//=>3
});
```

jQuery中大量的使用了回调函数

```javascript
$("#btn").click(function() {
  alert("button clicked");
});
```

#### 回调函数有哪些特点

**不会立刻执行**

回调函数作为参数传递给一个函数的时候，传递的只是函数的定义并不会立即执行。和普通的函数一样，回调函数在函调用函数数中也要通过`()`运算符调用才会执行。

**是个闭包**

回调函数是一个闭包，也就是说它能访问到其外层定义的变量。

**执行前类型判断**

在执行回调函数前最好确认其是一个函数。

```javascript
function add(num1, num2, callback){
	var sum = num1 + num2;
	if(typeof callback === 'function'){
		callback(sum);
	}
}
```

**this的使用**注意在回调函数调用时this的执行上下文并不是回调函数定义时的那个上下文，而是调用它的函数所在的上下文。

```javascript
var obj = {
	sum: 0,
	add: function(num1, num2){
		this.sum = num1 + num2;
	}
};

function add(num1, num2, callback){
	callback(num1, num2);
};

add(1,2, obj.add);
console.log(obj.sum);			//=>0
console.log(window.sum);		//=>3
```

上述代码调用回调函数的时候是在全局环境下，因此this指向的是`window`，所以`sum`的值是赋值给`windows`的。

关于`this`执行上下文的问题可以通过`apply`方法解决。

```javascript
var obj = {
	sum: 0,
	add: function(num1, num2){
		this.sum = num1 + num2;
	}
};

function add(num1, num2, callbackObj, callback){
	callback.apply(callbackObj, [ num1, num2 ]);
};

add(1,2, obj, obj.add);
console.log(obj.sum);			//=>3
console.log(window.sum);		//=>undefined
```

**允许传递多个回调函数**

一个函数中可以传递多个回调函数，典型的例子如jQuery

```javascript
function successCallback() {
    // Do stuff before send
}
function successCallback() {
    // Do stuff if success message received
}
function completeCallback() {
    // Do stuff upon completion
}
function errorCallback() {
    // Do stuff if error received
}
$.ajax({
    url: "http://fiddle.jshell.net/favicon.png",
    success: successCallback,
    complete: completeCallback,
    error: errorCallback
});
```

**回调函数嵌套**

一个回调函数中可以嵌入另一个回调函数，对于这种情况出现多层嵌套时，代码会难以阅读和维护，这个时候可以采用命名回调函数的方式调用，或者采用模块化管理函数，也可以用promise模式编程。

#### 回调函数的优点和使用场景

**优点**

1. DRY，避免重复代码。
2. 可以将通用的逻辑抽象。
3. 加强代码可维护性。
4. 加强代码可读性。
5. 分离专职的函数。

**使用场景**

1. 异步编程。
2. 事件监听、处理。
3. setTimeout、setInterval方法。
4. 通用功能，简化逻辑。