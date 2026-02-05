<template>
  <div class="latex-slider">
    <h4 v-if="latex">{{ latex }}</h4>
    <p ref="valueDisplay">{{ currentValue }}</p>
    <input 
      ref="sliderInput"
      type="range"
      :min="minValue"
      :max="maxValue"
      :value="currentValue"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  latex?: string;
  scalar?: number;
  variable?: string;
  min?: number;
  max?: number;
  value?: number;
  env?: any;
  plot?: any;
  svg?: any;
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 1,
  value: 1,
  latex: '',
  scalar: 1,
  variable: ''
});

const currentValue = ref(props.value);

const minValue = computed(() => props.min * props.scalar);
const maxValue = computed(() => props.max * props.scalar);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  currentValue.value = parseFloat(target.value);
  
  // Update environment variable if provided
  if (props.env && props.variable) {
    props.env.variables[props.variable] = currentValue.value / props.scalar;
  }
};
</script>

<style scoped>
.latex-slider {
  margin: 1em 0;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.latex-slider h4 {
  margin-top: 0;
}

.latex-slider input[type="range"] {
  width: 100%;
  margin: 0.5em 0;
}
</style>
