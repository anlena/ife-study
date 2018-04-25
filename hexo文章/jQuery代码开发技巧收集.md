---
title: jQuery代码开发技巧收集
date: 2017-06-20 17:32:42
tags:
---

# jQuery代码开发技巧收集,jquery常用的开发代码

[原文地址](http://www.haorooms.com/post/jquery_shouji_all)

今天分享一个jquery常用的开发代码，大部分是网友总结的，总共60条。后期我也会陆续完善！ 把我在开发中常用的写在这里，希望持续关注~~

<!--more-->

**1. 使用siblings()来处理同类元素**

```
// Rather than doing this
$('#nav li').click(function(){
    $('#nav li').removeClass('active');
    $(this).addClass('active');
});
// Do this instead
$('#nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
```

**2. 选择或者不选页面上全部复选框**

```
var tog = false; // or true if they are checked on load
$('a').click(function() {
    $("input[type=checkbox]").attr("checked",!tog);
    tog = !tog;
});
```

**3. 基于输入文字过滤页面元素**

```
//If the value of the element matches that of the entered text
//it will be returned
$('.gbin1Class').filter(function() {
    return $(this).attr('value') == $('input#gbin1Id').val() ;
 })
```

**4. 取得鼠标的X和Y坐标**

```
$(document).mousemove(function(e){
$(document).ready(function() {
$().mousemove(function(e){
$('#XY').html("Gbin1 X Axis : " + e.pageX + " | Gbin1 Y Axis " + e.pageY);
});
});
```

**5. 使得整个列表元素(LI)可点击**

```
$("ul li").click(function(){
  window.location=$(this).find("a").attr("href"); return false;
});
<UL>
<LI><A href="#">GBin1 Link 1</A></LI>
<LI><A href="#">GBin1 Link 2</A></LI>
<LI><A href="#">GBin1 Link 3</A></LI>
<LI><A href="#">GBin1 Link 4</A></LI>
</UL>
```

**6. 使用jQuery来解析XML**

```
function parseXml(xml) {
  //find every Tutorial and print the author
  $(xml).find("Tutorial").each(function()
  {
  $("#output").append($(this).attr("author") + "");
  });
}
```

**7. 判断一个图片是否加载完全**

```
$('#theGBin1Image').attr('src', 'image.jpg').load(function() {
alert('This Image Has Been Loaded');
});
```

**8. 使用jQuery命名事件**

```
//Events can be namespaced like this
$('input').bind('blur.validation', function(e){
    // ...
});
//The data method also accept namespaces
$('input').data('validation.isValid', true);
```

**9. 判断cookie是否激活或者关闭**

```
var dt = new Date();
dt.setSeconds(dt.getSeconds() + 60);
document.cookie = "cookietest=1; expires=" + dt.toGMTString();
var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;
if(!cookiesEnabled)
{
  //cookies have not been enabled
}
```

**10.强制过期cookie**

```
var date = new Date();
date.setTime(date.getTime() + (x * 60 * 1000));
$.cookie('example', 'foo', { expires: date });
```

**11. 使用一个可点击的链接替换页面中所有URL**

```
$.fn.replaceUrl = function() {
        var regexp = /((ftp|http|https)://(w+:{0,1}w*@)?(S+)(:[0-9]+)?(/|/([w#!:.?+=&%@!-/]))?)/gi;
        this.each(function() {
            $(this).html(
                $(this).html().replace(regexp,'<A href="$1">$1</A>')
            );
        });
        return $(this);
    }
//usage
$('#GBin1div').replaceUrl(); 
```

**12. 在表单中禁用“回车键”**

大家可能在表单的操作中需要防止用户意外的提交表单，那么下面这段代码肯定非常有帮助：

```
$("#form").keypress(function(e) {
  if (e.which == 13) {
    return false;
  }
});
```

**13. 清除所有的表单数据**

可能针对不同的表单形式，你需要调用不同类型的清楚方法，不过使用下面这个现成方法，绝对能让你省不少功夫。

```
function clearForm(form) {
  // iterate over all of the inputs for the form
  // element that was passed in
  $(':input', form).each(function() {
    var type = this.type;
    var tag = this.tagName.toLowerCase(); // normalize case
    // it's ok to reset the value attr of text inputs,
    // password inputs, and textareas
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = "";
    // checkboxes and radios need to have their checked state cleared
    // but should *not* have their 'value' changed
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    // select elements need to have their 'selectedIndex' property set to -1
    // (this works for both single and multiple select elements)
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};
```

**14. 将表单中的按钮禁用**

下面的代码对于ajax操作非常有用，你可以有效的避免用户多次提交数据，个人也经常使用：

禁用按钮：

```
$("#somebutton").attr("disabled", true);
```

启动按钮：

```
$("#submit-button").removeAttr("disabled");
```

可能大家往往会使用.attr(‘disabled’,false);，不过这是不正确的调用。

**15. 输入内容后启用递交按钮**

这个代码和上面类似，都属于帮助用户控制表单递交按钮。使用这段代码后，递交按钮只有在用户输入指定内容后才可以启动。

```
$('#username').keyup(function() {
    $('#submit').attr('disabled', !$('#username').val()); 
});
```

**16.禁止多次递交表单**

多次递交表单对于web应用来说是个比较头疼的问题，下面的代码能够很好的帮助你解决这个问题：

```
$(document).ready(function() {
  $('form').submit(function() {
    if(typeof jQuery.data(this, "disabledOnSubmit") == 'undefined') {
      jQuery.data(this, "disabledOnSubmit", { submited: true });
      $('input[type=submit], input[type=button]', this).each(function() {
        $(this).attr("disabled", "disabled");
      });
      return true;
    }
    else
    {
      return false;
    }
  });
});
```

**17. 高亮显示目前聚焦的输入框标示**

有时候你需要提示用户目前操作的输入框，你可以使用下面代码高亮显示标示：

```
$("form :input").focus(function() {
  $("label[for='" + this.id + "']").addClass("labelfocus");
}).blur(function() {
  $("label").removeClass("labelfocus");
});
```

**18. 动态方式添加表单元素**

这个方法可以帮助你动态的添加表单中的元素，比如，input等：

```
//change event on password1 field to prompt new input
$('#password1').change(function() {
        //dynamically create new input and insert after password1
        $("#password1").append("<input type='text' name='password2' id='password2' />");
});
```

**19. 自动将数据导入selectbox中**

下面代码能够使用ajax数据自动生成选择框的内容

```
$(function(){
  $("select#ctlJob").change(function(){
    $.getJSON("/select.php",{id: $(this).val(), ajax: 'true'}, function(j){
      var options = '';
      for (var i = 0; i < j.length; i++) {
        options += '<option value="' + j[i].optionValue + '">' + j[i].optionDisplay + '</option>';
      }
      $("select#ctlPerson").html(options);
    })
  })
})
```

**20.判断一个复选框是否被选中**

代码很简单，如下：

```
$('#checkBox').attr('checked');
```

**21. 使用代码来递交表单**

代码很简单，如下：

```
$("#myform").submit();
```

**22. 创建一个嵌套的过滤器**

```
.filter(":not(:has(.selected))") //去掉所有不包含class为.selected的元素
```

**23. 重用你的元素查询**

```
var allItems = $("div.item");  
var keepList = $("div#container1 div.item"); 
<div>class names: 
$(formToLookAt + " input:checked").each(function() {     keepListkeepList = keepList.filter("." + $(this).attr("name")); });
</div>
```

**24. 使用has()来判断一个元素是否包含特定的class或者元素**

```
//jQuery 1.4.* includes support for the has method. This method will find  
//if a an element contains a certain other element class or whatever it is  
//you are looking for and do anything you want to them. 
$("input").has(".email").addClass("email_icon");
```

**25. 使用jQuery切换样式**

```
//Look for the media-type you wish to switch then set the href to your new style sheet  
$('link[media='screen']').attr('href', 'Alternative.css');  
```

**26. 限制选择的区域**

```
//Where possible, pre-fix your class names with a tag name  
//so that jQuery doesn't have to spend more time searching  
//for the element you're after. Also remember that anything  
//you can do to be more specific about where the element is  
//on your page will cut down on execution/search times  
var in_stock = $('#shopping_cart_items input.is_in_stock');
<ul id="shopping_cart_items">  
<li>  
<input value="Item-X" name="item" class="is_in_stock" type="radio"> Item X</li>  
<li>  
<input value="Item-Y" name="item" class="3-5_days" type="radio"> Item Y</li>  
<li>  
<input value="Item-Z" name="item" class="unknown" type="radio"> Item Z</li>  
</ul> 
```

**27. 如何正确使用ToggleClass**

```
//Toggle class allows you to add or remove a class  
//from an element depending on the presence of that  
//class. Where some developers would use:  
a.hasClass('blueButton') ? a.removeClass('blueButton') : a.addClass('blueButton');  
//toggleClass allows you to easily do this using  
a.toggleClass('blueButton'); 
```

**28. 设置IE指定的功能**

```
if ($.browser.msie) { // Internet Explorer is a sadist. } 
```

**29. 使用jQuery来替换一个元素**

```
$('#thatdiv').replaceWith('fnuh');
```

**30. 验证一个元素是否为空**

```
if ($('#keks').html()) { //Nothing found ;}  
```

**31. 在无序的set中查找一个元素的索引**

```
$("ul > li").click(function () {  
    var index = $(this).prevAll().length;  
});
```

**32. 绑定一个函数到一个事件**

```
$('#foo').bind('click', function() {  
  alert('User clicked on "foo."');  
}); 
```

**33. 添加HTML到一个元素**

```
$('#lal').append('sometext');
```

**34. 创建元素时使用对象来定义属性**

```
var e = $("", { href: "#", class: "a-class another-class", title: "..." });
```

**35. 使用过滤器过滤多属性**

```
//This precision-based approached can be useful when you use  
//lots of similar input elements which have different types  
var elements = $('#someid input[type=sometype][value=somevalue]').get(); 
```

**36. 使用jQuery预加载图片**

```
jQuery.preloadImages = function() { for(var i = 0; i').attr('src', arguments[i]); } };  
// Usage $.preloadImages('image1.gif', '/path/to/image2.png', 'some/image3.jpg');   
```

**37. 设置任何匹配一个选择器的事件处理程序**

```
$('button.someClass').live('click', someFunction);
  //Note that in jQuery 1.4.2, the delegate and undelegate options have been
  //introduced to replace live as they offer better support for context
    //For example, in terms of a table where before you would use..
  // .live()
  $("table").each(function(){
    $("td", this).live("hover", function(){
    $(this).toggleClass("hover");
    });
  });
  //Now use..
  $("table").delegate("td", "hover", function(){
  $(this).toggleClass("hover");
});
```

**38. 找到被选择到的选项(option)元素**

```
$('#someElement').find('option:selected');
```

**39. 隐藏包含特定值的元素**

```
$("p.value:contains('thetextvalue')").hide();
```

**40. 自动的滚动到页面特定区域**

```
jQuery.fn.autoscroll = function(selector) {
  $('html,body').animate(
    {scrollTop: $(selector).offset().top},
    500
  );
}
//Then to scroll to the class/area you wish to get to like this:
$('.area_name').autoscroll();
```

**42. 检测各种浏览器**

```
Detect Safari (if( $.browser.safari)),
Detect IE6 and over (if ($.browser.msie && $.browser.version > 6 )),
Detect IE6 and below (if ($.browser.msie && $.browser.version <= 6 )),
Detect FireFox 2 and above (if ($.browser.mozilla && $.browser.version >= '1.8' ))
```

**42. 替换字符串中的单词**

```
var el = $('#id');
el.html(el.html().replace(/word/ig, ''));
```

**43. 关闭右键的菜单**

```
$(document).bind('contextmenu',function(e){ return false; });
```

**44. 定义一个定制的选择器**

```
$.expr[':'].mycustomselector = function(element, index, meta, stack){
// element- is a DOM element
// index - the current loop index in stack
// meta - meta data about your selector
// stack - stack of all elements to loop
// Return true to include current element
// Return false to explude current element
};
// Custom Selector usage:
$('.someClasses:test').doSomething();
```

**45. 判断一个元素是否存在**

```
if ($('#someDiv').length) {//hooray!!! it exists...}
```

**46. 使用jQuery判断鼠标的左右键点击**

```
$("#someelement").live('click', function(e) {
    if( (!$.browser.msie && e.button == 0) || ($.browser.msie && e.button == 1) ) {
        alert("Left Mouse Button Clicked");
    }
    else if(e.button == 2)
        alert("Right Mouse Button Clicked");
});
```

**47. 显示或者删除输入框的缺省值**

```
//This snippet will show you how to keep a default value
//in a text input field for when a user hasn't entered in
//a value to replace it
swap_val = [];
$(".swap").each(function(i){
    swap_val[i] = $(this).val();
    $(this).focusin(function(){
        if ($(this).val() == swap_val[i]) {
            $(this).val("");
        }
    }).focusout(function(){
        if ($.trim($(this).val()) == "") {
            $(this).val(swap_val[i]);
        }
    });
});
<INPUT class=swap value="Enter Username here.." type=text> 
```

**48. 指定时间后自动隐藏或者关闭元素(1.4支持）**

```
//Here's how we used to do it in 1.3.2 using setTimeout
setTimeout(function() {
  $('.mydiv').hide('blind', {}, 500)
}, 5000);
//And here's how you can do it with 1.4 using the delay() feature (this is a lot like sleep)
$(".mydiv").delay(5000).hide('blind', {}, 500);
```

**49. 动态创建元素到DOM**

```
var newgbin1Div = $('');
newgbin1Div.attr('id','gbin1.com').appendTo('body');
```

**50. 限制textarea的字符数量**

```
jQuery.fn.maxLength = function(max){
  this.each(function(){
    var type = this.tagName.toLowerCase();
    var inputType = this.type? this.type.toLowerCase() : null;
    if(type == "input" && inputType == "text" || inputType == "password"){
      //Apply the standard maxLength
      this.maxLength = max;
    }
    else if(type == "textarea"){
      this.onkeypress = function(e){
        var ob = e || event;
        var keyCode = ob.keyCode;
        var hasSelection = document.selection? document.selection.createRange().text.length > 0 : this.selectionStart != this.selectionEnd;
        return !(this.value.length >= max && (keyCode > 50 || keyCode == 32 || keyCode == 0 || keyCode == 13) && !ob.ctrlKey && !ob.altKey && !hasSelection);
      };
      this.onkeyup = function(){
        if(this.value.length > max){
          this.value = this.value.substring(0,max);
        }
      };
    }
  });
};
//Usage:
$('#gbin1textarea').maxLength(500);
```

**51. 为函数创建一个基本测试用例**

```
//Separate tests into modules.
module("Module B");
test("some other gbin1.com test", function() {
  //Specify how many assertions are expected to run within a test.
  expect(2);
  //A comparison assertion, equivalent to JUnit's assertEquals.
  equals( true, false, "failing test" );
  equals( true, true, "passing test" );
});
```

**52. 使用jQuery克隆元素**

```
var cloned = $('#gbin1div').clone();
```

**53. 测试一个元素在jQuery中是否可见**

```
if($(element).is(':visible') == 'true') { //The element is Visible }
```

**54. 元素屏幕居中**

```
jQuery.fn.center = function () {
  this.css('position','absolute');
  this.css('top', ( $(window).height() - this.height() ) / +$(window).scrollTop() + 'px');
  this.css('left', ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + 'px');return this;
}
//Use the above function as: $('#gbin1div').center();
```

**55. 使用特定名字的元素对应的值生成一个数组**

```
var arrInputValues = new Array();
$("input[name='table[]']").each(function(){
     arrInputValues.push($(this).val());
});
```

**56. 剔除元素中的HTML**

```
(function($) {
    $.fn.stripHtml = function() {
        var regexp = /<("[^"]*"|'[^']*'|[^'">])*>/gi;
        this.each(function() {
            $(this).html(
                $(this).html().replace(regexp,"")
            );
        });
        return $(this);
    }
})(jQuery);
//usage:
$('p').stripHtml();
```

**57. 使用closest来得到父元素**

```
$('#searchBox').closest('div');
```

**58. 使用firebug来记录jQuery事件**

```
// Allows chainable logging
// Usage: $('#someDiv').hide().log('div hidden').addClass('someClass');
jQuery.log = jQuery.fn.log = function (msg) {
      if (console){
         console.log("%s: %o", msg, this);
      }
      return this;
};
```

**59. 点击链接强制弹出新窗口**

```
jQuery('a.popup').live('click', function(){
  newwindow=window.open($(this).attr('href'),'','height=200,width=150');
  if (window.focus) {newwindow.focus()}
  return false;
});
```

**60 .点击链接强制打开新标签页**

```
jQuery('a.newTab').live('click', function(){
  newwindow=window.open($(this).href);
  jQuery(this).target = "_blank";
  return false;
});
```

**61 .简单的tab标签切换**

```
jQuery('#meeting_tabs ul li').click(function(){
        jQuery(this).addClass('tabulous_active').siblings().removeClass('tabulous_active');
        jQuery('#tabs_container>.pane:eq('+jQuery(this).index()+')').show().siblings().hide();   
 })

<div id="meeting_tabs">
                <ul>
                     <li class="tabulous_active"><a href="#" title="">进行中</a></li>
                      <li><a href="#" title="">未开始</a></li>
                      <li><a href="#" title="">已结束</a></li>
                       <li><a href="#" title="">全部</a></li>
                 </ul>
   <div id="tabs_container">
            <div  class="pane"     >1</div>
            <div  class="pane"     >2</div>
            <div  class="pane"     >3</div>
           <div  class="pane"     >4</div>
  </div>
</div>
```

是不是很简洁呢？

### 62、js和jquery解决placeholder兼容IE8等低版本浏览器

```
<script type="text/javascript">  
  if( !('placeholder' in document.createElement('input')) ){  

    $('input[placeholder],textarea[placeholder]').each(function(){   
      var that = $(this),   
      text= that.attr('placeholder');   
      if(that.val()===""){   
        that.val(text).addClass('placeholder');   
      }   
      that.focus(function(){   
        if(that.val()===text){   
          that.val("").removeClass('placeholder');   
        }   
      })   
      .blur(function(){   
        if(that.val()===""){   
          that.val(text).addClass('placeholder');   
        }   
      })   
      .closest('form').submit(function(){   
        if(that.val() === text){   
          that.val('');   
        }   
      });   
    });   
  }  
</script> 
```