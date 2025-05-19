import { http } from "@/utils/http";
// 获取图片验证码
export function getCodeImg(params) {
  return http.request(
    "get",
    "/slbma/data/captcha",
    { params },
    { responseType: "json" },
    // responseType还有什么选项
  );
}
