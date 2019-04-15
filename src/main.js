import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import "./assets/sass/_styles.scss";
// import "./config/analytics";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
