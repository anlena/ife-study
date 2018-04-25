#### javaScript arguments对象

[原文地址](http://www.cnblogs.com/lwbqqyumidi/archive/2012/12/03/2799833.html)

1、在JavaScript中，arguments对象是比较特别的一个对象，实际上是当前函数的一个内置属性。arguments非常类似Array，但实际上又不是一个Array实例。可以通过如下代码得以证实（当然，实际上，在函数funcArg中，调用arguments是不必要写成funcArg.arguments，直接写arguments即可）。

<!--more-->

```javascript
Array.prototype.testArg = "test";
function funcArg() {
    alert(funcArg.arguments.testArg);  
    alert(funcArg.arguments[0]);
}

alert(new Array().testArg); // result: "test"
funcArg(10);                // result: "undefined"  "10"
```

2、arguments对象的长度是由实参个数而不是形参个数决定的。形参是函数内部重新开辟内存空间存储的变量，但是其与arguments对象内存空间并不重叠。对于arguments和值都存在的情况下，两者值是同步的，但是针对其中一个无值的情况下，对于此无值的情形值不会得以同步。如下代码可以得以验证。

```javascript
function f(a, b, c){
    alert(arguments.length);   // result: "2"
    a = 100;
    alert(arguments[0]);       // result: "100"
    arguments[0] = "qqyumidi";
    alert(a);                  // result: "qqyumidi"
    alert(c);                  // result: "undefined"
    c = 2012;
    alert(arguments[2]);       // result: "undefined"
}

f(1, 2);
```

3、由JavaScript中函数的声明和调用特性，可以看出JavaScript中函数是不能重载的。

根据其他语言中重载的依据："函数返回值不同或形参个数不同"，我们可以得出上述结论：

第一：Javascript函数的声明是没有返回值类型这一说法的；

第二：JavaScript中形参的个数严格意义上来讲只是为了方便在函数中的变量操作，实际上实参已经存储在arguments对象中了。

另外，从JavaScript函数本身深入理解为什么JavaScript中函数是不能重载的：在JavaScript中，函数其实也是对象，函数名是关于函数的引用，或者说函数名本身就是变量。对于如下所示的函数声明与函数表达式，其实含以上是一样的（在不考虑函数声明与函数表达式区别的前提下），非常有利于我们理解JavaScript中函数是不能重载的这一特性。

```javascript
function f(a){
    return a + 10;
}

function f(a){
    return a - 10;
}

// 在不考虑函数声明与函数表达式区别的前提下，其等价于如下

var f = function(a){
    return a + 10;
}

var f = function(a){
    return a - 10;
}
```

4、arguments对象中有一个非常有用的属性：callee。arguments.callee返回此arguments对象所在的当前函数引用。在使用函数递归调用时推荐使用arguments.callee代替函数名本身。

如下：

```javascript
function count(a){
    if(a==1){
        return 1;
    } 
    return a + arguments.callee(--a);
}

var mm = count(10);
alert(mm);
```

