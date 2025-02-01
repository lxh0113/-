<template>
  <div class="scheduleItemBox">
    <div class="top">
      <div class="left">
        <el-avatar :size="50"> user </el-avatar>
      </div>
      <div class="center">
        <div class="meetingName">股东第二次青岛会</div>
        <div class="peopleCount">参与人员3人</div>
      </div>
      <div class="right">
        <el-tag type="primary">等待</el-tag>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <el-icon :size="24"><Timer /></el-icon>
        <span class="detailsText">2小时20分钟</span>
      </div>
      <div class="users">
        <el-avatar> user </el-avatar>
        <el-avatar style="margin-left: -10px;"> user </el-avatar>
        <el-avatar style="margin-left: -10px;"> user </el-avatar>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.scheduleItemBox{
    box-sizing: border-box;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid $primary-border-color;

    transition: all .4s;

    &:hover{
        transform: translateY(-4px);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    }

    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px dotted $primary-border-color;
        padding-bottom: 20px;

        > .left{
            width: 60px;
        }

        > .center{
            flex:1;
        }

        > .right{
            width: 100px;
            display: flex;
            justify-content: center;
        }
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        > .left{
            display: flex;
            align-items: center;
            color:$primary-gray-text-color;

            .detailsText{
                margin-left: 10px;
            }
        }
    }
}
</style>
