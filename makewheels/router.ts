import {createWebHashHistory,createRouter} from "vue-router"
import Switch from "./src/components/Switch.vue"
import Button from "./src/components/Button.vue"
import Dialog from "./src/components/Dialog.vue"
import Tabs from "./src/components/Tabs.vue"
import HomePage from "./src/views/HomePage.vue"
import Doc from "./src/views/Doc.vue"
import Start from "./src/components/Start.vue"
import Introduction from "./src/components/Introduction.vue"
import Installation from "./src/components/Installation.vue"
const history =createWebHashHistory()
export const router=createRouter({
    history:history,           
    routes:[{path:'/',component:HomePage}
   ,{path:'/Doc',component:Doc,children:[
    {path:'/Doc/Start',component:Start}
    ,{path:'/Doc/Install',component:Installation}
    ,{path:'/Doc/Switch',component:Switch}
    ,{path:'/Introduction',component:Introduction}
    ,{path:'/Doc/Switch',component:Switch}
    ,{path:'/Doc/Button',component:Button}
    ,{path:'/Doc/Dialog',component:Dialog}
    ,{path:'/Doc/Tabs',component:Tabs}    ]}
   
]  
 })   