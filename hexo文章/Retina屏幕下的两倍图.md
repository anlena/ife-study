---
title: Retina屏幕下的两倍图
date: 2017-12-08 13:41:28
tags:
---



[原文地址](http://insights.thoughtworks.cn/css-retina-image/)

* css方案

  ```css
  #element { background-image: url('hires.png'); }

  @media only screen and (min-device-pixel-ratio: 2) {
      #element { background-image: url('hires@2x.png'); }
  }

  @media only screen and (min-device-pixel-ratio: 3) {
      #element { background-image: url('hires@3x.png'); }
  }
  ```

* js

  [retina.js](http://imulus.github.io/)





