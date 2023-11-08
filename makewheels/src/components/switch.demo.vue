<demo>ddd</demo>
<template>
    <div class="a c"><button class="转换装置" @click="f3" :class="{ checked: 正负转换 }">
            <span class="按钮1"></span></button></div>
    <div class="a"><input type="button" :value="e3" @mousedown="e4 = fa(e2, e3, e4); e2 = e4[0]; e3 = e4[1]" /></div>
</template>
<script lang="ts">
export default {
    data() { return { 正负转换: false, e2: false, e3: '查看代码', e4: [] } }
    , methods: {
        f3() { this.正负转换 = !this.正负转换 }, fa(e2, e3, e4) {
            function f4() {
                if (!e2) { e2 = true; e3 = "隐藏代码"; e4 = [e2, e3]; return e4 }
                else { e2 = false; e3 = "查看代码"; e4 = [e2, e3]; return e4 }
            }
            e4 = f4(); return e4
        }
    }
}
</script>



