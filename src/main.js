import Vue from "vue";

import router from "./router";
import App from "./App.vue";
import "./assets/sass/_styles.scss";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_SECRET,
    libraries: "places"
  }
});

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
