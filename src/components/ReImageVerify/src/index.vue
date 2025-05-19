<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { getImgCode } from "./hooks";
import _ from "lodash";
defineOptions({
  name: "ReImageVerify",
});
onMounted(() => {
  getImgCode();
});
const handleRefresh = () => {
  _.debounce(getImgCode, 800)();
};
defineExpose({ getImgCode });
</script>

<template>
  <img id="captchaCanvas" @click="handleRefresh" />
</template>
