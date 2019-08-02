import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
  Button,
  Drawer,
  Radio,
  Checkbox,
  Alert,
  message,
  Table,
  Tag,
  Divider
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Table);
Vue.use(Alert);
Vue.use(Auth);
Vue.use(Tag);
Vue.use(Divider);
Vue.component("Authorized", Authorized);
Vue.prototype.$message = message;
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
