# 题目 Check 是怎么做的？
Check 与平台是分开的。

根据我们以往举办比赛时的做法，每个出题人负责维护自己的题目以及 Check。

平台会为 Check 提供一个 [Check 账号](/manager/account.html#check-账号)，用来请求题目接口进行扣分。

当 Check 检测到靶机服务器不可用时，Check 会使用管理员账号向平台接口发送请求，平台收到后将对应靶机状态设为 Down，并在本轮结束分数结算时扣分。

## 示例脚本
```python
import requests

# Check 判断逻辑


# 发送 CheckDown 信息到平台
TOKEN = 'CHECK_MANAGER_TOKEN_HERE'  # Check Token
GameBoxID = 1   # 靶机 ID

resp = requests.post('http://localhost:19999/api/manager/checkDown', 
    json={'GameBoxID': GameBoxID}, 
    headers={'Authorization': TOKEN}).json()

if resp['error'] != 0:
    print(resp['msg'])
```