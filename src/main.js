import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { auth } from "./plugins/firebase";
import router from "./router/index.js";
import App from "./App.vue";

//plugins
import VeeValidatePlugin from "@/plugins/validation.js";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VeeValidatePlugin);
app.mount("#app");
