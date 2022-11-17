import { createApp } from "vue";
import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";

import BaseCard from "./components/baseUI/BaseCard.vue";
import BaseButton from "./components/baseUI/BaseButton.vue";
import BaseBadge from "./components/baseUI/BaseBadge.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.component("base-button", BaseButton);

app.use(router);
app.use(store);
app.mount("#app");
