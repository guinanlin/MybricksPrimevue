<template>
  <el-button :type="data.type" @click="onClick">{{ data.text }}</el-button>
</template>

<script>
export default {
  props: ["env", "data", "inputs", "propsStyle", "outputs"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.outputs.onClick();
    },
  },
};
</script>

<style></style>
