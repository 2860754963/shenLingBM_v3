import { defineFakeRoute } from "vite-plugin-fake-server/client";

const getmonthlyOrderList = () => {
  const result: any = [];
  const currentDate = new Date();
  let currentYear: any = currentDate.getFullYear();
  let currentMonth: any = currentDate.getMonth() + 1; // getMonth() 返回的月份从0开始，所以需要+1
  for (let i = 0; i < 6; i++) {
    if (currentMonth === 0) {
      currentMonth = 12;
      currentYear--;
    }
    result.unshift(`${currentYear}/${currentMonth}`);
    currentMonth--;
  }

  return result;
};
const getsamenumber = () => {
  return Math.floor(Math.random() * 100);
};
export default defineFakeRoute([
  {
    url: "/manager/workspace",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: {
          backlog: {
            timeoutTransportTaskNumber: Math.floor(Math.random() * 100),
            timeoutTransportTaskRate: Math.floor(Math.random() * 100),
            unassignedTransportTaskNumber: Math.floor(Math.random() * 100),
            unassignedTransportTaskRate: Math.floor(Math.random() * 100),
            waitingDispatchNumber: Math.floor(Math.random() * 100),
            waitingDispatchRate: Math.floor(Math.random() * 100),
            waitingPickupNumber: Math.floor(Math.random() * 100),
            waitingPickupRate: Math.floor(Math.random() * 100),
          },
          orderLineChart: {
            // 折线图数据
            monthlyOrderList: {
              dateTime: getmonthlyOrderList(),
              orderNumber: (function getnumber() {
                let result: any = [];
                for (let i = 0; i < 6; i++) {
                  result.push(Math.floor(Math.random() * 100));
                }
                return result;
              })(),
            },
            orderAverageNumber: Math.floor(Math.random() * 100),
            orderMaxNumber: Math.floor(Math.random() * 100),
            orderMinNumber: Math.floor(Math.random() * 100),
          },
          organOverview: {
            agencyNumber: Math.floor(Math.random() * 100),
            courierNumber: Math.floor(Math.random() * 100),
            driverNumber: Math.floor(Math.random() * 100),
            organAddress: "中国北京朝阳区华普国际大厦" + getsamenumber() + "号",
            organName: "华普国际" + getsamenumber(),
            phone: "17719210052",
            principal: "牛牛",
            sortingCenterNumber: Math.floor(Math.random() * 100),
          },
          todayData: {
            orderAmount: Math.floor(Math.random() * 100),
            orderAmountChanges: Math.floor(Math.random() * 100),
            orderNumber: Math.floor(Math.random() * 100),
            orderNumberChanges: Math.floor(Math.random() * 100),
            taskInDeliveryNumber: Math.floor(Math.random() * 100),
            taskInDeliveryRate: Math.floor(Math.random() * 100),
            taskInTransitNumber: Math.floor(Math.random() * 100),
            taskInTransitRate: Math.floor(Math.random() * 100),
            transportTaskNumber: Math.floor(Math.random() * 100),
            transportTaskNumberChanges: Math.floor(Math.random() * 100),
          },
          transportTaskList: [
            {
              endAgency: "上海分拨中心",
              id: Math.floor(Math.random() * 100),
              licensePlate: "00923",
              startAgency: "北京分拨中心",
              // 任务状态，1为待执行（对应 待提货）、2为进行中（对应在途）、3为待确认（保留状态）、4为已完成（对应 已交付）、5为已取消
              status: "待执行",
            },
          ],
        },
        msg: "获取成功",
      };
    },
  },
]);
