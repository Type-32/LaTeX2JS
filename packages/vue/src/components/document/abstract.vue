<template>
  <div class="latex-abstract">
    <h3 class="abstract-title">Abstract</h3>
    <div class="abstract-content" v-html="text"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  return props.lines.join('\n').trim();
});
</script>

<style scoped>
.latex-abstract {
  margin: 2em auto;
  max-width: 800px;
  padding: 1.5em;
  background-color: #f9f9f9;
  border-left: 4px solid #007bff;
}

.abstract-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.abstract-content {
  line-height: 1.6;
  text-align: justify;
}
</style>
