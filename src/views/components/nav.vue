<template>
  <div class="myMenu">
    <div class="logoBox">
      <img src="../../assets/img/智慧通logo.png" alt="" />
    </div>
    <el-menu
      style="width: 240px; background-color: #f9fbfc; border-right: 0;"
      default-active="home"
      class="el-menu-vertical-demo"
      router
    >
      <el-menu-item index="home">
        <span
          style="margin-left: 20px;margin-right: 10px; "
          class="iconfont icon-caidan"
        ></span>
        <span>工作台</span>
      </el-menu-item>
      <el-menu-item index="forum">
        <span
          style="margin-left: 20px;margin-right: 10px; "
          class="iconfont icon-forum"
        ></span>
        <span>论坛</span>
      </el-menu-item>
      <el-menu-item index="ai">
        <span
          style="margin-left: 20px;margin-right: 10px; "
          class="iconfont icon-Ai"
        ></span>
        <span>智通精灵</span>
      </el-menu-item>
      <el-menu-item index="message">
        <span
          style="margin-left: 20px;margin-right: 10px; "
          class="iconfont icon-message"
        ></span>
        <span>消息中心</span>
      </el-menu-item>
      <el-menu-item index="user">
        <span
          style="margin-left: 20px;margin-right: 10px; "
          class="iconfont icon-information"
        ></span>
        <span>个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.myMenu {
  box-sizing: border-box;
  background-color: #f9fbfc;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e0e1f2;
  //   min-height: 100vh;

  .el-menu-item{
    color: $primary-gray-text-color;
  }

  //设置当前被选中的一级菜单
  .el-menu-item.is-active {
    border: 0;
    background-color: $primary-background-color;
    color: $primary-color;
    border-radius: 5px;

  }

  .logoBox {
    width: 240px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-bottom: 1px solid $primary-border-color;

    img {
      width: 100%;
      height: fit-content;
    }
  }
}
</style>
