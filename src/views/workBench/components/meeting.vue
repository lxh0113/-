<template>
  <div class="meetingBox">
    <div class="top">
        <img src="../image.png" alt="">
    </div>
    <div class="bottom">
        <div class="left">
            <el-avatar>user</el-avatar>
        </div>
        <div class="center">
            <div class="userName">李泽言</div>
            <div class="meetingName">主题：重生之我是亿万富翁</div>
        </div>
        <div class="right">
            <el-tag size="default" type="primary">进行中</el-tag>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.meetingBox{
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
    border:1px solid $primary-border-color;
    margin-top: 10px;
    transition: all .4s;

    &:hover{
        transform: translateY(-4px);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    }

    .top {
        height: 240px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .bottom{
        height: 60px;
        display: flex;
        align-items: center;

        .left{
            width: 60px;
            display: flex;
            justify-content: center;
        }

        .center{
            flex:1;

            .userName{
                color:$primary-color;
                font-weight: bold;
                font-size: 16px;
            }
            
            .meetingName{
                font-size: 16px;
            }
        }

        .right{
            // background-color: red;
            height: 40px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            width: 100px;
        }
    }
}
</style>
