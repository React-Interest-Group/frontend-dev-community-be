import koa from 'koa';
import JWT from 'koa-jwt';
import Router from 'koa-router';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import json from 'koa-json'; // 处理json格式
import statics from 'koa-static';
import helmet from 'koa-helmet';
import compose from 'koa-compose';
import compress from 'koa-compress';
import path from 'path';
import allRouter from './routes/routes.js';
import config from './config/index';
import errorHandler from './common/ErrorHandle';

const app = new koa(); // 创建实例
const router = new Router();

const isDevMode = process.env.NODE_ENV === 'production' ? false : true;

// 定义无需JWT鉴权的公共路径
const jwt = JWT({ secret: config.JWT_SECRET }).unless({ path: [/^\/public/, /^\/login/] });

/**
 * 使用koa-compose集成中间件
 */
const middleware = compose([
  // 中间件的处理是有顺序的，所以先处理request中的数据
  koaBody(),
  // 绝对路径
  statics(path.join(__dirname, './public')),
  // 处理跨域请求
  cors(),
  json({ pretty: false, param: 'pretty' }),
  helmet(),
  errorHandler,
  jwt
]);

// 如果是生产模式，则压缩代码
if (!isDevMode) {
  app.use(compress());
}

app.use(middleware);

// 将定义的路由里面的方法添加到app应用上，作为中间件进行处理
app.use(allRouter());

app
  // 拦截器，拦截应用中没有的请求，返回4xx错误或者5xx错误
  .use(router.allowedMethods());

app.listen(3001);
