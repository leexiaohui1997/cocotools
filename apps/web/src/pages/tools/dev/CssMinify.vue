<template>
  <t-card
    :title="$t('tool.cssMinify.title')"
    :description="$t('tool.cssMinify.description')"
    class="css-minify-card"
  >
    <t-row :gutter="[16, 16]" class="full-height-row">
      <!-- Input Area -->
      <t-col :span="6" :xs="12">
        <div class="column-container">
          <div class="area-header">
            <div class="title-group">
              <h3>{{ $t("tool.cssMinify.inputTitle") }}</h3>
              <span class="size-info" v-if="inputCss">
                {{ formatSize(inputSize) }}
              </span>
            </div>
            <div class="toolbar">
              <t-button variant="text" size="small" @click="loadExample">{{
                $t("common.loadExample")
              }}</t-button>
              <t-button
                variant="text"
                size="small"
                @click="triggerFileUpload"
                >{{ $t("tool.cssMinify.uploadBtn") }}</t-button
              >
              <t-button
                variant="text"
                theme="danger"
                size="small"
                @click="clearInput"
                >{{ $t("common.clear") }}</t-button
              >
              <input
                type="file"
                ref="fileInput"
                accept=".css"
                style="display: none"
                @change="handleFileUpload"
              />
            </div>
          </div>

          <div
            class="editor-wrapper"
            @dragover.prevent
            @drop.prevent="handleDrop"
          >
            <vue-monaco-editor
              v-model:value="inputCss"
              language="css"
              :theme="editorTheme"
              :options="editorOptions"
              height="400px"
              class="code-editor"
            />
          </div>
        </div>
      </t-col>

      <!-- Output Area -->
      <t-col :span="6" :xs="12">
        <div class="column-container">
          <div class="area-header">
            <div class="title-group">
              <h3>{{ $t("tool.cssMinify.outputTitle") }}</h3>
              <span class="size-info" v-if="compressedCss">
                {{ formatSize(compressedSize) }}
                <span class="rate"
                  >| {{ $t("common.rate") }}: {{ compressionRate }}</span
                >
              </span>
            </div>
            <div class="toolbar">
              <t-checkbox v-model="enableWordWrap">{{
                $t("common.autoWrap")
              }}</t-checkbox>
              <t-button theme="primary" size="small" @click="compressCss">{{
                $t("tool.cssMinify.compressBtn")
              }}</t-button>
              <t-button
                variant="outline"
                size="small"
                @click="copyResult"
                :disabled="!compressedCss"
                >{{ $t("tool.cssMinify.copyBtn") }}</t-button
              >
            </div>
          </div>

          <div class="editor-wrapper">
            <vue-monaco-editor
              v-model:value="compressedCss"
              language="css"
              :theme="editorTheme"
              :options="outputEditorOptions"
              height="200px"
              class="code-editor"
            />
          </div>
        </div>
      </t-col>
    </t-row>
  </t-card>

  <div class="guide-container">
    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="help-circle" />
        {{ $t("tool.cssMinify.guide.meaning.title") }}
      </h3>
      <p class="section-desc">
        {{ $t("tool.cssMinify.guide.meaning.desc") }}
      </p>
    </div>

    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="control-platform" />
        {{ $t("tool.cssMinify.guide.features.title") }}
      </h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4>
            <t-icon name="edit-1" />
            {{ $t("tool.cssMinify.guide.features.editor.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.features.editor.desc") }}
          </p>
        </div>
        <div class="feature-item">
          <h4>
            <t-icon name="chart-bar" />
            {{ $t("tool.cssMinify.guide.features.stats.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.features.stats.desc") }}
          </p>
        </div>
        <div class="feature-item">
          <h4>
            <t-icon name="rocket" />
            {{ $t("tool.cssMinify.guide.features.lossless.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.features.lossless.desc") }}
          </p>
        </div>
        <div class="feature-item">
          <h4>
            <t-icon name="shield-check" />
            {{ $t("tool.cssMinify.guide.features.security.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.features.security.desc") }}
          </p>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="book-open" /> {{ $t("tool.cssMinify.guide.usage.title") }}
      </h3>
      <div class="step-list">
        <div class="step-item">
          <span class="step-num">1</span>
          <div class="step-content">
            <h4>{{ $t("tool.cssMinify.guide.usage.step1.title") }}</h4>
            <p>
              {{ $t("tool.cssMinify.guide.usage.step1.desc") }}
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div class="step-content">
            <h4>{{ $t("tool.cssMinify.guide.usage.step2.title") }}</h4>
            <p>
              {{ $t("tool.cssMinify.guide.usage.step2.desc") }}
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">3</span>
          <div class="step-content">
            <h4>{{ $t("tool.cssMinify.guide.usage.step3.title") }}</h4>
            <p>
              {{ $t("tool.cssMinify.guide.usage.step3.desc") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="code" /> {{ $t("tool.cssMinify.guide.tech.title") }}
      </h3>
      <div class="tech-content">
        <div class="tech-item">
          <h4>
            <t-icon name="cpu" />
            {{ $t("tool.cssMinify.guide.tech.principle.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.tech.principle.desc") }}
          </p>
        </div>
        <div class="tech-item">
          <h4>
            <t-icon name="layers" />
            {{ $t("tool.cssMinify.guide.tech.optimization.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.tech.optimization.desc") }}
          </p>
        </div>
        <div class="tech-item">
          <h4>
            <t-icon name="server" />
            {{ $t("tool.cssMinify.guide.tech.production.title") }}
          </h4>
          <p>
            {{ $t("tool.cssMinify.guide.tech.production.desc") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";
import { useTheme } from "../../../composables/useTheme";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const inputCss = ref("");
const compressedCss = ref("");
const enableWordWrap = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

// Theme
const { resolvedTheme } = useTheme();
const editorTheme = computed(() =>
  resolvedTheme.value === "dark" ? "vs-dark" : "vs",
);

const editorOptions = {
  minimap: { enabled: false },
  fontSize: 13,
  scrollBeyondLastLine: false,
  automaticLayout: true,
  scrollbar: {
    alwaysConsumeMouseWheel: false,
  },
};

const outputEditorOptions = computed(() => ({
  ...editorOptions,
  readOnly: true,
  domReadOnly: true,
  wordWrap: enableWordWrap.value ? "on" : "off",
}));

// Computed Properties
const inputSize = computed(() => new Blob([inputCss.value]).size);
const compressedSize = computed(() => new Blob([compressedCss.value]).size);

const compressionRate = computed(() => {
  if (inputSize.value === 0) return "0%";
  const rate =
    ((inputSize.value - compressedSize.value) / inputSize.value) * 100;
  return `${rate.toFixed(1)}%`;
});

// Helper Functions
const formatSize = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Actions
const loadExample = () => {
  inputCss.value = `/* Basic Reset */
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.5;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* 
  Navigation Bar 
  Multiline comment example
*/
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.navbar a:hover {
  background-color: #555;
  border-radius: 4px;
}
`;
};

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const readFileContent = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    if (e.target?.result) {
      inputCss.value = e.target.result as string;
      MessagePlugin.success(t("common.fileLoaded"));
    }
  };
  reader.onerror = () => {
    MessagePlugin.error(t("common.fileLoadFail"));
  };
  reader.readAsText(file);
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    readFileContent(file);
    // Reset input so the same file can be selected again if needed
    target.value = "";
  }
};

const handleDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0];
  if (file) {
    if (file.name.endsWith(".css") || file.type === "text/css") {
      readFileContent(file);
    } else {
      MessagePlugin.warning(t("tool.cssMinify.dragTip"));
    }
  }
};

