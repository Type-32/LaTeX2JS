<template>
  <div class="example-container">
    <h1>Full LaTeX Document Rendering Example</h1>
    
    <div class="controls">
      <button @click="loadSampleDocument">Load Sample Document</button>
      <button @click="loadPhysicsReport">Load Physics Report</button>
      <button @click="loadMathPaper">Load Math Paper</button>
    </div>

    <div class="document-viewer">
      <Latex :content="document" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Latex } from '../src/index';

const document = ref('');

const sampleDocument = `\\documentclass[8pt,a4paper]{article}
\\usepackage{graphicx}
\\usepackage{float}
\\usepackage[english]{babel}
\\usepackage[margin=1.5cm]{geometry}
\\usepackage{multicol}
\\usepackage{amsmath}

\\title{\\textbf{Sample Academic Document}}
\\author{Student A, Student B, Student C}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{tcolorbox}[colback=blue!10]
    \\begin{abstract}
    This is a sample abstract demonstrating the full document rendering capabilities
    of the LaTeX2Vue package. The abstract provides a brief overview of the work
    presented in this document.
    \\end{abstract}
\\end{tcolorbox}

\\begin{multicols}{2}

\\section{Introduction}

This document demonstrates the full LaTeX document rendering capabilities. The system
supports complete document structures including sections, subsections, tables, figures,
and mathematical equations.

\\subsection{Mathematical Notation}

The system supports both inline math like $E = mc^2$ and display equations:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

\\section{Methods}

The experimental methodology involved several steps:

\\begin{enumerate}
\\item Data collection from multiple sources
\\item Statistical analysis using standard methods
\\item Validation of results
\\end{enumerate}

\\section{Results}

\\begin{table}
\\centering
\\begin{tabular}{|c|c|c|}
\\hline
Parameter & Value & Uncertainty \\\\
\\hline
Mean & 10.5 & ±0.3 \\\\
Std Dev & 1.2 & ±0.1 \\\\
\\hline
\\end{tabular}
\\caption{Experimental results summary}
\\end{table}

\\section{Conclusion}

The results demonstrate the effectiveness of the full document rendering system.

\\end{multicols}

\\end{document}`;

const physicsReport = `\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath}
\\usepackage{graphicx}

\\title{Quantum Mechanics Experiment Report}
\\author{Physics Lab Group 5}
\\date{February 5, 2026}

\\begin{document}

\\maketitle

\\begin{abstract}
This report presents findings from a quantum mechanics experiment investigating
the wave-particle duality of electrons through double-slit interference.
\\end{abstract}

\\section{Introduction}

Quantum mechanics describes the behavior of particles at atomic and subatomic scales.
One of its most fundamental principles is wave-particle duality.

\\subsection{Theoretical Background}

The de Broglie wavelength $\\lambda$ of a particle is given by:

$$
\\lambda = \\frac{h}{p}
$$

where $h$ is Planck's constant and $p$ is the momentum.

\\section{Experimental Setup}

The experiment used:
\\begin{itemize}
\\item Electron source
\\item Double-slit apparatus
\\item Detection screen
\\item Data acquisition system
\\end{itemize}

\\section{Results}

\\begin{table}
\\centering
\\begin{tabular}{|c|c|}
\\hline
Slit Separation & Fringe Spacing \\\\
\\hline
0.1 mm & 5.2 μm \\\\
0.2 mm & 2.6 μm \\\\
0.3 mm & 1.7 μm \\\\
\\hline
\\end{tabular}
\\caption{Measured fringe spacing for different slit separations}
\\end{table}

\\subsection{Data Analysis}

The relationship between fringe spacing and slit separation follows:

$$
\\Delta y = \\frac{\\lambda D}{d}
$$

where $D$ is the distance to the screen and $d$ is the slit separation.

\\section{Discussion}

Our results confirm the wave nature of electrons and agree with theoretical
predictions to within experimental uncertainty.

\\section{Conclusion}

The experiment successfully demonstrated wave-particle duality, a cornerstone
of quantum mechanics.

\\end{document}`;

const mathPaper = `\\documentclass[11pt,a4paper]{article}
\\usepackage{amsmath}
\\usepackage{amssymb}

\\title{An Introduction to Group Theory}
\\author{Dr. Mathematics}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{tcolorbox}[colback=green!10]
\\begin{abstract}
This paper provides an accessible introduction to the fundamental concepts
of group theory, including group axioms, subgroups, and homomorphisms.
\\end{abstract}
\\end{tcolorbox}

\\section{Definitions}

A \\textbf{group} is a set $G$ together with a binary operation $\\cdot$ 
satisfying:

\\begin{enumerate}
\\item Closure: $\\forall a, b \\in G: a \\cdot b \\in G$
\\item Associativity: $\\forall a, b, c \\in G: (a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$
\\item Identity: $\\exists e \\in G: \\forall a \\in G: e \\cdot a = a \\cdot e = a$
\\item Inverses: $\\forall a \\in G: \\exists a^{-1} \\in G: a \\cdot a^{-1} = a^{-1} \\cdot a = e$
\\end{enumerate}

\\section{Examples}

\\subsection{The Integers under Addition}

The set of integers $\\mathbb{Z}$ with addition forms a group:
- Identity element: 0
- Inverse of $n$: $-n$

\\subsection{Symmetric Groups}

The symmetric group $S_n$ consists of all permutations of $n$ elements.

\\begin{table}
\\centering
\\begin{tabular}{|c|c|}
\\hline
Group & Order \\\\
\\hline
$S_1$ & 1 \\\\
$S_2$ & 2 \\\\
$S_3$ & 6 \\\\
$S_4$ & 24 \\\\
\\hline
\\end{tabular}
\\caption{Orders of small symmetric groups}
\\end{table}

\\section{Lagrange's Theorem}

For a finite group $G$ and subgroup $H$:

$$
|G| = |H| \\cdot [G:H]
$$

where $[G:H]$ is the index of $H$ in $G$.

\\section{Applications}

Group theory has applications in:
\\begin{itemize}
\\item Crystallography
\\item Particle physics
\\item Cryptography
\\item Chemistry
\\end{itemize}

\\end{document}`;

const loadSampleDocument = () => {
  document.value = sampleDocument;
};

const loadPhysicsReport = () => {
  document.value = physicsReport;
};

const loadMathPaper = () => {
  document.value = mathPaper;
};

// Load sample document on mount
loadSampleDocument();
</script>

<style>
.example-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em;
}

.controls {
  margin: 2em 0;
  display: flex;
  gap: 1em;
  justify-content: center;
}

.controls button {
  padding: 0.75em 1.5em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.controls button:hover {
  background-color: #0056b3;
}

.document-viewer {
  margin-top: 2em;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2em;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
