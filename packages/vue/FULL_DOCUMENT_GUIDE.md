# Full LaTeX Document Rendering Guide

## Overview

@type32/latex2vue now supports rendering **complete LaTeX documents**, not just snippets! This means you can render entire academic papers, reports, and articles with proper document structure, sections, tables, figures, and more.

## Features

### Document Structure
- ✅ **Document metadata**: `\title`, `\author`, `\date`, `\maketitle`
- ✅ **Abstract**: `\begin{abstract}...\end{abstract}`
- ✅ **Sections**: `\section{}`, `\subsection{}`, `\subsubsection{}`
- ✅ **Paragraphs**: Automatic paragraph detection and formatting

### Content Elements
- ✅ **Tables**: `\begin{table}...\end{table}` with `tabular` environment
- ✅ **Figures**: `\begin{figure}...\end{figure}` with `\includegraphics`
- ✅ **Lists**: `\begin{enumerate}` and `\begin{itemize}`
- ✅ **Math**: Inline `$...$` and display `$$...$$` or `\begin{equation}`
- ✅ **Code blocks**: `\begin{verbatim}...\end{verbatim}`

### Advanced Features
- ✅ **Multi-column layout**: `\begin{multicols}{2}...\end{multicols}`
- ✅ **Color boxes**: `\begin{tcolorbox}[colback=blue!10]...\end{tcolorbox}`
- ✅ **PSTricks graphics**: Full PSTricks support for diagrams
- ✅ **Custom boxes**: `\begin{nicebox}...\end{nicebox}`

### Styling
- Professional LaTeX-like typography
- A4 page layout (210mm width)
- Proper section numbering
- Table and figure captions
- Print-friendly CSS
- Responsive design for mobile

## Basic Usage

### Vue 3 with Composition API

```vue
<template>
  <div class="document-viewer">
    <Latex :content="latexDocument" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Latex } from '@type32/latex2vue';
import '@type32/latex2vue/styles/latex-document.css';

const latexDocument = ref(`
\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath}

\\title{My Research Paper}
\\author{John Doe}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
This is a comprehensive abstract summarizing the research findings.
\\end{abstract}

\\section{Introduction}

This is the introduction to my paper. It includes inline math like $E = mc^2$
and display math:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

\\subsection{Background}

Some background information here.

\\section{Methods}

\\begin{enumerate}
\\item First step of the method
\\item Second step
\\item Third step
\\end{enumerate}

\\end{document}
`);
</script>
```

### Nuxt 3 Plugin

Create `plugins/latex2vue.client.ts`:

```typescript
import LaTeX2Vue from '@type32/latex2vue';
import '@type32/latex2vue/styles/latex-document.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(LaTeX2Vue);
});
```

Then use in your pages:

```vue
<template>
  <ClientOnly>
    <Latex :content="document" />
  </ClientOnly>
</template>

<script setup>
const document = ref(/* your LaTeX content */);
</script>
```

## Advanced Examples

### Complete Academic Paper

```vue
<template>
  <Latex :content="paper" />
</template>

<script setup>
import { ref } from 'vue';

const paper = ref(`
\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}

\\title{Advanced Quantum Mechanics: A Study}
\\author{Dr. Jane Smith}
\\date{February 2026}

\\begin{document}

\\maketitle

\\begin{abstract}
This paper presents a comprehensive study of quantum mechanical principles
and their applications in modern physics.
\\end{abstract}

\\section{Introduction}

Quantum mechanics describes the behavior of matter at atomic scales...

\\subsection{Historical Context}

The development of quantum theory began in the early 20th century...

\\section{Theoretical Framework}

\\begin{equation}
\\hat{H}\\psi = E\\psi
\\end{equation}

where $\\hat{H}$ is the Hamiltonian operator.

\\section{Results}

\\begin{table}
\\centering
\\begin{tabular}{|c|c|c|}
\\hline
Energy Level & Value (eV) & Uncertainty \\\\
\\hline
Ground State & -13.6 & ±0.1 \\\\
First Excited & -3.4 & ±0.1 \\\\
\\hline
\\end{tabular}
\\caption{Measured energy levels of hydrogen atom}
\\end{table}

\\section{Conclusion}

