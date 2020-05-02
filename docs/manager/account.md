# 账号管理
对于管理端而言，账号分为`管理员账号`与`Check 账号`两种。

## 管理员账号
管理员账号拥有管理端的所有权限，可以调用管理端的所有接口。

每个管理员账号登录后会更新 Token。之前的登录状态将失效。

## Check 账号
对于 Check 的实现，是使用一个 Check 账号来请求平台 CheckDown 接口`/api/manager/checkDown`。

Check 账号只有调用该 CheckDown 接口的权限，尝试访问其余管理接口时会报错。Check 账号也没有密码，无法在管理端登录。

使用时，在管理端生成 Check 账号的 Token，Check bot 使用该 Token 鉴权访问接口。