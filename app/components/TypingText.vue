<script setup lang="ts">
const props = defineProps<{ text: string; immediate?: boolean }>();

const typingStyle = computed(() => ({
  "--typing-steps": props.text.length,
  "--typing-duration": `${Math.max(1.1, props.text.length * 0.055)}s`,
}));
</script>

<template>
  <span
    class="typing-text"
    :class="{ 'typing-text--immediate': immediate }"
    :style="typingStyle"
    aria-hidden="true"
  >{{ text }}</span>
</template>