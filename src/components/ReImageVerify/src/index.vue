<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { getImgCode } from "./hooks";
import _ from "lodash";
defineOptions({
  name: "ReImageVerify",
});

let result = ref(true);

onMounted(async () => {
  result.value = await getImgCode();
});
const handleRefresh = () => {
  _.debounce(getImgCode, 800)();
};
defineExpose({ getImgCode });
</script>

<template>
  <img v-if="result" id="captchaCanvas" @click="handleRefresh" />
  <div v-else>
    <el-button type="primary" @click="handleRefresh">换一张</el-button>
  </div>
</template>
