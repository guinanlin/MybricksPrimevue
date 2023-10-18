<template>
  <el-image :src="data.url" :fit="data.fit"></el-image>
</template>

<script>
export default {
  props: ["env", "data", "inputs", "propsStyle", "outputs"],
  data() {
    return {};
  },
  created() {
    if (this.inputs.url) {
      this.inputs.url((url) => {
        this.data.url = url;
      });
    }
  },
};
</script>

<style></style>
