<template>
  <div class="workBenchBox">
    <div class="top">
      <div class="left">
        <div class="myDiv">
          <span>加入会议</span>
          <span class="iconfont icon-add"></span>
        </div>
        <div class="myDiv">
          <span>快速会议</span>
          <span class="iconfont icon-video"></span>
        </div>
        <div class="myDiv">
          <span>预约会议</span>
          <span class="iconfont icon-list"></span>
        </div>
      </div>
      <div class="right">
        <div class="forumsBox">
          <ForumSmallCard v-for="item in 3" />
        </div>
        <button class="button">
          <svg
            t="1738334268196"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2354"
            width="24"
            height="24"
          >
            <path
              d="M512 166.4c-70.4 0-134.4 19.2-192 57.6L294.4 185.6C281.6 166.4 256 172.8 249.6 192L204.8 332.8C204.8 345.6 217.6 364.8 230.4 364.8l147.2-6.4c19.2 0 32-25.6 19.2-38.4L364.8 281.6l0 0 0-6.4C403.2 243.2 460.8 230.4 512 230.4c153.6 0 281.6 128 281.6 281.6s-128 281.6-281.6 281.6-281.6-128-281.6-281.6c0-19.2-12.8-32-32-32S166.4 492.8 166.4 512c0 192 153.6 345.6 345.6 345.6S857.6 704 857.6 512 704 166.4 512 166.4z"
              fill="#ffffff"
              p-id="2355"
            ></path>
          </svg>
          <span class="button__text">换一换</span>
        </button>
      </div>
    </div>
    <div class="bottom">
      <div class="reccomendMeetingsBox">
        <div class="title">会议推荐</div>
        <div class="meetingsBox">
          <Meeting v-for="item in 3" />
        </div>
      </div>
      <div class="scheduleBox">
        <div class="title">日程表</div>
        <Schedule />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ForumSmallCard from "../forum/components/forumSmallCard.vue";
import { Refresh } from "@element-plus/icons-vue";
import Meeting from "../workBench/components/meeting.vue";
import Schedule from "../workBench/components/schedule.vue";
</script>

<style lang="scss" scoped>
.workBenchBox {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;

  .top {
    display: flex;
    justify-content: left;

    .left {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-right: 20px;
    }

    .myDiv {
      width: 120px;
      height: 120px;
      background-color: $primary-background-color;
      border-radius: 20px;
      color: $primary-color;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        transform: translateY(-4px);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
          rgba(17, 17, 26, 0.1) 0px 8px 24px,
          rgba(17, 17, 26, 0.1) 0px 16px 56px;
      }

      span:nth-child(1) {
        font-weight: bold;
      }

      span:nth-child(2) {
        font-size: 32px !important;
      }
    }

    .right {
      display: flex;
      align-items: flex-end;

      .forumsBox {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-right: 20px;
      }

      .button {
        line-height: 1;
        height: 42px;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.35em;
        padding: 0.75em 1em;
        padding-right: 1.25em;
        color: #fff;
        border: 1px solid transparent;
        font-weight: 700;
        border-radius: 2em;
        font-size: 1rem;
        box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
        transition: transform 0.3s;

        background: linear-gradient(
          90deg,
          $primary-color,
          rgba(132, 116, 254, 1) 100%
        );
      }

      .button__icon {
        width: 1.5em;
        height: 1.5em;
      }

      .button:hover {
        border-color: #f4f5f2;
      }

      .button:active {
        transform: scale(0.98);
        box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
      }
    }
  }

  .bottom {
    display: flex;
    margin-top: 20px;
    margin-right: 20px;

    .title {
      font-size: 20px;
      font-weight: bold;
      color: $primary-color;
    }

    .reccomendMeetingsBox {
      flex: 1;
      margin-right: 20px;
      // border: 1px solid $primary-border-color;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 20px;

      .meetingsBox {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
    }

    .scheduleBox {
      width: 420px;
      min-height: 500px;
      // border: 1px solid $primary-border-color;
      border-radius: 20px;
      box-sizing: border-box;
      padding: 20px;
    }
  }
}
</style>
