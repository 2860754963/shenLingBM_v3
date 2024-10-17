<template>
  <v-chart :options="chartOptions" style="height: 400px; width: 400px" />
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar", // 指定图表类型为 'bar' (柱状图)
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
};
</script>
