<template>
  <t-layout class="main-layout">
    <t-aside :width="collapsed ? '64px' : '232px'" class="main-aside">
      <t-menu
        v-model="activeMenu"
        v-model:expanded="expanded"
        :collapsed="collapsed"
        theme="light"
        height="100%"
      >
        <template #logo>
          <div class="logo-container">
            <span v-if="!collapsed" class="logo-text">Cocotools</span>
            <span v-else class="logo-text">C</span>
          </div>
        </template>
        <t-menu-item value="dashboard" :to="resolvePath('/dashboard')">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          {{ $t("menu.dashboard") }}
        </t-menu-item>
        <t-submenu value="tools" :title="$t('menu.tools')">
          <template #icon>
            <t-icon name="tools" />
          </template>
          <t-submenu value="dev-tools" :title="$t('menu.devTools')">
            <template #icon>
              <t-icon
                :name="
                  expanded.includes('dev-tools') ? 'folder-open' : 'folder'
                "
              />
            </template>
            <t-menu-item
              value="cssminify"
              :to="resolvePath('/tools/dev/css-minify')"
              >{{ $t("menu.cssMinify") }}</t-menu-item
            >
            <t-menu-item
              value="file-tree-generator"
              :to="resolvePath('/tools/dev/file-tree-generator')"
              >{{ $t("menu.fileTreeGenerator") }}</t-menu-item
            >
          </t-submenu>
        </t-submenu>
        <!-- 其他菜单项 -->
      </t-menu>
    </t-aside>
    <t-layout class="content-layout">
      <t-header class="main-header">
        <div class="header-left">
          <t-button variant="text" shape="square" @click="toggleSidebar">
            <template #icon>
              <t-icon name="view-list" />
            </template>
          </t-button>
        </div>
        <div class="header-right">
          <LanguageSwitcher />
          <t-dropdown :min-column-width="120" trigger="click">
            <t-button variant="text" shape="square">
              <template #icon>
                <t-icon v-if="theme === 'light'" name="mode-light" />
                <t-icon v-else-if="theme === 'dark'" name="mode-dark" />
                <t-icon v-else name="desktop" />
              </template>
            </t-button>
            <t-dropdown-menu>
              <t-dropdown-item @click="handleThemeChange('light')">
                <t-icon name="mode-light" style="margin-right: 8px" />
                {{ $t("menu.lightMode") }}
              </t-dropdown-item>
              <t-dropdown-item @click="handleThemeChange('dark')">
                <t-icon name="mode-dark" style="margin-right: 8px" />
                {{ $t("menu.darkMode") }}
              </t-dropdown-item>
              <t-dropdown-item @click="handleThemeChange('auto')">
                <t-icon name="desktop" style="margin-right: 8px" />
                {{ $t("menu.systemMode") }}
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </div>
      </t-header>
      <t-layout class="scroll-container">
        <t-content class="main-content">
          <router-view />
        </t-content>
        <t-footer class="main-footer">
          Copyright © 2023-{{ new Date().getFullYear() }} Cocotools. All Rights
          Reserved.
        </t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useTheme } from "../composables/useTheme";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";

const route = useRoute();
const collapsed = ref(false);
const expanded = ref<string[]>([]);
const { theme, setTheme } = useTheme();
const { locale } = useI18n();

const activeMenu = computed(() => {
  return route.name ? String(route.name).toLowerCase() : "dashboard";
});

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const handleThemeChange = (mode: "light" | "dark" | "auto") => {
  setTheme(mode);
};

const resolvePath = (path: string) => {
  const currentLang = locale.value;
  // 如果是默认语言，直接返回原路径
  if (currentLang === "zh-CN") {
    return path;
  }
  // 否则添加语言前缀
  // 确保路径以 / 开头
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${currentLang}${cleanPath}`;
};
</script>

<style scoped>
.main-layout {
  height: 100vh;
}

.main-aside {
  transition: width 0.2s;
  border-right: 1px solid var(--td-component-stroke);
}

.logo-container {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 20px;
  font-weight: bold;
  color: var(--td-text-color-primary);
  width: 100%;
}

:deep(.t-menu__logo) {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

:deep(.t-menu__item .t-icon),
:deep(.t-submenu__title .t-icon) {
  font-size: 18px;
}

.content-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.main-header {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.scroll-container {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1 0 auto;
  padding: 24px;
  background-color: var(--td-bg-color-page);
  display: flex;
  flex-direction: column;
}

.main-footer {
  text-align: center;
  padding: 16px;
  color: var(--td-text-color-placeholder);
  background-color: var(--td-bg-color-page);
}
</style>
