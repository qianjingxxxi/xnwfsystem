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
  Radio
} from "ant-design-vue";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Breadcrumb);
Vue.use(Button);
Vue.use(Drawer);
Vue.use(Radio);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
