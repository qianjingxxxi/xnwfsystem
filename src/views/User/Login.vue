<template>
  <div class="bg">
    <div class="logo">
      <img src="../../assets/logoWhite.png" />
    </div>
    <!--form-->
    <form action class="formBox">
      <div class="formTitle">
        <h3>玄鸟外服管理登录系统</h3>
        <!-- <p>User login</p> -->
      </div>
      <div class="userName">
        <input type="text" v-model="userName" placeholder="请输入账号" />
        <span class="mark-error">请输入账号</span>
      </div>
      <div class="userPassword">
        <input type="password" v-model="userPassword" placeholder="默认密码：手机号后六位" />
        <span class="mark-error">请输入密码</span>
      </div>
      <div class="keepMind">
        <a-checkbox class="ignore" @change="onChange" :defaultChecked="rememberID">记住账号和密码</a-checkbox>
      </div>
      <div class="submitBtn">
        <a-button @click="loginHref" type="primary">{{submitTxt}}</a-button>
      </div>
    </form>
    <a class="ownership">© 2019 版权所有 上海标歆网络科技有限公司</a>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      userName: "",
      userPassword: "",
      visible: false,
      rememberID: true,
      submitTxt: "登录",
      loginInfo: {}
    };
  },
  methods: {
    // ...mapMutations(["SET_LOGININFO"]),
    onChange(e) {
      this.rememberID = e.target.checked;
    },
    loginHref() {
      this.submitTxt = "登录中...";
      // console.log($route.path=""),
      let url = this.httpsBasic.httpsBasic + "/user/User/companyLogin";
      axios
        .post(url, {
          phone: this.userName,
          password: this.userPassword
        })
        .then(res => {
          if (res.data.code == "200") {
            window.localStorage.setItem("xnwfPcToken", res.data.data.token);
            //判断是否保存用户名
            if (this.rememberID) {
              window.localStorage.setItem("xnwfPcName", this.userName);
              window.localStorage.setItem("xnwfPcPassword", this.userPassword);
            } else {
              window.localStorage.removeItem("xnwfPcName");
              window.localStorage.removeItem("xnwfPcPassword");
            }
            // this.SET_LOGIN(res.data.data.token);
            this.$router.push({ name: "visitLog" });
            this.submitTxt = "登录";
          } else {
            this.$message.error(res.data.message);
            this.submitTxt = "登录";
          }
        })
        .catch(err => {});
    },
    SET_TOKEN: (data) => {
      console.log(data);
      this.this.$store.commit(data);
      window.localStorage.setItem("token", data);
    },
    GET_USER: (state, data) => {
      state.user = data;
      window.localStorage.setItem("user", data);
    },
    GET_ROLE: (state, data) => {
      state.role = data;
      window.localStorage.setItem("role", data);
    }
  },

  mounted() {
    // console.log(this.loginInfo)
    if (window.localStorage.getItem("xnwfPcName") != null) {
      this.userName = window.localStorage.getItem("xnwfPcName");
      this.userPassword = window.localStorage.getItem("xnwfPcPassword");
    } else {
      this.userName = "";
      this.userPassword = "";
    }

    if (navigator.userAgent.indexOf("iPhone") !== -1) {
      window.wechaturl = window.location + "";
      // console.log(window.wechaturl);
    } //ios
    if (navigator.userAgent.indexOf("miniProgram") !== -1) {
      window.wechaturl = window.location + "";
    } //android
    // console.log(window.wechaturl);
  },
  computed: {},
  components: {}
};
</script>
<style scoped lang="less">
@import url("../../style/login/login.less");
</style>
