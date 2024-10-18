<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { message } from "@/utils/message";
import { getbusearchtree } from "@/api/slbm/basedatamg";
import tree from "./components/tree.vue";
import { handleTree } from "@/utils/tree"; //用于自定义构造树形结构

defineOptions({
  name: "OrganizationManage",
});
let treeLoading = ref(false);
let bustree = reactive([]);
const initbustree = async () => {
  treeLoading.value = true;
  let res: any = await getbusearchtree();
  if (res.code === 200) {
    bustree = JSON.parse(res.data);
    console.log("🚀 ~ initbustree ~ bustree.value:", bustree);
    message("获取机构树成功", { type: "success" });
  } else {
    console.log("获取机构树失败");
  }
  treeLoading.value = false;
};
initbustree();
const onTreeSelect = (data: any) => {
  console.log("🚀 ~ onTreeSelect ~ data:", data);
};
</script>

<template>
  <div>
    <el-row :gutter="24" justify="space-around">
      <el-col
        :md="5"
        :sm="5"
        :xs="5"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
      >
        <tree
          :treeData="bustree"
          :treeLoading="treeLoading"
          @tree-select="onTreeSelect"
        />
      </el-col>
      <el-col
        :md="19"
        :sm="19"
        :xs="19"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80 * 1,
          },
        }"
      >
        <el-card class="h-full">
          <el-card>
            <template #header> 机构信息 </template>
            <div>123</div>
          </el-card>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