const clearInput = () => {
  inputCss.value = "";
  compressedCss.value = "";
  MessagePlugin.info(t("common.cleared"));
};

const compressCss = () => {
  if (!inputCss.value.trim()) {
    MessagePlugin.warning(t("common.inputEmpty"));
    return;
  }

  try {
    let css = inputCss.value;

    // 1. Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, "");

    // 2. Remove whitespace around special characters
    css = css.replace(/\s*([{}:;,])\s*/g, "$1");

    // 3. Remove newlines and extra spaces
    css = css.replace(/\s+/g, " "); // Collapse multiple spaces

    // 4. Remove last semicolon in block
    css = css.replace(/;}/g, "}");

    // 5. Trim result
    css = css.trim();

    // Re-run step 2 to clean up any spaces introduced by step 3 around symbols if any
    css = css.replace(/\s*([{}:;,])\s*/g, "$1");

    compressedCss.value = css;
    MessagePlugin.success(t("common.compressSuccess"));
  } catch (error) {
    console.error(error);
    MessagePlugin.error(t("common.compressFail"));
  }
};

const copyResult = () => {
  if (!compressedCss.value) return;

  navigator.clipboard
    .writeText(compressedCss.value)
    .then(() => {
      MessagePlugin.success(t("common.copySuccess"));
    })
    .catch(() => {
      MessagePlugin.error(t("common.copyFail"));
    });
};
</script>

<style scoped>
.css-minify-card {
  display: flex;
  flex-direction: column;
}

.css-minify-card :deep(.t-card__header) {
  padding: 16px;
  padding-bottom: 0;
}

.css-minify-card :deep(.t-card__description) {
  margin-bottom: 0;
}

.css-minify-card :deep(.t-card__body) {
  padding: 16px;
  overflow: visible; /* Ensure content is not clipped */
}

.column-container {
  display: flex;
  flex-direction: column;
  /* height: 100%; */
}

.column-container {
  display: flex;
  flex-direction: column;
}

.area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.title-group {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.area-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.size-info {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}

.rate {
  margin-left: 4px;
  color: var(--td-brand-color);
  font-weight: 500;
}

.toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
}

.editor-wrapper {
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-default);
  overflow: hidden;
  /* overflow: hidden; */ /* Ensure monaco editor stays within bounds */
}

/* Guide Content Styles */
.guide-container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.guide-section {
  background-color: var(--td-bg-color-container);
  border-radius: var(--td-radius-default);
  padding: 24px;
  border: 1px solid var(--td-component-border);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.section-title .t-icon {
  color: var(--td-brand-color);
  font-size: 20px;
}

.section-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--td-text-color-secondary);
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-item h4 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.feature-item h4 .t-icon {
  color: var(--td-brand-color);
}

.feature-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--td-text-color-secondary);
}

/* Step List */
.step-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-item {
  display: flex;
  gap: 16px;
}

.step-num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: var(--td-brand-color-light);
  color: var(--td-brand-color);
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.step-content p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--td-text-color-secondary);
}

/* Tech Content */
.tech-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.tech-item h4 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--td-text-color-primary);
}

.tech-item h4 .t-icon {
  color: var(--td-brand-color);
}

.tech-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--td-text-color-secondary);
}

@media (min-width: 768px) {
  .step-list {
    flex-direction: row;
  }

  .step-item {
    flex: 1;
  }
}
</style>
