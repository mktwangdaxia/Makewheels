<demo>kkk</demo>
<template>
    <fieldset class="j">
             <legend><h2>常规使用</h2></legend> 
            <button @click="i=open(i)" class="d">打开对话框</button>&emsp;&emsp;&emsp;&emsp;
            <input class="d" type="button" :value="e3"  
            @mousedown="e4=fa(e2,e3,e4);e2=e4[0];e3=e4[1]"/> 
        </fieldset>
            <div class="对话框" v-if="i||u">
    <div  style="padding-left:95%;border-bottom:2px solid black"><svg class="icon"  aria-hidden="true" style="font-size: 20px;cursor: pointer; " @click="close1" >  <use xlink:href="#icon-shanchuguanbicha2"></use> </svg></div>
           <div class="c" ><b>hi</b></div>
            <div class="c" ><b>hi</b></div>
           <div style="padding-left:145px"><button @click="i=close(i)" v-if="i">确定</button>&emsp;<button @click="i=close(i)" v-if="i">取消</button><button  v-if="u">确定</button>&emsp;<button @click="u=close(u)" v-if="u">取消</button></div> 
        </div>
</template>
<script lang="ts">
export default {
   
    data() { return {i: false ,u:false,e2:false,e3:"查看代码",e4:[],e5:false,e6:"查看代码",e7:[]} },
    methods: { open(n){ if(!n){ n=!n ;return n};return n}, close(n){ if(n){ n=!n ;return n};return n},
close1(){if(this.u){this.u=false}else{this.i=false}},close2(){if(!this.i)this.u=!this.u} },
  fa(e2, e3, e4) {
            function f4() {
                if (!e2) { e2 = true; e3 = "隐藏代码"; e4 = [e2, e3]; return e4 }
                else { e2 = false; e3 = "查看代码"; e4 = [e2, e3]; return e4 }
            }
            e4 = f4(); return e4
        }
}
</script>