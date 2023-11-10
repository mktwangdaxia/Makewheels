import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "./views/HomePage.vue";
import Doc from "./views/Doc.vue";

import button from "./components/Button.vue";
import dialog from "./components/Dialog.vue";
import tab from "./components/Tabs.vue";
import switchs from './components/Switchs.vue';
import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import buttonss from './components/buttonss.vue'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: HomePage },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: switchs },
        { path: "button", component: button },
        { path: "dialog", component: dialog },
        { path: "tabs", component: tab },
        
      ],
    },
  ],
});
router.afterEach(() => {
});
