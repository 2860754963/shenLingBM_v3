import { $t } from "@/plugins/i18n";
import { basedatamanage } from "@/router/enums";

export default {
  path: "/dashboard",
  redirect: "/dashboard/index",
  meta: {
      icon: "ri:file-info-line",
    title: $t("menus.slbmDashboard"),
    rank: basedatamanage
  },
  children: [
    {
      path: "/dashboard/index",
      name: "dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: $t("menus.slbmDashboard"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
