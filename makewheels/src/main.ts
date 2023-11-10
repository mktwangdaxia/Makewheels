
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

import 'github-markdown-css'
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("Markdown", Markdown)
let sssxiao=innerHeight-1 + 'px';
document.body.style.setProperty('--primary', sssxiao);
document.body.style.getPropertyValue('--primary').trim();
let kkk=window.screen.availHeight + 'px';
document.body.style.setProperty('--primar', kkk);
document.body.style.getPropertyValue('--primar').trim();
let lll=window.screen.height + 'px';
document.body.style.setProperty('--prima', lll);
document.body.style.getPropertyValue('--prima').trim();