<template>
  <div class="whiteboard">
    <!-- Header Card -->
    <t-card :title="$t('tool.graphics.whiteboard.title')" class="header-card">
      <div class="header-content">
        {{ $t("tool.graphics.whiteboard.description") }}
      </div>

      <t-divider />

      <!-- Toolbar Controls -->
      <div class="toolbar-controls">
        <!-- Brush/Eraser -->
        <div class="control-item">
          <t-radio-group v-model="mode" variant="default-filled">
            <t-radio-button value="brush">
              <template #icon><EditIcon /></template>
              {{ $t("tool.graphics.whiteboard.brush") }}
            </t-radio-button>
            <t-radio-button value="eraser">
              <template #icon><ClearIcon /></template>
              {{ $t("tool.graphics.whiteboard.eraser") }}
            </t-radio-button>
          </t-radio-group>
        </div>

        <!-- Size -->
        <div class="control-item slider-item">
          <label>{{ $t("tool.graphics.whiteboard.size") }}</label>
          <t-slider v-model="size" :min="1" :max="50" style="width: 120px" />
          <span class="value-text">{{ size }}px</span>
        </div>

        <!-- Color -->
        <div class="control-item">
          <label>{{ $t("tool.graphics.whiteboard.color") }}</label>
          <t-color-picker
            v-model="color"
            format="HEX"
            :show-primary-color-preview="false"
            :disabled="mode === 'eraser'"
            :enable-alpha="false"
            :color-modes="['monochrome']"
            clearable
          />
        </div>

        <!-- Background Color -->
        <div class="control-item">
          <label>{{ $t("tool.graphics.whiteboard.background") }}</label>
          <t-color-picker
            v-model="backgroundColor"
            format="HEX"
            :enable-alpha="false"
            :color-modes="['monochrome']"
            clearable
            :disabled="isTransparent"
          />
          <t-checkbox v-model="isTransparent">
            {{ $t("tool.graphics.whiteboard.transparent") }}
          </t-checkbox>
        </div>
      </div>
    </t-card>

    <t-row :gutter="[16, 16]" style="margin-top: 16px">
      <!-- Canvas (Full Width) -->
      <t-col :span="12">
        <t-card class="canvas-card" :bordered="false">
          <div
            class="canvas-container"
            :class="{ 'is-transparent': isTransparent }"
            ref="canvasContainer"
            :style="{
              backgroundColor: isTransparent ? undefined : backgroundColor,
              cursor: cursorStyle,
            }"
          >
            <canvas
              ref="canvas"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="stopDrawing"
              @mouseleave="stopDrawing"
              @touchstart.prevent="handleTouchStart"
              @touchmove.prevent="handleTouchMove"
              @touchend.prevent="stopDrawing"
            ></canvas>
          </div>
          <template #footer>
            <div class="canvas-actions">
              <div class="actions-left">
                <t-tooltip :content="$t('tool.graphics.whiteboard.undo')">
                  <t-button
                    variant="text"
                    @click="undo"
                    :disabled="historyIndex <= 0"
                  >
                    <template #icon><RollbackIcon /></template>
                  </t-button>
                </t-tooltip>
                <t-tooltip :content="$t('tool.graphics.whiteboard.redo')">
                  <t-button
                    variant="text"
                    @click="redo"
                    :disabled="historyIndex >= history.length - 1"
                  >
                    <template #icon><RollfrontIcon /></template>
                  </t-button>
                </t-tooltip>
                <t-tooltip :content="$t('tool.graphics.whiteboard.clear')">
                  <t-button theme="danger" variant="text" @click="clearCanvas">
                    <template #icon><DeleteIcon /></template>
                  </t-button>
                </t-tooltip>
              </div>
              <div class="actions-right">
                <t-select
                  v-model="saveFormat"
                  :options="formatOptions"
                  style="width: 100px; margin-right: 8px"
                />
                <t-button theme="primary" @click="saveImage">
                  <template #icon><DownloadIcon /></template>
                  {{ $t("tool.graphics.whiteboard.save") }}
                </t-button>
              </div>
            </div>
          </template>
        </t-card>
      </t-col>
    </t-row>

    <!-- Guide Section -->
    <div class="guide-container">
      <t-card :title="$t('tool.graphics.whiteboard.guide.meaning.title')">
        <div class="guide-content">
          <p>{{ $t("tool.graphics.whiteboard.guide.meaning.desc") }}</p>
          <t-divider />
          <h3>{{ $t("tool.graphics.whiteboard.guide.features.title") }}</h3>
          <ul>
            <li>
              <strong>{{
                $t("tool.graphics.whiteboard.guide.features.drawing.title")
              }}</strong
              >:
              {{ $t("tool.graphics.whiteboard.guide.features.drawing.desc") }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.whiteboard.guide.features.history.title")
              }}</strong
              >:
              {{ $t("tool.graphics.whiteboard.guide.features.history.desc") }}
            </li>
          </ul>
          <t-divider />
          <h3>{{ $t("tool.graphics.whiteboard.guide.usage.title") }}</h3>
          <ol>
            <li>
              <strong>{{
                $t("tool.graphics.whiteboard.guide.usage.step1.title")
              }}</strong
              >:
              {{ $t("tool.graphics.whiteboard.guide.usage.step1.desc") }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.whiteboard.guide.usage.step2.title")
              }}</strong
              >:
              {{ $t("tool.graphics.whiteboard.guide.usage.step2.desc") }}
            </li>
            <li>
              <strong>{{
                $t("tool.graphics.whiteboard.guide.usage.step3.title")
              }}</strong
              >:
              {{ $t("tool.graphics.whiteboard.guide.usage.step3.desc") }}
            </li>
          </ol>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { MessagePlugin } from "tdesign-vue-next";
