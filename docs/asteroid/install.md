# 开始使用
[[toc]]
## Release 安装（推荐）
[Release 下载](https://github.com/wuhan005/Asteroid/releases)适用于您目标机器的架构程序。

### Windows （32/64位）
1. 解压压缩包。
2. 打开 `./Asteroid_Data/StreamingAssets/asteroid.ini` 修改配置文件。
    ```ini
    [connect]
    # 后端 WebSocket 接口，可以在 Cardinal 后台找到
    url = ws://localhost:19999/api/asteroid

    [scene]
    # 飞船圆圈半径
    radius = 20
    ```
3. 双击 `Asteroid.exe` 运行即可。

### macOS （Intel 64位）
1. 解压压缩包。
2. 右键`Asteroid.app`，点击`显示包内容`。
3. 打开`./Contents/Resources/Data/StreamingAssets/asteroid.ini` 修改配置文件。
    ```ini
    [connect]
    # 后端 WebSocket 接口，可以在 Cardinal 后台找到
    url = ws://localhost:19999/api/asteroid

    [scene]
    # 飞船圆圈半径
    radius = 20
    ```
4. 在压缩包目录下打开终端，运行：
    ```bash
    chmod +x ./Asteroid.app/Contents/MacOS/* 
    ```
5. 双击 `Asteroid.app` 运行即可。

### Linux (64位)
1. 解压压缩包。
2. 打开`./Asteroid_Data/StreamingAssets/asteroid.ini` 修改配置文件。
    ```ini
    [connect]
    # 后端 WebSocket 接口，可以在 Cardinal 后台找到
    url = ws://localhost:19999/api/asteroid

    [scene]
    # 飞船圆圈半径
    radius = 20
    ```
3. 在压缩包目录下打开终端，运行：
    ```bash
    chmod +x Asteroid
    ```
4. 运行 `Asteroid` 即可。

## 独立部署
### Unity3D 端
```bash
git clone https://github.com/wuhan005/Asteroid.git
```
1. 使用 Unity3D (2019.1.0f2) 版本打开 `Asteroid` 文件夹。
2. 在 Unity3D 中打开 `/Assets/Scence/Main.unity` 文件。
3. 点击 `Main Camera` 摄像机，在右侧 `Inspector` 面板的 `Main Controller` 中设置 `Url` 为后端 Websocket 接口，播放/编译打包即可。

### 后端
```bash
git clone https://github.com/wuhan005/Asteroid_backend
go mod tidy
go build -o Asteroid
```

创建`team.txt`文件，队伍名一行一个。


```bash
# 运行
./Asteroid
```
* `--port` HTTP 监听端口（默认：12345）
* `--token` HTTP Authorization 请求头（默认随机字符串）