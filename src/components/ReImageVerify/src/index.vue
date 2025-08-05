<script setup lang="ts">
import { watch, ref, onMounted } from "vue";
import { getImgCode } from "./hooks";
import _ from "lodash";
defineOptions({
  name: "ReImageVerify",
});
onMounted(() => {
  if (!getImgCode()) {
    let imgElement = document.getElementById("captchaCanvas");
    console.log("🚀🚀🚀 ~ onMounted ~ imgElement🚀🚀🚀", imgElement);
    imgElement.innerHTML = "获取验证码失败,点击重试";
  }
});
const handleRefresh = () => {
  _.debounce(getImgCode, 800)();
};
defineExpose({ getImgCode });
</script>

<template>
  <div>
    <img id="captchaCanvas" @click="handleRefresh" />
    <!-- <el-button type="primary" :text="true" @click="handleRefresh"
      >点击重试</el-button
    > -->
  </div>
</template>
