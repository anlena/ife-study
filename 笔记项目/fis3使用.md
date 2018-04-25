fis3使用

1.将项目构建到某个目录下

​	fis3 release -d ./output

​	fis3 release -d ../dist

​	fis3 release -d D:\output

2.资源定位(将某种资源放到哪个目录下，配置文件)

​	`fis.match('*,{png,js,css}',{`	

​		release:'./static/$0'

​	`});`

3.给资源添加md5值

​	fis.match('*.js', {
 	 	useHash: false
​	});

​	fis.match('*.css', {
​		useHash: false
​	});

​	fis.match('*.png', {
  		useHash: false
​	});

4.压缩代码

​	fis.match('*.js', {
 		 // fis-optimizer-uglify-js 插件进行压缩，已内置
  		optimizer: fis.plugin('uglify-js')
​	});

​	fis.match('*.css', {
  		// fis-optimizer-clean-css 插件进行压缩，已内置
  		optimizer: fis.plugin('clean-css')
​	});

​	fis.match('*.png', {
  		// fis-optimizer-png-compressor 插件进行压缩，已内置
  		optimizer: fis.plugin('png-compressor')
​	});

4.压缩图片

​	CSS格式

​	li.list-1::before {
 		 background-image: url('./img/list-1.png?__sprite');
​	}

​	li.list-2::before {
  		background-image: url('./img/list-2.png?__sprite');
​	}



5.功能组合

​	// 加 md5
​	fis.match('*.{js,css,png}', {
  		useHash: true
​	});

​	// 启用 fis-spriter-csssprites 插件
​	fis.match('::package', {
​	  	spriter: fis.plugin('csssprites')
​	});

​	// 对 CSS 进行图片合并
​	fis.match('*.css', {
​	  // 给匹配到的文件分配属性 `useSprite`
 		 useSprite: true
​	});

​	fis.match('*.js', {
​	  // fis-optimizer-uglify-js 插件进行压缩，已内置
​		  optimizer: fis.plugin('uglify-js')
​	});

​	fis.match('*.css', {
​	  // fis-optimizer-clean-css 插件进行压缩，已内置
​		  optimizer: fis.plugin('clean-css')
​	});

​	fis.match('*.png', {
​	  // fis-optimizer-png-compressor 插件进行压缩，已内置
​		  optimizer: fis.plugin('png-compressor')
​	});



开发时关掉一些功能：

可能有时候开发的时候不需要压缩、合并图片、也不需要 hash。那么给上面配置追加如下配置；

​	fis.media('debug').match('*.{js,css,png}', {
  		useHash: false,
  		useSprite: false,
 		 optimizer: null
​	})