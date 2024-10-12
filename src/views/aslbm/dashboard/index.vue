<script setup lang="ts">
defineOptions({
  name: "Dashboard",
});
</script>

<template>
  <div>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> 机构概述 </template>
          123
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[18px]"
      >
        <el-card> <template #header> 今日数据 </template> 123</el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> 待办任务 </template>
          123
        </el-card>
      </el-col>
      <el-col
        :md="12"
        :sm="12"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 2,
          },
        }"
        class="mb-[18px]"
      >
        <el-card> <template #header> 执行中任务 </template> 123</el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" justify="space-around">
      <el-col
        v-for="i in 6"
        :key="i"
        :md="4"
        :sm="4"
        :xs="24"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * i,
          },
        }"
        class="mb-[18px]"
      >
        <el-card>
          <template #header> {{ i }} </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
