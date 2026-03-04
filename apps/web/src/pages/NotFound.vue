<template>
  <div class="not-found-page">
    <div class="result-container">
      <div class="result-icon">
        <t-icon
          name="error-circle"
          size="64px"
          style="color: var(--td-error-color)"
        />
      </div>
      <div class="result-title">404 Not Found</div>
      <div class="result-desc">抱歉，您访问的页面不存在。</div>
      <div class="result-extra">
        <t-button theme="primary" @click="$router.push('/')">返回首页</t-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 404 logic here
</script>

<style scoped>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--td-bg-color-container);
  color: var(--td-text-color-primary);
}

.result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.result-icon {
  margin-bottom: 24px;
}

.result-title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.result-desc {
  font-size: 14px;
  line-height: 22px;
  color: var(--td-text-color-secondary);
  margin-bottom: 24px;
}
</style>
