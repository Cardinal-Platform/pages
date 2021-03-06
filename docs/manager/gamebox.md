# 靶机管理

添加完一道题目后，还需要为每个队伍分配该题所对应的靶机。

## 添加新靶机
### 手动添加
点击`新增`按钮，则会插入一个新的表单进行靶机信息填写。

### 批量添加
输入 JSON 格式的靶机信息，即可批量添加队伍靶机。

## 删除靶机
不支持单个靶机的删除。在删除题目后，题目下的所有靶机将被删除。

## 自动更新 Flag <Badge text="Beta" type="warning"/>
题目靶机支持自动更新 Flag。

若添加题目时开启了自动更新 Flag 功能，在添加靶机时可以配置更新 Flag 的 SSH 配置。

每轮结束后平台将自动 SSH 连接靶机更新 Flag。

为了确保安全，请设置高强度的 SSH 密码，并对 Flag 文件的修改权限进行限制。

### 测试 SSH 连接
配置完自动更新 Flag 功能后，可以点击`测试 SSH 连接`来测试靶机连接。

测试连接将 SSH 连接上服务器并使用`whoami`指令测试。

## 示例靶机

[Cardinal-Platform/gamebox_demo](https://github.com/Cardinal-Platform/gamebox_demo)

该项目为 Cardinal 题目示例环境。其中包含了一个 Apache + PHP 搭建的 Web 站点，以及一个 MySQL 数据库，并提供了`Dockerfile`与`docker-compose.yml`。您可以参考其配置修改定制您的题目镜像，使其可以在 Cardinal 下使用。

该仓库项目仅用作 Cardinal 靶机环境参考。项目本身**不是**一道 AWD 赛题。

::: tip
**你知道吗？**

示例靶机的 Web 站点是使用 PHP “茄子框架”编写的——来自于我的一次课后作业。
:::
