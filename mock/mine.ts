import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { faker } from "@faker-js/faker/locale/zh_CN";

export default defineFakeRoute([
  // 账户设置-个人信息
  {
    url: "/mine",
    method: "get",
    response: () => {
      return {
        success: true,
        data: {
          avatar: "https://avatars.githubusercontent.com/u/56880323?v=4",
          username: "nigulasi",
          nickname: "尼古拉斯99",
          email: "2860754963@163.com",
          phone: "17719210052",
          description: "咸鱼一枚，喜欢吃鱼，爱好是看书，喜欢听音乐。"
        }
      };
    }
  },
  // 账户设置-个人安全日志
  {
    url: "/mine-logs",
    method: "get",
    response: () => {
      let list = [
        {
          id: 1,
          ip: faker.internet.ipv4(),
          address: "中国河南省信阳市",
          system: "macOS",
          browser: "Chrome",
          summary: "账户登录", // 详情
          operatingTime: new Date() // 时间
        },
        {
          id: 2,
          ip: faker.internet.ipv4(),
          address: "中国广东省深圳市",
          system: "Windows",
          browser: "Firefox",
          summary: "绑定了手机号码",
          operatingTime: new Date().setDate(new Date().getDate() - 1)
        }
      ];
      return {
        success: true,
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  }
]);
