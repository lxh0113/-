<template>
  <div class="messageBox">
    <div class="left">
      <span class="title"> 消息列表 </span>
      <div class="message" v-for="item in 5">
        <div class="avatar">
          <el-avatar :size="50">系统</el-avatar>
        </div>
        <div class="content">
          <div class="messageTitle">系统</div>
          <el-text line-clamp="1">
            The -webkit-line-clamp CSS property<br />
            allows limiting of the contents of<br />
            a block to the specified number of lines.
          </el-text>
        </div>
        <div class="operation">
          <div class="time">04/12/1 12:13</div>
          <div>
            <el-button text="plain" type="primary">加入代办事项</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <span class="title">代办事项</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
</script>

<style lang="scss" scoped>
.messageBox {
  padding: 20px;
  box-sizing: border-box;
  display: flex;

  .title {
    color: $primary-color;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  }

  > .left {
    width: 500px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    

    .message {
      display: flex;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid $primary-border-color;

      .avatar {
        width: 80px;
        display: flex;
        justify-content: center;
      }

      .content {
        .messageTitle {
          font-size: 18px;
          margin-bottom: 5px;
        }
      }

      .operation {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .time {
          color: $primary-gray-text-color;
          font-size: 14px;
          margin-right: 15px;
        }
      }
    }
  }

  > .right {
    display: flex;
    flex-direction: column;

  }
}
</style>
