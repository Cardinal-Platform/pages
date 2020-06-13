# Asteroid 大屏管理

Asteroid 是使用 Unity3D 开发的一款 AWD 3D 实时大屏，后端已与 Cardinal 深度整合。

关于 Asteroid 项目的信息，请访问 [3D实时大屏(Asteroid)](/asteroid/)。

## Unity3D 连接
Cardinal 默认开启 Asteroid 后端功能，`/api/asteroid` 为 WebSocket 接口。

1. 使用 Unity3D (2019.1.0f2) 版本打开 `Asteroid` 文件夹。
2. 在 Unity3D 中打开 `/Assets/Scence/Main.unity` 文件。
3. 点击 `Main Camera` 摄像机，在右侧 `Inspector` 面板的 `Main Controller` 中设置 `Url` 为 `ws://YOUR_DOMAIN_HERE:19999/api/asteroid`，播放/编译打包即可。

## 手动控制
当一个新的 WebSocket 客户端连接后，Cardinal 会发送当前平台的队伍信息。之后在有新的攻击动作、Check Down 动作、进入新一轮等操作时，均会自动通过 WebSocket 发送消息给 Unity3D 端。**理论上来说是完全不需要用户干预的。**

但您也可以使用后台的管理面板手动控制 Unity3D。

* 刷新队伍信息：更新队伍名称、排行信息。
* 清除所有队伍状态：清除 Unity3D 中队伍飞机的所有状态。
* 发送陨石彩蛋，Unity3D 播放陨石撞击动画。
* 攻击：选定攻击方与被攻击方，播放炮弹攻击动画。
* 设置状态：设置单个队伍的状态。
* 清除队伍状态：清除单个队伍的状态。
* 设置轮数：设置 Unity3D 端显示的当前比赛轮数。
* 设置剩余时间：设置 Unity3D 端显示的当前轮数剩余时间。