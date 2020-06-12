# 开始使用
## Unity3D
```bash
git clone https://github.com/wuhan005/Asteroid.git
```
1. 使用 Unity3D (2019.1.0f2) 版本打开 `Asteroid` 文件夹。
2. 在 Unity3D 中打开 `/Assets/Scence/Main.unity` 文件。
3. 点击 `Main Camera` 摄像机，在右侧 `Inspector` 面板的 `Main Controller` 中设置 `Url` 为后端 Websocket 接口，播放/编译打包即可。

## 后端
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