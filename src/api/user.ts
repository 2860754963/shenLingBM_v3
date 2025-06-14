import { http } from "@/utils/http";

export type UserResult = {
  code: number;
  data: {
    token: {
      expire: number;
      token: string;
    };
    user: {
      id: string;
      createUser: null;
      updateUser: null;
      superior: string;
      account: string;
      name: string;
      orgId: string;
      orgName: null;
      stationId: string;
      stationName: null;
      email: null;
      mobile: string;
      sex: {
        des: string;
        code: string;
      };
      status: Boolean;
      avatar: string | null;
      lastLoginTime: null;
      roles: null;
      roleNames: null;
    };
    // /** 头像 */
    // avatar: string;
    // /** 用户名 */
    // username: string;
    // /** 昵称 */
    // nickname: string;
    // /** 当前登录用户的角色 */
    // roles: Array<string>;
    // /** 按钮级别权限 */
    // permissions: Array<string>;
    // /** `token` */
    // accessToken: string;
    // /** 用于调用刷新`accessToken`的接口时所需的`token` */
    // refreshToken: string;
    // /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    // expires: Date;
  };
  msg: string;
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

export type UserInfo = {
  /** 头像 */
  avatar: string;
  /** 用户名 */
  username: string;
  /** 昵称 */
  nickname: string;
  /** 邮箱 */
  email: string;
  /** 联系电话 */
  phone: string;
  /** 简介 */
  description: string;
};

export type UserInfoResult = {
  success: boolean;
  data: UserInfo;
};

type ResultTable = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    total?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  console.log("进登陆借口");
  // slbm
  return http.request<UserResult>("post", "/slbma/api/login", { data });
};

/** 刷新`token` */
export const refreshTokenApi = (data?: object) => {
  //暂未用到
  return http.request<RefreshTokenResult>("post", "/refresh-token", { data });
};

/** 账户设置-个人信息 */
export const getMine = (data?: object) => {
  return http.request<UserInfoResult>("get", "/mine", { data });
};

/** 账户设置-个人安全日志 */
export const getMineLogs = (data?: object) => {
  return http.request<ResultTable>("get", "/mine-logs", { data });
};
