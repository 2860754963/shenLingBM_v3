import { $t } from "@/plugins/i18n";
import { system } from "@/router/enums";

export default {
  path: "/system",
  // redirect: "/system/dept",
  meta: {
    icon: "ri:checkbox-circle-line",
    title: $t("menus.pureSysManagement"),
    rank: system
  },
  children: [
    {
      path: "/system/dept",
      name: "systemDept",
      component: () => import("@/views/system/dept/index.vue"),
      meta: {
        title: $t("menus.pureDept")
      }
    },
    {
      path: "/system/menu",
      name: "systemMenu",
      component: () => import("@/views/system/menu/index.vue"),
      meta: {
        title: $t("menus.pureSystemMenu")
      }
    },
    {
      path: "/system/role",
      name: "systemRole",
      component: () => import("@/views/system/role/index.vue"),
      meta: {
        title: $t("menus.pureRole")
      }
    },
    {
      path: "/system/user",
      name: "systemUser",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        title: $t("menus.pureUser")
      }
    }
  ]
} satisfies RouteConfigsTable;
