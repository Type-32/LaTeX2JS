<template>
  <figure class="latex-figure">
    <img 
      v-if="imageSrc" 
      :src="imageSrc" 
      :alt="caption"
      class="figure-image"
      :style="imageStyle"
    />
    <div v-else class="figure-placeholder">
      [Image: {{ imagePath }}]
    </div>
    <figcaption v-if="caption" class="figure-caption" v-html="caption"></figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const imagePath = computed(() => {
  const includeLine = props.lines.find(line => line.includes('\\includegraphics'));
  if (includeLine) {
    const match = includeLine.match(/\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}/);
    return match ? match[1] : '';
  }
  return '';
});

const imageScale = computed(() => {
  const includeLine = props.lines.find(line => line.includes('\\includegraphics'));
  if (includeLine) {
    const scaleMatch = includeLine.match(/scale=([0-9.]+)/);
    if (scaleMatch) return parseFloat(scaleMatch[1]);
    
    const widthMatch = includeLine.match(/width=([0-9.]+)\\linewidth/);
    if (widthMatch) return parseFloat(widthMatch[1]);
  }
  return 1;
});

const imageSrc = computed(() => {
  // In a real implementation, this would resolve the image path
  // For now, return empty to show placeholder
  return '';
});

const imageStyle = computed(() => {
  return {
    transform: `scale(${imageScale.value})`,
    maxWidth: `${imageScale.value * 100}%`
  };
});

const caption = computed(() => {
  const captionLine = props.lines.find(line => line.includes('\\caption'));
  if (captionLine) {
    const match = captionLine.match(/\\caption\{([^}]+)\}/);
    return match ? match[1] : '';
  }
  return '';
});
</script>

<style scoped>
.latex-figure {
  margin: 1.5em auto;
  text-align: center;
  max-width: 100%;
}

.figure-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.figure-placeholder {
  padding: 3em;
  background-color: #f5f5f5;
  border: 2px dashed #ddd;
  color: #999;
  font-family: monospace;
}

.figure-caption {
  margin-top: 0.5em;
  font-size: 0.9em;
  color: #666;
  font-style: italic;
}
</style>
