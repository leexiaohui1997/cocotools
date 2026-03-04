<script setup lang="ts">
import { ref, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const message = ref("");

onMounted(async () => {
  try {
    const res = await fetch("/api/hello");
    const data = await res.json();
    message.value = data.message;
  } catch (error) {
    console.error("Failed to fetch message:", error);
    message.value = "Failed to load message";
  }
});
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>{{ message }}</h1>
  <div class="button-group">
    <t-button theme="primary">墨绿按钮</t-button>
    <t-button theme="default">默认按钮</t-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.button-group {
  margin: 20px 0;
  display: flex;
  gap: 16px;
  justify-content: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
