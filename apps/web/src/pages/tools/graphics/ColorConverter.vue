<template>
  <div class="color-converter">
    <!-- Header Card -->
    <t-card
      :title="$t('tool.graphics.colorConverter.title')"
      class="header-card"
    >
      <div class="header-content">
        {{ $t("tool.graphics.colorConverter.description") }}
      </div>
    </t-card>

    <t-row :gutter="[16, 16]" style="align-items: stretch; margin-top: 16px">
      <!-- Left Column: Input and Controls -->
      <t-col :xs="12" :sm="12" :md="5" :lg="4" class="left-col">
        <t-card
          :title="$t('tool.graphics.colorConverter.input')"
          class="input-card"
        >
          <div class="color-picker-container">
            <t-color-picker
              v-model="colorValue"
              format="HEX"
              :show-primary-color-preview="false"
              class="full-width-picker"
            />
          </div>

          <t-divider />

          <div class="controls">
            <t-input
              v-model="colorValue"
              :placeholder="$t('tool.graphics.colorConverter.hexPlaceholder')"
              class="hex-input"
            >
              <template #prefix-icon>
                <t-icon name="hashtag" />
              </template>
            </t-input>

            <div class="button-group">
              <t-button
                theme="primary"
                variant="outline"
                block
                @click="generateRandomColor"
              >
                <template #icon><t-icon name="refresh" /></template>
                {{ $t("tool.graphics.colorConverter.random") }}
              </t-button>
              <t-button
                theme="danger"
                variant="outline"
                block
                @click="clearColor"
              >
                <template #icon><t-icon name="clear" /></template>
                {{ $t("tool.graphics.colorConverter.clear") }}
              </t-button>
            </div>
          </div>
        </t-card>

        <t-card
          :title="$t('tool.graphics.colorConverter.preview')"
          class="preview-card"
        >
          <div
            class="color-preview"
            :style="{
              backgroundColor: validColor ? colorValue : 'transparent',
            }"
          ></div>
        </t-card>
      </t-col>

      <!-- Right Column: Conversion Results -->
      <t-col :xs="12" :sm="12" :md="7" :lg="8" class="right-col">
        <t-card
          :title="$t('tool.graphics.colorConverter.output')"
          class="output-card"
        >
          <t-list :split="true">
            <t-list-item v-for="(value, label) in conversions" :key="label">
              <div class="conversion-item">
                <div class="label">{{ label }}</div>
                <div class="value">{{ value }}</div>
                <t-button
                  shape="square"
                  variant="text"
                  @click="copyToClipboard(value)"
                >
                  <t-icon name="copy" />
                </t-button>
              </div>
            </t-list-item>
          </t-list>
        </t-card>

        <!-- Presets Card -->
        <t-card
          :title="$t('tool.graphics.colorConverter.presets.title')"
          class="presets-card"
          style="margin-top: 16px"
        >
          <t-tabs v-model="activePreset">
            <t-tab-panel
              value="material"
              :label="$t('tool.graphics.colorConverter.presets.material')"
            >
              <div class="color-grid">
                <div
                  v-for="color in materialColors"
                  :key="color"
                  class="color-item"
                  :style="{ backgroundColor: color }"
                  @click="colorValue = color"
                  :title="color"
                ></div>
              </div>
            </t-tab-panel>
            <t-tab-panel
              value="flat"
              :label="$t('tool.graphics.colorConverter.presets.flat')"
            >
              <div class="color-grid">
                <div
                  v-for="color in flatColors"
                  :key="color"
                  class="color-item"
                  :style="{ backgroundColor: color }"
                  @click="colorValue = color"
                  :title="color"
                ></div>
              </div>
            </t-tab-panel>
            <t-tab-panel
              value="webSafe"
              :label="$t('tool.graphics.colorConverter.presets.webSafe')"
            >
              <div class="color-grid">
                <div
                  v-for="color in webSafeColors"
                  :key="color"
                  class="color-item"
                  :style="{ backgroundColor: color }"
                  @click="colorValue = color"
                  :title="color"
                ></div>
              </div>
            </t-tab-panel>
            <t-tab-panel
              value="gray"
              :label="$t('tool.graphics.colorConverter.presets.gray')"
            >
              <div class="color-grid">
                <div
                  v-for="color in grayScaleColors"
                  :key="color"
                  class="color-item"
                  :style="{ backgroundColor: color }"
                  @click="colorValue = color"
                  :title="color"
                ></div>
              </div>
            </t-tab-panel>
          </t-tabs>
        </t-card>
      </t-col>
    </t-row>

    <!-- Guide Section -->
    <div class="guide-container">
      <t-card :title="$t('tool.graphics.colorConverter.guide.meaning.title')">
        <div class="guide-content">
          <p>{{ $t("tool.graphics.colorConverter.guide.meaning.desc") }}</p>

          <t-divider />

          <h3>{{ $t("tool.graphics.colorConverter.guide.features.title") }}</h3>
          <ul>
            <li>
              <strong>{{
                $t("tool.graphics.colorConverter.guide.features.formats.title")
              }}</strong>
              :
              {{
                $t("tool.graphics.colorConverter.guide.features.formats.desc")
              }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.colorConverter.guide.features.preview.title")
              }}</strong>
              :
              {{
                $t("tool.graphics.colorConverter.guide.features.preview.desc")
              }}
            </li>
          </ul>

          <t-divider />

          <h3>{{ $t("tool.graphics.colorConverter.guide.usage.title") }}</h3>
          <ol>
            <li>
              <strong>{{
                $t("tool.graphics.colorConverter.guide.usage.step1.title")
              }}</strong>
              :
              {{ $t("tool.graphics.colorConverter.guide.usage.step1.desc") }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.colorConverter.guide.usage.step2.title")
              }}</strong>
              :
              {{ $t("tool.graphics.colorConverter.guide.usage.step2.desc") }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.colorConverter.guide.usage.step3.title")
              }}</strong>
              :
              {{ $t("tool.graphics.colorConverter.guide.usage.step3.desc") }}
            </li>
          </ol>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { useI18n } from "vue-i18n";
