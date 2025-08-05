import { message } from "@/utils/message";
import { getCodeImg } from "@/api/aslsystem";
/**
 * 获取图片验证码
 * @returns  验证码图片
 */
export const getImgCode = async () => {
  let blob: Blob | any = await getCodeImg();
  console.log("🚀🚀🚀 ~ getImgCode ~ blob🚀🚀🚀", blob);
  if (blob) {
    let imgElement = document.getElementById("captchaCanvas");
    imgElement.setAttribute("src", blob.data.img); // 将 Blob 转换为可用的 URL
    message("获取验证码成功", { type: "success" });
    return true;
  } else {
    message("获取验证码失败", { type: "error" });
    return false;
  }
};
