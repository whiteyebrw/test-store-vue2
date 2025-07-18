<template>
  <div class="spinner" :style="{ width: size + 'px', height: size + 'px' }" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
});
</script>

<style scoped>
.spinner {
  margin: auto;
  border: 3px solid var(--shade-300);
  border-top-color: var(--purple-100);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
