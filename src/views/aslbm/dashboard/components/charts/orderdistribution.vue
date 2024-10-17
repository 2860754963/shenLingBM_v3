<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
defineOptions({
  name: "OrderDistribution",
});

// 定义城市名称数组
const cities = [
  "湖州",
  "丽水",
  "杭州",
  "舟山",
  "衢州",
  "宁波",
  "温州",
  "台州",
  "绍兴",
  "金华",
  "嘉兴",
];

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomData = () => {
  const data = [];
  const colors = [];
  for (let i = 0; i < cities.length; i++) {
    const randomValue = Math.round(Math.random() * 10000);
    data.push(randomValue);
    colors.push(generateRandomColor()); // 为每个数据生成随机颜色
  }
  return { data, colors };
};

// 调用函数生成随机数据和颜色
const { data, colors } = generateRandomData();

let options: any = {
  xAxis: {
    max: "dataMax",
  },
  yAxis: {
    type: "category",
    data: cities,
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
  },
  series: [
    {
      realtimeSort: true,
      type: "bar",
      data: data, // 使用随机生成的数据
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
      },
      itemStyle: {
        normal: {
          color: function (params) {
            return colors[params.dataIndex]; // 使用为每个柱状生成的随机颜色
          },
        },
      },
    },
  ],
  legend: {
    show: true,
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: "linear",
  animationEasingUpdate: "linear",
};

const initEcharts = () => {
  const myChart = echarts.init(document.getElementById("OrderDistribution"));
  options && myChart.setOption(options);
};

const refresh = () => {
  const { data, colors } = generateRandomData();
  options.series[0].data = data;
  options.series[0].itemStyle.normal.color = function (params) {
    return colors[params.dataIndex];
  };
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
  <div id="OrderDistribution" class="w-full h-full" />
</template>

<style lang="scss" scoped></style>
