/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import NoFound from "./views/ErrorPage/404.vue";
import ForBidden from "./views/ErrorPage/403.vue";
import NoNotwork from "./views/ErrorPage/500.vue";
import findLast from "lodash/findLast"
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { check, isLogin } from "./utils/auth";
import { notification } from "ant-design-vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      component: { render: h => h("router-view") },
      children: [{
        path: "/user",
        redirect: "/user/login",
        hideChildrenInMenu: true
      }, {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/User/Login")
      }]
    },
    {
      path: "/",
      meta: { authority: ["user", "admin"] },
      component: () =>
        import(/* webpackChunkName: "layout" */ "./Layouts/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/management/visitLog",
          hideChildrenInMenu: true
        },
        {
          path: "/management",
          name: "management",
          meta: { icon: "pie-chart", title: "运营中心" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/management",
              redirect: "/management/visitLog",
              hideChildrenInMenu: true
            },
            {
              path: "/management/visitLog",
              name: "visitLog",
              meta: { title: "拜访记录" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Management/VisitLog")
            }, {
              path: "/management/entryLog",
              name: "entryLog",
              meta: { title: "入职记录" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Management/EntryLog")
            }, {
              path: "/management/demissionLog",
              name: "demissionLog",
              meta: { title: "离职记录" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Management/DemissionLog")
            }, {
              path: "/management/statistical",
              name: "statistical",
              meta: { title: "统计数据" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Management/Statistical")
            },
          ]
        },
        {
          path: "/business",
          name: "business",
          meta: { icon: "appstore", title: "业务管理" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/business",
              redirect: "/business/project",
              hideChildrenInMenu: true
            }, {
              path: '/business/project',
              name: "project",
              meta: { title: "项目" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Business/Project")
            }]
        }, {
          path: "/account",
          name: "account",
          meta: { icon: "user", title: "账号中心" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/account",
              redirect: "/account/userInfo",
              hideChildrenInMenu: true
            },
            {
              path: "/account/role",
              name: "role",
              meta: { title: "角色" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Account/Role")
            }, {
              path: "/account/userInfo",
              name: "userInfo",
              meta: { title: "用户" },
              component: () =>
                import(/* webpackChunkName: "account" */ "./views/Account/UserInfo")
            }
          ]
        }, {
          path: "/setting",
          name: "setting",
          meta: { icon: "setting", title: "设置" },
          children: [
            {
              path: "/setting",
              redirect: "/setting/password",
              hideChildrenInMenu: true
            }, {
              path: "/password",
              name: "password",
              // meta: { title: "修改密码", authority: ["admin"] },
              meta: { title: "修改密码" },
              component: () =>
                import(/* webpackChunkName: "setting" */ "./views/Setting/Password")
            }]
        }
      ]
    },
    {
      path: "/403",
      name: "403",
      hideInMenu: true,
      component: ForBidden
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NoFound
    }, {
      path: "/500",
      name: "500",
      hideInMenu: true,
      component: NoNotwork
    }

  ]
});
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path !== "/403") {
      notification.error({
        message: "403",
        description: "你没有权限访问，请联系管理员咨询。"
      });
      next({
        path: "/403"
      });
    }
    NProgress.done();
  }

  next();
});

router.afterEach(() => {
  NProgress.done()
})

export default router;