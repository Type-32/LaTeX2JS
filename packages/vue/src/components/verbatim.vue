<template>
  <pre class="latex-verbatim"><code>{{ text }}</code></pre>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  return props.lines.join('\n');
});
</script>

<style scoped>
.latex-verbatim {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1em;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  line-height: 1.4;
}
</style>
