<template>
  <div class="userBox">
    <div class="left">
      <div class="top">
        <el-avatar :size="90">user</el-avatar>
        <span class="userName">匿名</span>
      </div>
      <div class="bottom">
        <span>帖子 200+</span>
        <span>获赞 200+</span>
      </div>
    </div>
    <div class="right">
      <div class="title">个人信息</div>
      <el-form label-position="top">
        <div class="avatar">
          <el-form-item label="头像">
            <el-upload
              v-model:file-list="fileList"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="1"
            >
              <el-icon><Plus /></el-icon>
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img w-full :src="dialogImageUrl" alt="Preview Image" />
            </el-dialog>
          </el-form-item>
        </div>
        <div class="twoInput">
          <el-form-item label="名字" style="flex: 1; margin-right: 20px">
            <el-input v-model="userData.username" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="性别" style="flex: 1">
            <el-input v-model="userData.gender" placeholder=""></el-input>
          </el-form-item>
        </div>
        <div class="twoInput">
          <el-form-item
            label="电子邮件地址"
            style="flex: 1; margin-right: 20px"
          >
            <el-input v-model="userData.email" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="电话号码" style="flex: 1">
            <el-input v-model="userData.tel" placeholder=""></el-input>
          </el-form-item>
        </div>
        <div class="twoInput">
          <el-form-item label="新密码" style="flex: 1; margin-right: 20px">
            <el-input v-model="userData.password" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="验证码" style="flex: 1">
            <el-input
              style="width: 135px; margin-right: 20px"
              v-model="captcha"
              placeholder=""
            ></el-input>
            <el-button type="primary">获取验证码</el-button>
          </el-form-item>
        </div>
        <div class="twoInput">
          <el-button style="width: 100%; margin-top: 20px" type="primary"
            >提交</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";

import type { UploadProps, UploadUserFile } from "element-plus";

const userData = ref({
  avatar: "",
  username: "",
  gender: "女",
  email: "",
  tel: "",
  password: "",
});

const captcha = ref("");

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

const dialogImageUrl = ref("");
const dialogVisible = ref(false);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>

<style lang="scss" scoped>
.userBox {
  box-sizing: border-box;
  padding: 20px;
  display: flex;

  > .left {
    width: 300px;
    height: 300px;
    border: 1px solid $primary-border-color;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;

    > .top {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .userName {
        margin-top: 20px;
      }
    }

    > .bottom {
      display: flex;
      justify-content: space-around;
      margin-top: 40px;

      span {
        color: $primary-color;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }

  > .right {
    width: 600px;
    height: 620px;
    margin-left: 20px;
    border: 1px solid $primary-border-color;
    border-radius: 10px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    padding: 20px;
    box-sizing: border-box;

    .title{
      margin-bottom: 10px;
    }

    .twoInput {
      display: flex;
    }
  }
}
</style>
