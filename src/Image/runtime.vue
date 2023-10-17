<template>
    <el-image :src="url"></el-image>
</template>

<script>
export default {
    props: ['env', 'data', 'inputs', 'propsStyle', 'outputs'],
    data() {
        return {
            url: this.data.url
        }
    },
    created() {
        this.inputs.url(url => {
            this.data.url = url
        })
    }
}
</script>

<style></style>