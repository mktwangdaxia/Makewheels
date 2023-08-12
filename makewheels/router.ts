import {createWebHashHistory,createRouter} from "vue-router"
import Switch from "./src/components/Switch.vue"
import Button from "./src/components/Button.vue"
import Dialog from "./src/components/Dialog.vue"
import Tab from "./src/components/Tab.vue"
import HomePage from "./src/views/HomePage.vue"
import Doc from "./src/views/Doc.vue"
const history =createWebHashHistory()
export const router=createRouter({
    history:history,           
    routes:[{path:'/',component:HomePage}
   ,{path:'/Doc',component:Doc,children:[
    {path:'/Switch',component:Switch}
    ,{path:'/Button',component:Button}
    ,{path:'/Dialog',component:Dialog}
    ,{path:'/Tab',component:Tab}    ]}
   
]  
 })   