import { ref, watch, onMounted } from "vue";

export type ThemeMode = "light" | "dark" | "auto";

export function useTheme() {
  const theme = ref<ThemeMode>("light");

  const applyTheme = (mode: ThemeMode) => {
    let targetMode = mode;
    if (mode === "auto") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      targetMode = isDark ? "dark" : "light";
    }
    document.documentElement.setAttribute("theme-mode", targetMode);
  };

  const setTheme = (mode: ThemeMode) => {
    theme.value = mode;
    localStorage.setItem("theme-mode", mode);
    applyTheme(mode);
  };

  onMounted(() => {
    const storedTheme = localStorage.getItem("theme-mode") as ThemeMode | null;
    if (storedTheme) {
      theme.value = storedTheme;
    }
    applyTheme(theme.value);

    // 监听系统主题变化
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (theme.value === "auto") {
          applyTheme("auto");
        }
      });
  });

  return {
    theme,
    setTheme,
  };
}
