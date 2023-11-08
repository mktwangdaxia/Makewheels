<template>
   <div style="padding-left: 3vw;"> <h2>示例1</h2>
        <button class="s">你好</button>
        &nbsp;<button class="x">你好</button>
        &nbsp;<button class="z">你好</button>
        <hr>
        <h2>示例2</h2>
        <button class="big">大大大</button>
        &nbsp; <button class="small">小小小</button>
        &nbsp;<button class="normal">正常</button>
      <hr>
        <h2>示例3</h2>
        <button disabled>禁用标签</button>
        &nbsp;<button class="abc" disabled>禁用标签</button>
        &nbsp;<button class="v" disabled>禁用标签</button>
        <hr>
        <h2>示例4</h2>
        <button><span class="loadingIndicator"></span>加载中</button>
    <hr>
        <div style="margin-top: 1em;">
            <input type="button" :value="e3"  @mousedown="e4=fa(e2,e3);e2=e4[0];e3=e4[1]">
            </div>
    <div style="width:60vw;background-color:antiquewhite;margin-top:10px;" v-if="e2">
        <Demo :component="buttondemo"/>
    </div>        
</div>
  
  
</template>
<script lang="ts">
import Demo from './Demo.vue'
import buttondemo from './button.demo.vue'
export default {
components:{Demo},
    props: ['fa'],
 data(){return {e2:false,e3:"查看代码",e4:[]}},
 setup(){return {buttondemo}}
 }
</script>
<style lang="scss" scoped>


.big {
    font-size: large;
    color: rgb(64, 41, 209);
}

.small {
    font-size: smaller;
    color: rgb(68, 34, 218);
}

.normal {
    font-size: 16px;
    color: rgb(85, 39, 201);
}

.loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 3px;
    margin-top: 3px;
    border-radius: 50%;
    border-color: blue blue blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: loadingIndicator 1s infinite linear;
}
button{display:inline-flex;}
.abc{cursor:not-allowed;color:red}
.s, .z{border:0}
.s:focus{ color:#2e23c6;background-color: rgb(211, 212, 212);border:0}
.x{white-space: nowrap;box-shadow: 0 1px 0 fade-out($color: #181616, $amount: 0);outline: none;}
.z:hover{color:blue}
.v{background-color: rgb(237, 246, 255);color:rgb(180, 183, 17)}
@keyframes loadingIndicator {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>