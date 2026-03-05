<template>
  <t-card
    :title="$t('tool.fileTreeGenerator.title')"
    :description="$t('tool.fileTreeGenerator.description')"
    class="file-tree-card"
  >
    <t-row :gutter="[16, 16]" class="full-height-row">
      <!-- Input Area -->
      <t-col :span="6" :xs="12">
        <div class="column-container">
          <div class="area-header">
            <div class="title-group">
              <h3>{{ $t("tool.fileTreeGenerator.inputTitle") }}</h3>
            </div>
            <div class="toolbar">
              <t-button variant="text" size="small" @click="triggerDirSelect">{{
                $t("tool.fileTreeGenerator.selectDirBtn")
              }}</t-button>
              <t-button
                variant="text"
                theme="danger"
                size="small"
                @click="clearInput"
                >{{ $t("common.clear") }}</t-button
              >
              <input
                type="file"
                ref="dirInput"
                webkitdirectory
                directory
                style="display: none"
                @change="handleDirSelect"
              />
            </div>
          </div>

          <div class="config-area">
            <t-input
              v-model="ignorePatternsStr"
              :label="$t('tool.fileTreeGenerator.ignorePatterns')"
              placeholder="node_modules, .git, .DS_Store, dist"
              @change="handleIgnoreChange"
            />
          </div>

          <div
            class="drop-zone"
            :class="{ active: isDragActive }"
            @dragenter.prevent="isDragActive = true"
            @dragover.prevent="isDragActive = true"
            @dragleave.prevent="isDragActive = false"
            @drop.prevent="handleDrop"
            @click="triggerDirSelect"
          >
            <div class="drop-content">
              <t-icon name="folder-open" size="48px" />
              <p>{{ $t("tool.fileTreeGenerator.dragTip") }}</p>
            </div>
          </div>
        </div>
      </t-col>

      <!-- Output Area -->
      <t-col :span="6" :xs="12">
        <div class="column-container">
          <div class="area-header">
            <div class="title-group">
              <h3>{{ $t("tool.fileTreeGenerator.outputTitle") }}</h3>
            </div>
            <div class="toolbar">
              <t-button
                variant="outline"
                size="small"
                @click="copyResult"
                :disabled="!treeOutput"
                >{{ $t("tool.fileTreeGenerator.copyBtn") }}</t-button
              >
            </div>
          </div>

          <div class="editor-wrapper">
            <vue-monaco-editor
              v-model:value="treeOutput"
              language="plaintext"
              :theme="editorTheme"
              :options="outputEditorOptions"
              height="400px"
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
        {{ $t("tool.fileTreeGenerator.guide.meaning.title") }}
      </h3>
      <p class="section-desc">
        {{ $t("tool.fileTreeGenerator.guide.meaning.desc") }}
      </p>
    </div>

    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="control-platform" />
        {{ $t("tool.fileTreeGenerator.guide.features.title") }}
      </h3>
      <div class="feature-grid">
        <div class="feature-item">
          <h4>
            <t-icon name="move" />
            {{ $t("tool.fileTreeGenerator.guide.features.dragDrop.title") }}
          </h4>
          <p>
            {{ $t("tool.fileTreeGenerator.guide.features.dragDrop.desc") }}
          </p>
        </div>
        <div class="feature-item">
          <h4>
            <t-icon name="filter" />
            {{ $t("tool.fileTreeGenerator.guide.features.customIgnore.title") }}
          </h4>
          <p>
            {{ $t("tool.fileTreeGenerator.guide.features.customIgnore.desc") }}
          </p>
        </div>
      </div>
    </div>

    <div class="guide-section">
      <h3 class="section-title">
        <t-icon name="book-open" />
        {{ $t("tool.fileTreeGenerator.guide.usage.title") }}
      </h3>
      <div class="step-list">
        <div class="step-item">
          <span class="step-num">1</span>
          <div class="step-content">
            <h4>{{ $t("tool.fileTreeGenerator.guide.usage.step1.title") }}</h4>
            <p>
              {{ $t("tool.fileTreeGenerator.guide.usage.step1.desc") }}
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div class="step-content">
            <h4>{{ $t("tool.fileTreeGenerator.guide.usage.step2.title") }}</h4>
            <p>
              {{ $t("tool.fileTreeGenerator.guide.usage.step2.desc") }}
            </p>
          </div>
        </div>
        <div class="step-item">
          <span class="step-num">3</span>
          <div class="step-content">
            <h4>{{ $t("tool.fileTreeGenerator.guide.usage.step3.title") }}</h4>
            <p>
              {{ $t("tool.fileTreeGenerator.guide.usage.step3.desc") }}
            </p>
          </div>
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

const treeOutput = ref("");
const ignorePatternsStr = ref("node_modules, .git, .DS_Store, dist");
const dirInput = ref<HTMLInputElement | null>(null);
const isDragActive = ref(false);

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
  fontFamily: "Consolas, 'Courier New', monospace",
};

const outputEditorOptions = computed(() => ({
  ...editorOptions,
  readOnly: true,
  domReadOnly: true,
  wordWrap: "off",
}));

// Actions
const triggerDirSelect = () => {
  dirInput.value?.click();
};

const clearInput = () => {
  treeOutput.value = "";
  if (dirInput.value) dirInput.value.value = "";
  MessagePlugin.info(t("common.cleared"));
};

