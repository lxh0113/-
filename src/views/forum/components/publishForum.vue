<template>
  <div class="publishForumBox">
    <div class="left">
      <Editor />
    </div>
    <div class="right">
      <Ai />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Editor from "./editor.vue";
import Ai from "./ai.vue";
</script>

<style lang="scss" scoped>
.publishForumBox {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 20px;

  .left {
    flex: 1;
    height: 100%;
    margin-right: 20px;
    // background-color: red;
  }

  .right {
    width: 540px;
    margin-right: 20px;
    box-sizing: border-box;
  }
}
</style>
