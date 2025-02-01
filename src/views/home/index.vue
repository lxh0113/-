<template>
  <div class="homeBox">
    <Nav></Nav>
    <div class="right">
      <div style="height: 100px">
        <Header></Header>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/header.vue";
import Nav from "../components/nav.vue";
</script>

<style lang="scss" scoped>
.homeBox {
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:nth-child(2) {
      flex: 1;
    }
  }
}
</style>
