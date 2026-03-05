import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Dashboard from "../pages/Dashboard.vue";
import NotFound from "../pages/NotFound.vue";
import CssMinify from "../pages/tools/dev/CssMinify.vue";
import FileTreeGenerator from "../pages/tools/dev/FileTreeGenerator.vue";
import TripleDES from "../pages/tools/crypto/TripleDES.vue";
import i18n from "../locales";

const supportedLocales = [
  "zh-CN",
  "zh-TW",
  "en-US",
  "ja-JP",
  "ar-KW",
  "it-IT",
  "ko-KR",
  "ru-RU",
];

const routes: RouteRecordRaw[] = [
  {
    path: "/:lang(zh-CN|zh-TW|en-US|ja-JP|ar-KW|it-IT|ko-KR|ru-RU)?",
    component: MainLayout,
    children: [
      {
        path: "",
        redirect: (to) => {
          const lang = to.params.lang as string;
          return lang ? `/${lang}/dashboard` : "/dashboard";
        },
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "仪表盘" },
      },
      {
        path: "tools/dev/css-minify",
        name: "CssMinify",
        component: CssMinify,
        meta: { title: "CSS 压缩" },
      },
      {
        path: "tools/dev/file-tree-generator",
        name: "FileTreeGenerator",
        component: FileTreeGenerator,
        meta: { title: "文件树生成器" },
      },
      {
        path: "tools/crypto/3des",
        name: "TripleDES",
        component: TripleDES,
        meta: { title: "3DES 加解密" },
      },
      // 其他业务页面将添加到这里
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const lang = to.params.lang as string;

  // 1. 如果路径中有语言参数，且在支持列表中，则设置为当前语言
  if (lang && supportedLocales.includes(lang)) {
    if (i18n.global.locale.value !== lang) {
      i18n.global.locale.value = lang as any;
      localStorage.setItem("locale", lang);
    }
  } else {
    // 2. 如果路径中没有语言参数
    const defaultLang = "zh-CN";
    const savedLang = localStorage.getItem("locale");

    // 如果有保存的语言偏好，且不是默认语言，则重定向
    if (
      savedLang &&
      savedLang !== defaultLang &&
      supportedLocales.includes(savedLang)
    ) {
      if (to.fullPath.startsWith("/")) {
        return next(`/${savedLang}${to.fullPath}`);
      }
      return next(`/${savedLang}/${to.fullPath}`);
    }

    // 否则默认为 zh-CN
    if (i18n.global.locale.value !== defaultLang) {
      i18n.global.locale.value = defaultLang as any;
      // 这里不强制覆盖 localStorage，以免影响用户首次访问的判断，但如果用户在 defaultLang，保持一致也可以
      localStorage.setItem("locale", defaultLang);
    }
  }
  next();
});

export default router;
