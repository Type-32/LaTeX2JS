<template>
  <div class="latex-multicols" :style="columnStyle">
    <div v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
  env?: any;
}

const props = defineProps<Props>();

const columnCount = computed(() => {
  const firstLine = props.lines[0] || '';
  const match = firstLine.match(/\\begin\{multicols\}\{(\d+)\}/);
  return match ? parseInt(match[1]) : 2;
});

const content = computed(() => {
  return props.lines.slice(1).join('\n').trim();
});

const columnStyle = computed(() => {
  return {
    columnCount: columnCount.value,
    columnGap: '2em'
  };
});
</script>

<style scoped>
.latex-multicols {
  margin: 1em 0;
  column-fill: auto;
}
</style>
