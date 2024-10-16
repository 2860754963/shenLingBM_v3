<script setup lang="ts">
import { ref, onMounted, reactive, nextTick } from "vue";
import {
  getWorkspaceData,
  getTransportTaskPageData,
} from "@/api/slbm/workspace";
import questionFilled from "@iconify-icons/ep/question-filled";
import { commonFuc } from "./data";
import { ChartBarLine } from "./components/charts";
import { message } from "@/utils/message";
import ChianMap from "./components/china-map/china-map.vue";
defineOptions({
  name: "Dashboard",
});
let workspaceData = ref<any>({});
let transportTaskPageData = ref<any>();
const pureTableRef = ref(null);
const getWorkspace = async () => {
  let res: any = await getWorkspaceData();
  if (res.code === 200) {
    workspaceData.value = res.data;
    console.log("🚀 ~ getWorkspace ~ workspaceData:", workspaceData);
  } else {
    message("获取信息失败！", { type: "error" });
  }
  let params = {
    assignedStatus: "",
    endAgencyId: "",
    id: "",
    licensePlate: "",
    loadingStatus: "",
    page: 1,
    pageSize: 10,
    planArrivalTime: "",
    startAgencyId: "",
    status: "",
    truckId: "",
  };
  let result: any = await getTransportTaskPageData(params);
  console.log(result, "result");
  if (result.code === 200) {
    transportTaskPageData.value = result.data.items.map((item: any, index) => {
      return {
        id: item.id,
        startAgency: item.startAgency.name,
        endAgency: item.endAgency.name,
        licensePlate: item.truck.licensePlate,
        // 任务状态，1为待执行（对应 待提货）、2为进行中（对应在途）、3为待确认（保留状态）、4为已完成（对应 已交付）、5为已取消
        status: (function checkStatus() {
          switch (item.status) {
            case 1:
              return "待提货";
              break;
            case 2:
              return "在途";
              break;
            case 3:
              return "待确认";
              break;
            case 4:
              return "已完成";
              break;
            case 5:
              return "已取消";
              break;

            default:
              break;
          }
        })(),
      };
    });
    await nextTick();
    autoScroll(true);
  } else {
    message("获取运输任务信息失败！", { type: "error" });
  }
};
getWorkspace();

const columns = [
  {
    label: "任务编号",
    prop: "id",
  },
  {
    label: "起始地",
    prop: "startAgency",
  },
  {
    label: "目的地",
    prop: "endAgency",
  },
  {
    label: "车辆",
    prop: "licensePlate",
  },
  {
    label: "任务状态",
    prop: "status",
  },
];
// 自动滚动函数
const autoScroll = (stop) => {
  let timer = null;
  let elTableref = pureTableRef.value.getTableRef();
  const divData = elTableref.$refs.bodyWrapper;
  if (!stop) {
    //  清除定时器
    clearInterval(timer);
  } else {
    timer = setInterval(() => {
      // elTableref.setScrollTop(1);
      // if (divData.clientHeight + divData.scrollTop >= divData.scrollHeight) {
      //   divData.scrollTop = 0;
      //   elTableref.setScrollTop(0);
      // }
    }, 150);
  }
};
onMounted(() => {
  // setInterval(autoScroll, 15000); // 每50ms滚动一次
});
const handleScroll = (event) => {
  console.log(event, "event");
};
</script>

