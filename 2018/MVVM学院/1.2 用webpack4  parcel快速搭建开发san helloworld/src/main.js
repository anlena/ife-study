import san from 'san';
import {router} from 'san-router';
import App from './app.san'

console.log("helloWorld!");

//这是控制路由，引入San组件  不要问我怎么知道，看官方demo学来的。这个东西坑了我好久
router.add({rule: '/', Component: App, target: '#app'});

// 一定要记得启动
router.start();