<template>
   
   <div class="vvv">
    　<div class="圆形">
        　 <h1 style="margin-top:0px;">你好!欢迎使用我的简易UI库</h1>
        　  <div style="display:block">
            　 <a href="https://github.com/mktwangdaxia/Makewheels">
                　 <svg class="icon" aria-hidden="true"  style="font-size:100px;">
                    　 <use xlink:href="#icon-github2"  ></use>
                    　 </svg>
                　 </a>
            　 </div>
                <h4 style="color:rgba(53, 35, 65, 0.53);margin:0px;">点击Github图标查看代码</h4></div>
            　 
    　 　
        　 <div class="a">
            　 <svg class="icon" aria-hidden="true" style="font-size: 50px;">
                　 <use xlink:href="#icon-vue"></use>
                　 </svg><div class="c">基于vue3&emsp;&emsp;</div>
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
   margin-left:calc(50% - 115px );
}
.圆形{
    border-bottom-left-radius:50% 40px;
clip-path:ellipse(80% 60% at 50% 40%);

height:300px;
margin-top: -36px;
background: linear-gradient(to top,rgb(253, 248, 176) 4% , rgb(166, 204, 148))
}
h1 {
    color: rgba(64, 69, 68, 0.875);
    font-family: serif;
}

.b {
    font-size: 30px;
}
.c{vertical-align:35%;display:inline-block;}
.vvv{ 
      
    background:linear-gradient(170deg,rgb(169, 116, 185)  10%,rgb(251, 137, 192)  );
  
   
//    background:linear-gradient(217deg, rgb(255,0,0,0.8), rgba(255,0,0,0) 70.71% ),
//    linear-gradient(127deg, rgb(0,255,0,0.8), rgba(0,255,0,0) 70.71% ),
//    linear-gradient(336deg, rgb(0,0,255,0.8), rgba(0,0,255,0) 70.71%);



      height:100%;
      text-align: center;
      overflow-y:auto   
}
</style>
 
