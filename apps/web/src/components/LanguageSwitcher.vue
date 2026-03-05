<template>
  <t-dropdown :min-column-width="120" trigger="click">
    <t-button variant="text" shape="square">
      <template #icon>
        <t-icon name="translate" />
      </template>
    </t-button>
    <t-dropdown-menu>
      <t-dropdown-item
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        @click="changeLocale(opt.value)"
        :active="currentLocale === opt.value"
      >
        {{ opt.label }}
      </t-dropdown-item>
    </t-dropdown-menu>
  </t-dropdown>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const route = useRoute();

const options = [
  { label: "简体中文", value: "zh-CN" },
  { label: "繁體中文", value: "zh-TW" },
  { label: "English", value: "en-US" },
  { label: "日本語", value: "ja-JP" },
  { label: "العربية", value: "ar-KW" },
  { label: "Italiano", value: "it-IT" },
  { label: "한국어", value: "ko-KR" },
  { label: "Русский", value: "ru-RU" },
];

const currentLocale = computed({
  get: () => locale.value,
  set: () => {
    // i18n update is handled by router guard
  },
});

const changeLocale = (val: string) => {
  const currentLang = route.params.lang || "zh-CN";
  if (currentLang === val) {
    return;
  }

  // 复制当前的 params
  const newParams = { ...route.params };

  // 保存语言偏好
  localStorage.setItem("locale", val);

  if (val === "zh-CN") {
    // 切换到默认语言，移除 lang 参数
    // 在 Vue Router 4 中，对于可选参数，传递空字符串 "" 通常是移除它的有效方法
    // 尤其是在 params 对象中
    newParams.lang = "";
  } else {
    // 否则设置 lang 参数
    newParams.lang = val;
  }

  router.replace({
    name: route.name as string,
    params: newParams,
    query: route.query,
  });
};
</script>
