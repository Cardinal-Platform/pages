# 开发须知

若您想对 Cardinal 进行二次开发，请先阅读此开发须知。

## 前端开发
### 依赖
* [Node.js](https://nodejs.org/en/download/) (v13.2.0+)
* [Yarn](https://yarn.bootcss.com/docs/install/) (v1.21.1+)
* [togo](https://github.com/bradrydzewski/togo)

### 启动
在进行前端开发测试前，请先启动好 Cardinal 后端，然后执行：
```sh
# 安装依赖
yarn install
# 运行
yarn serve
```

::: warning
经测试 Node.js v14.2.0 版本运行前端会报错，请考虑更换 v13.x 版本。
:::

之后访问命令行中的网址即可。
您可以修改`./src/utils.js`文件来指定测试时的后端 API `baseURL`，从而方便您的开发。

此修改仅对测试环境有效。生产环境编译后为`/api`路径。

```js {5}
import axios from 'axios'

let baseURL = '/api'
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:19999/api'
}
```

### 前端打包
Cardinal 是前后端分离的 Web 应用，但最终是将前端打包进了一个二进制文件分发给用户。

具体打包整合细节，请参考[这篇文章](https://github.red/vue-embed-into-go/)。

1. 生产环境编译：
    ```bash
    yarn build
    ```
2. 前端打包成`.go`文件
    ```bash
    togo http -package dist -output dist_gen.go
    ```
3. `git commit` & `git push`
4. 前端在 GitHub 发布新的 Release

## 后端开发
### 依赖
* [Golang](https://golang.org/dl/) (v1.13+)
* [MySQL](https://www.mysql.com/downloads/) / [MariaDB](https://mariadb.org/download/)

### 依赖安装
```bash
export GO111MODULE=on
export GOPROXY=https://goproxy.cn
go mod tidy
```
  
### 目录结构
```
.
├── LICENSE
├── README.md
├── cardinal.go
├── conf                    （配置文件）
├── frontend                （前端）
├── go.mod
├── go.sum
├── internal
│   ├── asteroid            （Asteroid 3D 大屏）
│   ├── auth
│   │   ├── manager         （管理员登录验证）
│   │   │   └── manager.go
│   │   ├── middleware.go   （登录验证中间件）
│   │   └── team            （选手登录验证）
│   │       └── team.go
│   ├── bootstrap           （启动入口）
│   │   ├── bootstrap.go
│   │   └── bridge.go
│   ├── bulletin            （公告）
│   │   └── bulletin.go
│   ├── container           （Docker 容器支持）
│   │   ├── container.go
│   │   ├── docker.go
│   │   └── image.go
│   ├── db                  （数据库）
│   │   ├── model.go
│   │   └── mysql.go
│   ├── dynamic_config      （动态设置）
│   │   └── dynamic_config.go
│   ├── game                （比赛相关）
│   │   ├── bridge.go
│   │   ├── challenge.go
│   │   ├── check.go
│   │   ├── flag.go
│   │   ├── gamebox.go
│   │   ├── rank.go
│   │   └── score.go
│   ├── healthy             （健康检查）
│   │   ├── healthy.go
│   │   └── panel.go
│   ├── install             （安装向导程序）
│   │   └── install.go
│   ├── livelog             （实时日志）
│   │   ├── handler.go
│   │   ├── livelog.go
│   │   ├── stream.go
│   │   └── subscriber.go
│   ├── logger              （后台大屏日志）
│   │   └── log.go
│   ├── misc                （杂项）
│   │   ├── sentry.go
│   │   ├── version.go
│   │   └── webhook         （WebHook）
│   │       └── webhook.go
│   ├── route               （Web 路由）
│   │   ├── router.go
│   │   └── wrapper.go
│   ├── store               （缓存）
│   │   └── store.go
│   ├── timer               （时间）
│   │   ├── bridge.go
│   │   └── timer.go
│   ├── upload              （文件上传）
│   │   └── file.go
│   └── utils               （组件）
│       ├── const.go
│       ├── utils.go
│       └── utils_test.go
├── locales                 （国际化）
│   ├── en-US.yml
│   ├── i18n.go
│   └── zh-CN.yml
├── test                    （测试）
│   ├── bulletin_test.go
│   ├── cardinal_test.go
│   ├── challenge_test.go
│   ├── log_test.go
│   ├── manager_test.go
│   ├── team_test.go
│   └── webhook_test.go
└── uploads                 （上传文件存储目录）
```

### 更新前端
```sh
go get -u github.com/vidar-team/Cardinal_frontend
go get -u github.com/vidar-team/Cardinal_manager_frontend
```