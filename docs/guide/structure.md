# 架构

## 后端
技术栈：Golang + MySQL

* Web 框架使用 [Gin](https://gin-gonic.com/)
* 数据库 ORM 使用 [GORM](https://gorm.io/) 组件。

## 前端
技术栈：Vue.js

* 选手端使用 [Vuetify](http://vuetifyjs.com/)，管理端使用 [ElementUI](https://element.eleme.cn/)
* 前端与后端的整合，请参考[这篇文章](https://github.red/vue-embed-into-go/)

## CI/CD
* 持续集成服务：[Travis CI](https://www.travis-ci.org/)
* 持续部署服务：[GitHub Actions](https://github.com/features/actions)
* 集成测试覆盖率工具：[Codecov](https://codecov.io/)