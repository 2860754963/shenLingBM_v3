import { $t } from "@/plugins/i18n";
import { carmanage } from "@/router/enums";
export default {
  path: "/carmanage",
  redirect: "/transit/car-models",
  meta: {
    icon: "ep:set-up",
    title: $t("menus.slbmVehicle"),
    rank: carmanage
  },
  children: [
    {
      path: "/transit/car-models",
      name: "CarType",
      component: () => import("@/views/aslbm/car-manage/car-type/index.vue"),
      meta: {
        title: $t("menus.slbmVehicleType"),
        // showParent: true
      }
    },
     {
      path: "/transit/vehicle",
      name: "CarList",
      component: () => import("@/views/aslbm/car-manage/car-list/index.vue"),
      meta: {
        title: $t("menus.slbmVehicleList"),
        // showParent: true
      }
    },
      {
      path: "/transit/car-register",
      name: "CarRegest",
      component: () => import("@/views/aslbm/car-manage/car-regest/index.vue"),
      meta: {
        title: $t("menus.slbmVehicleRegister"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;