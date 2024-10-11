import { $t } from "@/plugins/i18n";
import { dispatchmanage } from "@/router/enums";
export default {
  path: "/dispatchmanage",
  redirect: "/transport/transport-task",
  meta: {
      icon: "ri:file-info-line",
    title: $t("menus.slbmDispatch"),
    rank: dispatchmanage
  },
  children: [
    {
      path: "/transport/transport-task",
      name: "TransportionTaskManage",
      component: () => import("@/views/aslbm/dispatch-manage/transportion-task-manage/index.vue"),
      meta: {
        title: $t("menus.slbmTransportTask"),
        // showParent: true
      }
    },
     {
      path: "/transport/line-manage",
      name: "LineManage",
      component: () => import("@/views/aslbm/dispatch-manage/line-manage/index.vue"),
      meta: {
        title: $t("menus.slbmLine"),
        // showParent: true
      }
    },
      {
      path: "/branches/pickUptask",
      name: "PickupManage", 
      component: () => import("@/views/aslbm/dispatch-manage/pickup-manage/index.vue"),
      meta: {
        title: $t("menus.slbmPickup"),
        // showParent: true
      }
    },
      {
      path: "/branches/dispatchTask",
      name: "DeliveryManage",
      component: () => import("@/views/aslbm/dispatch-manage/delivery-manage/index.vue"),
      meta: {
        title: $t("menus.slbmDelivery"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;