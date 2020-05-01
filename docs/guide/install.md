# 安装
## Release 安装（推荐）

[Release 下载](https://github.com/vidar-team/Cardinal/releases)适用于您目标机器的架构程序，运行即可。

```sh
# 解压程序包
tar -zxvf Cardinal_VERSION_OS_ARCH.tar.gz

# 赋予执行权限
chmod +x ./Cardinal

# 运行
./Cardinal
```

## 编译安装

克隆代码，编译后运行生成的二进制文件即可。

```sh
# 克隆代码
git clone https://github.com/vidar-team/Cardinal.git

# 切换目录
cd Cardinal/src

# 编译
go build -o Cardinal

# 赋予执行权限
chmod +x ./Cardinal

# 运行
./Cardinal
```

::: warning
由于 Cardinal 处于快速迭代中，因此请从`master`分支 clone 代码。不要将`dev`分支的代码用于生产环境！
:::