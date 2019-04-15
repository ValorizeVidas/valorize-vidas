import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import "./assets/sass/_styles.scss";

Vue.config.productionTip = false;

ga("set", "page", router.currentRoute.path);
ga("send", "pageview");

router.afterEach((to, from) => {
  ga("set", "page", to.path);
  ga("send", "pageview");
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
