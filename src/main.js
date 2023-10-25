import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

import VeeValidatePlugin from "@/plugins/validation.js";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VeeValidatePlugin);
app.mount("#app");