const handleIgnoreChange = () => {
  // If we had stored the files, we could re-generate.
  // For now, we rely on re-selecting or re-dropping.
};

const getIgnoreList = () => {
  return ignorePatternsStr.value
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s);
};

const shouldIgnore = (pathParts: string[]) => {
  const ignoreList = getIgnoreList();
  return pathParts.some((part) => ignoreList.includes(part));
};

interface TreeNode {
  name: string;
  children: TreeNode[];
}

const generateTreeStructure = (paths: string[]): TreeNode[] => {
  const root: TreeNode[] = [];

  // Sort paths to ensure consistent order
  paths.sort();

  for (const path of paths) {
    const parts = path.split("/");
    if (shouldIgnore(parts)) continue;

    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (!part) continue;

      let existingNode = currentLevel.find((node) => node.name === part);

      if (!existingNode) {
        existingNode = { name: part, children: [] };
        currentLevel.push(existingNode);
      }

      currentLevel = existingNode.children;
    }
  }

  return root;
};

const drawTree = (nodes: TreeNode[], prefix = ""): string => {
  let output = "";

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;
    const isLast = i === nodes.length - 1;
    const connector = isLast ? "└── " : "├── ";

    output += prefix + connector + node.name + "\n";

    if (node.children.length > 0) {
      const childPrefix = prefix + (isLast ? "    " : "│   ");
      output += drawTree(node.children, childPrefix);
    }
  }

  return output;
};

const processFiles = (fileList: FileList | File[]) => {
  const paths: string[] = [];

  // Try to use webkitRelativePath
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    if (!file) continue;

    if (file.webkitRelativePath) {
      paths.push(file.webkitRelativePath);
    } else {
      // Fallback for single files or drag drop without relative path
      paths.push(file.name);
    }
  }

  if (paths.length === 0) return;

  const treeStructure = generateTreeStructure(paths);
  treeOutput.value = drawTree(treeStructure);
  console.log("Tree generated successfully");
};

const handleDirSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFiles(target.files);
  }
};

// Drag and Drop Logic with Directory Traversal
const handleDrop = async (event: DragEvent) => {
  isDragActive.value = false;
  const items = event.dataTransfer?.items;

  if (!items) return;

  const paths: string[] = [];
  const ignoreList = getIgnoreList();

  const readAllEntries = async (dirReader: any): Promise<any[]> => {
    let entries: any[] = [];
    let readEntries = await new Promise<any[]>((resolve, reject) => {
      dirReader.readEntries(
        (result: any[]) => resolve(result),
        (err: any) => reject(err),
      );
    });

    while (readEntries.length > 0) {
      entries.push(...readEntries);
      readEntries = await new Promise<any[]>((resolve, reject) => {
        dirReader.readEntries(
          (result: any[]) => resolve(result),
          (err: any) => reject(err),
        );
      });
    }
    return entries;
  };

  const traverseFileTree = async (item: any, path = "") => {
    if (item.isFile) {
      // It's a file
      paths.push(path + item.name);
    } else if (item.isDirectory) {
      // It's a directory
      const dirName = item.name;
      // Check ignore for this directory
      if (ignoreList.includes(dirName)) return;

      const dirReader = item.createReader();
      const entries = await readAllEntries(dirReader);

      for (const entry of entries) {
        await traverseFileTree(entry, path + item.name + "/");
      }
    }
  };

  try {
    for (let i = 0; i < items.length; i++) {
      const item = (items[i] as any).webkitGetAsEntry();
      if (item) {
        await traverseFileTree(item);
      }
    }

    if (paths.length > 0) {
      const treeStructure = generateTreeStructure(paths);
      treeOutput.value = drawTree(treeStructure);
      console.log("Tree generated from drag and drop");
      MessagePlugin.success(t("common.fileLoaded"));
    }
  } catch (err) {
    console.error(err);
    MessagePlugin.error(t("common.fileLoadFail"));
  }
};

const copyResult = () => {
  if (!treeOutput.value) return;

  navigator.clipboard
    .writeText(treeOutput.value)
    .then(() => {
      MessagePlugin.success(t("common.copySuccess"));
    })
    .catch(() => {
      MessagePlugin.error(t("common.copyFail"));
    });
};
</script>

<style scoped>
.file-tree-card {
  display: flex;
  flex-direction: column;
}

.file-tree-card :deep(.t-card__header) {
  padding: 16px;
  padding-bottom: 0;
}

.file-tree-card :deep(.t-card__description) {
  margin-bottom: 0;
}

.file-tree-card :deep(.t-card__body) {
  padding: 16px;
  overflow: visible;
}

.column-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.title-group h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
}

.config-area {
  margin-bottom: 8px;
}

.drop-zone {
  border: 2px dashed var(--td-component-border);
  border-radius: var(--td-radius-default);
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 200px;
  background-color: var(--td-bg-color-container-hover);
}

.drop-zone:hover,
.drop-zone.active {
  border-color: var(--td-brand-color);
  background-color: var(--td-brand-color-light);
}

.drop-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--td-text-color-secondary);
}

.drop-content .t-icon {
  color: var(--td-brand-color);
}

.drop-content p {
  margin: 0;
  font-size: 14px;
}

.editor-wrapper {
  border: 1px solid var(--td-component-border);
  border-radius: var(--td-radius-default);
  overflow: hidden;
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

@media (min-width: 768px) {
  .step-list {
    flex-direction: row;
  }

  .step-item {
    flex: 1;
  }
}
</style>
