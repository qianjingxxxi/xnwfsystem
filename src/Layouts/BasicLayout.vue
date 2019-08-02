<template>
  <div :class="[`nav-theme-${navTheme}`]">
    <a-layout id="components-layout-demo-side" style="min-height:100vh">
      <a-layout-sider :theme="navTheme" :trigger="null" collapsible v-model="collapsed">
        <div class="logo">
          <img :src="collapsed ?  logoClose :  logoOpen" />
        </div>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-auth="['user']"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold' "
            @click="collapsed=!collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content>
          <a-breadcrumb>
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div>
            <router-view></router-view>
          </div>
        </a-layout-content>

        <a-layout-footer style="text-align:center">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <Authorized :authority="['user']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
import Header from "./Header";
import SiderMenu from "./SiderMenu";
import Footer from "./Footer";
import SettingDrawer from "@/components/SettingDrawer/index";
// import logo from "@/assets/logo.png";
export default {
  data() {
    return {
      collapsed: false,
      logoOpen: require("../assets/logo.png"),
      logoClose: require("../assets/bird.png")
    };
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    }
  },
  methods: {}
};
</script>
<style lang="less" >
.trigger {
  padding: 0 28px;
  line-height: 64px;
  font-size: 24px;
}
.trigger:hover {
  background: #eee;
}
#components-layout-demo-side .logo {
  height: 40px;
  // background: #ffffff33;
  margin: 10px;
  img {
    height: 40px;
    margin-left: 10%;
  }
}
</style>
