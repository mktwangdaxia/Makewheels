<template>
    <div class="tab1">
        <div class="框">
            
            <div  class="tab" :key="p" ref="导航一" v-on:click="f2">{{ title[0]}}&emsp;&emsp;</div>
            <div class="tab"  :key="(p+1)" ref="导航二" v-on:click="f3">{{ title[1] }}&emsp;&emsp;</div>
        </div>
        <div style="height:5px;background-color:rgb(251, 246, 246) ;"></div>
        <div class="蓝条" ref="bbb"> </div>
        <hr>
     <component  v-for="(c,index) in tab_set"  :is="c" :i="i[index]" :key="index"  ></component>
      <div style="margin-top: 10px;text-align: center;"><input type="button" id="绑定" ></div>
      
      <div class="代码" for="绑定" ></div>
   </div>
  
  
</template>     
<script lang="ts">
import { useSlots, ref, onMounted} from "vue"
import Tab2 from "./Tab2.vue"

export default {
  
    data(){return {i:[true,false],p:10,g:false}},    //怎么能让data的变量能以data中的变量为自己的值，data好像获取不到自己的变量
methods:{

    f2(){if(this.i[0]==false){this.i[0]=true,this.i[1]=false;}},  //为什么在f2，f3函数后添加 this.p=++this.p 后a1,a2的selected类就添加不了了啊
f3(){ if(this.i[1]==false){this.i[0]=false,this.i[1]=true;}}   //
},
   setup() {

        let tab_set = []
        
        let defaults = useSlots().default()
        let title = []
        let 导航一= ref<HTMLDivElement>(null), bbb = ref<HTMLDivElement>(null),导航二=ref<HTMLDivElement>(null)
         
        defaults.forEach((tag, e) => {
            if (tag.type == Tab2) {
                tab_set[e] = tag;
                title[e] = tab_set[e].props.title
            }
        })
        onMounted(
            () => {
            
            let a1=导航一.value,a2=导航二.value,aa=[a1,a2]        //a1,a2是导航的dom元素，a_1,a_2是其dom的位置，aa是a1,a2的数组
            let a_1 = a1.getBoundingClientRect(), a_2 = a2.getBoundingClientRect(), b = bbb.value;
            b.style.width = (a_1.width + -32) + "px";
            a1.classList.add('selected')
        
         
        aa.forEach( 
              (e) => {  
               e.onclick = function () {   
                  if (!e.classList.contains('selected'))   { a1.classList.toggle('selected'); a2.classList.toggle('selected') }; 
             if (a2.classList.contains('selected')) { b.style.left = (a_2.left - a_1.left) + 'px';}
              else { b.style.left = '2px';}            
            }     
          }    
           )
           })
            return { tab_set, title, 导航一, bbb,导航二 } 
        }
          
          
        }
      


</script>
<style>
.框 {
    background-color: rgb(251, 246, 246);
    padding: 2px
}

.蓝条 {
    background-color: rgb(39, 108, 131);
    height: 2px;
    position: absolute;
    top: 31px;
    left: 2px;
    transition: left 350ms;
}

.tab {
    display: inline-block;
    font-size: large;
    
}
.tab1{position:absolute;left:15vw;top:40px;}

hr {
    outline: none;
    padding: none;
    margin: 0px;
    width: 99%;
}
.代码{width:60vw;height:530px;background-color: antiquewhite;position: absolute;margin-top: 10px;left:-10vw}
.selected {
    color: rgb(30, 107, 103);
}
</style>
