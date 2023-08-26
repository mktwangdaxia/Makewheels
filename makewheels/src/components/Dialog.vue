<template>
 
   <div class="a">
        <div style="height:5vh;"></div>
        
        <h2 >常规使用</h2>
        <div class="j"><button @click="打开" tabindex="2">打开对话框</button>&emsp;&emsp;&emsp;&emsp;<button>查看代码</button></div>
        
<div class="g"></div>        
       <hr>
<h2 >一键打开Diolog</h2>
        <div class="j"><button @click="打开" tabindex="2">打开对话框</button>&emsp;&emsp;&emsp;&emsp;<button>查看代码</button>
        </div>
        
       <div class="g"></div> </div>
        <div class="对话框" v-if="i">
    <div  style="padding-left:95%;border-bottom:2px solid black"><svg class="icon"  aria-hidden="true" style="font-size: 20px;cursor: pointer; " @click="关闭" >  <use xlink:href="#icon-shanchuguanbicha2"></use> </svg></div>
           <div class="c" ><b>hi</b></div>
            <div class="c" ><b>hi</b></div>
           <div style="padding-left:145px"><button @click="关闭">确定</button>&emsp;<button @click="关闭">取消</button></div> 
        </div>
</template>
<script lang="ts">

export default {
    data() { return { i: false } },
    methods: { 打开() { if (!this.$data.i) { this.$data.i = !(this.$data.i) } }, 关闭(i) { this.$data.i = !(this.$data.i) } }
}
</script>
<style scoped>
.j{margin-bottom: 36px;}
.对话框 {
   
    width: 400px;
    height:180px ;
    background-color: rgb(255, 255, 255);
    position:absolute;
    top:calc(50% - 91px )  ;
    left:calc(50% - 201px)  ;
}
.a{display: flex;flex-direction: column;align-items: center;}

.c{width:100%;height:60px;}
.g{width:50vw;background-color:antiquewhite;margin-top:10px;height:400px;}
hr{border-color:rgb(15, 192, 139);margin:20px ;}
</style>