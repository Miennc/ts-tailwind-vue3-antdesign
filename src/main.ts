import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import './index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

//import "@/assets/scss/_index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd)

app.mount("#app");
