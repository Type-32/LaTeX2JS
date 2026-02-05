<template>
  <p class="latex-paragraph" v-html="text"></p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const text = computed(() => {
  return props.lines.join(' ').trim();
});
</script>

<style scoped>
.latex-paragraph {
  margin: 1em 0;
  line-height: 1.6;
  text-align: justify;
}
</style>
