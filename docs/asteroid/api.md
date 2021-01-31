# 后端 API 参考

[[toc]]

-------

Request Header:
```
Authorization: YOUR_TOKEN_HERE
```

### `/websocket` Unity WebSocket 连接地址


### POST `/attack` 攻击特效
```json
{
  "From": 1,
  "To": 2
}
```
### POST `/rank` 设置排行
```json
{
  "Team": [
    {
      "Id": 0,
      "Rank": 1,
      "Score": 1000
    },
    {
      "Id": 1,
      "Rank": 2,
      "Score": 900
    }
  ]
}
```
### POST `/status` 队伍状态
```json
{
  "Id": 0,
  "Status": "attacked"
}
```
* `attacked` 被攻击
* `down` 被 Check Down

### POST `/round` 设置轮数
```json
{
  "Round": 47
}
```

### GET `/easterEgg` 陨石彩蛋动画

### POST `/time` 设置当前轮数剩余时间
```json
{
  "Time": 300
}
```
单位：秒(s)

### POST `/clear` 清除队伍状态
```json
{
  "Id": 0
}
```

### POST `/clearAll` 清除所有队伍状态