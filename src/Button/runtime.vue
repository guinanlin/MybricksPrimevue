<template>
  <div class="card flex justify-content-center">
    <Button :label="data.text" :severity="data.severity" text raised />
  </div>
</template>

<script setup>
import Button from 'primevue/button'; // 导入 PrimeVue 的 Button 组件

// 定义 props
const props = defineProps({
  env: String,
  data: Object,
  inputs: Array,
  propsStyle: String,
  outputs: Array
});
</script>

<style lang="less" scoped>
@import 'primevue/resources/themes/lara-light-blue/theme.css';
@import 'primeicons/primeicons.css';
</style>
