<template>
    <div>
        <button @click="打开">打开对话框</button>
        <div class="对话框" v-if="i">
            <div><b>1</b></div>
            <div><b>2</b></div>
            <button @click="关闭">确定</button>&emsp;<button @click="关闭">取消</button>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    data() { return { i: false } },
    methods: { 打开() { if (!this.$data.i) { this.$data.i = !(this.$data.i) } }, 关闭(i) { this.$data.i = !(this.$data.i) } }
}
</script>
<style>
.对话框 {
    width: 120px;
    height: 70px;
    background-color: bisque;
}</style>