<template>
  <t-layout class="main-layout">
    <t-aside :width="collapsed ? '64px' : '232px'" class="main-aside">
      <t-menu
        v-model="activeMenu"
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
        <t-menu-item value="dashboard" to="/dashboard">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          仪表盘
        </t-menu-item>
        <!-- 其他菜单项 -->
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header class="main-header">
        <div class="header-left">
          <t-button variant="text" shape="square" @click="toggleSidebar">
            <template #icon>
              <t-icon name="view-list" />
            </template>
          </t-button>
        </div>
        <div class="header-right">
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
                <t-icon name="mode-light" style="margin-right: 8px" /> 亮色模式
              </t-dropdown-item>
              <t-dropdown-item @click="handleThemeChange('dark')">
                <t-icon name="mode-dark" style="margin-right: 8px" /> 暗色模式
              </t-dropdown-item>
              <t-dropdown-item @click="handleThemeChange('auto')">
                <t-icon name="desktop" style="margin-right: 8px" /> 跟随系统
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </div>
      </t-header>
      <t-content class="main-content">
        <router-view />
      </t-content>
      <t-footer class="main-footer">
        Copyright © 2023-{{ new Date().getFullYear() }} Cocotools. All Rights
        Reserved.
      </t-footer>
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useTheme } from "../composables/useTheme";

const route = useRoute();
const collapsed = ref(false);
const { theme, setTheme } = useTheme();

const activeMenu = computed(() => {
  return route.name ? String(route.name).toLowerCase() : "dashboard";
});

const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

const handleThemeChange = (mode: "light" | "dark" | "auto") => {
  setTheme(mode);
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

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.main-content {
  padding: 24px;
  overflow-y: auto;
  background-color: var(--td-bg-color-page);
}

.main-footer {
  text-align: center;
  padding: 16px;
  color: var(--td-text-color-placeholder);
  background-color: var(--td-bg-color-page);
}
</style>
