<template>
    <div class="ooo" v-if="u || i" @click="close2"></div>

    <div class="iu">
       <p><b>常规使用</b></p> 
        <button @click="i = open(i)">打开对话框</button>&nbsp;
        <input class="d" type="button"
                    :value="e3" @mousedown="e4 = fa(e2, e3); e2 = e4[0]; e3 = e4[1]"></div>
        <hr/>
     <div class="iu">  <p> <b>一键打开Diolog</b></p>
    <button @click="i = open(i)">打开对话框</button>&nbsp;
    <input class="d" type="button"
                    :value="e3" @mousedown="e7 = fa(e5, e6); e5 = e7[0]; e6 = e7[1]" />
    </div>
        <div class="a">
            <div style="height:5vh;"></div>


            <fieldset class="j">
                <legend>
                    <h2>常规使用</h2>
                </legend>
                <button @click="i = open(i)" class="d">打开对话框</button>&emsp;&emsp;&emsp;&emsp;<input class="d" type="button"
                    :value="e3" @mousedown="e4 = fa(e2, e3); e2 = e4[0]; e3 = e4[1]">
            </fieldset>

            <div class="g" v-if="e2">
                <Demo :component='dialogdemo' />
            </div>
            <hr> <!--    为什么这个显示不了啊 -->

            <fieldset class="j">
                <legend>
                    <h2>一键打开Diolog</h2>
                </legend>
                <button @click="u = open(u)" class="d">打开对话框</button>&emsp;&emsp;&emsp;&emsp;<input class="d" type="button"
                    :value="e3" @mousedown="e7 = fa(e5, e6); e5 = e7[0]; e6 = e7[1]" />
            </fieldset>

            <div class="g" v-if="e5">
                <Demo :component='dialog2demo' />
            </div>

        </div>

        <div class="对话框" v-if="i || u">
            <div style="padding-left:95%;border-bottom:2px solid black"><svg class="icon iconnnn" aria-hidden="true"
                    @click="close1">
                    <use xlink:href="#icon-shanchuguanbicha2"></use>
                </svg></div>
            <div class="c"><b>hi</b></div>
            <div class="c"><b>hi</b></div>
            <div class="ggg"><button @click="i = close(i)" v-if="i">确定</button>&emsp;<button @click="i = close(i)"
                    v-if="i">取消</button><button v-if="u">确定</button>&emsp;<button @click="u = close(u)" v-if="u">取消</button>
            </div>
        </div>


   
</template>
<script lang="ts">
import Demo from './Demo.vue'
import dialogdemo from './dialog.demo.vue'
import dialog2demo from './dialog2.demo.vue'
export default {
    props: ['fa'],
    components: { Demo },
    data() { return { i: false, u: false, e2: false, e3: "查看代码", e4: [], e5: false, e6: "查看代码", e7: [] } },
    methods: {
        open(n) { if (!n) { n = !n; return n }; return n }, close(n) { if (n) { n = !n; return n }; return n },
        close1() { if (this.u) { this.u = false } else { this.i = false } }, close2() { if (!this.i) this.u = !this.u }
    },
    setup() { return { dialogdemo, dialog2demo } }


}
</script>
<style scoped>
.j {
    margin-bottom: 36px;
    height: 150px;
}

.对话框 {

    width: 400px;
    height: 180px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: calc(50% - 91px);
    left: calc(50% - 201px);
    z-index: 100;
}

.a {
    display: flex;
    flex-direction: column;
    align-items: center;
  
}

.c {
    width: 100%;
    height: 60px;
}

.d {
    margin-top: 60px;
}

.g {
    width: 50vw;
    background-color: antiquewhite;
    margin-top: 10px;
}

hr {
    border-color: rgb(15, 192, 139);
    margin: 20px;
}

.ooo {
    position: fixed;
    height: 100%;
    width: 100%;
    right: 0px;
    background-color: rgba(83, 83, 86, 0.292)
}

.iconnnn {
    font-size: 20px;
    cursor: pointer;
}

.ggg {
    padding-left: 145px
}
.iu{display: none;}
@media(max-width:400px) {
    .对话框 {
        width: 240px;
        height: 100px;
        top: calc(50% - 51px);
        left: calc(50% - 121px);
    }

    .iconnnn {
        font-size: 15px;
        margin-left: -3px;
    }

    .ggg {
        padding-left: 70px
    }

    .c {
        height: 26px
    }}
    @media(max-width:330px) {.j{display: none;}
.iu{display: block;margin:5px ;border:3px solid rgb(104, 141, 55);padding:3px;}
.d{margin-top:20px;}}

    </style>