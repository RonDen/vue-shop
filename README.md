![license](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=LICENSE)
![readme](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=README.md)
![contributing](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=CONTRIBUTING.md)
![coc](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=CODE_OF_CONDUCT.md)
![codestyle](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=CODE_STYLE.md)
![pulltemplate](http://github.zhangqx.com/file-checker/github/RonDen/vue-shop?path=.github/PULL_REQUEST_TEMPLATE.md)

# vue-shop

## 介绍

前端学习项目，学习构建电商后台管理系统前端网站

学习目标：入门前端 vue 开发，了解前后端分离技术。

![](img/front-back-sep.png)

### 项目结构

```
$ tree .
vue-shop
├─backend 后端代码
├─frontend 前端代码
├─docs  文档、学习资料、任务计划等
└─img   需要的图片
```

### 功能模块划分

![](img/arch.png)

1. 登录/退出功能
2. 用户管理模块
3. 权限管理模块
4. 分类管理模块
5. 参数管理模块
6. 商品管理模块
7. 订单管理模块
8. 数据统计模块

## 安装运行本项目

### 项目依赖

本项目基于 node 开发，前后端均使用 node.js，其中前端使用 Vue.js 与 [Element UI](https://element.eleme.io/)编写。代码规范遵守 ES6。其中后端数据库为 MySQL 5.7（注意 MySQL8.x 版本与 5.x 版本不完全兼容）。

以下为本项目的 node 版本和 vue 版本。

```
$ vue --version
@vue/cli 4.4.6

$ node -v
v14.3.0
```

运行项目主要分为以下步骤：

1. 安装项目依赖

分别进入`frontend/vue-shop`与`backend/vue-api-server`文件夹中，运行

```
npm install
```

即可完成前端和后端项目依赖安装。如果由于网络问题安装失败，可以考虑换源，使用[cnpm](https://github.com/cnpm/cnpm)进行安装。

2. 启动后端服务

在启动后端服务之前，要确保数据库信息被成功导入，并且 MySQL 数据库服务启动成功，3306 端口正常暴露。其中`backend/vue-api-server/db/mydb.sql`文件为数据库信息文件，可以使用`source`命令导入。

```
mysql> source mydb.sql
```

数据库准备工作完成后，在`backend/vue-api-server`文件夹中，运行

```
node app.js
```

如果看到各个 api 访问方式被成功打印，并且没有报错，则说明后端启动成功了。完整的 API 文档可以查看[full_api.md](./docs/full_api.md)文件。

![backend_success](https://user-images.githubusercontent.com/29707503/94365702-90c18d00-0105-11eb-93f2-3363ff9f3d4f.png)

3. 启动前端项目

进入前端代码所在的目录，使用

```
npm run serve
```

启动项目，之后便可以通过[localhost:8080](http://localhost:8080/)访问项目，自动跳转到登录界面。

可以使用用户名`admin`，密码`123456`进行登录。

![login_success](https://user-images.githubusercontent.com/29707503/94366131-85239580-0108-11eb-8bff-db4658136527.png)

![home_page](https://user-images.githubusercontent.com/29707503/94366153-a6848180-0108-11eb-89ab-0abf1b860a7f.png)

之后就可以愉快编码啦 😊😂🤣！

## 参考资源

本项目参考了一下资料和有用的学习资源，希望大家一起学习，共同进步！

[B 站学习课程](https://www.bilibili.com/video/av90846070)

[前端学习参考路线](https://www.cnblogs.com/qianguyihao/p/8776837.html)

[MDN 官方文档](https://developer.mozilla.org/zh-CN/)

[Vue 中文文档](https://cn.vuejs.org/)
