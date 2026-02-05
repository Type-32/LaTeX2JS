<template>
  <div :class="sectionClass">
    <component :is="headingTag" :class="`${sectionClass}-title`" v-html="title" />
    <div :class="`${sectionClass}-content`" v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { processTextWithMath } from '../../lib/latex-to-html.js';

interface Props {
  lines: string[];
  type?: string;
  env?: any;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'section'
});

const isSubsection = computed(() => props.type === 'subsection');

const sectionClass = computed(() => {
  return isSubsection.value ? 'latex-subsection' : 'latex-section';
});

const headingTag = computed(() => {
  return isSubsection.value ? 'h3' : 'h2';
});

const title = computed(() => {
  const firstLine = props.lines[0] || '';
  const match = firstLine.match(/\\(?:sub)?section\{([^}]+)\}/);
  return match ? processTextWithMath(match[1]) : '';
});

const content = computed(() => {
  const raw = props.lines.slice(1).join('\n').trim();
  return processTextWithMath(raw);
});
</script>

<style scoped>
.latex-section {
  margin: 2em 0 1em 0;
}

.latex-section-title {
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 0.5em;
  border-bottom: 2px solid #333;
  padding-bottom: 0.3em;
}

.latex-section-content {
  margin-top: 1em;
  line-height: 1.6;
}

.latex-subsection {
  margin: 1.5em 0 0.5em 0;
}

.latex-subsection-title {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 0.4em;
}

.latex-subsection-content {
  margin-top: 0.5em;
  line-height: 1.6;
}
</style>
