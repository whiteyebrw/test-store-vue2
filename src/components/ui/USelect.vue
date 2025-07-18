<template>
  <div class="select">
    <label :for="id" class="select__label">{{ label }}</label>

    <div class="select__wrapper">
      <select
        :id="id"
        :name="name"
        :value="value"
        class="select__field"
        @change="onChange"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <UIcon class="select__arrow" name="arrow-down-s-line" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UIcon from "./UIcon.vue";

export default defineComponent({
  components: { UIcon },
  props: {
    id: { type: String, default: window.crypto.randomUUID() },
    name: { type: String, default: "" },
    label: { type: String, default: "" },
    value: { type: String, default: "" },
    options: {
      type: Array as () => Array<{ label: string; value: string }>,
      required: true,
    },
  },
  emits: ["input"],
  methods: {
    onChange(event: Event) {
      const target = event.target as HTMLSelectElement;
      this.$emit("input", target.value);
    },
  },
});
</script>

<style scoped>
.select {
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu", sans-serif;
  gap: 6px;
}

.select__label {
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--shade-400);
}

.select__wrapper {
  position: relative;
  border: 1px solid var(--shade-300);
  border-radius: 12px;
  background-color: var(--shade-100);
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: var(--purple-100);
  }
}

.select__field {
  width: 100%;
  padding: 8px 36px 8px 12px;
  border: none;
  background: transparent;
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--shade-500);
  appearance: none;
  outline: none;
  cursor: pointer;
}

.select__arrow {
  position: absolute;
  right: 10px;
  top: 15%;
  pointer-events: none;
  transition: transform 0.2s ease;
  color: var(--shade-500);
}
</style>
