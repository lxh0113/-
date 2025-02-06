<template>
  <div class="forumBox">
    <div class="top">
      <el-button :icon="Plus" type="success" @click="$router.push('/forum/publish')">发布新帖</el-button>
      <el-button :icon="Refresh" type="primary">换一换</el-button>
    </div>
    
    <div class="bottom">
      <ForumCard v-for="item in 5" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus, Refresh } from "@element-plus/icons-vue";
import ForumCard from "./components/forumCard.vue";
</script>

<style lang="scss" scoped>
.forumBox {
  box-sizing: border-box;
  padding: 20px;

  > .top {
  }

  > .bottom {
   margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 360px));
    gap: 20px;
  }
}
</style>