<template>
  <div>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[.8em]"
      >
        <el-card>
          <template #header> 机构概述 </template>
          <div class="flex">
            <div class="flex-2 mr-6">
              <div class="mb-4">
                <span
                  >地址：{{
                    workspaceData?.organOverview?.organAddress || "暂无"
                  }}</span
                >
              </div>
              <div class="mb-6">
                <span
                  >负责人：{{
                    workspaceData?.organOverview?.principal || "暂无"
                  }}</span
                >
              </div>
              <el-button type="primary" size="large">查看营业部分布</el-button>
            </div>
            <div class="flex-1 flex flex-col justify-around items-center">
              <div class="flex w-full justify-around">
                <div class="flex flex-col items-center mb-5">
                  <div class="mb-2">分拣中心(个)</div>
                  <div class="text-[2em]">
                    {{ workspaceData?.organOverview?.sortingCenterNumber || 0 }}
                  </div>
                </div>
                <div class="flex flex-col items-center mb-5">
                  <div class="mb-2">营业部(个)</div>
                  <div class="text-[2em]">
                    {{ workspaceData?.organOverview?.agencyNumber || 0 }}
                  </div>
                </div>
              </div>
              <div class="flex w-full justify-around">
                <div class="flex flex-col items-center">
                  <div class="mb-2">司机人数(个)</div>
                  <div class="text-[2em]">
                    {{ workspaceData?.organOverview?.driverNumber || 0 }}
                  </div>
                </div>
                <div class="flex flex-col items-center">
                  <div class="mb-2">快递员人数(个)</div>
                  <div class="text-[2em]">
                    {{ workspaceData?.organOverview?.courierNumber || 0 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[.8em]"
      >
        <el-card>
          <template #header> 今日数据 </template>
          <div class="flex justify-around pt-[1.6em] pb-[1.6em]">
            <div class="flex flex-col items-center">
              <div>订单金额(元)</div>
              <div class="mt-4 mb-4 text-[2em]">
                {{ workspaceData?.todayData?.orderAmount || 0 }}
              </div>
              <div>
                较昨日 {{ workspaceData?.todayData?.orderAmountChanges || 0 }}
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div>订单数量(笔)</div>
              <div class="mt-4 mb-4 text-[2em]">
                {{ workspaceData?.todayData?.orderNumber || 0 }}
              </div>
              <div>
                较昨日 {{ workspaceData?.todayData?.orderNumberChanges || 0 }}
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div>运输任务(次)</div>
              <div class="mt-4 mb-4 text-[2em]">
                {{ workspaceData?.todayData?.transportTaskNumber || 0 }}
              </div>
              <div>
                较昨日
                {{ workspaceData?.todayData?.transportTaskNumberChanges || 0 }}
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header>
            <div class="flex items-center">
              待办任务
              <el-tooltip effect="light">
                <template #content>
                  待取件率=待取件/(下单数量-取消数量)，且取件类型=上门取件<br />
                  待派送率=待派送/(待派送+派送中+已签收+拒收)<br />
                  未分配率=未分配/全部数据<br />
                  超时率=超时任务/(已完成+进行中+已取消）<br />
                </template>
                <IconifyIconOffline :icon="questionFilled" class="ml-2" />
              </el-tooltip>
            </div>
          </template>
          <div class="flex justify-around pt-5 pb-5">
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="workspaceData?.backlog?.waitingPickupRate"
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">待取件</span>
                <span>
                  {{ workspaceData?.backlog?.waitingPickupNumber || 0 }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="workspaceData?.backlog?.waitingDispatchRate"
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">待派件</span>
                <span>
                  {{ workspaceData?.backlog?.waitingDispatchNumber || 0 }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="
                    workspaceData?.backlog?.unassignedTransportTaskRate
                  "
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">未分配运输</span>
                <span>{{
                  workspaceData?.backlog?.unassignedTransportTaskNumber || 0
                }}</span>
              </div>
            </div>
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="workspaceData?.backlog?.timeoutTransportTaskRate"
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">超时运输</span>
                <span>{{
                  workspaceData?.backlog?.timeoutTransportTaskNumber || 0
                }}</span>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header>
            <div class="flex items-center">
              执行中任务
              <el-tooltip effect="light">
                <template #content>
                  运输率=运输中/(全部订单-待取件-已取件-网点入库-待装车-已取消）<br />
                  派送率=派送中/(待派送+派送中+已签收+拒收）
                </template>
                <IconifyIconOffline :icon="questionFilled" class="ml-2" />
              </el-tooltip>
            </div>
          </template>
          <div class="flex justify-around pt-5 pb-5">
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="workspaceData?.todayData?.taskInTransitRate"
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">运输中</span>
                <span>
                  {{ workspaceData?.todayData?.taskInTransitNumber || 0 }}</span
                >
              </div>
            </div>
            <div>
              <div>
                <el-progress
                  type="circle"
                  :percentage="workspaceData?.todayData?.taskInDeliveryRate"
                />
              </div>
              <div class="text-center mt-[.5em]">
                <span class="mr-1">派送中</span>
                <span>
                  {{
                    workspaceData?.todayData?.taskInDeliveryNumber || 0
                  }}</span
                >
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="mb-5">
      <template #header>常用功能</template>
      <el-row :gutter="24" justify="space-around">
        <el-col
          v-for="(item, index) in commonFuc"
          :key="index"
          :md="4"
          :sm="4"
          :xs="24"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 80 * index,
            },
          }"
          class="mb-[18px]"
        >
          <!--    style="background-color: aqua" -->
          <el-card
            shadow="hover"
            style="background-color: #eceef1; border: none"
          >
            <div class="flex flex-col items-center">
              <div class="mb-5">
                <IconifyIconOffline :icon="item.icon" class="text-4xl" />
              </div>
              <div>{{ item.name }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> 线路管理 </template>
          <div class="h-[25em]">
            <ChianMap />
          </div>
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> 运输任务 </template>
          <div>
            <pure-table
              id="puretableid"
              ref="pureTableRef"
              :header-cell-style="{
                background: 'var(--el-fill-color-light)',
                color: 'var(--el-text-color-primary)',
              }"
              :data="transportTaskPageData"
              :columns="columns"
              height="100%"
              class="h-[25em]"
              @mouseenter="autoScroll(true)"
              @mouseleave="autoScroll(false)"
              @scroll="handleScroll"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> 订单总量 </template>
          <div>
            <ChartBarLine />
          </div>
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[18px]"
      >
        <el-card> <template #header> 订单分布 </template> 123</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
