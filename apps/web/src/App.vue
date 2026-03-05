<template>
  <t-config-provider :global-config="localeConfig">
    <router-view />
  </t-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import zhCN from "tdesign-vue-next/es/locale/zh_CN";
import zhTW from "tdesign-vue-next/es/locale/zh_TW";
import enUS from "tdesign-vue-next/es/locale/en_US";
import jaJP from "tdesign-vue-next/es/locale/ja_JP";
import arKW from "tdesign-vue-next/es/locale/ar_KW";
import itIT from "tdesign-vue-next/es/locale/it_IT";
import koKR from "tdesign-vue-next/es/locale/ko_KR";
import ruRU from "tdesign-vue-next/es/locale/ru_RU";

const { locale } = useI18n();

const localeConfig = computed(() => {
  switch (locale.value) {
    case "zh-TW":
      return zhTW;
    case "en-US":
      return enUS;
    case "ja-JP":
      return jaJP;
    case "ar-KW":
      return arKW;
    case "it-IT":
      return itIT;
    case "ko-KR":
      return koKR;
    case "ru-RU":
      return ruRU;
    case "zh-CN":
    default:
      return zhCN;
  }
});
</script>

<style>
/* 全局样式或重置 */
body,
html,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
