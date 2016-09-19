var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-router')();
var app = koa();

//router.get('/', serve('static'));

//app.use(router.routes());
app.use(serve('static'));
app.use(serve('node_modules'));

app.listen(3000);
