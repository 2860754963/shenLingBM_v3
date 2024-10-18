import { http } from "@/utils/http";
//获取树状机构信息
export function getbusearchtree() {
  return http.request("get", "/slbma/manager/business-hall/tree");
}
