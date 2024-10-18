import box from "@iconify-icons/ep/box";
import van from "@iconify-icons/ep/van";
import dataLine from "@iconify-icons/ep/data-line";
import shoppingcartFull from "@iconify-icons/ep/shopping-cart-full";
import user from "@iconify-icons/ep/user";
import money from "@iconify-icons/ep/money";
const commonFuc = [
  {
    name: "取件作业",
    icon: box,
    topagename: "PickupManage",
  },
  {
    name: "派件作业",
    icon: box,
    topagename: "DeliveryManage",
  },
  {
    name: "运输任务",
    icon: van,
    topagename: "TransportionTaskManage",
  },
  {
    name: "线路管理",
    icon: dataLine,
    topagename: "LineManage",
  },
  {
    name: "车辆管理",
    icon: shoppingcartFull,
    topagename: "CarList",
  },
  {
    name: "司机管理",
    icon: user,
    topagename: "DriverManage",
  },
  {
    name: "运费查询",
    icon: money,
    topagename: "FreightManage",
  },
];

export { commonFuc };
