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
├── asteroid            （Asteroid 大屏）
│   ├── client.go
│   ├── handler.go
│   ├── hub.go
│   └── model.go
├── asteroid.go         （Asteroid Web API）
├── bulletin.go         （公告 Web API）
├── bulletin_test.go
├── challenge.go        （题目 Web API）
├── challenge_test.go
├── check.go            （Check 操作）
├── conf                （配置文件控制）
│   ├── Cardinal.toml
│   ├── config.go
│   └── model.go
├── dynamic_config.go   （动态设置）
├── file.go             （图片上传）
├── flag.go             （提交、刷新 Flag，SSH 测试）
├── flag_test.go
├── frontend            （前端文件系统）
│   └── fs.go
├── gamebox.go          （GameBox Web API）
├── gamebox_test.go
├── healthy.go          （平台健康监测）
├── install.go          （安装）
├── locales             （i18n 语言包）
│   ├── en-US.yml
│   ├── i18n.go
│   └── zh-CN.yml
├── log.go              （日志）
├── log_test.go
├── main.go             （程序入口）
├── main_test.go
├── manager.go          （管理员账号 Web API）
├── manager_test.go
├── mysql.go            （数据库、表模型）
├── rank.go             （队伍排名）
├── router.go           （Web API 路由）
├── score.go            （分数计算）
├── service.go          （主服务）
├── store.go            （缓存）
├── team.go             （队伍 Web API）
├── team_test.go
├── timer.go            （时间）
├── uploads             （上传文件夹）
├── utils               （常用组件）
│   └── utils.go
├── webhook.go          （WebHook Web API）
└── webhook_test.go
```

### 更新前端
```sh
go get -u github.com/vidar-team/Cardinal_frontend
go get -u github.com/vidar-team/Cardinal_manager_frontend
```