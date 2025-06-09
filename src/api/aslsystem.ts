import { http } from "@/utils/http";
// 获取图片验证码
export function getCodeImg() {
  return http.request(
    "get",
    "/slbma/api/captcha",
    {},
    { responseType: "json" },
  );
}
