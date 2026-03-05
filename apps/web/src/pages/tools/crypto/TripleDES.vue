<template>
  <div class="triple-des-tool">
    <t-card
      :title="$t('tool.crypto.tripleDes.title')"
      :description="$t('tool.crypto.tripleDes.description')"
      class="tool-card"
    >
      <t-row :gutter="[16, 16]" class="full-height-row">
        <!-- Input Area -->
        <t-col :span="6" :xs="12">
          <div class="column-container">
            <div class="area-header">
              <div class="title-group">
                <h3>{{ $t("tool.crypto.tripleDes.input") }}</h3>
              </div>
              <div class="toolbar">
                <t-button variant="text" size="small" @click="loadExample">
                  {{ $t("common.loadExample") }}
                </t-button>
                <t-button
                  variant="text"
                  theme="danger"
                  size="small"
                  @click="clear"
                >
                  {{ $t("tool.crypto.tripleDes.clear") }}
                </t-button>
              </div>
            </div>

            <!-- Settings Area (Inside Left Column) -->
            <div class="settings-area">
              <t-form layout="inline" label-align="left">
                <t-form-item
                  :label="$t('tool.crypto.tripleDes.key')"
                  name="key"
                  style="flex: 1; min-width: 200px; margin-right: 16px"
                >
                  <t-input
                    v-model="key"
                    :placeholder="$t('tool.crypto.tripleDes.key')"
                  />
                </t-form-item>
                <t-form-item
                  :label="$t('tool.crypto.tripleDes.mode')"
                  name="mode"
                  style="width: 140px; margin-right: 16px"
                >
                  <t-select v-model="mode" :options="modeOptions" />
                </t-form-item>
                <t-form-item
                  :label="$t('tool.crypto.tripleDes.padding')"
                  name="padding"
                  style="width: 160px; margin-right: 0"
                >
                  <t-select v-model="padding" :options="paddingOptions" />
                </t-form-item>
              </t-form>
            </div>

            <div class="editor-wrapper">
              <t-textarea
                v-model="inputText"
                class="code-editor"
                :placeholder="$t('tool.crypto.tripleDes.input')"
                :autosize="{ minRows: 12, maxRows: 20 }"
                spellcheck="false"
              />
            </div>
          </div>
        </t-col>

        <!-- Output Area -->
        <t-col :span="6" :xs="12">
          <div class="column-container">
            <div class="area-header">
              <div class="title-group">
                <h3>{{ $t("tool.crypto.tripleDes.output") }}</h3>
              </div>
              <div class="toolbar">
                <t-button
                  theme="primary"
                  size="small"
                  @click="handleEncrypt"
                  style="margin-right: 8px"
                >
                  {{ $t("tool.crypto.tripleDes.encrypt") }}
                </t-button>
                <t-button
                  theme="default"
                  size="small"
                  @click="handleDecrypt"
                  style="margin-right: 8px"
                >
                  {{ $t("tool.crypto.tripleDes.decrypt") }}
                </t-button>
                <t-button
                  variant="outline"
                  size="small"
                  @click="copyResult"
                  :disabled="!outputText"
                >
                  {{ $t("tool.crypto.tripleDes.copy") }}
                </t-button>
              </div>
            </div>

            <div class="editor-wrapper">
              <t-textarea
                v-model="outputText"
                class="code-editor"
                readonly
                :placeholder="$t('tool.crypto.tripleDes.output')"
                :autosize="{ minRows: 15, maxRows: 23 }"
                spellcheck="false"
              />
            </div>
          </div>
        </t-col>
      </t-row>
    </t-card>

    <!-- Guide Section -->
    <div class="guide-container">
      <div class="guide-section">
        <h3 class="section-title">
          <t-icon name="help-circle" />
          {{ $t("tool.crypto.tripleDes.guide.meaning.title") }}
        </h3>
        <p class="section-desc">
          {{ $t("tool.crypto.tripleDes.guide.meaning.desc") }}
        </p>
      </div>

      <div class="guide-section">
        <h3 class="section-title">
          <t-icon name="control-platform" />
          {{ $t("tool.crypto.tripleDes.guide.features.title") }}
        </h3>
        <div class="feature-grid">
          <div class="feature-item">
            <h4>
              <t-icon name="setting" />
              {{ $t("tool.crypto.tripleDes.guide.features.modes.title") }}
            </h4>
            <p>
              {{ $t("tool.crypto.tripleDes.guide.features.modes.desc") }}
            </p>
          </div>
          <div class="feature-item">
            <h4>
              <t-icon name="layers" />
              {{ $t("tool.crypto.tripleDes.guide.features.padding.title") }}
            </h4>
            <p>
              {{ $t("tool.crypto.tripleDes.guide.features.padding.desc") }}
            </p>
          </div>
        </div>
      </div>

      <div class="guide-section">
        <h3 class="section-title">
          <t-icon name="book-open" />
          {{ $t("tool.crypto.tripleDes.guide.usage.title") }}
        </h3>
        <div class="step-list">
          <div class="step-item">
            <span class="step-num">1</span>
            <div class="step-content">
              <h4>{{ $t("tool.crypto.tripleDes.guide.usage.step1.title") }}</h4>
              <p>
                {{ $t("tool.crypto.tripleDes.guide.usage.step1.desc") }}
              </p>
            </div>
          </div>
          <div class="step-item">
            <span class="step-num">2</span>
            <div class="step-content">
              <h4>{{ $t("tool.crypto.tripleDes.guide.usage.step2.title") }}</h4>
              <p>
                {{ $t("tool.crypto.tripleDes.guide.usage.step2.desc") }}
              </p>
            </div>
          </div>
          <div class="step-item">
            <span class="step-num">3</span>
            <div class="step-content">
              <h4>{{ $t("tool.crypto.tripleDes.guide.usage.step3.title") }}</h4>
              <p>
                {{ $t("tool.crypto.tripleDes.guide.usage.step3.desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { MessagePlugin } from "tdesign-vue-next";
import CryptoJS from "crypto-js";

const { t } = useI18n();

const inputText = ref("");
const key = ref("");
const mode = ref("ECB");
const padding = ref("Pkcs7");
const outputText = ref("");

const modeOptions = [
  { label: "ECB", value: "ECB" },
  { label: "CBC", value: "CBC" },
  { label: "CFB", value: "CFB" },
  { label: "OFB", value: "OFB" },
  { label: "CTR", value: "CTR" },
];

const paddingOptions = [
  { label: "Pkcs7", value: "Pkcs7" },
  { label: "ZeroPadding", value: "ZeroPadding" },
  { label: "Iso10126", value: "Iso10126" },
  { label: "NoPadding", value: "NoPadding" },
  { label: "AnsiX923", value: "AnsiX923" },
];

const getMode = (modeStr: string) => {
  switch (modeStr) {
    case "ECB":
      return CryptoJS.mode.ECB;
    case "CBC":
      return CryptoJS.mode.CBC;
    case "CFB":
      return CryptoJS.mode.CFB;
    case "OFB":
      return CryptoJS.mode.OFB;
    case "CTR":
      return CryptoJS.mode.CTR;
    default:
      return CryptoJS.mode.ECB;
  }
};

const getPadding = (paddingStr: string) => {
  switch (paddingStr) {
    case "Pkcs7":
      return CryptoJS.pad.Pkcs7;
    case "ZeroPadding":
      return CryptoJS.pad.ZeroPadding;
    case "Iso10126":
      return CryptoJS.pad.Iso10126;
    case "NoPadding":
      return CryptoJS.pad.NoPadding;
    case "AnsiX923":
      return CryptoJS.pad.AnsiX923;
    default:
      return CryptoJS.pad.Pkcs7;
  }
};

const handleEncrypt = () => {
  if (!inputText.value) {
    MessagePlugin.warning(t("common.inputEmpty"));
    return;
  }
  if (!key.value) {
    MessagePlugin.warning(
      t("tool.crypto.tripleDes.key") + " " + t("common.inputEmpty"),
    );
    return;
  }

  try {
    const encrypted = CryptoJS.TripleDES.encrypt(inputText.value, key.value, {
      mode: getMode(mode.value),
      padding: getPadding(padding.value),
    });
    outputText.value = encrypted.toString();
    MessagePlugin.success(t("tool.crypto.tripleDes.encrypt") + " Success");
  } catch (e) {
    console.error(e);
    MessagePlugin.error(t("tool.crypto.tripleDes.error"));
  }
};

const handleDecrypt = () => {
  if (!inputText.value) {
    MessagePlugin.warning(t("common.inputEmpty"));
    return;
  }
  if (!key.value) {
    MessagePlugin.warning(
      t("tool.crypto.tripleDes.key") + " " + t("common.inputEmpty"),
    );
    return;
  }

  try {
    const decrypted = CryptoJS.TripleDES.decrypt(inputText.value, key.value, {
      mode: getMode(mode.value),
      padding: getPadding(padding.value),
    });
    const result = decrypted.toString(CryptoJS.enc.Utf8);
    if (!result) {
      throw new Error("Decryption failed");
    }
    outputText.value = result;
    MessagePlugin.success(t("tool.crypto.tripleDes.decrypt") + " Success");
  } catch (e) {
    console.error(e);
    MessagePlugin.error(t("tool.crypto.tripleDes.error"));
  }
};

const clear = () => {
  inputText.value = "";
  outputText.value = "";
  key.value = "";
  MessagePlugin.success(t("common.cleared"));
};

const copyResult = async () => {
  if (!outputText.value) return;
  try {
    await navigator.clipboard.writeText(outputText.value);
    MessagePlugin.success(t("common.copySuccess"));
  } catch (err) {
    MessagePlugin.error(t("common.copyFail"));
  }
};

const loadExample = () => {
  inputText.value = "Hello World! This is a 3DES encryption test.";
  key.value = "secret-key-123";
};
</script>

<style scoped>
.triple-des-tool {
  /* padding: 24px; */
  display: flex;
  flex-direction: column;
}

.tool-card {
  display: flex;
  flex-direction: column;
}

.tool-card :deep(.t-card__header) {
  padding: 16px;
  padding-bottom: 0;
}

.tool-card :deep(.t-card__description) {
  margin-bottom: 0;
}

.tool-card :deep(.t-card__body) {
  padding: 16px;
  overflow: visible;
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

.settings-area {
  margin-bottom: 12px;
  padding: 12px;
  background-color: var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-default);
}

.settings-area :deep(.t-form__item) {
  margin-bottom: 0;
}

.editor-wrapper {
  /* border: 1px solid var(--td-component-border); */
  /* border-radius: var(--td-radius-default); */
  overflow: hidden;
}

.code-editor {
  width: 100%;
}

.code-editor :deep(.t-textarea__inner) {
  font-family: monospace;
}

/* Guide Content Styles - Consistent with CssMinify */
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
