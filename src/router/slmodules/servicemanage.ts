import { $t } from "@/plugins/i18n";
import { servicemanage } from "@/router/enums";
export default {
  path: "/servicemanage",
  redirect:  "/business/order-manage",
  meta: {
      icon: "ri:file-info-line",
    title: $t("menus.slbmBusiness"),
    rank: servicemanage
  },
  children: [
    {
      path: "/business/order-manage",
      name: "OrderManage",
      component: () => import("@/views/aslbm/service-manage/order-manage/index.vue"),
      meta: {
        title: $t("menus.slbmOrder"),
        // showParent: true
      }
    },
     {
      path: "/business/waybill",
      name: "WaybillManage",
      component: () => import("@/views/aslbm/service-manage/waybill-manage/index.vue"),
      meta: {
        title: $t("menus.slbmWaybill"),
        // showParent: true
      }
    },
   
  ]
} satisfies RouteConfigsTable;