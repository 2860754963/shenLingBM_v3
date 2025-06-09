import { http } from "@/utils/http";

// type Result = {
//   success: boolean;
//   data: Array<any>;
// };

// export const getAsyncRoutes = () => {
//   console.log('进入异步借口');
//   return http.request<Result>("get", "/get-async-routes");
// };

// slbm
export const getAsyncRoutes = () => {
  return http.request<any>("get", "/slbma/api/user/menus");
};
