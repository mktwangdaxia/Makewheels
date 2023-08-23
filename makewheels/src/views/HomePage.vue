<template>
    <div
        style="height:calc(100%);display:flex;flex-direction: column;position:relative;justify-content:center;background-color:rgba(229, 148, 132, 0.859);align-items:center;flex-wrap:wrap;">
    　
        　 <h1>你好!欢迎使用我的简易UI库</h1>
        　  <div>
            　 <a href="https://github.com/mktwangdaxia/Makewheels">
                　 <svg class="icon" aria-hidden="true"  style="font-size:100px;">
                    　 <use xlink:href="#icon-github2"  ></use>
                    　 </svg>
                　 </a>
            　 </div>
                <h4 style="color:rgba(53, 35, 65, 0.53);text-align: center;margin:0px;">点击Github图标查看代码</h4>
            　 
    　 　
        　 <div class="a">
            　 <svg class="icon" aria-hidden="true" style="font-size: 50px;">
                　 <use xlink:href="#icon-vue"></use>
                　 </svg><div class="c">基于vue3</div>
            　 </div>
    　
        　 <div class="a">
            　 <svg class="icon" aria-hidden="true" style="font-size: 50px;">
                　 <use xlink:href="#icon-typescript"></use>
                　 </svg><div class="c">基于typescript</div>
            　 </div>
    　
        　 <div>
            　 <router-link to="/Doc" style="color:rgb(14, 33, 33);">
                <svg class="icon b" aria-hidden="true">
                    　 <use xlink:href="#icon-custom308"></use>
                    　 </svg>
                <div style="vertical-align:6px;font-weight:bold;display:inline-block;margin-top: 40px;">大侠的UI库</div>
            </router-link>
           　 
        </div>
    </div>
</template>


<style lang="scss" scoped>
a{text-decoration: none;}
.a {
    background: rgb(231, 203, 234);
    height:60px;
    width: 230px;
    margin-top: 40px;
    padding-top:11px;
    font-size: 20px;
    border-radius: 5px;
}

h1 {
    color: rgba(64, 69, 68, 0.875);
    font-family: serif;
}

.b {
    font-size: 30px;
}
.c{vertical-align:35%;display:inline-block;}

</style>
 
