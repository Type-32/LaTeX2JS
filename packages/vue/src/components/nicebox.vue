<template>
  <div latex="true" v-html="text" class="latex-nicebox"></div>
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
.latex-nicebox {
  padding: 1.5em;
  margin: 1.5em 0;
  border: 2px solid #42b983;
  border-radius: 8px;
  background: linear-gradient(145deg, #f0f9f4, #e8f5ea);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
