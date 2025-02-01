<template>
  <div class="myScheduleBox">
    <ScheduleItem v-for="item in 2" />
  </div>
</template>

<script lang="ts" setup>
import ScheduleItem from "../components/scheduleItem.vue";
</script>

<style lang="scss" scoped>
.myScheduleBox {
  display: flex;
  flex-direction: column;
}
</style>
