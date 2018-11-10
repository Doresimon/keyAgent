# ABEPasswordPlatform 前端接口

### 用户注册

http://localhost:8000/signup Post 

```json
Values{
   "UserName":             {"UN:roy"},
   "UserPasswordHash":     {hash},
   "ChangePasswordPolicy": {"(UN:roy AND ZS:shuai AND ZS:hei AND SFZ:678987000236787654 AND SJ:17317301908)"},
   "GetTipPolicy":         {"(UN:roy AND SFZ:678987000236787654 AND SJ:17317301908)"},
   "GetTipMessage":        {"shuai & hei"},
   "UserAttributes":       {"UN:roy,SFZ:678987000236787654,SJ:17317301908,YX:zry_nuaa@897.com,ZS:shuai,ZS:hei"},
}
```

* 请求的数据的ID要与上述对应，不然好像解析不了？
* policy 需要括号括起来
* 前缀：姓名：UN，身份证：SFZ，手机：SJ，邮箱：YX，自设属性：ZS



### 用户改密码

http://localhost:8000/changepassword Post

```json
Values{
   "UserName":         {"UN:roy"},
   "UserPasswordHash": {string(hash)},
   "UserAttributes":   {"UN:roy,SFZ:678987000236787654,SJ:17317301908,ZS:shuai,ZS:hei"},
}
```



### 用户获取提示信息

http://localhost:8000/gettip Post

```json
Values{
   "UserName":       {"UN:roy"},
   "UserAttributes": {"UN:roy,SFZ:678987000236787654,SJ:17317301908"},
}
```



### 第三方登录

http://localhost:8000/login Post

```
userdata := url.Values{
   "UserName":       {"UN:roy"},
   "UserPasswordHash": {string(hash)},
}
```