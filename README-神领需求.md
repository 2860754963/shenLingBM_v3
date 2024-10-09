### 神领物流管理，是一个关于物流的后台管理系统

需知：

- 项目实战文档: https://www.yuque.com/shuiruohanyu/eg81u1/fmpg2gg28glmg12y
- 账号: shenlingadmin , 密码:123456
- 这个项目在基础模版上开始开发: https://gitee.com/shuiruohanyu/shenling-admin
- git clone https://gitee.com/shuiruohanyu/shenling-admin
- api 文档:https://apifox.com/apidoc/shared-e9183912-ff44-44bf-a7ad-7aecbc125287/api-69687181
  需求：

- 1.工作台
- 2.基础数据管理中的 机构作业范围，运费管理
- 3.车辆管理中的 车型管理，车辆列表，回车管理
- 4.员工管理的 快递员管理，司机管理，排班管理
- 5.业务管理中的 订单管理和运单管理
- 6.调度管理中的 运输任务管理，线路管理，取件作业管理

- 下载下来之后 , 登录功能 和 基础数据管理--机构管理 的部分功能已经完成
  - 关于登录功能 , 可以每个组员尝试写一下 , 找找感觉 , 但是不要提交 (可以配置为忽略目录)
  - 还有工作台功能 , 每个组件也可以尝试写一下 , 里边有一个图标咱们没用过"水球图"
  - 参考链接: https://www.isqqw.com/?t=liquidFill
  - 工作台功能写完之后 , 只需要一个组员提交即可 (其他人设置忽略)
- 问题: 员工管理-排班管理 , 这个菜单点击会报错
  - 这是因为 /index.vue 里没有内容
