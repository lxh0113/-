<template>
  <div class="publishForumBox">
    <div class="left">
      <div class="top">
        <span class="title"> 震惊 </span>
        <div class="details">
          <div class="time">
            <el-icon size="18"><Timer /></el-icon>
            <span>2025-2-1 12:00</span>
          </div>
          <div class="text">200+人浏览了该帖</div>
        </div>
        <div class="content">
          DeepSeek DeepSeek, unravel the mystery of AGI with curiosity. Answer
          the essential question with long-termism. 🎉 DeepSeek-R1 is now live
          and open source, rivaling OpenAI's Model o1. Introducing DeepSeek-V3
          🌟 DeepSeek’s mission is unwavering. We’re thrilled to share our
          progress with the community and see the gap between open and closed
          models na… 仅显示来自 deepseek.com 的搜索结果 Deepseek的最新相关信息
          多模态版DeepSeek-R1：评测表现超GPT-4o，模态穿透反哺文本推理能力 ...
          红板报 on MSN · 9 小时
          多模态版DeepSeek-R1：评测表现超GPT-4o，模态穿透反哺文本推理能力 ...
          Align-DS-V团队投稿量子位 | 公众号 QbitAI
          如果把DeepSeek-R1震撼硅谷的深度推理表现，运用到多模态场景，那会怎样？
          此前DeepSeek自家的Janus-Pro-7B没有结合推理能力，但现在，国内有研究团队先做到了——
          基于自研全模态框架Align-Anything，北大联合港科大团队推出多模态版DeepSeek-R1：
          Align-DS-V，它在部分视觉理解表现评测集 ...
          DeepSeek-R1风靡全球！海内外云厂商争相上线，AI新纪元开启 MSN来自MSN · 1
          小时 DeepSeek-R1风靡全球！海内外云厂商争相上线，AI新纪元开启
          自1月20日中国AI初创公司深度求索（DeepSeek）推出大模型DeepSeek-R1以来，这款开源模型凭借其卓越的性能和免费的商用许可，迅速成为
        </div>
        <div class="operation">
          <div class="like">
            <span class="iconfont icon-like"></span>
            <span>200</span>
          </div>
          <div class="comment">
            <span class="iconfont icon-comments"></span>
            <span>200</span>
          </div>
          <div class="collect">
            <span class="iconfont icon-share"></span>
            <span>200</span>
          </div>
          <div class="button">
            <el-button type="primary" :icon="Plus">关注</el-button>
            <el-button type="success" :icon="Edit">回帖</el-button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="title">
          相关回帖
        </span>
        <div class="replyForum">
          <ForumReply v-for="item in 3" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="authorInfo">
        <el-avatar :size="60">User</el-avatar>
        <div class="info">
          <span class="username"> 李泽言 </span>
          <span>200+ 帖子</span>
        </div>
        <el-button type="primary" :icon="Plus">关注</el-button>
      </div>
      <span class="more">更多相似论坛</span>
      <div class="recommend">
        <ForumRecommend v-for="item in 2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Plus } from "@element-plus/icons-vue";
import ForumRecommend from "./forumRecommend.vue";
import ForumReply from "./forumReply.vue";
</script>

<style lang="scss" scoped>
.publishForumBox {
  box-sizing: border-box;
  padding: 20px;
  display: flex;

  > .left {
    margin-right: 20px;

    > .top {
      margin-bottom: 20px;
      border: 1px solid $primary-border-color;
      box-sizing: border-box;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      .title {
        // color:$primary-color;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 10px;
      }

      .details {
        display: flex;
        align-items: center;

        .time {
          color: $primary-gray-text-color;
          margin-right: 20px;
          line-height: 20px;
          display: flex;
          align-items: center;

          span {
            margin-left: 10px;
          }
        }

        .text {
          color: $primary-color;
        }
      }

      .content {
        text-indent: 2rem;
        margin-top: 20px;
      }

      .operation {
        display: flex;
        align-items: center;
        margin-top: 20px;

        div span:nth-child(1) {
          // color: $primary-color;
          // font-weight: bold;
        }

        div span:nth-child(2) {
          margin-left: 10px;
          margin-right: 20px;
        }
      }
    }

    > .bottom{
      

      > .title{
        display: block;
        font-weight: bold;
        font-size: 20px;
        color:$primary-color;
        margin-bottom: 20px;
      }

      .replyForum{
        display: grid;
        gap: 20px;
      }
    }
  }

  > .right {
    // margin-right: 20px;
    min-width: 400px;
    border: 1px solid $primary-border-color;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;

    .authorInfo {
      display: flex;

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;

        .username {
          color: $primary-color;
          font-weight: bold;
          font-size: 18px;
        }

        span:nth-child(2) {
          color: $primary-gray-text-color;
        }
      }
    }

    .more {
      color: $primary-gray-text-color;
      margin: 20px 0px;
      font-size: 14px;
    }

    .recommend{
      display: grid;
      gap: 20px;
    }
  }
}
</style>