Our results confirm the predictions of quantum theory...

\\end{document}
`);
</script>
```

### Multi-Column Layout with Color Boxes

```vue
<template>
  <Latex :content="document" />
</template>

<script setup>
const document = ref(`
\\documentclass{article}

\\begin{document}

\\title{Two-Column Article}
\\maketitle

\\begin{tcolorbox}[colback=blue!10]
\\textbf{Note:} This is an important highlighted section.
\\end{tcolorbox}

\\begin{multicols}{2}

\\section{First Section}
Content in the first column...

\\section{Second Section}
Content that will flow into multiple columns...

\\end{multicols}

\\end{document}
`);
</script>
```

### Tables and Figures

```vue
<template>
  <Latex :content="document" />
</template>

<script setup>
const document = ref(`
\\documentclass{article}

\\begin{document}

\\section{Data Analysis}

\\begin{table}
\\centering
\\begin{tabular}{|c||c|c|}
\\hline
Sample & Mean & Std Dev \\\\
\\hline
A & 5.2 & 0.3 \\\\
B & 6.1 & 0.4 \\\\
C & 4.8 & 0.2 \\\\
\\hline
\\end{tabular}
\\caption{Statistical analysis of samples}
\\end{table}

\\begin{figure}
\\includegraphics[width=0.8\\linewidth]{results.png}
\\caption{Experimental results showing trend over time}
\\end{figure}

\\end{document}
`);
</script>
```

## Component Architecture

The package now includes these components:

### Document Structure Components
- `DocumentTitle` - Renders document title
- `DocumentAuthor` - Renders author information
- `DocumentAbstract` - Renders abstract section
- `Section` - Renders sections and subsections
- `Paragraph` - Renders paragraphs with proper formatting

### Content Components
- `LatexTable` - Renders tables with captions
- `Figure` - Renders figures with images and captions
- `Multicolumn` - Multi-column layout support
- `ColorBox` - Colored/highlighted boxes (tcolorbox)

### Existing Components (Modernized)
- `Math` - Math equation rendering
- `Enumerate` - Lists (enumerate/itemize)
- `Verbatim` - Code blocks
- `Pspicture` - PSTricks graphics
- `Nicebox` - Styled information boxes
- `Slider` - Interactive sliders

## Styling

The package includes comprehensive CSS for LaTeX-like document rendering:

```typescript
import '@type32/latex2vue/styles/latex-document.css';
```

This provides:
- Professional typography
- Proper spacing and margins
- Section numbering
- Table and figure formatting
- Print-friendly styles
- Responsive mobile layout

## Parser

The package includes two parsers:

1. **Snippet Parser** (original): For LaTeX snippets and math expressions
2. **Document Parser** (new): For full LaTeX documents

The component automatically detects which parser to use based on whether the content includes `\documentclass` or `\begin{document}`.

## Limitations & Roadmap

### Current Limitations
- Images require external URLs (local file resolution not implemented)
- Bibliography/citations are not fully implemented
- Some advanced LaTeX packages are not supported
- Custom macros have limited support

### Planned Features
- [ ] Full bibliography support with BibTeX
- [ ] Citation rendering (\cite{})
- [ ] Custom macro definitions
- [ ] Image file resolution
- [ ] Cross-references (\ref{}, \label{})
- [ ] Table of contents generation
- [ ] More advanced table layouts

## Migration from Previous Versions

If you're using version 3.1.x or earlier:

1. **No breaking changes** for existing snippet-based usage
2. **New features** work automatically with full documents
3. **Import CSS** for proper document styling:
   ```typescript
   import '@type32/latex2vue/styles/latex-document.css';
   ```
4. **TypeScript support** - All components now use `<script setup lang="ts">`

## Performance

The document parser is optimized for:
- Fast parsing of large documents (tested up to 10,000 lines)
- Efficient component rendering with Vue 3's reactivity
- Lazy MathJax typesetting
- Minimal re-renders on content updates

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To add support for new LaTeX environments or commands:

1. Create a new component in `src/components/document/`
2. Update the `componentMap` in `src/latex.vue`
3. Add parsing logic in `src/lib/document-parser.ts`
4. Add styling in `src/styles/latex-document.css`

## License

See LICENSE file in the repository root.
