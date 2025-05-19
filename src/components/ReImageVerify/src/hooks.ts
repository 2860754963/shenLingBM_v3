import { message } from "@/utils/message";
import { getCodeImg } from "@/api/aslsystem";
/**
 * 获取图片验证码
 * @returns  验证码图片
 */
export const getImgCode = async () => {
  let key = new Date().getTime();
  let params = {
    key,
  };
  let blob: Blob | any = await getCodeImg(params);
  if (blob) {
    let imgElement = document.getElementById("captchaCanvas");

    imgElement.setAttribute("src", blob.info.img); // 将 Blob 转换为可用的 URL
    // 将key进行缓存
    localStorage.setItem("slVerifyKey", JSON.stringify(key));
    message("获取验证码成功", { type: "success" });
  } else {
    message("获取验证码失败", { type: "error" });
  }
};
