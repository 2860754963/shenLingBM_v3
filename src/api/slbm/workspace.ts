import { http } from "@/utils/http";

//获取工作台数据  这里走的时mock数据
export function getWorkspaceData() {
  return http.request("get", "/manager/workspace");
}

// 获取运输任务分页数据  这里走的是请求
export function getTransportTaskPageData(params: any) {
  return http.request("post", "/slbma/manager/transport-task-manager/page", {
    data: params,
  });
}
