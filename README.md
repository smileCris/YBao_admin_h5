<h1 align="center">柚宝母婴照护---By Cris</h1>

### 目录
```
- 数据分析
- 睡前故事
  - 故事列表
- 妈妈圈
  - 话题管理
  - 动态管理
- 育儿问答
  - 问答列表
- 用户管理
  - 用户列表
- 系统通知
  - 通知列表
- 系统管理
  - 个人中心
  - 账号管理
```

#### 数据分析
数据分析记录了app访问量，活跃人数（参与妈妈圈），评论人数（参与育儿问答），收听人数（收听睡前故事）<br>
以图表的形式直观地展示该app的使用状况。

#### 睡前故事管理
故事列表 增删改查

#### 妈妈圈管理
话题管理 增删改查
动态管理 增删改查

#### 育儿问答
问答列表 增删改查

#### 用户管理
用户列表 查找、禁用

#### 系统通知
通知列表 增删改查

#### 系统管理
个人中心 信息修改
账号管理 对管理员账号的增删改查

### Ant Design Pro脚手架
本项目基于开源脚手架Ant Design Pro，使用说明
```bash
$ git clone https://github.com/ant-design/ant-design-pro.git --depth=1
$ cd ant-design-pro
$ npm install
$ npm start         # visit http://localhost:8000
```

### 部分文件使用
locale/zh-CN.js  已有英文对应的中文<br>
config/router.config.js  配置菜单<br>
utils/request.js  基于fetch封装的进行http请求的工具函数<br>
config/config.js  配置代理服务器<br>
services/api.js  调用接口<br>
使用npm run start:no-proxy 启动项目