import { useI18n } from "vue-i18n";
import {
  EditIcon,
  ClearIcon,
  RollbackIcon,
  RollfrontIcon,
  DeleteIcon,
  DownloadIcon,
} from "tdesign-icons-vue-next";

const { t } = useI18n();

const canvas = ref<HTMLCanvasElement | null>(null);
const canvasContainer = ref<HTMLDivElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);

const color = ref("#000000");
const backgroundColor = ref("#ffffff");
const isTransparent = ref(false);
const size = ref(5);
const mode = ref<"brush" | "eraser">("brush");
const isDrawing = ref(false);
const history = ref<string[]>([]);
const historyIndex = ref(-1);
const saveFormat = ref("png");

const cursorStyle = computed(() => {
  if (mode.value === "eraser") {
    // Dynamic eraser cursor based on size
    const s = Math.max(size.value, 8); // Ensure minimum visible size
    const strokeWidth = 1;
    const svgSize = s + strokeWidth * 2;
    const center = svgSize / 2;

    const svg = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="${strokeWidth}" y="${strokeWidth}" width="${s}" height="${s}" rx="2" fill="rgba(255, 255, 255, 0.5)" stroke="#000000" stroke-width="${strokeWidth}"/></svg>`;
    const encoded = encodeURIComponent(svg);
    return `url('data:image/svg+xml;utf8,${encoded}') ${center} ${center}, auto`;
  }

  // Brush cursor (pen style)
  const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 3.5L20.5 7.5L7.5 20.5H3.5V16.5L16.5 3.5Z" fill="white" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const encoded = encodeURIComponent(svg);
  return `url('data:image/svg+xml;utf8,${encoded}') 3 20, auto`;
});

const formatOptions = [
  { label: "PNG", value: "png" },
  { label: "JPG", value: "jpeg" },
  { label: "WEBP", value: "webp" },
];

// Initialize canvas
const initCanvas = () => {
  if (!canvas.value || !canvasContainer.value) return;
  const container = canvasContainer.value;

  // Save current content if any
  const currentContent = canvas.value.toDataURL();
  const hasContent = historyIndex.value >= 0;

  canvas.value.width = container.clientWidth;
  canvas.value.height = 600; // Fixed height

  ctx.value = canvas.value.getContext("2d");

  if (ctx.value && hasContent) {
    const img = new Image();
    img.src = currentContent;
    img.onload = () => {
      ctx.value?.drawImage(img, 0, 0);
    };
  } else if (ctx.value) {
    // Initial save
    saveState();
  }
};

const getCoordinates = (e: MouseEvent | TouchEvent) => {
  if (!canvas.value) return { x: 0, y: 0 };
  const rect = canvas.value.getBoundingClientRect();
  let clientX, clientY;

  if (window.TouchEvent && e instanceof TouchEvent) {
    const touches = (e as TouchEvent).touches;
    const changedTouches = (e as TouchEvent).changedTouches;
    const touch =
      (touches && touches.length > 0 ? touches[0] : null) ||
      (changedTouches && changedTouches.length > 0 ? changedTouches[0] : null);

    if (!touch) return { x: 0, y: 0 };

    clientX = touch.clientX;
    clientY = touch.clientY;
  } else {
    clientX = (e as MouseEvent).clientX;
    clientY = (e as MouseEvent).clientY;
  }

  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
};

const startDrawing = (e: MouseEvent) => {
  if (!ctx.value || !canvas.value) return;
  isDrawing.value = true;
  const { x, y } = getCoordinates(e);

  ctx.value.beginPath();
  ctx.value.moveTo(x, y);
};

const handleTouchStart = (e: TouchEvent) => {
  startDrawing(e as unknown as MouseEvent);
};

const draw = (e: MouseEvent) => {
  if (!isDrawing.value || !ctx.value) return;
  const { x, y } = getCoordinates(e);

  ctx.value.lineWidth = size.value;
  ctx.value.lineCap = "round";
  ctx.value.lineJoin = "round";

  if (mode.value === "eraser") {
    ctx.value.globalCompositeOperation = "destination-out";
    ctx.value.globalAlpha = 1;
  } else {
    ctx.value.globalCompositeOperation = "source-over";
    ctx.value.strokeStyle = color.value;
    ctx.value.globalAlpha = 1;
  }

  ctx.value.lineTo(x, y);
  ctx.value.stroke();
};

const handleTouchMove = (e: TouchEvent) => {
  draw(e as unknown as MouseEvent);
};

const stopDrawing = () => {
  if (!isDrawing.value) return;
  isDrawing.value = false;
  // Do not closePath() for freehand drawing
  saveState();
};

const saveState = () => {
  if (!canvas.value) return;
  // Remove future states if any
  if (historyIndex.value < history.value.length - 1) {
    history.value = history.value.slice(0, historyIndex.value + 1);
  }

  // Limit history size to prevent memory issues
  if (history.value.length > 50) {
    history.value.shift();
    historyIndex.value--;
  }

  history.value.push(canvas.value.toDataURL());
  historyIndex.value++;
};

const undo = () => {
  if (historyIndex.value > 0) {
    historyIndex.value--;
    restoreState();
  }
};

const redo = () => {
  if (historyIndex.value < history.value.length - 1) {
    historyIndex.value++;
    restoreState();
  }
};

const restoreState = () => {
  if (!ctx.value || !canvas.value) return;
  const imgSrc = history.value[historyIndex.value];
  if (!imgSrc) return;

  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    ctx.value!.globalCompositeOperation = "source-over";
    ctx.value!.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
    ctx.value!.drawImage(img, 0, 0);
  };
};

const clearCanvas = () => {
  if (!ctx.value || !canvas.value) return;
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  saveState();
  MessagePlugin.success(t("common.cleared"));
};

const saveImage = () => {
  if (!canvas.value) return;

  // Create a temporary canvas to combine background and drawing
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas.value.width;
  tempCanvas.height = canvas.value.height;
  const tempCtx = tempCanvas.getContext("2d");

  if (!tempCtx) return;

  // Fill background if set and not transparent
  if (backgroundColor.value && !isTransparent.value) {
    tempCtx.fillStyle = backgroundColor.value;
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  }

  // Draw original canvas on top
  tempCtx.drawImage(canvas.value, 0, 0);

  const link = document.createElement("a");
  const ext = saveFormat.value === "jpeg" ? "jpg" : saveFormat.value;
  link.download = `whiteboard.${ext}`;
  link.href = tempCanvas.toDataURL(`image/${saveFormat.value}`);
  link.click();
};

const handleResize = () => {
  // Debounce or just call initCanvas which now preserves content
  initCanvas();
};

onMounted(() => {
  initCanvas();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="less" scoped>
.whiteboard {
  .header-card {
    margin-bottom: 16px;
    .header-content {
      color: var(--td-text-color-secondary);
      line-height: 1.6;
    }
  }

  .toolbar-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    .control-item {
      display: flex;
      align-items: center;
      gap: 8px;

      label {
        font-size: 14px;
        color: var(--td-text-color-primary);
        white-space: nowrap;
      }

      :deep(.t-color-picker__trigger) {
        width: 100px;
        .t-input {
          width: 100%;
        }
      }
    }

    .slider-item {
      .value-text {
        font-size: 12px;
        color: var(--td-text-color-secondary);
        width: 32px;
      }
    }
  }

  .canvas-card {
    height: 100%;
    min-height: 600px;
    padding: 0;
    :deep(.t-card__body) {
      padding: 0;
    }

    .canvas-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .actions-left,
      .actions-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
  }

  .canvas-container {
    width: 100%;
    height: 600px;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--td-component-border);

    &.is-transparent {
      background-image:
        linear-gradient(
          45deg,
          var(--td-bg-color-secondarycontainer) 25%,
          transparent 25%
        ),
        linear-gradient(
          -45deg,
          var(--td-bg-color-secondarycontainer) 25%,
          transparent 25%
        ),
        linear-gradient(
          45deg,
          transparent 75%,
          var(--td-bg-color-secondarycontainer) 75%
        ),
        linear-gradient(
          -45deg,
          transparent 75%,
          var(--td-bg-color-secondarycontainer) 75%
        );
      background-size: 20px 20px;
      background-position:
        0 0,
        0 10px,
        10px -10px,
        -10px 0px;
    }

    canvas {
      display: block;
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
}
</style>
