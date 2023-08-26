<template>
   <div style="padding-left: 3vw;"> <h1>示例1</h1>
        <button theme="text">你好</button>
        &nbsp;<button theme="button">你好</button>
        &nbsp;<button theme="link">你好</button>
        <hr>
        <h2>示例2</h2>
        <button class="big">大大大</button>
        &nbsp; <button class="small">小小小</button>
        &nbsp;<button class="normal">正常</button>
      <hr>
        <h3>示例3</h3>
        <button :disabled="true">禁用标签</button>
        <hr>
        <h1>示例4</h1>
        <button><span class="loadingIndicator"></span>加载中</button>
    <hr>
        <div style="margin-top: 1em;"><button>查看代码</button></div>
    <div style="width:60vw;background-color:antiquewhite;margin-top:10px;height:400px;"></div>        
</div>
   
    
</template>
<script lang="ts">
export default {

}
</script>
<style>


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

@keyframes loadingIndicator {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }

}
</style>