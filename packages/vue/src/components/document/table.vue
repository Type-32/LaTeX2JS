<template>
  <div class="latex-table-wrapper">
    <table class="latex-table">
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td 
            v-for="(cell, cellIndex) in row" 
            :key="cellIndex"
            :class="getCellClass(rowIndex, cellIndex)"
            v-html="cell"
          ></td>
        </tr>
      </tbody>
    </table>
    <div v-if="caption" class="table-caption" v-html="caption"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  lines: string[];
}

const props = defineProps<Props>();

const caption = computed(() => {
  const captionLine = props.lines.find(line => line.includes('\\caption'));
  if (captionLine) {
    const match = captionLine.match(/\\caption\{([^}]+)\}/);
    return match ? match[1] : '';
  }
  return '';
});

const tableData = computed(() => {
  const rows: string[][] = [];
  let inTabular = false;

  for (const line of props.lines) {
    if (line.includes('\\begin{tabular}')) {
      inTabular = true;
      continue;
    }
    if (line.includes('\\end{tabular}')) {
      break;
    }
    if (inTabular && line.trim() && !line.includes('\\hline')) {
      const cells = line
        .split('&')
        .map(cell => cell.replace(/\\\\/g, '').trim())
        .filter(cell => cell.length > 0);
      if (cells.length > 0) {
        rows.push(cells);
      }
    }
  }

  return rows;
});

const getCellClass = (rowIndex: number, cellIndex: number) => {
  const classes = ['table-cell'];
  if (rowIndex === 0) classes.push('table-header');
  return classes.join(' ');
};
</script>

<style scoped>
.latex-table-wrapper {
  margin: 1.5em auto;
  max-width: 100%;
  overflow-x: auto;
}

.latex-table {
  border-collapse: collapse;
  margin: 0 auto;
  min-width: 300px;
}

.table-cell {
  padding: 0.75em 1em;
  border: 1px solid #ddd;
  text-align: center;
}

.table-header {
  font-weight: bold;
  background-color: #f5f5f5;
}

.table-caption {
  text-align: center;
  margin-top: 0.5em;
  font-style: italic;
  color: #666;
}
</style>
