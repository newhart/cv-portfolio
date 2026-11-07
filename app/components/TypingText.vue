<script setup lang="ts">
const props = defineProps<{ text: string }>();

const typingStyle = computed(() => ({
  "--typing-steps": props.text.length,
  "--typing-width": `${props.text.length}ch`,
  "--typing-duration": `${Math.max(1.1, props.text.length * 0.055)}s`,
}));
</script>

<template>
  <span class="typing-text" :style="typingStyle" aria-hidden="true">{{ text }}</span>
</template>