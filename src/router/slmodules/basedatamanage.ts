import { $t } from "@/plugins/i18n";
import { basedatamanage } from "@/router/enums";

export default {
  path: "/basedatamanage",
  redirect: "/branches/organization-manage",
  meta: {
    icon: "ep:set-up",
    title: $t("menus.slbmBaseData"),
    rank: basedatamanage
  },
  children: [
    {
      path: "/branches/organization-manage",
      name: "OrganizationManage",
      component: () => import("@/views/basedata-manage/organization-manage/index.vue"),
      meta: {
        title: $t("menus.slbmInstitution"),
        // showParent: true
      }
    },
     {
      path: "/branches/institutions-jobs-area",
      name: "InstitutionsJobsArea",
      component: () => import("@/views/basedata-manage/institutions-jobs-area/index.vue"),
      meta: {
        title: $t("menus.slbmInstitutionWorkRange"),
        // showParent: true
      }
    },
      {
      path: "/transit/freight-manage",
      name: "FreightManage",
      component: () => import("@/views/basedata-manage/freight-manage/index.vue"),
      meta: {
        title: $t("menus.slbmFreight"),
        // showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
