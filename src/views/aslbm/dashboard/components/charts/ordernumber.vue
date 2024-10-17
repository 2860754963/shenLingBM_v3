<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

defineOptions({
  name: "orderNumber",
});
const generateData = () => {
  const currentDate = new Date();
  const xAxisData = [];
  const orderAmounts = [];
  const orderCounts = [];

  for (let i = 0; i < 6; i++) {
    const monthDate = new Date();
    monthDate.setMonth(currentDate.getMonth() - i);
    const month = `${monthDate.getFullYear()}.${(monthDate.getMonth() + 1).toString().padStart(2, "0")}`;

    xAxisData.unshift(month);
    orderAmounts.unshift((Math.random() * 2).toFixed(2));
    orderCounts.unshift((Math.random() * 2).toFixed(2));
  }

  return {
    xAxisData,
    orderAmounts,
    orderCounts,
  };
};

const { xAxisData, orderAmounts, orderCounts } = generateData();

let mapOption = {
  backgroundColor: "white",
  title: {
    textStyle: {
      fontSize: 16,
      fontWeight: "bold",
    },
    left: "10%",
    top: "15%",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  grid: {
    top: "30%",
  },
  color: ["#5AD8A6"],
  legend: [
    {
      data: [
        {
          name: "最高值",
          icon: "rect",
        },
      ],
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 12,
      },
      right: "10%",
      top: "10%",
    },
    {
      data: [
        {
          name: "订单金额（元）",
          icon: "rect",
        },
      ],
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 12,
      },
      right: "23%",
      top: "20%",
    },
    {
      data: [
        {
          name: "订单比数",
          icon: "rect",
        },
      ],
      itemWidth: 12,
      itemHeight: 2,
      textStyle: {
        fontSize: 12,
      },
      right: "10%",
      top: "20%",
    },
  ],
  xAxis: [
    {
      type: "category",
      data: xAxisData, // 使用生成的月份数据
      axisPointer: {
        type: "shadow",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      min: 0,
      max: 2.5,
      interval: 0.5,
      axisLabel: {
        formatter(value) {
          return `${value.toFixed(1)}k`; // 保留一位小数
        },
      },
    },
  ],
  series: [
    {
      name: "订单金额（元）",
      type: "bar",
      barWidth: 30,
      itemWidth: 8,
      itemHeight: 8,
      itemStyle: {
        color: "#3e66ff",
        borderRadius: 1,
      },
      data: orderAmounts, // 使用生成的随机订单金额
    },
    {
      name: "订单比数",
      type: "line",
      symbol: "circle",
      symbolSize: 10,
      lineStyle: {
        color: "#26c4b9",
      },
      label: {
        show: true,
        position: "top",
      },
      data: orderCounts, // 使用生成的随机订单比数
    },
  ],
};

const initEcharts = () => {
  const myChart = echarts.init(document.getElementById("orderNumber"));
  mapOption && myChart.setOption(mapOption);
};
const refresh = () => {
  const { xAxisData, orderAmounts, orderCounts } = generateData();
  mapOption.xAxis[0].data = xAxisData;
  mapOption.series[0].data = orderAmounts;
  mapOption.series[1].data = orderCounts;
  initEcharts();
};

defineExpose({
  refresh,
});

onMounted(() => {
  initEcharts();
});
</script>

<template>
  <div id="orderNumber" class="h-full w-full" />
</template>

<style lang="scss" scoped></style>
