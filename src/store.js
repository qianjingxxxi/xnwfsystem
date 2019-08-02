/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import httpsBasic from "./utils/auth";
Vue.prototype.httpsBasic = httpsBasic;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:window.localStorage.getItem('user'),
    token:window.localStorage.getItem('token'),
    role:window.localStorage.getItem('role'),
  },
  mutations: {
    loginInfo(val) {
      console.log(val)
    }
  }
});

