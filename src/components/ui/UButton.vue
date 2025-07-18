<template>
  <button
    class="base-button"
    :class="[`base-button--${type}`, { 'base-button--disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as () => "default" | "primary" | "danger",
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return;
      }
      this.$emit("click");
    },
  },
});
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.base-button:focus-visible {
  outline: var(--blue-100) auto 3px;
}

.base-button--default {
  background: var(--shade-200);
  color: var(--shade-700);
  border: 1px solid var(--shade-300);
}

.base-button--default:hover {
  background: var(--shade-300);
}

.base-button--default:active {
  background: var(--shade-200);
}

.base-button--primary {
  background: var(--purple-100);
  color: var(--shade-100);
}

.base-button--primary:hover {
  background: var(--blue-200);
}

.base-button--primary:active {
  background: var(--blue-100);
}

.base-button--danger {
  background: var(--red-300);
  color: var(--shade-100);
}

.base-button--danger:hover {
  background: var(--red-200);
}

.base-button--danger:active {
  background: var(--red-100);
}

.base-button--disabled,
.base-button--disabled:hover,
.base-button--disabled:active {
  background: var(--shade-200);
  color: var(--shade-300);
  border: 1px solid var(--shade-200);
  pointer-events: none;
}
</style>
