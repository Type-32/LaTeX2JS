<template>
  <div style="display: none;" id="latex-macros" v-html="macros"></div>
</template>

<script setup lang="ts">
import baseMacros from '@latex2js/macros';

const macros = baseMacros;
</script>
