<template>
  <div ref="rootEl" class="latex-container">
    <Macros v-if="!useMacros" />
    <component
      v-for="(item, id) in items"
      :key="id"
      :is="getComponent(item.type)"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, nextTick, watch } from 'vue';
import LaTeX2JS from 'latex2js';
import { getMathJax, loadMathJax } from 'mathjaxjs';
import { parseDocument } from './lib/document-parser.js';
import Pspicture from './components/pspicture.vue';
import Nicebox from './components/nicebox.vue';
import Enumerate from './components/enumerate.vue';
import Verbatim from './components/verbatim.vue';
import Slider from './components/slider.vue';
import LatexMath from './components/math.vue';
import Macros from './components/macros.vue';

// Document structure components
import DocumentTitle from './components/document/title.vue';
import DocumentAuthor from './components/document/author.vue';
import DocumentAbstract from './components/document/abstract.vue';
import Section from './components/document/section.vue';
import Paragraph from './components/document/paragraph.vue';
import LatexTable from './components/document/table.vue';
import Figure from './components/document/figure.vue';
import Multicolumn from './components/document/multicolumn.vue';
import ColorBox from './components/document/colorbox.vue';

interface Props {
  content?: string;
}

const props = withDefaults(defineProps<Props>(), {
  content: ''
});

const useMacros = ref(false);
const loaded = ref(false);
const rootEl = ref<HTMLElement | null>(null);

const componentMap: Record<string, any> = {
  pspicture: Pspicture,
  nicebox: Nicebox,
  enumerate: Enumerate,
  verbatim: Verbatim,
  slider: Slider,
  math: LatexMath,
  macros: Macros,
  title: DocumentTitle,
  author: DocumentAuthor,
  abstract: DocumentAbstract,
  section: Section,
  subsection: Section,
  paragraph: Paragraph,
  table: LatexTable,
  figure: Figure,
  multicols: Multicolumn,
  tcolorbox: ColorBox,
};

const getComponent = (type: string) => {
  return componentMap[type] || Paragraph;
};

onBeforeMount(() => {
  if (typeof document !== 'undefined') {
    useMacros.value = !!document.getElementById('latex-macros');

    if (getMathJax()) {
      loaded.value = true;
      return;
    }
    loadMathJax(() => {
      loaded.value = true;
    });
  }
});

onMounted(() => {
  typesetMath();
});

watch(loaded, (newVal) => {
  if (newVal) {
    typesetMath();
  }
});

watch(() => props.content, () => {
  nextTick(() => typesetMath());
});

const isFullDocument = computed(() => {
  return props.content.includes('\\documentclass') || props.content.includes('\\begin{document}');
});

const items = computed(() => {
  if (!loaded.value) {
    return [];
  }
  try {
    // Use document parser for full LaTeX documents
    if (isFullDocument.value) {
      return parseDocument(props.content || '');
    }
    
    // Use original parser for snippets
    const latex = new LaTeX2JS();
    const parsed = latex.parse(props.content || '');
    return parsed;
  } catch (error) {
    console.error('LaTeX parsing error:', error);
    return [];
  }
});

const typesetMath = () => {
  nextTick(() => {
    const MathJax = getMathJax();
    if (!MathJax) return;

    // MathJax v3 API
    if (MathJax.typesetPromise) {
      const elements = rootEl.value ? [rootEl.value] : undefined;
      MathJax.typesetPromise(elements).catch((err: Error) => {
        console.error('MathJax typeset error:', err);
      });
    }
    // Fallback to MathJax v2 API
    else if (MathJax.Hub && MathJax.Hub.Queue) {
      const elements = rootEl.value || undefined;
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, elements]);
    }
  });
};

defineExpose({
  typesetMath
});
</script>

<style src="../styles/latex-document.css"></style>

<style scoped>
/* Component-specific overrides can go here */
</style>
