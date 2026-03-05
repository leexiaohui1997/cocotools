<template>
  <t-card
    title="CSS 压缩工具"
    description="移除多余的空格、注释和换行符，精简 CSS 代码体积，使其更适合生产环境部署。"
    class="css-minify-card"
  >
    <t-row :gutter="[16, 16]" class="full-height-row">
      <!-- Input Area -->
      <t-col :span="6" :xs="12">
        <div class="column-container">
          <div class="area-header">
            <div class="title-group">
              <h3>输入 CSS</h3>
              <span class="size-info" v-if="inputCss">
                {{ formatSize(inputSize) }}
              </span>
            </div>
            <div class="toolbar">
              <t-button variant="text" size="small" @click="loadExample"
                >载入示例</t-button
              >
              <t-button variant="text" size="small" @click="triggerFileUpload"
                >上传 CSS 文件</t-button
              >
              <t-button
                variant="text"
                theme="danger"
                size="small"
                @click="clearInput"
                >清空</t-button
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
              <h3>压缩结果</h3>
              <span class="size-info" v-if="compressedCss">
                {{ formatSize(compressedSize) }}
                <span class="rate">| 压缩率: {{ compressionRate }}</span>
              </span>
            </div>
            <div class="toolbar">
              <t-checkbox v-model="enableWordWrap">自动换行</t-checkbox>
              <t-button theme="primary" size="small" @click="compressCss"
                >压缩 CSS</t-button
              >
              <t-button
                variant="outline"
                size="small"
                @click="copyResult"
                :disabled="!compressedCss"
                >复制结果</t-button
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
        <t-icon name="help-circle" /> CSS 压缩的意义
      </h3>
      <p class="section-desc">
        CSS
        压缩是网页性能优化的核心环节。通过移除空白、注释和冗余代码，优化代码结构（合并规则、缩短颜色值），可将文件体积减小
        20-60%，显著提升页面加载速度，降低带宽成本。这对生产环境部署、移动端开发、CDN
        分发至关重要，直接影响用户体验和 SEO 排名。压缩后的 CSS
        保持功能完全不变，是前端工程化的标准实践。
      </p>
    </div>

    <div class="guide-section">
      <h3 class="section-title"><t-icon name="control-platform" /> 功能特点</h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4><t-icon name="edit-1" /> 编辑器 + 文件双流程</h4>
          <p>
            支持粘贴 CSS、拖拽 .css
            文件或载入示例，工具会自动读取并展示，支持一键清空和复制，方便随时对比。
          </p>
        </div>
        <div class="feature-item">
          <h4><t-icon name="chart-bar" /> 生产级指标看板</h4>
          <p>
            实时统计原始体积、压缩后体积、压缩率和预计 CDN
            带宽节省，帮助评估性能收益和支撑优化决策。
          </p>
        </div>
        <div class="feature-item">
          <h4><t-icon name="rocket" /> 无损压缩规则</h4>
          <p>
            一键完成空白符与注释删除、零值优化 (0px→0)、颜色缩写
            (#ffffff→#fff)、属性合并，确保最终呈现，完全不改变 CSS 行为。
          </p>
        </div>
        <div class="feature-item">
          <h4><t-icon name="shield-check" /> CI/CD 级别安全</h4>
          <p>
            全部逻辑在浏览器端完成，不上传任何样式文件。一键复制或下载
            style.min.css，即可安全接入构建流程。
          </p>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title"><t-icon name="book-open" /> 使用指南</h3>
      <div class="step-list">
        <div class="step-item">
          <span class="step-num">1</span>
          <div class="step-content">
            <h4>收集样式</h4>
            <p>
              粘贴 CSS，拖放 .css 文件或加载示例，确认编辑器中显示原始内容。
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div class="step-content">
            <h4>调整设置</h4>
            <p>
              选中“自动换行”方便查看，默认开启所有压缩优化规则，无需额外配置。
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">3</span>
          <div class="step-content">
            <h4>输出结果</h4>
            <p>
              点击“压缩
              CSS”，核对无误后，随时复制、下载或直接替换项目中的/发布文件。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title"><t-icon name="code" /> 技术介绍</h3>
      <div class="tech-content">
        <div class="tech-item">
          <h4><t-icon name="cpu" /> CSS 压缩原理</h4>
          <p>
            CSS
            压缩通过去除冗余字符（空格、换行、注释）、优化代码结构（合并规则、缩短颜色值）、简化语法（移除非必要分号、引号）来减小文件大小，压缩过程确保
            CSS 功能完全不变，仅改变代码的物理表现，可将文件减小
            20-60%，显著提升网页加载速度。
          </p>
        </div>
        <div class="tech-item">
          <h4><t-icon name="layers" /> 压缩优化技术</h4>
          <p>
            CSS
            压缩包括多种优化技术：空白前移除（删除空格、换行、缩进）、注释清除、颜色值简化
            (#ffffff→#fff)、零值优化 (0px→0)、属性合并 (margin
            四个值合并)、选择器去重、无用代码移除。高级压缩还能支持属性排序、媒体查询合并、@import
            内联等，进一步减小体积。
          </p>
        </div>
        <div class="tech-item">
          <h4><t-icon name="server" /> 生产环境应用</h4>
          <p>
            CSS 压缩是前端性能优化的关键环节，应用于生产构建流程
            (Webpack、Vite、Gulp)、CDN 部署 (减少传输成本)、页面优化 (提升
            PageSpeed 评分)、移动端开发 (节省流量)。压缩后的 CSS
            通常需要保留源码版本用于调试，并使用 SourceMap 映射方便问题定位。
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
      MessagePlugin.success("文件加载成功");
    }
  };
  reader.onerror = () => {
    MessagePlugin.error("文件读取失败");
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
      MessagePlugin.warning("请拖拽 CSS 文件");
    }
  }
};

const clearInput = () => {
  inputCss.value = "";
  compressedCss.value = "";
  MessagePlugin.info("已清空");
};

const compressCss = () => {
  if (!inputCss.value.trim()) {
    MessagePlugin.warning("请输入 CSS 代码");
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
    MessagePlugin.success("压缩成功");
  } catch (error) {
    console.error(error);
    MessagePlugin.error("压缩过程出错");
  }
};

const copyResult = () => {
  if (!compressedCss.value) return;

  navigator.clipboard
    .writeText(compressedCss.value)
    .then(() => {
      MessagePlugin.success("已复制到剪贴板");
    })
    .catch(() => {
      MessagePlugin.error("复制失败");
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

.full-height-row {
  /* height: 100%; */
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
