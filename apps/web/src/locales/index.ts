import { createI18n } from "vue-i18n";
import zhCN from "./zh-CN";
import zhTW from "./zh-TW";
import enUS from "./en-US";
import jaJP from "./ja-JP";
import arKW from "./ar-KW";
import itIT from "./it-IT";
import koKR from "./ko-KR";
import ruRU from "./ru-RU";

const messages = {
  "zh-CN": zhCN,
  "zh-TW": zhTW,
  "en-US": enUS,
  "ja-JP": jaJP,
  "ar-KW": arKW,
  "it-IT": itIT,
  "ko-KR": koKR,
  "ru-RU": ruRU,
};

// Get stored locale or default
const getLocale = () => {
  const stored = localStorage.getItem("locale");
  if (stored && Object.keys(messages).includes(stored)) {
    return stored;
  }

  const browserLang = navigator.language;

  // Exact match
  if (Object.keys(messages).includes(browserLang)) {
    return browserLang;
  }

  // Partial match
  if (browserLang.startsWith("zh")) {
    return browserLang.includes("TW") || browserLang.includes("HK")
      ? "zh-TW"
      : "zh-CN";
  }
  if (browserLang.startsWith("en")) {
    return "en-US";
  }
  if (browserLang.startsWith("ja")) {
    return "ja-JP";
  }
  if (browserLang.startsWith("ar")) {
    return "ar-KW";
  }
  if (browserLang.startsWith("it")) {
    return "it-IT";
  }
  if (browserLang.startsWith("ko")) {
    return "ko-KR";
  }
  if (browserLang.startsWith("ru")) {
    return "ru-RU";
  }

  return "zh-CN";
};

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: getLocale(),
  fallbackLocale: "zh-CN",
  messages,
});

export default i18n;
