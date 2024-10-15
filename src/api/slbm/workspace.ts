import { http } from "@/utils/http";

//获取工作台数据
export function getWorkspaceData() {
  return http.request("get", "/manager/workspace"); 
}

  