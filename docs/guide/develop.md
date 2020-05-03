# 开发须知

若您想对 Cardinal 进行二次开发，请先阅读此开发须知。

## 前端开发
由于 Cardinal 是前后端分离的 Web 应用，但最终是将前端打包进了一个二进制文件分发给用户。

具体打包整合细节，请参考[这篇文章](https://github.red/vue-embed-into-go/)。

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

## 后端开发
### 更新前端
```sh
go get -u github.com/vidar-team/Cardinal_frontend

go get -u github.com/vidar-team/Cardinal_manager_frontend
```