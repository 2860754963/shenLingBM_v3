import { http } from "@/utils/http";
// 获取图片验证码
export function getCodeImg(params) {
  return http.request("get", "/slbma/manager/captcha", { params }, {responseType: 'blob'}); 
}

  