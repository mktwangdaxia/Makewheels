<template>
    
    <div style="width:1vw;height:960px;background-color: rgb(188, 192, 156);left: 150px;" v-if="e2"></div>
    <div class="tab1">
        <div class="vvv">
            <div class="框">
            <div class="tab" ref="导航一" v-on:click="f2">{{ title[0] }}</div>&emsp;&emsp;
            <div class="tab" ref="导航二" v-on:click="f3">{{ title[1] }}</div>
        </div>
         <div style="height:5px;background-color:rgb(251, 246, 246) ;"></div>
        <div class="蓝条" ref="bbb"> </div>
       
        <hr>
        <component class="cv" v-for="(c, index) in tab_set" :is="c" :i="i[index]" :key="index"></component>
    </div>
        
        
        <div class="vc" style="margin-top: 10px;text-align: center;">
            <input type="button" :value="e3" @mousedown="e4 = fa(e2, e3); e2 = e4[0]; e3 = e4[1]">
        </div>
        <div class="代码" v-if="e2">
            <Demo :component="tabdemo"/>
        </div>
    </div>
</template>  
<script lang="ts">
import { ref, onMounted} from "vue"
import Tab2 from "./Tab2.vue"
import tabdemo from './tab.demo.vue'
import Demo from './Demo.vue'




export default {
   
    components:{Demo}, 
 
    props: ['fa'],
    data() { return { i: [true, false], g: false, e2: false, e3: "查看代码", e4: [] } },    //怎么能让data的变量能以data中的变量为自己的值，data好像获取不到自己的变量
    
    
    methods: {
        f2() {
            if (this.i[0] == false) { this.i[0] = true, this.i[1] = false; }
        },                                                                //为什么在f2，f3函数后添加 this.p=++this.p 后a1,a2的selected类就添加不了了啊
        f3() {
            if (this.i[1] == false) { this.i[0] = false, this.i[1] = true; }
        }
    },

    setup(a, context) {
      
        let tab_set = []
        let defaults = context.slots.default()
        let title = []
        let 导航一 = ref<HTMLDivElement>(null), bbb = ref<HTMLDivElement>(null), 导航二 = ref<HTMLDivElement>(null)

        defaults.forEach((tag, e) => {
            if (tag.type == Tab2) { tab_set[e] = tag; title[e] = tab_set[e].props.title }
        })
        onMounted(() => {
            let a1 = 导航一.value, a2 = 导航二.value, aa = [a1, a2], b = bbb.value,abc={"0":导航一.value.clientWidth + "px","1": 导航一.value.clientHeight  +8+ "px"}; 
                 //a1,a2是导航的dom元素，a_1,a_2是其dom的位置，aa是a1,a2的数组
            window.addEventListener('resize',f14 );
           
            function f12(abc){
                abc[0]=  导航一.value.clientWidth + "px"
                abc[1]= 导航一.value.clientHeight +8+ "px"
                b.style.width = abc[0];  b.style.top =abc[1];}
            function f14(){f12(abc); 
                if (a2.classList.contains('selected')){ b.style.left = (导航二.value.offsetLeft - 导航一.value.offsetLeft) +1+ 'px';}
            }
            b.style.width = abc[0];  b.style.top =abc[1];
            a1.classList.add('selected')
            aa.forEach((e) => {
                e.onclick = function () {
                    if (!e.classList.contains('selected')) { a1.classList.toggle('selected'); a2.classList.toggle('selected') };
                    if (a2.classList.contains('selected')) { b.style.left = (导航二.value.offsetLeft - 导航一.value.offsetLeft) +1+ 'px'; } else { b.style.left = '2px'; }
                }
            }
            )
        })
        return { tab_set, title, 导航一, bbb, 导航二,tabdemo }
    }


}



</script>
<style scoped>
.框 {
    display: flex;
    background-color: rgb(251, 246, 246);
    padding: 2px
    
}

.蓝条 {
    background-color: rgb(39, 108, 131);
    height: 2px;
    position: absolute;
    
    left: 2px;
    transition: left 350ms;
}

.tab {
    
    font-size: large;

}

.tab1 {
    position: absolute;
    left: 34vw;
    top: 40px;
}

hr {
    outline: none;
    padding: none;
    margin: 0px;
    width: 99%;
}

.代码 {
    width: 60vw;
    
    background-color: antiquewhite;
    position: absolute;
    margin-top: 10px;
    left: -10vw
}

.selected {
    color: rgb(30, 107, 103);
}
@media(max-width:820px) {
.vvv{width:60vw;margin-left:-10vw;}
.代码{width:70vw;margin-left:-4vw;}
.tab1 {
   
    left: 16vw;
   
}
.vc, .蓝条{margin-left:-10vw;}

}
</style>