<template>
    <el-button :type="type" @click="onClick">{{ text }}</el-button>
</template>

<script>
export default {
    props: ['env', 'data', 'inputs', 'propsStyle', 'outputs'],
    data() {
        return {
            type: this.data.type,
            text: this.data.text
        }
    },
    methods: {
        onClick() {
            this.outputs.onClick()
        }
    }
}
</script>

<style></style>