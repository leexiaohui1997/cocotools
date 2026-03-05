import { ref } from "vue";

export type ThemeMode = "light" | "dark" | "auto";

// Global state
const theme = ref<ThemeMode>("light");
const resolvedTheme = ref<"light" | "dark">("light");

const applyTheme = (mode: ThemeMode) => {
  let targetMode: "light" | "dark" = "light";
  if (mode === "auto") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    targetMode = isDark ? "dark" : "light";
  } else {
    targetMode = mode;
  }
  resolvedTheme.value = targetMode;
  document.documentElement.setAttribute("theme-mode", targetMode);
};

const setTheme = (mode: ThemeMode) => {
  theme.value = mode;
  localStorage.setItem("theme-mode", mode);
  applyTheme(mode);
};

// Initialize theme
const initTheme = () => {
  const storedTheme = localStorage.getItem("theme-mode") as ThemeMode | null;
  if (storedTheme) {
    theme.value = storedTheme;
  }
  applyTheme(theme.value);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (theme.value === "auto") {
        applyTheme("auto");
      }
    });
};

// Run initialization once
if (typeof window !== "undefined") {
  initTheme();
}

export function useTheme() {
  return {
    theme,
    resolvedTheme,
    setTheme,
  };
}