import { colord } from "../../../utils/color";

const { t } = useI18n();

const colorValue = ref("#165DFF"); // Default color
const activePreset = ref("material");

const materialColors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#000000",
];

const flatColors = [
  "#1ABC9C",
  "#2ECC71",
  "#3498DB",
  "#9B59B6",
  "#34495E",
  "#16A085",
  "#27AE60",
  "#2980B9",
  "#8E44AD",
  "#2C3E50",
  "#F1C40F",
  "#E67E22",
  "#E74C3C",
  "#ECF0F1",
  "#95A5A6",
  "#F39C12",
  "#D35400",
  "#C0392B",
  "#BDC3C7",
  "#7F8C8D",
];

const webSafeColors = [
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#FFFFFF",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#800080",
  "#008080",
  "#000080",
];

const grayScaleColors = [
  "#FFFFFF",
  "#F2F2F2",
  "#E6E6E6",
  "#D9D9D9",
  "#CCCCCC",
  "#BFBFBF",
  "#B3B3B3",
  "#A6A6A6",
  "#999999",
  "#8C8C8C",
  "#808080",
  "#737373",
  "#666666",
  "#595959",
  "#4D4D4D",
  "#404040",
  "#333333",
  "#262626",
  "#1A1A1A",
  "#0D0D0D",
];

const validColor = computed(() => {
  return colord(colorValue.value).isValid();
});

const conversions = computed(() => {
  const c = colord(colorValue.value);
  if (!c.isValid()) return {};

  return {
    HEX: c.toHex(),
    RGB: c.toRgbString(),
    HSL: c.toHslString(),
    HWB: c.toHwbString(),
    LCH: c.toLchString(),
    CMYK: c.toCmykString(),
    Name: c.toName({ closest: true }) || "-",
  };
});

const generateRandomColor = () => {
  colorValue.value = colord({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  }).toHex();
};

const clearColor = () => {
  colorValue.value = "#FFFFFF";
};

const copyToClipboard = async (text?: string) => {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    MessagePlugin.success(t("common.copySuccess"));
  } catch (err) {
    MessagePlugin.error(t("common.copyFail"));
  }
};

onMounted(() => {
  // Optional: Init with random color if preferred, or keep static default
});
</script>

<style lang="less" scoped>
.color-converter {
  .header-card {
    margin-bottom: 16px;

    .header-content {
      color: var(--td-text-color-secondary);
      line-height: 1.6;
    }
  }

  .left-col {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .preview-card {
      flex: 1;
      display: flex;
      flex-direction: column;

      :deep(.t-card__body) {
        flex: 1;
        display: flex;
      }

      .color-preview {
        flex: 1;
        width: 100%;
        min-height: 100px;
        border-radius: 6px;
        border: 1px solid var(--td-component-border);
        background-image:
          linear-gradient(
            45deg,
            #eee 25%,
            transparent 25%,
            transparent 75%,
            #eee 75%,
            #eee
          ),
          linear-gradient(
            45deg,
            #eee 25%,
            transparent 25%,
            transparent 75%,
            #eee 75%,
            #eee
          );
        background-size: 20px 20px;
        background-position:
          0 0,
          10px 10px;
      }
    }
  }

  .right-col {
    display: flex;
    flex-direction: column;

    .output-card {
      // height: 100%; // Remove full height to allow stacking
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
      gap: 8px;
      padding: 16px 0;

      .color-item {
        width: 100%;
        padding-top: 100%; // 1:1 Aspect ratio
        border-radius: 4px;
        cursor: pointer;
        border: 1px solid var(--td-component-border);
        transition: transform 0.2s;

        &:hover {
          transform: scale(1.1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 1;
        }
      }
    }
  }

  .guide-container {
    margin-top: 16px;

    .guide-content {
      line-height: 1.6;
      color: var(--td-text-color-primary);

      h3 {
        margin: 16px 0 8px;
        font-size: 16px;
        font-weight: 600;
      }

      ul,
      ol {
        padding-left: 20px;
        margin: 8px 0;

        li {
          margin-bottom: 8px;
        }
      }
    }
  }

  .full-width-picker {
    width: 100%;
    :deep(.t-color-picker__panel) {
      width: 100%;
    }
  }

  .controls {
    margin-top: 16px;

    .hex-input {
      margin-bottom: 16px;
    }

    .button-group {
      display: flex;
      gap: 12px;
    }
  }

  .conversion-item {
    display: flex;
    align-items: center;
    width: 100%;

    .label {
      width: 60px;
      font-weight: bold;
      color: var(--td-text-color-secondary);
    }

    .value {
      flex: 1;
      font-family: monospace;
      font-size: 16px;
      padding: 0 16px;
      color: var(--td-text-color-primary);
    }
  }
}
</style>
