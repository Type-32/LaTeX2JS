<template>
  <div :style="`width: ${size.width}px; height: ${size.height}px;`" class="pspicture">
    <svg ref="svgRef" :width="`${size.width}px`" :height="`${size.height}px`" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { psgraph } from '@latex2js/pstricks';
import { select } from '@latex2js/utils';

interface Props {
  lines: string[];
  plot: any;
  settings: any;
  env: any;
}

const props = defineProps<Props>();

const svgRef = ref<SVGElement | null>(null);

const size = computed(() => {
  return psgraph.getSize.call({
    env: props.env,
    settings: props.settings
  });
});

onMounted(() => {
  if (svgRef.value) {
    const svg = select(svgRef.value);
    psgraph.pspicture.call({
      env: props.env,
      plot: props.plot,
      settings: props.settings
    }, svg);
  }
});
</script>

<style scoped>
.pspicture {
  display: inline-block;
  margin: 1em auto;
}
</style>
