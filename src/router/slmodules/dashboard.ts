import { $t } from "@/plugins/i18n";
import { dashboard } from "@/router/enums";

export default {
  path: "/dashboard",
  redirect: "/dashboard/index",
  meta: {
      icon: "ri:file-info-line",
    title: $t("menus.slbmDashboard"),
    rank: dashboard
  },
  children: [
    {
      path: "/dashboard/index",
      name: "dashboard",
      component: () => import("@/views/aslbm/dashboard/index.vue"),
      meta: {
        title: $t("menus.slbmDashboard"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
