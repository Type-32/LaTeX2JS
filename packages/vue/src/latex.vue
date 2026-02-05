<template>
  <div class="latex-container">
    <macros v-if="!usemacros" />
    <component
      v-for="(item, id) in items"
      :is="item.type"
      :env="item.env"
      :lines="item.lines"
      :plot="item.plot"
      :settings="item.settings"
      :key="id"
      >
    </component>
  </div>
</template>

<script>
import LaTeX2JS from 'latex2js';
import { getMathJax, loadMathJax } from 'mathjaxjs';
import pspicture from './components/pspicture.vue';
import nicebox from './components/nicebox.vue';
import enumerate from './components/enumerate.vue';
import verbatim from './components/verbatim.vue';
import slider from './components/slider.vue';
import latexMath from './components/math.vue';
import macros from './components/macros.vue';

export default {
  name: 'latex',
  components: {
    pspicture,
    nicebox,
    enumerate,
    verbatim,
    slider,
    math: latexMath,
    macros,
  },
  beforeMount() {
    if (document.getElementById('latex-macros')) {
      this.usemacros = true;
    } else {
      this.usemacros = false;
    }

    if (getMathJax()) {
	    this.loaded = true;
      return;
    }
    loadMathJax(() => {
      this.loaded = true;
    });
  },
  mounted(){
    this.typesetMath();
  },
  updated() {
    this.typesetMath();
  },
  watch: {
    loaded(newVal) {
      if (newVal) {
        this.typesetMath();
      }
    }
  },
  methods: {
    typesetMath() {
      this.$nextTick(() => {
        const MathJax = getMathJax();
        if (!MathJax) return;
        
        // MathJax v3 API
        if (MathJax.typesetPromise) {
          MathJax.typesetPromise([this.$el]).catch((err) => {
            console.error('MathJax typeset error:', err);
          });
        }
        // Fallback to MathJax v2 API
        else if (MathJax.Hub && MathJax.Hub.Queue) {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.$el]);
        }
      });
    }
  },
  data() {
    return {
      usemacros: false,
      loaded: false,
    };
  },
  computed: {
    items() {
      if (!this.loaded) {
        return [];
      }
      try {
        const latex = new LaTeX2JS();
        const parsed = latex.parse(this.$attrs.content || '');
        return parsed;
      } catch (error) {
        console.error('LaTeX parsing error:', error);
        return [];
      }
    },
  },
};
</script>
