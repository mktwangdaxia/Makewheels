<template>
   
   <div class="vvv">
    　<div class="圆形">
        　 <h1>你好!欢迎使用我的简易UI库</h1>
        　<h2>你好!欢迎使用我的简易UI库</h2>
           <div class="git">
            　 <a href="https://github.com/mktwangdaxia/Makewheels" >
                　 <svg class="icon git" aria-hidden="true"  >
                    　 <use xlink:href="#icon-github2"  ></use>
                    　 </svg>
                　 </a>
            　 </div>
                <h4 style="color:rgba(53, 35, 65, 0.53);margin:0px;">点击Github图标查看代码</h4><h5 style="color:rgba(53, 35, 65, 0.53);margin:0px;">点击Github图标查看代码</h5></div>
            　 
    　 　
        　 <div class="a">
            　 <svg class="icon sv" aria-hidden="true"  >
                　 <use xlink:href="#icon-vue"></use>
                　 </svg><div class="c">基于vue3&emsp;&emsp;</div>
            　 </div>
    　
        　 <div class="a">
            　 <svg class="icon sv" aria-hidden="true" >
                　 <use xlink:href="#icon-typescript"></use>
                　 </svg><div class="c">基于typescript</div>
            　 </div>
    　
        　 <div>
            　 <router-link to="/Doc" style="color:rgb(14, 33, 33);">
                <svg class="icon b" aria-hidden="true">
                    　 <use xlink:href="#icon-custom308"></use>
                    　 </svg>
                <div style="vertical-align:6px;font-weight:bold;display:inline-block;margin-top: 30px;color: rgba(64, 69, 68, 0.875);">大侠的UI库</div>
            </router-link>
           　 
        </div>
    </div>

</template>


<style lang="scss" scoped>
.git{display:block;width:100px;height:100px;display: inline-block;}
.sv{font-size: 50px;}
a{text-decoration: none;}
.a {
    
    background: rgb(231, 203, 234);
    height:60px;
    width: 230px;
    margin-top: 30px;
    padding-top:11px;
    font-size: 20px;
    border-radius: 5px;
   margin-left:calc(50% - 115px );
}
.圆形{
    border-bottom-left-radius:50% 40px;
clip-path:ellipse(80% 60% at 50% 40%);
border-top:20px solid rgb(251, 137, 192);
border-left:20px solid rgb(251, 137, 192);
border-right:20px solid rgb(251, 137, 192);
height:300px;
margin-top: -36px;
background: linear-gradient(to top,rgb(194, 175, 35) ,rgb(215, 170, 170) 37%,rgba(173, 75, 75, 0.851) 60%,rgb(107, 13, 148) 90%)
}
h1, h2{
    color:rgb(215, 167, 127);
    font-family: serif;
    margin-top:0px;
}
h2, h5{display: none;}
.b {
    font-size: 30px;
}
.c{vertical-align:35%;display:inline-block;}
.vvv{ 
      
    background: 22%,rgb(251, 137, 192) ;
    height:100%;
    text-align: center;
    
}
@media(max-width:465px){.git{margin-top: -15px;}}
@media(max-width:316px){
    h1, h4{display: none;}
    h2, h5{display:block;}
    .git{width:70px;height:70px;margin-top: 1px;}
   
.a{width:150px;margin-left:calc(50% - 75px );}
.sv{font-size: 40px;margin-left: -20px;}
.c{font-size: small;}}
@media(max-width:212px){
    .vvv{min-width:212px;}}
</style>
 
