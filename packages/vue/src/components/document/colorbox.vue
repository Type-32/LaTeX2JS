<template>
  <div class="latex-colorbox" :style="boxStyle">
    <div class="colorbox-content" v-html="content"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
  env?: any;
}

const props = defineProps<Props>();

const backgroundColor = computed(() => {
  const firstLine = props.lines[0] || '';
  const match = firstLine.match(/colback=([^,\]]+)/);
  if (match) {
    const color = match[1];
    // Convert LaTeX colors like "blue!10" to CSS
    const colorMatch = color.match(/([a-z]+)!(\d+)/);
    if (colorMatch) {
      const baseColor = colorMatch[1];
      const opacity = parseInt(colorMatch[2]) / 100;
      const colorMap: Record<string, string> = {
        blue: '#0066cc',
        red: '#cc0000',
        green: '#00cc00',
        yellow: '#cccc00',
        gray: '#808080',
        grey: '#808080'
      };
      const hexColor = colorMap[baseColor] || '#0066cc';
      return `${hexColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    }
    return color;
  }
  return '#e3f2fd'; // Default light blue
});

const content = computed(() => {
  return props.lines.slice(1).join('\n').trim();
});

const boxStyle = computed(() => {
  return {
    backgroundColor: backgroundColor.value
  };
});
</script>

<style scoped>
.latex-colorbox {
  margin: 1.5em 0;
  padding: 1.5em;
  border-radius: 4px;
  border-left: 4px solid rgba(0, 0, 0, 0.2);
}

.colorbox-content {
  line-height: 1.6;
}
</style>
