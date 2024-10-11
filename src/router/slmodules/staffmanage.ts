import { $t } from "@/plugins/i18n";
import { staffmanage } from "@/router/enums";
export default {
  path: "/staffmanage",
  redirect: "/branches/operational-range",
  meta: {
      icon: "ri:file-info-line",
    title: $t("menus.slbmEmployee"),
    rank: staffmanage
  },
  children: [
    {
      path: "/branches/operational-range",
      name: "CourierManage",
      component: () => import("@/views/aslbm/staff-manage/courier-manage/index.vue"),
      meta: {
        title: $t("menus.slbmCourier"),
        // showParent: true
      }
    },
     {
      path: "/transit/driver",
      name: "DriverManage",
      component: () => import("@/views/aslbm/staff-manage/driver-manage/index.vue"),
      meta: {
        title: $t("menus.slbmDriver"),
        // showParent: true
      }
    },
      {
      path: "/transit/workArrange-manage",
      name: "SchedulingManage",
      component: () => import("@/views/aslbm/staff-manage/scheduling-manage/index.vue"),
      meta: {
        title: $t("menus.slbmScheduling"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;