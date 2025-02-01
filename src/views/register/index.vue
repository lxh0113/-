<template>
  <div class="loginBack">
    <img src="../../assets/img/loginTop.png" alt="" class="loginTopImage" />
    <img
      src="../../assets/img/loginBottom.png"
      alt=""
      class="loginBottomImage"
    />
    <div class="center">
      <div class="loginBox">
        <h3>欢迎登录智会通</h3>
        <h6>WELCOME</h6>
        <el-form size="large" style="max-width: 360px; margin: 20px auto">
          <el-form-item>
            <el-input
              :prefix-icon="User"
              style="height: 50px"
              v-model="loginData.account"
              placeholder="请输入登录账号"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              style="height: 50px"
              class="loginInput"
              v-model="loginData.password"
              placeholder="请输入登录密码"
            />
          </el-form-item>
          <el-form-item style="display:flex;">
            <el-input
              :prefix-icon="Lock"
              style="height: 50px;width:238px;"
              v-model="loginData.captcha"
              placeholder="请输入验证码"
            />
            <el-button style="height:50px;margin-left:10px" type="primary">获取验证码</el-button>
          </el-form-item>
          <el-form-item style="display: flex; margin-bottom: 40px">
            <el-checkbox-group style="flex: 1; text-align: left">
              <el-checkbox> 记住密码 </el-checkbox>
            </el-checkbox-group>
            <p>
              已有账号，<span
                @click="$router.push('/login')"
                style="color: #3578f6; font-weight: bold; cursor: pointer"
                >去登录</span
              >
            </p>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 360px;height:50px" type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <img class="right" src="../../assets/img/loginImage.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import { ref } from "vue";

const loginData = ref({
  account: "",
  password: "",
  captcha:''
});
</script>

<style lang="scss">
.loginBack {
  background-color: white;
  background-attachment: fixed;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;

  .loginTopImage {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 45%;
    object-fit: contain;
  }

  .loginBottomImage {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 60%;
  }

  .center {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    .loginBox {
      width: 480px;
      height: 540px;
      opacity: 0.8;
      border-radius: 20px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 40px rgba(158, 195, 255, 0.51);
      margin-left: 200px;

      text-align: center;

      h3 {
        margin-top: 50px;
        font-size: 28px;
        font-weight: 600;
      }

      h6 {
        font-size: 20px;
        font-weight: 300;
        line-height: 50px;
      }
    }

    .right {
      max-width: calc(100vw - 900px);
      z-index: 3;
      max-width: 45%;
      margin-top: 100px;
      margin-right: 80px;
    }
  }
}
</style>
