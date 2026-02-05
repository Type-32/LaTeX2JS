<template>
  <h1 class="latex-title" v-html="text"></h1>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  return props.lines.join(' ').replace(/\\title\{([^}]+)\}/g, '$1').trim();
});
</script>

<style scoped>
.latex-title {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
  line-height: 1.2;
}
</style>
