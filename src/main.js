import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import Vueaxios from "vue-axios";

import "bootstrap";
import Popper from "popper.js";
// Import Bootstrap and BootstrapVue CSS files
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import { FormGroupPlugin } from "bootstrap-vue";
Vue.use(FormGroupPlugin);
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
Vue.component("vue-sidebar-menu-akahon", VueSidebarMenuAkahon);
Vue.component("vue-phone-number-input", VuePhoneNumberInput);
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

/* add icons to the library */
library.add(faUserSecret);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Vueaxios, axios);
//axios.defaults.withCredentials=true
//axios.defaults.baseURL='http://127.0.0.1:8000/api/';//Axios request to our API
import router from "../src/router/index";

// Plugins
import GlobalComponents from "../src/globalComponents";
import GlobalDirectives from "../src/globalDirectives";
import Notifications from "../src/components/NotificationPlugin";
import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
// MaterialDashboard plugin
import MaterialDashboard from "../src/material-dashboard";
import VueRouter from "vue-router";
import Chartist from "chartist";
/*Vue.use(VueRouter);
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});*/

Vue.prototype.$Chartist = Chartist;

const SocialSharing = require("vue-social-sharing");
Vue.component("social-sharing", SocialSharing);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});
