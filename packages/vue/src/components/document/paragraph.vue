<template>
  <p class="latex-paragraph" v-html="text"></p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { processTextWithMath } from '../../lib/latex-to-html.js';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  const raw = props.lines.join(' ').trim();
  return processTextWithMath(raw);
});
</script>

<style scoped>
.latex-paragraph {
  margin: 1em 0;
  line-height: 1.6;
  text-align: justify;
}
</style>
