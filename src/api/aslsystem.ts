import { http } from "@/utils/http";
// 获取图片验证码
export function getCodeImg() {
  return http.request(
    "get",
    "/slbma/api/user/captcha",
    {},
    { responseType: "json" },
  );
}

export const formUpload = (data) => {
  return http.request(
    "post",
    "/slbma/api/upload",
    { data },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
