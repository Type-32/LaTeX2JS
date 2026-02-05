<template>
  <div class="latex-author" v-html="text"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  return props.lines.join(' ').replace(/\\author\{([^}]+)\}/g, '$1').trim();
});
</script>

<style scoped>
.latex-author {
  text-align: center;
  font-size: 1.2em;
  margin: 0.5em 0;
}
</style>
