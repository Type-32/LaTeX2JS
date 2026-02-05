# Changelog v3.2.0 - Full Document Rendering

## Summary

Transformed @type32/latex2vue from a simple LaTeX snippet renderer into a **full LaTeX document rendering system**. The package now supports complete academic papers, reports, and articles with proper document structure, sections, tables, figures, and more.

## Major Features Added

### 1. Full Document Support
- Automatic detection of full documents vs snippets
- Document metadata rendering (title, author, date)
- Proper document structure parsing
- Support for `\documentclass`, `\begin{document}`, `\end{document}`

### 2. Document Structure Components
- **Title component** - Renders document titles with proper styling
- **Author component** - Displays author information
- **Abstract component** - Styled abstract sections
- **Section/Subsection** - Hierarchical section support with auto-numbering
- **Paragraph component** - Automatic paragraph detection and formatting

### 3. Content Components
- **Table component** - Full table support with `tabular` environment and captions
- **Figure component** - Figure environments with image placeholders and captions
- **Multicolumn component** - Multi-column layout support (`multicols`)
- **ColorBox component** - Colored/highlighted boxes (`tcolorbox` with color support)

### 4. Modernization
- **TypeScript** - All components converted to TypeScript
- **Script Setup** - Modern Vue 3 Composition API with `<script setup>`
- **Type Safety** - Full type definitions for all components and props
- **Better Error Handling** - Improved error messages and parsing robustness

### 5. Enhanced Parser
- **DocumentParser class** - New parser specifically for full documents
- **Smart detection** - Automatically uses correct parser based on content
- **Environment support** - Handles all major LaTeX environments
- **Section parsing** - Proper section/subsection hierarchy detection

### 6. Professional Styling
- **LaTeX-like typography** - Professional font and spacing
- **A4 page layout** - Standard academic paper dimensions
- **Section numbering** - Automatic section/subsection numbering
- **Print-friendly** - Optimized CSS for printing
- **Responsive design** - Mobile-friendly layouts

## Files Created

### New Components
```
src/components/document/
├── title.vue          - Document title component
├── author.vue         - Author information component
├── abstract.vue       - Abstract section component
├── section.vue        - Section/subsection component
├── paragraph.vue      - Paragraph component
├── table.vue          - Table component with captions
├── figure.vue         - Figure component with captions
├── multicolumn.vue    - Multi-column layout
└── colorbox.vue       - Colored box component
```

### Parser and Utilities
```
src/lib/
└── document-parser.ts - Full document parser
```

### Styling
```
src/styles/
└── latex-document.css - Comprehensive document styling
```

### Documentation
```
FULL_DOCUMENT_GUIDE.md     - Complete usage guide
CHANGELOG_v3.2.md           - This file
examples/
└── full-document-example.vue - Example implementation
```

## Files Modified

### Core Components (Modernized to TypeScript)
- `src/latex.vue` - Main component with document parser integration
- `src/components/math.vue` - Converted to script setup + TS
- `src/components/macros.vue` - Converted to script setup + TS
- `src/components/verbatim.vue` - Converted to script setup + TS
- `src/components/enumerate.vue` - Converted to script setup + TS
- `src/components/pspicture.vue` - Converted to script setup + TS
- `src/components/nicebox.vue` - Converted to script setup + TS
- `src/components/slider.vue` - Converted to script setup + TS

### Configuration
- `src/index.ts` - Updated exports, TypeScript plugin
- `package.json` - Updated build scripts, version bump

### Documentation
- `README.md` - Updated with full document rendering info

## Breaking Changes

**None!** All existing functionality is preserved. The package is fully backward compatible.

## Migration Guide

### From v3.1.x to v3.2.0

No code changes required for existing users. New features are available immediately:

1. **Add CSS import** for full document styling:
   ```typescript
   import '@type32/latex2vue/styles/latex-document.css';
   ```

2. **Use full documents** by passing complete LaTeX content:
   ```vue
   <Latex :content="fullDocument" />
   ```

3. **Individual components** can be imported if needed:
   ```typescript
   import { Section, LatexTable, Figure } from '@type32/latex2vue';
   ```

## What Works

✅ Document structure (title, author, abstract)
✅ Sections and subsections with auto-numbering
✅ Paragraphs with proper formatting
✅ Tables with captions
✅ Figures with captions
✅ Multi-column layouts
✅ Color boxes (tcolorbox)
✅ Math equations (inline and display)
✅ Lists (enumerate, itemize)
✅ Code blocks (verbatim)
✅ PSTricks graphics
✅ MathJax v3 integration
✅ TypeScript support
✅ Vue 3 Composition API

## Known Limitations

⚠️ **Citations/Bibliography** - Not yet implemented
⚠️ **Images** - Require external URLs, local file resolution pending
⚠️ **Cross-references** - `\ref{}` and `\label{}` not implemented
⚠️ **Table of Contents** - Auto-generation not implemented
⚠️ **Custom macros** - Limited support
⚠️ **Advanced packages** - Some LaTeX packages not supported

## Performance

- Fast parsing: Tested with documents up to 10,000 lines
- Efficient rendering: Vue 3 reactivity optimizations
- Lazy MathJax: Typeset only when loaded
- Minimal re-renders: Smart component updates

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing

To test the new features:

1. Install the package locally:
   ```bash
   npm install /path/to/packages/vue/dist
   ```

2. Use the example component:
   ```bash
   cp examples/full-document-example.vue your-project/
   ```

3. Or create your own with the sample documents in `FULL_DOCUMENT_GUIDE.md`

## Next Steps

See `FULL_DOCUMENT_GUIDE.md` for:
- Complete usage examples
- Advanced features
- Component API reference
- Styling customization
- Performance tips

## Contributing

To contribute:
1. Create components in `src/components/document/`
2. Update parser in `src/lib/document-parser.ts`
3. Add styles in `src/styles/latex-document.css`
4. Update component map in `src/latex.vue`

## Credits

Original package by Dan Lynch
Modernization and full document support by Type-32

## License

See LICENSE file in repository root
