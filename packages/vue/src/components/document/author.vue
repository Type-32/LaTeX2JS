<template>
  <div class="latex-author" v-html="text"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { processTextWithMath } from '../../lib/latex-to-html.js';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  const raw = props.lines.join(' ').replace(/\\author\{([^}]+)\}/g, '$1').trim();
  return processTextWithMath(raw);
});
</script>

<style scoped>
.latex-author {
  text-align: center;
  font-size: 1.2em;
  margin: 0.5em 0;
}
</style>
