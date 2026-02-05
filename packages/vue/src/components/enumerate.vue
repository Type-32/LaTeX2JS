<template>
  <ol class="latex-enumerate">
    <li v-for="(item, index) in items" :key="index" v-html="item"></li>
  </ol>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const items = computed(() => {
  return props.lines
    .join('\n')
    .split(/\\item/)
    .filter((item) => item.trim().length > 0)
    .map((item) => item.trim());
});
</script>

<style scoped>
.latex-enumerate {
  margin: 1em 0;
  padding-left: 2em;
}

.latex-enumerate li {
  margin: 0.5em 0;
}
</style>
