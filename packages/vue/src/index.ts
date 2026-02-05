import type { App, Plugin } from 'vue';
import LaTeX2JS from 'latex2js';
import LatexComponent from './latex.vue';

export interface LaTeX2VueOptions {
  options?: any;
  events?: any;
}

const install: Plugin = (app: App, options?: LaTeX2VueOptions) => {
  app.component('Latex', LatexComponent);
  
  // Make LaTeX2JS available globally if needed
  app.config.globalProperties.$latex2js = LaTeX2JS;
};

const LaTeX2Vue: Plugin = {
  install
};

export default LaTeX2Vue;
export { LaTeX2JS, LatexComponent as Latex, install };

// Export all document components for individual use
export { default as DocumentTitle } from './components/document/title.vue';
export { default as DocumentAuthor } from './components/document/author.vue';
export { default as DocumentAbstract } from './components/document/abstract.vue';
export { default as Section } from './components/document/section.vue';
export { default as Paragraph } from './components/document/paragraph.vue';
export { default as LatexTable } from './components/document/table.vue';
export { default as Figure } from './components/document/figure.vue';
export { default as Multicolumn } from './components/document/multicolumn.vue';
export { default as ColorBox } from './components/document/colorbox.vue';

// Export existing components
export { default as Pspicture } from './components/pspicture.vue';
export { default as Nicebox } from './components/nicebox.vue';
export { default as Enumerate } from './components/enumerate.vue';
export { default as Verbatim } from './components/verbatim.vue';
export { default as Slider } from './components/slider.vue';
export { default as Math } from './components/math.vue';
export { default as Macros } from './components/macros.vue';
