import { $t } from "@/plugins/i18n";
import { welcome } from "@/router/enums";

export default {
  path: "/welcome",
  redirect: "/welcome/index",
  meta: {
    icon: "ri:file-info-line",
    title: $t("menus.welcome"),
    rank: welcome
  },
  children: [
    {
      path: "/welcome/index",
      name: "welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: $t("menus.welcome")
      }
    }
  ]
} satisfies RouteConfigsTable;
